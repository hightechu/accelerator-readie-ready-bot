const fetch = require('node-fetch');
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
        //var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=flowers"
        //var query = args.toString()
        //var queryUrl = baseUrl + query
        
        const date = args;
        const url = 'https://covidapi.info/api/v1/global/2021-08-01' + date;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            const confirmedCases = data.result.confirmed;
            const deathCases = data.result.deaths;
            const recoveredCases = data.result.recovered;

            const embed = new Discord.MessageEmbed()
                .setColor('#20C19E')
                .setTitle('COVID 19 - Global Recovery Chart')
                .setDescription('Viewing Data for: ' + date)
                .addFields(
                    { name: 'Confirmed', value: confirmedCases, inline: true },
                    { name: 'Deaths', value: deathCases, inline: true },
                    { name: 'Recovered', value: recoveredCases, inline: true },
                )
                .setTimestamp()
                .setFooter('Powered by COVID API - https://covidapi.info/');

            // Send Message
            message.channel.send(embed);
        }).catch((error) => {
            console.log(error);
            message.channel.send('An Error Occured. Please verify that you inputed a correct date.');
        });
    },
};
