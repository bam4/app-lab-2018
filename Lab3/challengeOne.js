

function wordReverse(stringToReverse) {

    awesomeNewString = "";

    for (i = stringToReverse.length-1; i > -1; i--) { 
        awesomeNewString += stringToReverse[i];
    }

    return awesomeNewString;
};

function main() {
    console.log(wordReverse("Dope"));
};

main();


