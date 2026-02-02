import express from "express";
import os from "os";

const app = express();
const PORT = 8080;
const GREETING = process.env.GREETING || "Hello World";
const startedAt = new Date().toISOString();



app.get("/", (req, res) => {
  res.send(GREETING);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    pod: os.hostname(),

  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(`Started at: ${startedAt}`);
});

