module.exports = (Discord, client, message) => {
    const PREFIX = '!';

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = client.commands.get(args.shift().toLowerCase());

    if (command) command.execute(client, message, args, Discord);
}