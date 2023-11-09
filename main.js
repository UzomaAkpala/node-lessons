const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.on("test-event", (data) => {
  console.log("This event is emitting");
  console.log(data);
});

const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  console.log(req.url);
  myEvent.emit("test-event", { name: "Uzoma Akpala" });
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
