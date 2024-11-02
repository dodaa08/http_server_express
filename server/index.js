const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post("/", (req, res) => {
    const { label, id, timestamp, level } = req.body;

    res.json({
        id: id,
        label: label,
        timestamp: timestamp,
        level: level,
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  

app.listen(3000, () => {
    console.log("Running on port 3000...");
});
