// Ping Module
module.exports = {
    // Name of Command
    name: 'commands',
    // Description of Command
    description: 'Commands!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Here are the commands available for use: ');
    },
};