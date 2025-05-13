require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(startCommand);

setupEvents(bot);

bot.launch()
  .then(() => console.log('Бот запущен и работает!'))
  .catch(err => console.error('Ошибка запуска:', err));

module.exports = bot;