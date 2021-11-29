# simple-gcp-logging

Implementation:

```
npm install git+https://github.com/HDRUK/simple-gcp-logging.git#main
```

```
const LoggerGCP = require('simple-gcp-logging');

export default class LoggingService {
    _logger;
    constructor() {
        this._logger = LoggerGCP.createLoggerGCP({
            projectId: process.env.LOGGING_PROJECT_ID,
            logName: process.env.LOGGING_LOG_NAME,
        });
    }

    sendDataInLogging(data: any, severity: any) {
        this._logger.setData(data);
        this._logger.setSeverity(severity);
        this._logger.writeLog();
    }
}
```