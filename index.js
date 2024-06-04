import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.listen(port, () => {
  console.log(`myapp listening
at http://localhost:${port}`);
});

const app2 = express();
const port2 = 3001; // Different port

app2.get("/", (req, res) => {
  res.send("Hello World again!");
});

app2.get("/test", (req, res) => {
  res.send("This is a another test");
});

app2.listen(port2, () => {
  console.log(`App2 listening at http://localhost:${port2}`);
});