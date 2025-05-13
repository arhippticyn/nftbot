const { Markup } = require('telegraf');

exports.mainMenu = Markup.inlineKeyboard([
  [Markup.button.url('🎮 Играть', '#')]
]);