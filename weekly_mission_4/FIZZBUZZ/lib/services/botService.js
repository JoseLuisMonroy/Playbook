class botService {
    static generateResponseFb(numberToApplyFb, fizzbuzzTrick) {
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        return responseBot;
    }
    static generateResponseExplorer(explorer, mission) {
        const userString = ` ${explorer}`;
        return `Los exploradores que estan en la misión ${mission} son: ${userString}`;
    }
}

module.exports = botService;