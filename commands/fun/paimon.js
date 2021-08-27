// Ping Module
module.exports = {
    // Name of Command
    name: 'paimon',
    // Description of Command
    description: 'Paimon!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Paimon is emergency food!').then(sentMessage => {
            // Add Reaction
            sentMessage.react('🥫');
        });
    },
};