module.exports = {
    name: 'reactionrole',
    description: "handles reaction roles",
    async execute(message, args, Discord, bot) {
        // channel id
        const channel = '850150081414823966';

        // reaction emojis
        const CASTER_EMOJI = '✨';
        const MELEE_EMOJI = '✊';
        const TANK_EMOJI = '🛡️';
        const HEALER_EMOJI = '🆘';
        const RANGED_EMOJI = '🔫';

        // job roles
        const CASTER = '849709630791614514';
        const MELEE = '849709826434007072';
        const TANK = '849709891739320350';
        const HEALER = '849709568330301450';
        const RANGED = '849709722872971335';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What roles do you play?')
            .setDescription('Choosing at least one role will enable access to the rest of the server. \n\n'
                + 'React to this message with the roles that you play!\n'
                + `${CASTER_EMOJI} for Caster\n`
                + `${RANGED_EMOJI} for Ranged DPS\n`
                + `${MELEE_EMOJI} for Melee DPS\n`
                + `${TANK_EMOJI} for Tank\n`
                + `${HEALER_EMOJI} for Healer\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(CASTER_EMOJI);
        messageEmbed.react(RANGED_EMOJI);
        messageEmbed.react(MELEE_EMOJI);
        messageEmbed.react(TANK_EMOJI);
        messageEmbed.react(HEALER_EMOJI);

        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                switch (reaction.emoji.name) {
                    case CASTER_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(CASTER);
                        break;
                    case RANGED_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(RANGED);
                        break;
                    case MELEE_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(MELEE);
                        break;
                    case HEALER_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(HEALER);
                        break;
                    case TANK_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(TANK);
                        break;
                }
            }
        });

        bot.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                switch (reaction.emoji.name) {
                    case CASTER_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(CASTER);
                        break;
                    case RANGED_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(RANGED);
                        break;
                    case MELEE_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(MELEE);
                        break;
                    case HEALER_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(HEALER);
                        break;
                    case TANK_EMOJI:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(TANK);
                        break;
                }
            }
        });
    }
}