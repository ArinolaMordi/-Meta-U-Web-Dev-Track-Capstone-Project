import SequelizeStoreInit from "connect-session-sequelize";
import cors from "cors";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { sequelize } from "./Database.js";
import userRoutes from "./Routes/users.js";
import { Uploads, Videos } from "./models/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:3006",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan());

const SequelizeStore = SequelizeStoreInit(session.Store);
const sessionStore = new SequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      sameSite: false,
      secure: false,
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    },
  })
);
sessionStore.sync();
app.use(userRoutes);

app.get("/videos", async (req, res) => {
  try {
    const videos = await Videos.findAll();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limit: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error("only image files allowed"), false);
    }
    cb(null, true);
  },
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.post("/uploads", upload.single("Image"), async (req, res) => {
  try {
    const { ProjectName, Describe, Location } = req.body;
    const imageUrl = req.file.filename;
    console.log(__dirname);
    const project = await Uploads.create({
      ProjectName,
      Describe,
      Location,
      Image: imageUrl,
    });
    res.json(project);
    console.log(project);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
app.get("/uploads", async (req, res) => {
  try {
    const uploads = await Uploads.findAll();
    res.json(uploads);
    console.log(uploads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const difficultyLevels = ["Beginner", "Intermediate", "Hard"];
const ageGroupLevels = ["5-7", "7-9", "9-11"];

app.get("/recommendations", async (req, res) => {
  const selectedDifficulty = req.query.Difficulty;
  const selectedAgeGroup = req.query.AgeGroup;
  let selectedInterests = req.query.Interests;

  if (selectedInterests.includes(",")) {
    selectedInterests = selectedInterests
      .split(",")
      .map((interest) => interest.trim());
  } else {
    selectedInterests = [selectedInterests];
  }

  try {
    const videos = await Videos.findAll();

    let scoredVideos = videos.map((video) => {
      const videoInterests = video.Interest.split(",").map((interest) =>
        interest.trim()
      );

      let interestScore = videoInterests.reduce((score, interest) => {
        return score + (selectedInterests.includes(interest) ? 6 : 0);
      }, 0);

      let difficultyScore;
      if (video.Difficulty === selectedDifficulty) {
        difficultyScore = 6;
      } else {
        let levelDiff = Math.abs(
          difficultyLevels.indexOf(video.Difficulty) -
            difficultyLevels.indexOf(selectedDifficulty)
        );
        if (levelDiff === 1) {
          difficultyScore = 3;
        } else if (levelDiff === 2) {
          difficultyScore = 1;
        }
      }

      let ageGroupScore;
      if (video.AgeGroup === selectedAgeGroup) {
        ageGroupScore = 6;
      } else {
        let levelDiff = Math.abs(
          ageGroupLevels.indexOf(video.AgeGroup) -
            ageGroupLevels.indexOf(selectedAgeGroup)
        );
        if (levelDiff === 1) {
          ageGroupScore = 3;
        } else if (levelDiff === 2) {
          ageGroupScore = 1;
        }
      }

      let totalScore = difficultyScore + interestScore + ageGroupScore;
      return { video, score: totalScore };
    });

    scoredVideos.sort((a, b) => b.score - a.score);

    const topVideos = scoredVideos.slice(0, 5);
    if (topVideos.length === 0) {
      res.json({
        message:
          "No videos found matching the selected criteria. Here are some suggestions:",
      });
    } else {
      const filteredVideos = topVideos.map(({ video }) => video);
      res.json(filteredVideos);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

sequelize
  .sync({ alter: true })
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
