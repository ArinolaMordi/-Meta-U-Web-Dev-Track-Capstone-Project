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



app.get("/recommendations", async (req, res) => {
  const selectedDifficulty = req.query.Difficulty;
  const selectedAgeGroup = req.query.AgeGroup;
  let selectedInterests = req.query.Interests;

  // Check if multiple interests are selected, split them into an array if true
  if (selectedInterests.includes(',')) {
    selectedInterests = selectedInterests.split(',').map(interest => interest.trim());
  } else {
    selectedInterests = [selectedInterests];
  }

  try {
    const videos = await Videos.findAll({
      where: {
        Difficulty: selectedDifficulty,
        AgeGroup: selectedAgeGroup,
      },
    });

    // Filter videos by interest manually
    const filteredVideos = videos.filter(video => {
      // Split the video's interests into an array
      const videoInterests = video.Interest.split(',').map(interest => interest.trim());
      
      // Check if any of the video's interests are in the selected interests
      return videoInterests.some(interest => selectedInterests.includes(interest));
    });

    res.json(filteredVideos);
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
