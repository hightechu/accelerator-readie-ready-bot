const axios = require('axios');
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
        var baseUrl = "https://www.googleapis.com/books/v1/volumes?q="
        var query = args.toString()
        var queryUrl = baseUrl + query
        axios.get(queryUrl)
  .then(function (response) {
    // handle success
   message.channel.send(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    },
};