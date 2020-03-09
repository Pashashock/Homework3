const chalk = require('chalk');
 function printTooltip(message) {//Для вывода подсказок(Синий и жирный) в терминал согласно цвету
     console.log(chalk.bold.blue(message));
}
async function printError(message) { // Для вывода ошибок(красный на черном фоне) в терминал согласно цвету 

    console.log(chalk.bgBlack.red(message));
}
async function printMessage(message) { //Для вывода сообщения(НЕХ код 00ffea) в терминал согласно цвету

    console.log(chalk.rgb(0,255,234)(message));
}

module.exports.printTooltip = printTooltip;
module.exports.printError = printError;
module.exports.printMessage = printMessage;
