import { sequelize } from "./Database.js";
import { Videos } from "./models/index.js";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import SequelizeStoreInit from "connect-session-sequelize";
import session from "express-session";
import userRoutes from "./Routes/users.js";
import { Op } from "sequelize";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:3006",
    ],
    credentials: true,
  }),
);
app.use(express.json()); // Middleware for parsing JSON bodies from HTTP requests
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
  }),
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
        interest.trim(),
      );

      let interestScore = videoInterests.reduce((score, interest) => {
        return score + (selectedInterests.includes(interest) ? 1 : 0);
      }, 0);

      let difficultyScore;
      if (video.Difficulty === selectedDifficulty) {
        difficultyScore = 10;
      } else {
        let levelDiff = Math.abs(
          difficultyLevels.indexOf(video.Difficulty) -
            difficultyLevels.indexOf(selectedDifficulty),
        );
        if (levelDiff === 1) {
          difficultyScore = 8;
        } else if (levelDiff === 2) {
          difficultyScore = 5;
        }
      }

      let ageGroupScore;
      if (video.AgeGroup === selectedAgeGroup) {
        ageGroupScore = 10;
      } else {
        let levelDiff = Math.abs(
          ageGroupLevels.indexOf(video.AgeGroup) -
            ageGroupLevels.indexOf(selectedAgeGroup),
        );
        if (levelDiff === 1) {
          ageGroupScore = 8;
        } else if (levelDiff === 2) {
          ageGroupScore = 5;
        }
      }

      let totalScore = difficultyScore + interestScore + ageGroupScore;

      return { video, score: totalScore };
    });

    scoredVideos.sort((a, b) => b.score - a.score);

    if (scoredVideos[0].score === 0) {
      res.json({
        message:
          "No videos found matching the selected criteria. Here are some suggestions:",
       
      });
    } else {
      let filteredVideos = scoredVideos.map(({ video }) => video);
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
