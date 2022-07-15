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

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amount = ExplorerController.getExplorersAmountByMission(mission);
    const response = { mission, amount };
    res.send(response);
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.send(usernames);
});

app.get("/v1/FIZZBUZZ/:number", (req, res) => {
    const number = req.params.number;
    const fizzBuzz = ExplorerController.applyValidationInNumber(number);
    res.send(fizzBuzz);
});

app.get("/v1/explorers/stack/:stack", (req, res) => {
    const stack = req.params.stack;
    const explorersInStack = ExplorerController.getExplorersByStack(stack);
    res.send(explorersInStack);
});