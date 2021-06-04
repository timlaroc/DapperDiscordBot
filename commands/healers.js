module.exports = {
    name: 'healers',
    description: "Displays the preferred layout for healers",
    execute(message, args) {
        message.channel.send("You should bring a Pure Essence of the Divine (Forgotten Fragment of Divinity) and the following Lost Actions:\n"
            + "Lost Arise (Forgotten Fragment of Compassion)\n"
            + "Lost Seraph Strike (Forgotten Fragment of Divinity)\n"
            + "Banner of Solemn Clarity (Forgotten Fragment of Resolve)");
    }
}