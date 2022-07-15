const ExplorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("FizzBuzz API");
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.send(explorersInMission);
});