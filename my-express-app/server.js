import cors from "cors";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import SequelizeStoreInit from "connect-session-sequelize";
import { sequelize } from "./Database.js";
import userRoutes from "./Routes/users.js";
import { Videos } from "./models/index.js";

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
