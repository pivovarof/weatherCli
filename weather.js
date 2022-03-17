#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./service/log.service.js";
import { saveKeyValue } from "./service/storage.service.js";

const initCli = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp();
    };
    if (args.t) {
        saveKeyValue('token', args.t)
    };

}

initCli();