const LoggerGCP = require('./classes/logger');

module.exports.createLoggerGCP = (config) => {
    return new LoggerGCP(config);
}

// module.exports = LoggerGCP;