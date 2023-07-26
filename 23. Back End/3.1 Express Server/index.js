import express from "express";
var app = express();
var port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

