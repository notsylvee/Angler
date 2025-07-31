const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "entity",
        description: "Get a random entity from Pressure",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const entitiesJsonData = await fs.readFile("data/entities.json", {encoding: "utf8"});
      const entitiesMap = JSON.parse(entitiesJsonData);
      const entities = entitiesMap["entities"];
      const entity = entities[Math.floor(Math.random() * entities.length)];

      const embed = new EmbedBuilder()
      .setColor(`#768996`)
      .setTitle(`${entity.name}`)
      .setImage(`https://cdn.sylvee.xyz/pressureentity${entity.num}.png`)

      await interaction.reply({ embeds: [embed] });
    },
};