import { Post } from "./post.js";
import { Profile } from "./profile.js";
import { Uploads } from "./upload.js";
import { User } from "./user.js";
import { Videos } from "./video.js";

User.hasMany(Post, { as: "posts", foreignKey: "userId" });
Post.belongsTo(User, { as: "user", foreignKey: "userId" });

export { User, Post, Videos, Uploads, Profile };
