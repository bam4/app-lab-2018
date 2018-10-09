// App Lab
// Lab 4
// By Shirley Lei and Brett Moody

// This is our data:

// Coded Variables:

// Tech Count:
// 0 = No phone or computer.
// 1 = Phone.
// 2 = Computer.

// Drink Size:
// - 1 = Drinking a competitor's coffee in Starbucks.
// 0 = Not drinking any Starbucks beverages.
// 1 = Small Coffee
// 2 = Medium Coffee
// 3 = Large Coffee

// Our Data:
const data = [
    {techCount:0.0, drinkSize: 1.0},
    {techCount:0.0, drinkSize: 1.0},
    {techCount:0.0, drinkSize: 0.0},
    {techCount:0.0, drinkSize: 0.0},
    {techCount:1.0, drinkSize: -1.0},
    {techCount:1.0, drinkSize: -1.0},
    {techCount:1.0, drinkSize: 3.0},
    {techCount:2.0, drinkSize: 1.0},
    {techCount:2.0, drinkSize: 1.0},
    {techCount:2.0, drinkSize: 1.0},
    {techCount:1.0, drinkSize: 0.0},
    {techCount:1.0, drinkSize: 0.0},
    {techCount:1.0, drinkSize: 0.0},
    {techCount:2.0, drinkSize: 0.0},
    {techCount:0.0, drinkSize: 0.0},
    {techCount:0.0, drinkSize: 0.0},
    {techCount:1.0, drinkSize: 1.0},
    {techCount:0.0, drinkSize: 0.0},
    {techCount:1.0, drinkSize: 4.0}];
    
//store our n
const n = data.length;

//sum of x^2
const xSquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].techCount, 2) + count;
    }
    return count;
}

//sum of y^2
const ySquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].drinkSize, 2) + count;
    }
    return count;
}

//(sum of x)^2
const sumXSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].techCount + count;
    }
    return Math.pow(count,2);
}

//(sum of y)^2
const sumYSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].drinkSize + count;
    }
    return Math.pow(count,2);
}


//x*y
const sumXTimesY = function() {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].techCount * data[i].drinkSize + count;
    }
    return count;
}


// We believe that this is the corrected version of the equation.
// The previous version was giving us a correlation > |1|
const pearsonCorrelation = () => {
    return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum() -(sumXSquared()/n))) * (Math.sqrt(ySquaredSum() -(sumYSquared()/n))));
}

console.log(pearsonCorrelation());
// We have a correlation of ~0.679 with our corrected equation.