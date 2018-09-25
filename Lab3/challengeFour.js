// Write a JS function that accepts another JS function

function awesomePasswordUpgrader (baseString) {

    randomInt = Math.random() * 4;

    randomInt = Math.round(randomInt)

    if (randomInt == 0) {
        baseString += "!!";
    } else if (randomInt == 1) {
        baseString += "password"
    } else if (randomInt == 2) {
        baseString = "%%" + baseString + "%%"
    } else if (randomInt == 3) {
        baseString += baseString + "cats"
    } else if (randomInt == 4) {
        baseString += "??"
    } 

    console.log("Password is " + baseString)

    return baseString
}

function passwordChecker (stringToCheck) {
    for (i = 0; i <= stringToCheck.length; i++) {
        if (stringToCheck[i] == "!") {
            return "Awesome password!"
        } else if (stringToCheck[i] == "%") {
            return "Awesome password!"
        } else if (stringToCheck[i] == "%") {
            return "Awesome password!"
        } 
            
        
    }
    return "Password too weak."
}

console.log("Testing password: 'cool'")
console.log(passwordChecker(awesomePasswordUpgrader("cool")))
console.log("Testing password: '!21211221'")
console.log((passwordChecker(awesomePasswordUpgrader("!21211221"))))
console.log("Testing password: 'fireball'")
console.log((passwordChecker(awesomePasswordUpgrader("fireball"))))