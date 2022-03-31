"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = tslib_1.__importDefault(require("./lib/config.cjs"));
const discord_js_1 = require("discord.js");
const wokcommands_1 = tslib_1.__importDefault(require("wokcommands"));
const path_1 = tslib_1.__importDefault(require("path"));
const client = new discord_js_1.Client({
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING']
});
client.on('ready', () => {
    console.log('Logged in');
    new wokcommands_1.default(client, {
        commandDir: path_1.default.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '863411142071681054',
    });
});
client.login(config_1.default.token);
//# sourceMappingURL=index.js.map