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

const checkType = (value: StringOrNumber): string | number => {
    if (typeof value === "string") {
        return "string";
    } else {
        return "Number";
    }
}
console.log(checkType(34));

// Problem-4
const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, k extends keyof T>(obj: T, key: k): T[k] => {
    return obj[key]
}
console.log(getProperty(user, "name"));

// Problem -5

interface Book {
    title: string,
    author: string,
    publishedYear: number,
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2026 };

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return { ...book, isRead: true }
}
console.log(toggleReadStatus(myBook));






