const sequelize = require("../config/connection");
const { User, Posts, Comments, } = require("../models");
const userSeed = require("./userSeed.json");
const postsSeed = require("./postsSeed.json");
const commentsSeed = require("./commentsSeed.json");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  try {
    const userTable = [];
    for (const userSeedItem of userSeed) {
      const createUser = await User.create(userSeedItem);
      userTable.push(createUser);
    }
    console.log("\n----- USERS SEEDED -----\n");
    await Posts.bulkCreate(postsSeed);
    console.log("\n----- POSTS SEEDED -----\n");
    await Comments.bulkCreate(commentsSeed);
    console.log("\n----- COMMENTS SEEDED -----\n");
  } 
  catch (err) {
    console.error("Error seeding db", err);
  } 
  finally {
    await sequelize.close();
  }
};

seedDB();
