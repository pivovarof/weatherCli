import chalk from "chalk";

const printError = (error) => {
    console.log(chalk.bgRed('Error: ') + error);
};

const printSuccess = (messege) => {
    console.log(chalk.bgGreen(' Success ') + messege);
};

const printHelp = () => {
    console.log(
        `   
   ${chalk.bgCyan(' HELP ')}

Без параметров - Вывод погоды,
-с [CITY] - для установки города
-h вывод помощи
-t [API_KYE] для сохранения токена

`            
        );
};

export {printError, printSuccess, printHelp};




