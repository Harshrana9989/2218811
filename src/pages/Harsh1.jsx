// src/pages/Harsh1.jsx
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import HarshInput from "../components/HarshInput";
import HarshButton from "../components/HarshButton";
import { createShortLink } from "../services/HarshApi";
import { harshLogger } from "../utils/HarshLogger";

function Harsh1() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [result, setResult] = useState(null);

  const handleShorten = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const res = await createShortLink(url, validity, shortcode);
      setResult(res);
      harshLogger("Short link created", res);
    } catch (err) {
      harshLogger("Error creating short link", err);
      alert("Something went wrong!");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Harsh URL Shortener</Typography>
      <HarshInput label="Enter Long URL" value={url} onChange={e => setUrl(e.target.value)} />
      <HarshInput label="Validity (minutes)" value={validity} onChange={e => setValidity(e.target.value)} />
      <HarshInput label="Custom Shortcode (optional)" value={shortcode} onChange={e => setShortcode(e.target.value)} />
      <HarshButton onClick={handleShorten}>Shorten Now</HarshButton>

      {result && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Shortened URL: <a href={result.shortUrl}>{result.shortUrl}</a>
        </Typography>
      )}
    </Container>
  );
}

export default Harsh1;
