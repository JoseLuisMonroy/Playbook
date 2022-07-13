const fs = require("fs");

class reader {
    static reasJsonFile(filePath) {
        const rawdata = fs.readFileSync("explorers.json");
        return JSON.parse(rawdata);
    }
}