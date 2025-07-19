const { PermissionFlagsBits } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;
    if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        
    const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
    const voicelinesMap = JSON.parse(voicelinesJsonData);
    const voicelines = voicelinesMap["voicelines"];
    const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];

    const chance = Math.random() * 650;
    if (chance < 648) {
      return;
    } else {
      message.channel.send(`${voiceline.text}`);
    };
  },
};