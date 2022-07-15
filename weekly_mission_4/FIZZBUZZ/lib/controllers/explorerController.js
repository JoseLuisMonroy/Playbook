const ExplorerService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzBuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersMission = ExplorerService.filterByMission(explorers, mission);
        return explorersMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorersMission = this.getExplorersByMission(mission);
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorersMission);
        return usernames;
    }
    static getExplorersAmountByMission(mission) {
        const explorersMission = this.getExplorersByMission(mission);
        const amount = explorersMission.length;
        return amount;
    }
    static applyValidationInNumber(number) {
        const fizzBuzz = FizzBuzzService.applyValidationInNumber(number);
        return fizzBuzz;
    }
}
module.exports = ExplorerController;