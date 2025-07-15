// src/pages/Harsh3.js
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";

function Harsh3() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/shorten", { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (error) {
      alert("Error shortening URL");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h4" gutterBottom>URL Shortener (Harsh3)</Typography>
      <TextField
        fullWidth
        label="Enter Long URL"
        variant="outlined"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>

      {shortUrl && (
        <Typography variant="h6" style={{ marginTop: 24 }}>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </Typography>
      )}
    </div>
  );
}

export default Harsh3;
