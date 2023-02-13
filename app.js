const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const date = new Date();
  const res = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()}`);
});

module.exports = app;
