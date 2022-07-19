class botService {
    static generateResponseFb(numberToApplyFb, fizzbuzzTrick) {
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        return responseBot;
    }
}

module.exports = botService;