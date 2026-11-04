const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello everyone</h1>
        <h2>My Node.js Project</h2>
        <h3>Deployed using Jenkins + PM2</h3>
        <h3>Version: 1.0.0</h3>
    `);
});

app.listen(port, () => {
    console.log(`Node.js app running on port ${port}`);
});
