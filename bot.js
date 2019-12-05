const discord = require("discord.js");
const request = require("request");
const ms = require("ms");
const fs = require("fs");
const moment = require("moment");
const db = require('quick.db');
const chalk = require("chalk");
const config = require("./config.json");
const log = message => {
    console.log(`[${moment().format('DD/MM/YY HH:mm:ss')}] ${message}`);
}
const bot = new discord.Client({
    disableEveryone: false,
    fetchAllMembers: true
});
bot.commands = new discord.Collection();
bot.baseCommands = new discord.Collection();
bot.data = new discord.Collection();

bot.on("ready", () => {
  bot.user.setActivity(`${bot.users.size} members || ${config.prefix}help`, { type: 3, url: 'https://www.twitch.tv/d4rkxxxxxx' })
})
fs.readdir("./commands/", (err, files) => {
    if (err) return log(err);
    let commandFiles = files.filter(f => f.endsWith(".js"));
    log(chalk.bgBlack(chalk.bold.magenta(`Loading ${commandFiles.length} commands.`)));
    if (commandFiles.length <= 0) {
        log(chalk.bgBlack(chalk.bold.magenta(`Couldn't find commands.`)));
        return;
    };

    commandFiles.forEach(cmdFile => {
        const command = require(`./commands/${cmdFile}`);
        cmdFile = cmdFile.replace(".js", "");
        log(chalk.bgBlack(chalk.magenta.bold(`Command ${cmdFile} loaded.`)));
        bot.commands.set(command.name, command);
        bot.baseCommands.set(command.name, command);
    });
});

bot.on("message", function(message) {
    if(message.channel.type === "dm") return;
    const content = message.content.split(" ");
    const command = content[0];
    const args = content.slice(1);
    const prefix = config.prefix;
    if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(command.slice(prefix.length).toLowerCase());
        if (commandfile) {
            commandfile.run(bot, message, args);
        } else {
            let notfoundembed = new discord.RichEmbed()
                .setTitle("Error!")
                .setColor(0x36393E)
                .setDescription(`**Command not found!\n\`${prefix}help\` for a list of my commands!**`)
            //message.channel.send(notfoundembed);
        }
    }
})

const daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  var difference_ms = date2 - date1;
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}
bot.on("guildMemberAdd", async member => {
    const wchannel = member.guild.channels.find(ch => ch.name.includes('welcome'));
    if (!wchannel) return;
    let d = daysBetween(member.user.createdTimestamp,new Date().getTime());
    wchannel.send(`Welcome <@${member.id}>`,
      new discord.RichEmbed()
      .setColor(config.embed)
      .setAuthor(`Welcome to the server, ${member.user.tag}`, member.user.avatarURL)
      .setDescription(`Hope you enjoy your time here at **${member.guild.name}**! \n (This account was made ${d} days ago)`)
      .setFooter(`Joined ${member.guild.name}`,member.guild.iconURL)
      .setTimestamp());
})

bot.on("guildMemberRemove", async member => {
  let membercount = bot.users.size - 2
    const channel = member.guild.channels.find(ch => ch.name.includes('welcome'));
    if (!channel) return;
  channel.send(` Goodbye <@${member.user.id}> `, new discord.RichEmbed().setColor(config.embed).setAuthor(`Goodbye ${member.user.tag}`,member.user.displayAvatarURL).setTimestamp().setFooter(`Left ${member.guild.name}`,member.guild.iconURL).setDescription(`We now only have ${member.guild.members.size} members .\n Hope you enjoyed your stay, ${member.user.tag}.`));
  const roles = await db.set(`roles_${member.id}`, member.roles.map(r => r.id));
})
          

        
        
          
bot.on("debug", function(message) {
    log(chalk.bgBlack(chalk.yellow(message)));
});

bot.on("warning", function(message) {
    log(chalk.bgBlack(chalk.yellow(message)));
});
//okkk
bot.on("error", function(message) {
    log(chalk.bgBlack(chalk.bold.red(message)));
});

bot.once("ready", function() {
    log(chalk.bgBlack(chalk.green(`Ready. ${bot.users.size} members.`)));
});

try {
    bot.login(process.env.TOKENN);
} catch (error) {
    log("Invalid token provided.");
};
