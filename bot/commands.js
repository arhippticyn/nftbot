bot.start((ctx) => {
  try {
    ctx.reply(
      '🎮 Добро пожаловать в NFT игру!',
       Markup.inlineKeyboard([
        [Markup.button.webApp('🚀 Играть', '#')]
      ])
    );
  } catch (e) {
    console.error('Ошибка в /start:', e);
    ctx.reply('⚠️ Произошла ошибка. Попробуйте позже.');
  }
});