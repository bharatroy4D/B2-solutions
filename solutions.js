"use strict";
// Problem-1
const arrayNumber = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers = (item) => {
    const evenNumber = item.filter((num) => {
        return num % 2 === 0;
    });
    return evenNumber;
};
const evenResult = filterEvenNumbers(arrayNumber);
console.log(evenResult);
// Problem-2
const NameData = "typescript";
const reverseString = (item) => {
    return item.split("").reverse().join("");
};
const reverseResult = reverseString(NameData);
console.log(reverseResult);
const checkType = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    else {
        return "Number";
    }
};
console.log(checkType(34));
// Problem-4
const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = (obj, key) => {
    return obj[key];
};
console.log(getProperty(user, "name"));
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2026 };
const toggleReadStatus = (book) => {
    return { ...book, isRead: true };
};
console.log(toggleReadStatus(myBook));
// Problem -6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name:${this.name}, Age:${this.age}, Grade:${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
