#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp, printWeather } from "./service/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./service/storage.service.js";
import { getWeather, getIcon } from "./service/api.service.js";



const saveToken = async (token) => {
    if(!token.length){
        printError(' Токен не передан!');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess(' Токен сохранен.');
    }
    catch(e){
        printError(e.massage);
    }

}
const saveCity = async (city) => {
    if(!city.length){
        printError(' Город не передан!');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess(' Город сохранен.');
    }
    catch(e){
        printError(e.massage);
    }

}

const getForcast = async () => {    
    try{
        const city = await getKeyValue(TOKEN_DICTIONARY.city)        
        const weather = await getWeather(city);        
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch(e) {
        if (e?.response?.status == 404){
            printError(' Не верно указан город!');
        }
        else if (e?.response?.status == 401){
            printError(' Не верно указан токен!');
        }
        else {
            printError(e.message);
        }

    }
}

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    };
    if (args.t) {
        return saveToken(args.t);
    };
    if (args.c) {
        return saveCity(args.c);
    };

    getForcast()
}

initCli();