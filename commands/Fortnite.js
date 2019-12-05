const discord = require('discord.js');
const ms = require("ms");
const fs = require("fs");
const config = require("../config.json");
 
module.exports = {
    async run(bot, message, args) {
        const items = JSON.parse(fs.readFileSync("./fortnite.json", "utf8"));
        const item = items[Math.round(Math.random() * (items.length - 1))];
                    const fortnites = JSON.parse(fs.readFileSync("./fortnite.json", "utf8"));

           
         const gchannel = message.guild.channels.find(ch => ch.name.includes('thanox-gen'));
            if (message.channel !== gchannel) return message.channel.send(new discord.RichEmbed()
            .addField('Error | Wrong Channel',`You Must Go To <#${gchannel.id}> To Use This Command!`)
            .setFooter('Made By Hinzou#0001')
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("#FF0000"));
        if (items.length <= 0) return message.channel.send(
          new discord.RichEmbed()
            .addField('Error | Stock Empty',`We're Out Of Stock, Try Again Later!`)
            .setFooter('Bot Made By: Hinzou#0001')
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("#FF0000"));
        if (!bot.data.has(message.author.id)) bot.data.set(message.author.id, { num: 0 });
        if (bot.data.get(message.author.id).num > 0) return message.channel.send(new discord.RichEmbed()
    .addField(`Error | Cooldown`, `You Must Wait __10 Minutes__ To Use This Command Again!!\n Time Remaining: \`${ms(bot.data.get(message.author.id).num)}\``)
    .setColor("#FF0000")
    .setThumbnail("https://i.imgur.com/6QXjhQe.png")      
            .setFooter('Bot Made By: Hinzou#0001')
    .setAuthor(message.author.tag,message.author.displayAvatarURL)
    .setTimestamp()
    );
       bot.data.set(message.author.id, { num: 600000 }); //  
      

                        let email = item.account.split(":")[0]
                        let password = item.account.split(":")[1]
                        
      
        message.channel.send(new discord.RichEmbed()
                             .setAuthor(message.author.tag,message.author.displayAvatarURL)
                             .setTitle('Successfully Generated! ✅')
                             .setColor("#712BB8") 
                             .setThumbnail("https://i.imgur.com/oDiiPCq.png")
                             .setDescription("Check Your DM's i Sent You The Details.")
            .setFooter('Bot Made By: Hinzou#0001')
                             .setTimestamp()
            .setColor(config.embed));
        message.author.send(new discord.RichEmbed()   
            .setTitle("__Fortnite Account:__")
            .setColor("#712BB8")
            .setThumbnail("https://i.imgur.com/g6v8XZU.png")
            .setDescription(`\nEmail: ${email} \nPassword: ${password}`)
            .addField(`__Fortnite Stock:__`, `${fortnites.length}`) 
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .addField('Do You Want To Buy Your Own Discord Bot?',`[Dm Hinzou#0001 To Buy One](https://discord.gg/MKvz6fm)`)
            .setFooter('Bot Made By: Hinzou#0001')
            .setTimestamp()
            );
    
                                          items.splice(items.indexOf(item), 1);
                        fs.writeFileSync("./fortnite.json", JSON.stringify(items));
      
        setInterval(() => {
            let newNum = { num: bot.data.get(message.author.id).num-- };
            if (bot.data.get(message.author.id) > 0) bot.data.set(message.author.id, { ...newNum });
        }, 1)
    
    },
    name: "fortnite",
    description: "Get a Fortnite Acc"
};
