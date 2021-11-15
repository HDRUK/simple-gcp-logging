const Logging = require('@google-cloud/logging');

class LoggerGCP {
    _loggingProjectId;
    _loggingLogName;
    _loggingData = null;
    _resourseType = 'global';
    _severity;

    constructor(config) {
        this._loggingProjectId = config.projectId;
        this._loggingLogName = config.logName ;
    }

    setSeverity(severityInput) {
        this._severity = severityInput;
    }

    setData(dataInput) {
        this._loggingData = dataInput;
    }

    setResourceType(resourceTypeInput) {
        this._resourseType = resourceTypeInput || '';
    }

    async writeLog() {
        // Creates a client
        const logging = new Logging({
            projectId: this._loggingProjectId,
        });

        // Selects the log to write to
        const log = logging.log(this._loggingLogName);

        // Prepares a log entry
        const entry = log.entry(this.generateMeta(), this._loggingData);

        try {
            await log.write(entry);
        } catch (err) {
            console.log(err);
        }
    }

    generateMeta() {
        return {
            resource: {
                type: this._resourseType,
            },
            severity: this._severity || 'DEFAULT'
        };
    }
}


module.exports = LoggerGCP;