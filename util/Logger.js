/**
 * Created by rupalchawla on 6/10/16.
 */
var winston = require('winston');

var logLevel = "debug";


var logger = new winston.Logger({
    level: logLevel,
    timestamp: true,
    showLevel: true,
    transports: [
        new(winston.transports.Console)({
            timestamp: true,
            prettyPrint: true,
            json: false,
            showLevel: true,
            humanReadableUnhandledException: true,
            colorize: true
        })
        /*new(winston.transports.File)({
            filename: './public/log/web/fglog.log',
            timestamp: true,
            maxFiles: 3,
            prettyPrint: true,
            json: false,
            showLevel: true,
            maxsize: 1000000
        })*/
    ]
});


module.exports = logger;