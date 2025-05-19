"use strict";
function inputChecker(input) {
    if (typeof input == "boolean") {
        console.log(`"${input}"`);
    }
    else {
        console.log(input);
    }
}
inputChecker(true);
