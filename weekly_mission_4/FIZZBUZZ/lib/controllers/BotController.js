const ExplorerController = require("./explorerController");
const botService = require("./../services/botService");

class botController {
    static fizzbuzzTrick(numberToApplyFb) {
        const fizzbuzz = ExplorerController.applyValidationInNumber(numberToApplyFb);
        return botService.generateResponseFb(numberToApplyFb, fizzbuzz);
    }
}

module.exports = botController;