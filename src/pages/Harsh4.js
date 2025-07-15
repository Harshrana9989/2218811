// src/pages/Harsh4.js
import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

function Harsh4() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/stats");
      setStats(res.data);
    } catch (error) {
      alert("Failed to fetch stats");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener Stats (Harsh4)
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {stats.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.shortUrl}</Typography>
                  <Typography color="textSecondary">
                    Original: {item.longUrl}
                  </Typography>
                  <Typography>
                    Created At: {new Date(item.createdAt).toLocaleString()}
                  </Typography>
                  <Typography>
                    Expires At: {new Date(item.expiryAt).toLocaleString()}
                  </Typography>
                  <Typography>Total Clicks: {item.clicks.length}</Typography>
                  <Divider sx={{ my: 1 }} />
                  {item.clicks.map((click, i) => (
                    <Typography key={i} variant="body2">
                      {new Date(click.timestamp).toLocaleString()} |{" "}
                      {click.source} | {click.location}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Harsh4;
