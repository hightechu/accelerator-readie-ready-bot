// Ping Module
module.exports = {
    // Name of Command
    name: 'books',
    // Description of Command
    description: 'Ping!',
    // Guild - TRUE
    guildOnly: true,
    args: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message, args) {
        // Send Message
        var url = "https://www.googleapis.com/books/v1/volumes?q="
        message.channel.send(`You sent ${args}`);
    },
};