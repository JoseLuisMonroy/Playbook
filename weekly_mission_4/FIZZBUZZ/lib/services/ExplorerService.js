class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getExplorersUsernamesByMission(explorers) {
        return explorers.map((explorer) => explorer.githubUsername);
    }
    static getExplorersByTrick(explorers, trick) {
        return explorers.filter((explorer) => explorer.trick == trick);
    }
}
module.exports = ExplorerService;