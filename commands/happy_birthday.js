const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  data: {
    name: "happy_birthday",
    description: "🎊いつでもどこでもハッピーバースデー(相手にメンションがいきます)",
    options: [{
      type: ApplicationCommandOptionType.User,
      name: "user",
      description: "誰の誕生日を祝いますか？",
      value: "user",
      required: true,
    }],
  },
  async execute(interaction) {
    const user = interaction.options.getUser('user')
    await interaction.reply({
      content: "<@" + user.id + ">",
      embeds: [
        {
          title: '🎊たんおめ！🎊',
          description: '<@' + user.id + '>さん　お誕生日おめでとうございます！',
          color: 0xFF30FF,
          timestamp: new Date()
        }
      ]
    });
  }
}