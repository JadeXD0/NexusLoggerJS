"use strict";

const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");

const outdatedversions = ["v1", "v1.1", "v1.2", "v1.2.5"];
const latest = require("./package.json").version;

class NexusLogger {
    constructor(name) {

        this.name = name;
        
        
        const d = new Date();

        var formatteddate = moment(d).format("h:mm:ss a");
        let date = formatteddate;

        this.date = date;

    };

    consoleLog(text) {
        console.log(`${chalk.grey("Log")}  ${chalk.magenta(this.date)} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.whiteBright(text)}`);
    }

    infoLog(text) {
        console.log(`${chalk.green("Info")}  ${chalk.magenta(this.date)} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.greenBright(text)}`);
    };

    warnLog(text) {
        console.log(`${chalk.yellow("Warn")}  ${chalk.magenta(this.date)} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.yellowBright(text)}`);
    };

    errorLog(text) {
        console.log(`${chalk.red("Error")}  ${chalk.magenta(this.date)} ${chalk.magenta("[")}${chalk.magentaBright(this.name)}${chalk.magenta("]")} ${chalk.grey(" | ")} ${chalk.redBright(text)}`);
    };

}

async function VersionChecker(version) {

    if(!version.startsWith("v")) version = `v${version}`;
    if(outdatedversions.includes(`${version}`)) {
        throw Error(`This version of NexusLoggerJS is outdated! Please update to v${latest}!`);
    } else {
        console.log(`Running latest version of NexusLoggerJS! Version: ${chalk.magentaBright(`v${latest}`)} | Current Version: ${chalk.magentaBright(`${version}`)}`);
    };
    if(!version) {
        throw TypeError("Missing version variable. Are you sure you defined one?")
    }

};

if(!VersionChecker) throw new TypeError("Empty Version. Please define one!")

module.exports = {
    NexusLogger,
    VersionChecker
}