const { NexusLogger } = require("nexusloggerjs");
const NotNexus = new NexusLogger("NexusLoggingTest");
// Checks if version is compatible with your version
NotNexus.checkVersion("1.6.3");

// If version is not compatible
// It will send out an error and will not proceed to execute
// NotNexus.checkVersion("1.5.10");


// Executes a Console Log
NotNexus.consoleLog("Console Test Log")

// Executes a Info Log
NotNexus.infoLog("Info Test Log");

// Executes a Warn Log
NotNexus.warnLog("Warn Test Log");

// Executes an Error Log
NotNexus.errorLog("Error Test Log");
