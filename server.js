const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;

let allLists = new Set();
let day = "";

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    day = today.toLocaleDateString("en-IN", options);
    res.json({ day });
});

app.post("/api/tasks", (req, res) => {
    const { data } = req.body;
    allLists.add(data);
    res.json({ message: "Data saved successfully" });
});

app.get("/api/tasks", (req, res) => {
    res.json({ data: [...allLists] });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

