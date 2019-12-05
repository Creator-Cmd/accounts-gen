const discord = require("discord.js");
const fs = require("fs");
let config = require('../config.json')
module.exports = {
    async run(bot, message, args) {
        if (!config.owner.includes(message.author.id)) return message.channel.send(
          new discord.RichEmbed()
            .addField('Error',`You do not have permissions to use this command!`)
            .setFooter('Buy Cheap Bots From Hinzou#0001')
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("RED"));
      
              if (!args[0]) return message.channel.send(":x: **You Need To Provide The Type Of The Account(s) Your Adding** :x:");
  
      
      
                if (args[0] === 'vbucks') {
  
        const items = JSON.parse(fs.readFileSync("./vbucks.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``V-bucks`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./vbucks.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully Added ${accounts.length} V-bucks Account(s) To The Generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
                      if (args[0] === 'mc') {
  
        const items = JSON.parse(fs.readFileSync("./minecraft.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Minecraft`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./minecraft.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully Added ${accounts.length} Minecraft Account(s) To The Generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
      
      
            if (args[0] === 'netflix') {
  
        const items = JSON.parse(fs.readFileSync("./netflix.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Netflix`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./netflix.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} netflix account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
       if (args[0] === 'nordvpn') {
  
        const items = JSON.parse(fs.readFileSync("./nordvpn.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``NordVPN`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./nordvpn.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} nordvpn account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
       if (args[0] === 'pornhub') {
  
        const items = JSON.parse(fs.readFileSync("./pornhub.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``PornHUB`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./pornhub.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} pornhub account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
      if (args[0] === 'hulu') {
  
        const items = JSON.parse(fs.readFileSync("./hulu.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Hulu`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./hulu.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} hulu account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      if (args[0] === 'spotify') {
  
        const items = JSON.parse(fs.readFileSync("./spotify.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Spotify`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./spotify.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} spotify account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
      if (args[0] === 'uplay') {
  
        const items = JSON.parse(fs.readFileSync("./uplay.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The `Uplay` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./uplay.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} Uplay account(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
      
            
                  if (args[0] === 'nitro') {
  
        const items = JSON.parse(fs.readFileSync("./nitro.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Nitro`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedCodes;
        let codes;
         await collector.once("collect", async function(response) {
            messages.push(response);
            collectedCodes = response.content;
            collector.stop();
            codes = collectedCodes.split("\n");
            codes.forEach(code => {
                items.push({code: code});
            });
            fs.writeFileSync("./nitro.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${codes.length} nitro code(s) to the generator!**`));
            messages.forEach(m => m.delete());
      });
     
        
      }
      
      
      
      
    if (args[0] === 'fortnite') {
        const items = JSON.parse(fs.readFileSync("./fortnite.json", "utf8"));
        const messages = [];
        messages.push(message);
       messages.push(await message.channel.send(" :arrow_down: ***Please Send The ``Fortnite`` Accounts Below.*** :arrow_down: "));
        const collector = new discord.MessageCollector(message.channel, msg => msg.author.id === message.author.id, { maxMatches: 1, max: 1000 });
        let collectedAccounts;
        let accounts;
        await collector.once("collect", async function(response) {
            messages.push(response);
            collectedAccounts = response.content;
            collector.stop();
            accounts = collectedAccounts.split("\n");
            accounts.forEach(account => {
                items.push({account: account});
            });
            fs.writeFileSync("./fortnite.json", JSON.stringify(items));
            messages.push(await message.channel.send(`**Successfully added ${accounts.length} fortnite account(s) to the generator!**`));
            messages.forEach(m => m.delete());
        
        });
    
      
      
    }
      
      
      //now we are going to see if it sends accs to fortnite and spotify
  
    },
    name: "restock",
    usage: "restock <service>",
    description: "Restock Accs To Your Gen"
};
                   //oo nice but i think that we should remix it like a backup
function key() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let key = [];
    for (let i = 0; i < 32; i++) {
        key.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    };
    return key.join("");
};