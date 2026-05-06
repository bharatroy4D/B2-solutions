// Problem-1
const arrayNumber: number[] = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = (item: number[]) => {
    const evenNumber = item.filter((num: number) => {
        return num % 2 === 0;
    })
    return evenNumber;
}
const evenResult = filterEvenNumbers(arrayNumber)
console.log(evenResult);

// Problem-2
const NameData: string = "typescript";

const reverseString = (item: string) => {
    return item.split("").reverse().join("");
}
const reverseResult = reverseString(NameData);
console.log(reverseResult);

// Problem-3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
    if (typeof value === "string") {
        return "string";
    } else {
        return "Number";
    }
}
const








