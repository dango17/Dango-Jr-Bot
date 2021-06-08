//consts 
const Discord = require('discord.js'); 
const client = new Discord.Client(); 
const prefix = '-';
const fs = require('fs'); 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 

client.commands = new Discord.Collection();  


//Bot Online? 
client.once('ready', () => { 
 console.log("Dango jr Is online!");
});

client.on('message', message => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase(); 

    if(command === 'ping'){ 
       message.channel.send('Pong!');
    }
    else if(command === 'youtube'){ 
        message.channel.send('https://www.youtube.com/');
    }


});

//Last line Always
client.login('ODUxNTk2NjQ4MDcyMDg1NTQ0.YL6lLg.85rlOFWLb-hUahscYXkZszYcu_E')