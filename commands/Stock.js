const discord = require('discord.js');
const fs = require("fs");
const config = require("../config.json");

module.exports = {
    async run(bot, message, args) {
      

              const fortnites = JSON.parse(fs.readFileSync("./fortnite.json", "utf8"));





      
        const stockEmbed = new discord.RichEmbed()
                            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setTitle(`Accounts Stock:`)
            .setFooter('Bot Made By: Hinzou#0001')
            .setTimestamp()
            .setDescription(`\n**❱ Fortnite Stock: \`${fortnites.length}\`**`)
            .setColor("#FFFFFF")
   .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬',`[Dm Hinzou To Buy Your Own Bot](https://discord.gg/MPazsyH)`);
        message.channel.send(stockEmbed);
        // h
    },
    name: "stock",
    description: "See Check The Stock."
};
