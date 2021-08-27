odule.exports = {
    // Name of Command
    name: 'venti',
    // Description of Command
    description: 'VENTI!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Venti the tone deaf bard').then(sentMessage => {
            // Add Reaction
            sentMessage.react('🎵');
        });
    },
};