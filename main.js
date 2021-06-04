const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const { default: jwtDecode } = require('jwt-decode');

// bot setup
const bot = new Discord.Client({partials: ["MESSAGE", "REACTION", "CHANNEL"]});

// command setup
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.login(process.env.TOKEN);