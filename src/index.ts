import config from './lib/config';
import { Client } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';

const client = new Client({
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING']
});
client.on('ready', () => {
    console.log('Logged in')
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '863411142071681054',

    })
})

client.login(config.token)
