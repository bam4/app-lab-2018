

function countConsonants(stringToAnalyze) {

    consonantCounter = 0;

    arrayOfVowels = ["a","e","i", "o","u"];

    hasVowels = false;

    for (i = 0; i < stringToAnalyze.length; i++) { 
        if (isLetter(stringToAnalyze[i])) {

            for (j = 0; j < arrayOfVowels.length; j++) {
                if (stringToAnalyze[i] == arrayOfVowels[j]) {
                    hasVowels = true
                    break
                }; 
            };
            if (!hasVowels){
                consonantCounter++;
            }
            hasVowels = false;

        }; 
    };

    return consonantCounter
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
};


function main() {
    console.log(countConsonants("Laser"));
};

main();


