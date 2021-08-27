// Require Discord.js
const Discord = require('discord.js');
// HighTechU Module
module.exports = {
    // Name of Command
    name: 'commands',
    // Description of Command
    description: 'List of commands',
    // Aliases
    aliases: ['htu'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('List of Commands')
            .setURL('')
            .setAuthor('Readie-Ready', 'https://cdn.discordapp.com/attachments/880188601726558211/880584626484179045/unknown.png', )
            .setDescription('Here is the list of commands Readie-Ready has to offer :D')
            .setThumbnail('https://cdn.discordapp.com/attachments/880188601726558211/880584626484179045/unknown.png')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: '!books [keyword]', value: '(description)', inline: true },
                { name: '!morebyauthor [author last name]', value: 'this shows the other books published by author', inline: true },
            )
            .setTimestamp()
            .setFooter('Powered by UVic Engineering', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png');
        // Send Message
        message.channel.send(embed);
    },
};