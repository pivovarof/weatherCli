#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./service/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./service/storage.service.js";
import { getWeather } from "./service/api.service.js";



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

const initCli = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    };
    if (args.t) {
        return saveToken(args.t);
    };
    getWeather('kiev');

}

initCli();