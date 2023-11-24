const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const port = 9050;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log(`UP: http://localhost:${port}`);
});
