// Import the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
   //log 
   console.log('I am ready!');
   //Server users
   //REDACTED|REDACTED
   //REDACTED|REDACTED
   //REDACTED|REDACTED
   //REDACTED|REDACTED
   //REDACTED|REDACTED 
});
//On message trigger
client.on('message', message => {
     //print sender ID and username to console
     console.log(message.author.id.toString() + "|" +message.author.username.toString());
     //alternates the case of every other character in the message, hereby "mocking" it. 
     if(message.author.id.toString() === 'REDACTED' && !message.content.toString().includes('$w') && !message.content.toString().includes('$mmr') && !message.content.toString().includes('$im')
     && !message.content.toString().includes('$divorce')  && !message.content.toString().includes('$')){
        var filthyMessage = message.content.toString();
        var mockedMessage = new Array(filthyMessage.length);
        for(var a = 0; a < filthyMessage.length; a++){
            if(a%2===0){
                mockedMessage[a] = filthyMessage[a].toLowerCase().toString();
            } else{
                mockedMessage[a] = filthyMessage.charAt(a).toUpperCase();            
            }
        }
        var mockedResult = mockedMessage.toString().replace(/,/g, ''); //replace every ',' in the mockedMessage with nothing using RegEx
        message.channel.send(mockedResult.toString());//send the result
        const attachment = new Attachment('https://imgflip.com/s/meme/Mocking-Spongebob.jpg'); //create spongebob attachment
        message.channel.send(attachment); //send attachment
     }

    if (message.author.id.toString() === 'REDACTED') { //fetch the bots message, extract the name from it, and query the information by using the $im bot command
        
        try {
            console.log(message.embeds[0].author.name);     
            if (!message.embeds[0].description.includes("Claims") && !message.embeds[0].description.includes("AVG") && !message.embeds[0].description.includes("Sum of the 15")){
                setTimeout(function(){ message.channel.send("$im " + message.embeds[0].author.name); }, 500);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
   
    if (message.content === '%extraRoll') { //extra roll that anyone can claim, disabled for now
        message.channel.send("This feature is disabled for now."); 
        /*
        if(!(message.author.id.toString() === '252252849382227969')){ //BigShaxx
            message.channel.send("$w"); 
        } 
        */   
    }
  
   if (message.content === '%help') { //print available commands
        message.channel.send('📠Owner/dev: prostotin📠\n📖 %help\n👋 %greet\n㊗️ %uwu\n🍝 %pasta\n');
    } else if (message.content === '%uwu') { //print pasta
        message.channel.send('redacted');
    } else if (message.content === '%greet') { //OS prof greeting
        message.channel.send('Hey folks');
    }  else if (message.content === '%pasta') { //pick a random copypasta and send it. 
        var rand = Math.floor(Math.random() * 10);
        var pastas = ['redacted',
        'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',];
        message.channel.send(pastas[rand]);
    }
 
});

client.login(''); //login with your token 
