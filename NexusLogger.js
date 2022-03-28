"use strict";

const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");
var util = require('util');

const latest  = require("./package.json").version;

class NexusLogger {
    constructor(name, curNum) {

        this.name = name;
        this.version = latest;
        
        const d = new Date();
        const d2 = new Date();
        curNum = 0;

        var formattedtimedate = moment(d).format("h:mm:ss a");
        var formattedDate = moment(d2).format("YYYY-MM-DD");

        this.time = formattedtimedate;
        this.date = formattedDate
        this.logFileNum = curNum;

    };
    checkVersion(curVer) {
        if(curVer !== this.version) {
            throw new Error(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Seems like your version may be outdated, we reccomend you update to our latest version as your current version may not be supported!. Update to the latest version: ${chalk.magenta(this.version)}`)}`);
        };

        if(!curVer) {
            throw TypeError(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Sorry did you define a version your using? We have to check if your using an update version`)}`)
        };

        if(typeof(curVer) !== typeof(String())) {
            throw TypeError(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Is the version you defined even a string? Please make it a string. Example: ${chalk.white(`\`NotNexus.checkVersion("1.5.5")\``)}`)}`)
        };
    }

    consoleLog(text) {
        const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile${this.logFileNum++}.log`, { flags: 'a' })
        var log_stdout = process.stdout;

        console.log = function() {
            fileWrite.write(util.format.apply(null, arguments) + '\n');
        }
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.grey("Log")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.whiteBright(text)}`) = console.log;

    }

    infoLog(text) {
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.green("Info")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.greenBright(text)}`);
    };

    warnLog(text) {
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.yellow("Warn")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.yellowBright(text)}`);
    };

    errorLog(text) {
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.red("Error")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.redBright(text)}`);
    };

}

module.exports = {
    NexusLogger
}