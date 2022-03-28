"use strict";

const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");
var util = require('util');

const latest  = require("./package.json").version;

class NexusLogger {
    constructor(name, yourVersion) {

        this.name = name;
        this.version = latest;
        this.yourVersion = yourVersion;
        
        const d = new Date();
        const d2 = new Date();

        var formattedtimedate = moment(d).format("h:mm:ss a");
        var formattedDate = moment(d2).format("YYYY-MM-DD");

        this.time = formattedtimedate;
        this.date = formattedDate

    };
    checkVersion() {
        if(this.yourVersion !== this.version) {
            const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

            fileWrite.write(util.format.apply(null, arguments) + '\n');
            throw new Error(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Seems like your version may be outdated, we reccomend you update to our latest version as your current version may not be supported!. Update to the latest version: ${chalk.magenta(this.version)}`)}`);
        };

        if(!this.yourVersion) {
            const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

            fileWrite.write(util.format.apply(null, arguments) + '\n');
            throw TypeError(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Sorry did you define a version your using? We have to check if your using an update version`)}`)
        };

        if(typeof(this.yourVersion) !== typeof(String())) {
            const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

            fileWrite.write(util.format.apply(null, arguments) + '\n');
            throw TypeError(`${chalk.red("Version Error")} ${chalk.grey("|")} ${chalk.whiteBright(`Is the version you defined even a string? Please make it a string. Example: ${chalk.white(`\`NotNexus.checkVersion("1.5.5")\``)}`)}`)
        };
    }

    consoleLog(text) {
        const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

        fileWrite.write(util.format.apply(null, arguments) + '\n');
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.grey("Log")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.whiteBright(text)}`)

    }

    infoLog(text) {
        const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

        fileWrite.write(util.format.apply(null, arguments) + '\n');
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.green("Info")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.greenBright(text)}`);
    };

    warnLog(text) {
        const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

        fileWrite.write(util.format.apply(null, arguments) + '\n');
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.yellow("Warn")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.yellowBright(text)}`);
    };

    errorLog(text) {
        const fileWrite = fs.createWriteStream(`${this.date} NexusLogFile.log`, { flags: 'a' })

        fileWrite.write(util.format.apply(null, arguments) + '\n');
        console.log(`${chalk.magenta(this.time)} ${chalk.grey("|")} ${chalk.red("Error")} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.redBright(text)}`);
    };

}

module.exports = {
    NexusLogger
}