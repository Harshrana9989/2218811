// backend/HarshRoutes.js
const express = require("express");
const { nanoid } = require("nanoid");
const db = require("./HarshDB");

const router = express.Router();

// POST: Shorten a URL
router.post("/api/shorten", (req, res) => {
  const { longUrl, customCode, validityMinutes } = req.body;

  const shortCode = customCode || nanoid(6);
  const expiry = new Date(Date.now() + (validityMinutes || 30) * 60000);

  // Check for shortcode collision
  if (db.urls.find((u) => u.shortCode === shortCode)) {
    return res.status(400).json({ message: "Custom shortcode already exists" });
  }

  const shortUrl = `http://localhost:3000/${shortCode}`;

  const newEntry = {
    shortCode,
    longUrl,
    shortUrl,
    createdAt: new Date().toISOString(),
    expiryAt: expiry.toISOString(),
    clicks: [],
  };

  db.urls.push(newEntry);
  res.json(newEntry);
});

// GET: Redirect from shortCode
router.get("/:shortCode", (req, res) => {
  const { shortCode } = req.params;
  const urlEntry = db.urls.find((u) => u.shortCode === shortCode);

  if (!urlEntry) return res.status(404).send("Not found");

  if (new Date() > new Date(urlEntry.expiryAt)) {
    return res.status(410).send("Link expired");
  }

  urlEntry.clicks.push({
    timestamp: new Date().toISOString(),
    source: req.headers.referer || "Direct",
    location: "Unknown", // For now, mock data
  });

  res.redirect(urlEntry.longUrl);
});

// GET: Single shortCode stats
router.get("/api/stats/:shortCode", (req, res) => {
  const { shortCode } = req.params;
  const urlEntry = db.urls.find((u) => u.shortCode === shortCode);

  if (!urlEntry) return res.status(404).send("Not found");
  res.json(urlEntry);
});

// ✅ NEW: GET All stats for Harsh4
router.get("/api/stats", (req, res) => {
  res.json(db.urls);
});

module.exports = router;
