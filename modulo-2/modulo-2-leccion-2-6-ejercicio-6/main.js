'use strict';

const basketOfPears = {
    maxValue: 12,
    minValue: 2,
    currentValue: 5,
    initialValue: 0
}

basketOfPears.add = function() {
    this.currentValue++;
}

basketOfPears.remove = function() {
    this.currentValue--;
}

basketOfPears.reset = function() {
    this.currentValue = this.initialValue;
}

basketOfPears.add();
basketOfPears.remove();
basketOfPears.reset();

console.log(basketOfPears.currentValue);






// const cestaPeras = {
//     max: 10,
//     min: 5,
//     actual: 6,
//     inicial: 0
// }

// const cestaPeras2 = {}
// cestaPeras2.max = 3;
// cestaPeras2.min = 5;
// cestaPeras2.actual = 6;
// cestaPeras2.inicial = 0;

// cestaPeras2.add = function() {
//     this.actual++; //valor actual +1
// }