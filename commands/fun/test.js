const fetch = require('node-fetch');
const Discord = require('discord.js');
// Ping Module
module.exports = {
    // Name of Command
    name: 'test',
    // Description of Command
    description: 'test!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=flowers"
        //var query = args.toString()
        //var queryUrl = baseUrl + query
        fetch(baseUrl)
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            json.items.forEach(book => {
                const id = book.id
                fetch('https://www.googleapis.com/books/v1/volumes/' + id.toString())
                .then(res => res.json())
                .then(json => {
                    console.log(json.volumeInfo.title)
                })
            })
        })
        .catch((error) => {
            console.log(error);
            message.channel.send('An Error Occured. Please verify that you inputed a correct date.');
        });
    },
};