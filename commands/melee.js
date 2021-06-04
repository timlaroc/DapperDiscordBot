module.exports = {
    name: 'melee',
    description: "Displays the preferred layout for melee",
    execute(message, args) {
        message.channel.send("You should bring a Pure Essence of the Duelist (Forgotten Fragment of Contention) and the following Lost Actions:\n"
            + "Banner of Honored Sacrifice (Forgotten Fragment of Resolved)\n"
            + "Lost Font of Power (Forgotten Fragment of Sagacity)\n"
            + "Lost Rend Armor - only 2 total required (Forgotten Fragment of Contention)");
    }
}