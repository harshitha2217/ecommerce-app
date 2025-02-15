const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Frontend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});
