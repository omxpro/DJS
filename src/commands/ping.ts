import type { ICommand } from 'wokcommands';
export default {
    category: 'testing',
    description: 'replies with pong',

    slash: true,
    testOnly: true,


    callback: ({ message }) => {
        message.reply('pong')
    },
} as ICommand