module.exports = {
    name: 'casters',
    description: "Displays the preferred layout for casters",
    execute(client, message, args) {
        message.channel.send("You should bring a Pure Essence of the Elder (Forgotten Fragment of Clarity) and the following Lost Actions:\n"
            + "Lost Cure IV (Forgotten Fragment of Compassion)\n"
            + "Lost Flare Star - only need one total (Forgotten Fragment of Clarity)\n"
            + "Banner of Noble Ends (Forgotten Fragment of Resolve)\n"
            + "Lost Font of Magic - if there's more than 1 caster in a party (Forgotten Fragment of Sagacity)");
    }
}