const reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const assignFizzBuzzService = require("./lib/services/FizzBuzzService");

const explorers = reader.readJsonFile("explorers.json");

const missionExplorers = ExplorerService.filterByMission(explorers, "node");
const amountByMission = missionExplorers.length;
const usernamesByMission = ExplorerService.getExplorersUsernamesByMission(missionExplorers);
console.log(`There are ${amountByMission} explorers in the node mission`);
console.log(`The usernames of the explorers in the node mission are: ${usernamesByMission}`);


const explorersWithTrick = missionExplorers.map((explorer) => assignFizzBuzzService.applyValidationInExplorer(explorer));
const explorersWithFizz = ExplorerService.getExplorersByTrick(explorersWithTrick, "FIZZ");
console.log(`There are ${explorersWithFizz.length} explorers with the trick FIZZ`);
console.log(`The usernames of the explorers with the trick FIZZ are: ${ExplorerService.getExplorersUsernamesByMission(explorersWithFizz)}`);
const explorersWithBuzz = ExplorerService.getExplorersByTrick(explorersWithTrick, "BUZZ");
console.log(`There are ${explorersWithBuzz.length} explorers with the trick BUZZ`);
console.log(`The usernames of the explorers with the trick BUZZ are: ${ExplorerService.getExplorersUsernamesByMission(explorersWithBuzz)}`);
const explorersWithFizzBuzz = ExplorerService.getExplorersByTrick(explorersWithTrick, "FIZZBUZZ");
console.log(`There are ${explorersWithFizzBuzz.length} explorers with the trick FIZZBUZZ`);
console.log(`The usernames of the explorers with the trick FIZZBUZZ are: ${ExplorerService.getExplorersUsernamesByMission(explorersWithFizzBuzz)}`);