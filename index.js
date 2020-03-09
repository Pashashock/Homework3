
'use strict'
const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const chalk = require('chalk');
const main = async () => {
    console.log(chalk.red('Выберите действие.\n\nadd - добавить\nlist - список\ndelete - удалить\nsearch - найти\n\nДля выхода используйте команду - exit\n'));
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await Contact.addContact();
    } else if (command === 'list') {
        await Contact.listContact();
    } else if (command === 'delete') {
        await Contact.deleteContact();
    } else if (command === 'search') {
        await Contact.searchContact();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();