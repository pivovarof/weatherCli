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

const printWeather = (res, icon) => {

    let temp = Math.round(res.main.temp);
    let feelsTemp = Math.round(res.main.feels_like);
    if (Math.sign(temp) !== -1 && temp !== 0){
        temp = '+' + temp;
    }
    if (Math.sign(feelsTemp) !== -1 && feelsTemp !== 0){
        feelsTemp = '+' + feelsTemp;
    }
    console.log(
      `   
   ${chalk.black.bgYellow(' WEATHER ')}

Сегодня в городе ${res.name} ${res.weather[0].description} ${icon}
Температура: ${temp}*., Ощущается как ${feelsTemp}*.
Влажность: ${res.main.humidity}%

${chalk.green('Хорошего Вам дня!')}
`            
        );
}

export {printError, printSuccess, printHelp, printWeather};




