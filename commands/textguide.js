module.exports = {
    name: 'textguide',
    description: "Prints out saltedxiv link",
    execute(client, message, args) {
        message.channel.send('https://saltedxiv.com/delubrum-reginae-savage');
    }
}