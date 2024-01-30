const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000

app.get("/", function (_, res) {
  console.log("home page");
  res.sendFile(path.join(__dirname, "/src/index.js"));
});

app.use(express.static("src"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
