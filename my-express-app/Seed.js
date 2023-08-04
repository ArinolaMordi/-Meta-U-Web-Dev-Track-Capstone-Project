import { fileURLToPath } from "url";
import { Post, Uploads, User, Videos, Profile } from "./models/index.js";
import { sequelize } from "./Database.js";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./seeders/users.json"), "utf8")
);
const postData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./seeders/posts.json"), "utf8")
);
const videoData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./seeders/videos.json"), "utf8")
);
const profileData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./seeders/profiles.json"), "utf8")
);

const seedDatabase = async () => {
  try {
    // Sync all models that aren't already in the database
    await sequelize.sync({ alter: true });

    // Then seed the User and Post data
    await User.bulkCreate(userData, { ignoreDuplicates: true });
    console.log("User data has been seeded!");

    await Post.bulkCreate(postData, { ignoreDuplicates: true });
    console.log("Post data has been seeded!");

    await Videos.bulkCreate(videoData, { ignoreDuplicates: true });
    console.log("Videos data has been seeded");

    await Profile.bulkCreate(profileData, { ignoreDuplicates: true });
    console.log("Profile data has been seeded!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
