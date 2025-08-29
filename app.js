import express from "express"; // importing express
import cors from "cors"; // import middleware library
import dotenv from "dotenv";

const app = express(); // creating express application instance

dotenv.config();

app.use(cors()); // <-- adds the CORS middleware globally

app.use(express.json()); // <-- parse JSON request bodies

// Adding a post request with url /echo
app.post("/echo", (req, res) => {
  res.json(req.body); // echoes back the JSON sent
});

// Adding a GET request with url '/health'
app.get("/health", (req, res) => {
  res.json({ ok: true, ts: new Date().toISOString() });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
