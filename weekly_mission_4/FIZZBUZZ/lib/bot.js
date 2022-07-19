const TelegramBot = require("node-telegram-bot-api");
const botController = require("./controllers/BotController");

const token = "5440299349:AAFKyYZDBi5ABh5pg0w8LKAeDNOUItLZzR8";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const userMsg = parseInt(msg.text);

    if (!isNaN(userMsg)) {
        const responseBot = botController.fizzbuzzTrick(userMsg);
        bot.sendMessage(chatId, responseBot);
    } else if (msg.text === "/start") {
        bot.sendMessage(chatId, "Hola, soy un bot que te ayuda a usar el API de FIZZBUZZ");
    } else {
        bot.sendMessage(chatId, "PorFavor ingresa una misión valida");
    }
});