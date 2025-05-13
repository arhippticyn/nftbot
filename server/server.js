require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Бот запущен!'));

app.use(express.json());
app.use(bot.webhookCallback('/telegram'));

bot.telegram.setWebhook('https://your-project.up.railway.app/telegram');

app.get('/', (req, res) => {
    res.send('Бот работает!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Сервер запущен на порту', process.env.PORT || 3000);
});

if (!process.env.USE_WEBHOOK) {
    bot.launch();
}
