const express = require("express");
const logger = require("./middleware/logger");
const path = require("path");
const cors = require("cors");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mydb", "kristina", "234234231", {
  host: "localhost",
  dialect: "postgres",
});

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

const testingDb = async () => {
  sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testingDb();

const port = 3300;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use("/api/todos", require("./routes/api/todos"));
app.use("/api/users", require("./routes/api/users"));

app.use("/", express.static(path.join(__dirname, "/build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
