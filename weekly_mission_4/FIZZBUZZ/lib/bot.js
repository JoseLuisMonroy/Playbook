const TelegramBot = require("node-telegram-bot-api");
const botController = require("./controllers/BotController");

const token = "";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const userMsg = parseInt(msg.text);
    const message = msg.text.toLowerCase();

    if (!isNaN(userMsg)) {
        const responseBot = botController.fizzbuzzTrick(userMsg);
        bot.sendMessage(chatId, responseBot);
    } else
    if (message === "/start") {
        bot.sendMessage(chatId, "Hola, soy un bot que te ayuda a usar el API de FIZZBUZZ");
    } else if (message === "java" || message === "node") {
        const responseBot = botController.getExplorersByMission(message);
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "PorFavor ingresa una misión valida");
    }
});