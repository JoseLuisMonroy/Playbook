const fs = require("fs");

class reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync("./../../explorers.json");
        return JSON.parse(rawdata);
    }
}

module.exports = reader;