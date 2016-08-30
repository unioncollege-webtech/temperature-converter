var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;

exec('node .', function(error, stdout, stderr) {
    if (error) {
        throw error;
    }

    // Try test, give them leeway if they don't include the ° symbol.
    if ((stdout !== "Today's temperature is 82°F, which is 28°C.\n") ||
        (stdout !== "Today's temperature is 82F, which is 28C.\n")) {
            readFile('./peter-piper.js', "utf-8", function(err, value) {
            if (err) {throw err;}

            eval(value);

            assert(message, " | Message should be \"Today's temperature is 82°F, which is 28°C.\".");

            console.log("All tests pass!");
        });
    }
    else {
        console.log("All tests pass!");
    }
});
