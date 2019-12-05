const discord = require('discord.js');
const snek = require('snekfetch');
let nchar = '\uFE0F\u20E3';
const config = require("../config.json");
let emojis = require('../assets/emojis.js');
let n = [emojis['1'],emojis['2'],emojis['3'],emojis['4'],emojis['5'],emojis['6'],emojis['7'],emojis['8'],emojis['9']];

module.exports = {
    async run(client, message, args) {
  let options = message.content.split('|');
  message.delete();
  if (options.length<=2) return message.channel.send(new discord.RichEmbed()
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setFooter('Bot Made By: Hinzou#0001')
            .setTimestamp()
            .setColor("RED")
           .addField("Error","Incorrect Command Usage!\npoll <question>|<option 1>|<option 2> etc..."));
  if (options.length>10) return message.channel.send(new discord.RichEmbed()
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setFooter('Bot Made By: Hinzou#0001')
            .setTimestamp()
            .setColor("RED")
           .addField("Error","You May Not Have More Than 9 Options!"));
  let opt = [];
  let q = options[0].split(' ').slice(1).join(' ');
  let sm = await message.channel.send(new discord.RichEmbed()
             .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setColor(config.embed)
            .setFooter('Bot Made By: Hinzou#0001')
            .addField('Building Poll...','Please Wait Whilst Your Poll is Built!')
            .setTimestamp());
  for (let i = 1; i < options.length; i++) { 
    await opt.push(`${n[i-1]} | ${options[i]}`);
    await sm.react(n[i-1]);
  }
  sm.edit(new discord.RichEmbed()
             .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setFooter('Bot Made By: Hinzou#0001')
            .setTimestamp()
            .setColor("#38ABFF")
           .addField(q,`${opt.join('\n\n')}`));


    },
  name: 'poll',
  usage: '<question>|<option 1>|<option 2> etc...',
  description: 'Create a poll',
  category: 'utility'
};