const express = require("express");
const logger = require("./middleware/logger");
const path = require("path");
const cors = require("cors");
const app = express();

const port = 3300;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.use("/api/todos", require("./routes/api/todos"));
app.use("/api/users", require("./routes/api/users"));

app.use("/", express.static(path.join(__dirname, "/build")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join("./build", "/index.html"));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
