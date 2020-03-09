const ConsoleReader = require('./ConsoleReader');
const phoneBook = require('./PhoneBook');
const MessagePrinter = require('./MessagePrinter');
async function addContact() {
    console.log(MessagePrinter.printTooltip('Введите имя'));
    const name = await ConsoleReader.getLine();
    console.log(MessagePrinter.printTooltip('Введите номер телефона'));
    const phone = await ConsoleReader.getLine();
    phoneBook[name] = phone;
    MessagePrinter.printTooltip;
    console.log(MessagePrinter.printMessage(`Вы добавили контакт c именем ${name} с номером ${phoneBook[name]} `));
}
async function listContact() {
    console.log(`\n---`);
    for (let key in phoneBook) {
        console.log(MessagePrinter.printTooltip(`Контакт с именем ${key} и номером ${phoneBook[key]}`));
    }
    console.log(`---\n`);
}
async function deleteContact() {
    console.log(MessagePrinter.printTooltip('Введите имя контакта, который хотите удалить'));
    const name = await ConsoleReader.getLine();
    delete phoneBook[name];
    console.log(MessagePrinter.printMessage(`Вы удалили контакт с именем ${name}`));
}
async function searchContact() {
    console.log(MessagePrinter.printTooltip('Введите имя контакта, который хотите найти'));
    const name = await ConsoleReader.getLine();

    if (phoneBook[name] === undefined) {
        console.log(MessagePrinter.printError('Такого имени нет в телефонной книге'));
    } else {
        console.log(MessagePrinter.printMessage(`Контакт с именем ${name} и номером ${phoneBook[name]}`));
    }
}
module.exports.addContact = addContact;
module.exports.listContact = listContact;
module.exports.deleteContact = deleteContact;
module.exports.searchContact = searchContact;