// Require Discord.js
const Discord = require('discord.js');
// HighTechU Module
module.exports = {
    // Name of Command
    name: 'commands',
    // Description of Command
    description: 'List of commands',
    // Aliases
    aliases: ['cmds'],
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
                { name: 'Utility commands', value: ' '},
                { name: '\u200B', value: '\u200B' },
                { name: '!books [keyword]', value: 'Searches the list of books by keyword.', inline: true },
                { name: '!morebyauthor [author last name]', value: 'this shows the other books published by author', inline: true },
                { name: '!Welcome', value: 'Sends a welcome message 😃.' },
                { name: '!Reload [command name]', value: 'Resets a cooldown time of a command!' },

                { name: '\u200B', value: '\u200B' },
                { name: 'Fun commands!', value: 'Commands for fun' },
                { name: '!beep', value: 'Bot responds with boop :D' },
                { name: '!chart [yyyy-mm-dd]', value: 'Sends the COVID info for that date.' },
                { name: '!coin', value: 'Flips a coin (awesome for deciding things if you ask me)' },
                { name: '\u200B', value: '\u200B' },
                { name: '!hightechu', value: 'Gives info on HightechU' },
                { name: '!paimon', value: 'Any Genshin players here get the reference?' },
                { name: '!ping', value: 'PONG >:D' },
                { name: '!Please', value: 'aww thanks!' },
            )
            .setTimestamp()
            .setFooter('Powered by HightechU', 'https://cdn.discordapp.com/attachments/880188601726558211/880878747199361094/untitled_artwork.png');
        // Send Message
        message.channel.send(embed);
    },
};