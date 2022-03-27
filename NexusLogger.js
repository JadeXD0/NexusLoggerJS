"use strict";

const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");

const latest  = require("./package.json").version;

class NexusLogger {
    constructor(name) {

        this.name = name;
        
        const d = new Date();

        var formatteddate = moment(d).format("h:mm:ss a");
        let date = formatteddate;

        this.date = date;

    };

    consoleLog(text) {
        console.log(`${chalk.magenta(this.date)} ${chalk.grey("|")} ${chalk.grey("Log")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.whiteBright(text)}`);
    }

    infoLog(text) {
        console.log(`${chalk.magenta(this.date)} ${chalk.grey("|")} ${chalk.green("Info")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.greenBright(text)}`);
    };

    warnLog(text) {
        console.log(`${chalk.magenta(this.date)} ${chalk.grey("|")} ${chalk.yellow("Warn")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.yellowBright(text)}`);
    };

    errorLog(text) {
        console.log(`${chalk.magenta(this.date)} ${chalk.grey("|")} ${chalk.red("Error")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.redBright(text)}`);
    };

}

function checkVersion(curVer) {
    if(curVer !== `${latest}`) {
        throw new Error(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Seems like your version may be outdated, we reccomend you update to our latest version as your current version may not be supported!. Update to the latest version: ${chalk.magenta(latest)}`)}`);
    };
    if(!curVer) {
        throw TypeError(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Sorry did you define a version your using? We have to check if your using an update version`)}`)
    }
}

module.exports = {
    NexusLogger,
    checkVersion
}