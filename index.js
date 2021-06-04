const Discord = require('discord.js');
const fs = require('fs');
const role = require('./constants/roleNames');

// bot setup
const bot = new Discord.Client({partials: ["MESSAGE", "REACTION", "CHANNEL"]});
const PREFIX = '!';
const token = 'ODQ5NzI5MzY3MDgxMDkxMDgy.YLfaJA.oQ41aYcYqH079T6htj0GDfvio5E';

// command setup
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
})

bot.on('message', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'textguide':
            bot.commands.get('textguide').execute(message, args);
            break;
        case 'reactionrole':
            bot.commands.get('reactionrole').execute(message, args, Discord, bot);
            break;
        case 'healers':
            bot.commands.get('healers').execute(message, args);
            break;
        case 'tanks':
            bot.commands.get('tanks').execute(message, args);
            break;
        case 'melee':
            bot.commands.get('melee').execute(message, args);
            break;
        case 'ranged':
            bot.commands.get('ranged').execute(message, args);
            break;
        case 'casters':
            bot.commands.get('casters').execute(message, args);
            break;
        case 'extraactions':
            bot.commands.get('extraactions').execute(message, args);
            break;
        case 'assign':
            bot.commands.get('assign').execute(message, args);
            break;
    }
})

bot.login(token);