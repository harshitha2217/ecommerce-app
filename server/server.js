const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Root route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("BACKEND SERVER IS RUNNING!");
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
