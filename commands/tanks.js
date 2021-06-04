module.exports = {
    name: 'tanks',
    description: "Displays the preferred layout for tanks",
    execute(message, args) {
        message.channel.send("You should bring a Pure Essence of the Indomitable (Forgotten Fragment of Fortitude) and the following Lost Actions:\n"
            + "Lost Aethershield (Forgotten Fragment of Fortitude)\n"
            + "Lost Sacrifice (Forgotten Fragment of Loss)\n"
            + "Banner of Noble Ends (Forgotten Fragment of Resolve)\n"
            + "Banner of Honored Sacrifice (Forgotten Fragment of Resolve)");
    }
}