exports.filterByMission = (explorers, mission) => {
    explorers.filter((explorer) => explorer.mission == mission);
}
exports.getAmountOfExplorersByMission = (explorers, mission) => {
    explorers.filter((explorer) => explorer.mission == mission).length;
}
exports.getExplorersUsernamesByMission = (explorers, mission) => {
    explorers.filter((explorer) => explorer.mission == mission).map((explorer) => explorer.githubUsername);
}