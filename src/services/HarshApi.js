// src/services/HarshApi.js
const BASE_URL = "http://localhost:5000"; // Replace with actual API later

export const createShortLink = async (originalUrl, validity, shortcode) => {
  const res = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalUrl, validity, shortcode }),
  });
  return res.json();
};

export const fetchStats = async () => {
  const res = await fetch(`${BASE_URL}/stats`);
  return res.json();
};
