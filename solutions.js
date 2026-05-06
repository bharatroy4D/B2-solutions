"use strict";
// Problem-1
const arrayNumber = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = (item) => {
    const evenNumber = item.filter((num) => {
        return num % 2 === 0;
    });
};
const evenResult = filterEvenNumbers(arrayNumber);
console.log(evenResult);
