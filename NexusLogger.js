"use strict";

const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");

const outdatedversions = ["v1", "v1.1", "v1.2", "v1.2.5", "1.3", "1.4"];
const latest  = require("./package.json").version;

class NexusLogger {
    constructor(name) {

        this.name = name;
        this.version = latest;
        
        
        const d = new Date();

        var formatteddate = moment(d).format("h:mm:ss a");
        let date = formatteddate;

        this.date = date;

    };

    checkVersion(curVer) {
        if(curVer !== this.version) {
            throw new Error(`${chalk.magenta(this.date)} ${chalk.grey("|")} ${chalk.red("Version Error")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.blueBright("We are sorry, seems like the version you are using does not match to the npm's version")}`);
        }
    }

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

module.exports = {
    NexusLogger
}