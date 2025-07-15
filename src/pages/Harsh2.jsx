// src/pages/Harsh2.jsx
import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, Divider } from "@mui/material";
import { fetchStats } from "../services/HarshApi";
import { harshLogger } from "../utils/HarshLogger";

function Harsh2() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
        harshLogger("Fetched stats", data);
      } catch (err) {
        harshLogger("Error fetching stats", err);
      }
    };
    loadStats();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Harsh Link Stats</Typography>
      <List>
        {stats.map((item, idx) => (
          <React.Fragment key={idx}>
            <ListItem>
              <div>
                <strong>Short URL:</strong> {item.shortUrl} <br />
                <strong>Created:</strong> {item.createdAt} <br />
                <strong>Expiry:</strong> {item.expiresAt} <br />
                <strong>Clicks:</strong> {item.clicks.length}
              </div>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default Harsh2;
