const fetch = require('node-fetch');
const Discord = require('discord.js');
// Ping Module
module.exports = {
    // Name of Command
    name: 'morebyauthor',
    // Description of Command
    description: 'Sorts out books by author!',
    // Guild - TRUE
    guildOnly: true,
    usage: '[keyword]',
    // Arguments TRUE
    args: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message, args) {
        // Send Message
        const authorLastName = args
        var url = "https://www.googleapis.com/books/v1/volumes?q=+inauthor=" + authorLastName
        //var query = args.toString()
        //var queryUrl = baseUrl + query
        fetch(url)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            json.items.forEach(book => {
                const id = book.id
                fetch('https://www.googleapis.com/books/v1/volumes/' + id.toString())
                .then(res => res.json())
                .then(json => {
                    message.channel.send(json.volumeInfo.title)
                })
            })
        })
        .catch((error) => {
            console.log(error);
            message.channel.send('An Error Occured. Please verify that you input a correct string');
        });
    },
};
