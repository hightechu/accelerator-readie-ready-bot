// Ping Module
module.exports = {
    // Name of Command
    name: 'please',
    // Description of Command
    description: 'Please!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Thank You!');
    },
};