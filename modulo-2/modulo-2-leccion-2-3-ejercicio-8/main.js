'use strict';

const thisYear = 4;
const testYear = thisYear % 4;
let nextYear;

if (testYear === 0) {
    nextYear = thisYear;
    console.log(nextYear);
} else {
    nextYear = thisYear + testYear;
    console.log(nextYear)
}
    
// const actualYear = 2005;
// let nextYear;

// nextYear = actualYear >= 0 ? actualYear + (4 - (actualYear % 4)) : 4;

// console.log(nextYear);