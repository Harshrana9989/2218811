// backend/HarshServer.js
const express = require("express");
const cors = require("cors");
const HarshRoutes = require("./HarshRoutes");
const HarshLogger = require("./HarshLogger"); // your custom logger

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(HarshLogger); // ✅ mandatory logging

app.use("/", HarshRoutes); // all routes

app.listen(PORT, () => {
  console.log(`🚀 HarshServer running at http://localhost:${PORT}`);
});
