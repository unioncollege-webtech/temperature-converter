var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;

exec('node .', function(error, stdout, stderr) {
    if (error) {
        throw error;
    }
    // Try test
    if (stdout !== "Today's temperature is 82°F, which is 28°C.\n") {
            readFile('./temperature.js', "utf-8", function(err, value) {
            if (err) {
                throw err;
            }

            eval(value);

            assert(message, "Message should be \"Today's temperature is 82°F, which is 28°C.\".");

            if (message == "Today's temperature is 82F, which is 28C." || message == "Today's temperature is 82°F, which is 28C." || message == "Today's temperature is 82F, which is 28°C.") {
              assert(false, "Your temperatures both need to have the degree symbol, copy this one: °");
            }

            if (message !== "Today's temperature is 82°F, which is 28°C.") {
                assert(false, "Message did not match \"Today's temperature is 82°F, which is 28°C.\"");
            }

            console.log("All tests pass!");
        });
    }
    else {
        console.log("All tests pass!");
    }
});
