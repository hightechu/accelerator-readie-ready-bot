// Ping Module
module.exports = {
    // Name of Command
    name: 'Welcome',
    // Description of Command
    description: 'Welcome!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Welcome to our server, send a "Hi" to your new friends!');
    },
};