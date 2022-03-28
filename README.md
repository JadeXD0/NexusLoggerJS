<div align="center">
    <br />
    <p>
        <img src="./NexusLoggerJS-Logo.png" width="512" alt="NexusLoggerJS" />
    </p>
</div>

# What NexusLogger is all About

NexusLogger is a Simple but Advanced Logging System! It features Custom Logging with your own Texts!

## Features already Released and Features that are still being Developed

- [x] Custom Logging
- [x] Version Checking
- [x] File Log Saving
- [ ] User Options
- [ ] Enable/Disable features
- [x] User Friendly Logging System
- [ ] NPM Package Docs

### How to use NexusLogger

<p align="center">
    Example
</p>

```js

const { NexusLogger } = require("nexusloggerjs");
const NotNexus = new NexusLogger("NexusLoggingTest");
// Checks if version is compatible with your version
NotNexus.checkVersion(`Your version string`);

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
```

> If you are interested on suggesting we are working on something for suggestions on our discord server!

> Discord server not availale temporarily