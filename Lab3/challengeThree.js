//  Write a JS function that makes change for someone based on two arguments that are 
// passed to it(totalDue and totalGiven)

function makeChange (totalDue, totalGiven) {


    if (totalDue > totalGiven) {
        return "You do not have enough money to complete this order."
    };

    if (totalDue == totalGiven) {
        return "The amount you gave perfectly matches the cost of your order, so you will be given no change."
    };

    if (totalGiven > totalDue) {
        amountToReturn = (totalGiven - totalDue);
        amountToReturn = amountToReturn.toFixed(2);
        stringToReturn = "Your change is: $" + amountToReturn + "."
        return stringToReturn
    };
};

console.log("Giving $4 for a $5 order:");
console.log(makeChange(5,4));
console.log("Giving $5 for a $5 order:");
console.log(makeChange(5,5));
console.log("Giving $5 for a $4 order:");
console.log(makeChange(4, 5));