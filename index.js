const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());


const courses = require("./data/courses.json");


app.get("/", (req, res) => {
    res.send("api running");
  });


  app.get("/courses", (req, res) => {
    res.send(courses);
  });


  app.get("/course/:id", (req, res) => {
    const course = courses.find(c=> c.id == req.params.id)
    res.send(course)
  });

























app.listen(port, () => {
    console.log("Course Sheara running ", port);
  });