module.exports = {
    name: 'ranged',
    description: "Displays the preferred layout for ranged",
    execute(client, message, args) {
        message.channel.send("You should bring a Pure Essence of the Fiendhunter (Forgotten Fragment of Finesse) and the following Lost Actions:\n"
            + "Lost Dervish (Forgotten Fragment of Finesse)\n"
            + "Lost Font of Power (Forgotten Fragment of Sagacity)\n"
            + "Banner of Noble Ends (Forgotten Fragment of Resolve)\n"
            + "Lost Cure II (Forgotten Fragment of Compassion)");
    }
}