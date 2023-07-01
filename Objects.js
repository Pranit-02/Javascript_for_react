// const person = {
//     name: "Pranit",
//     age: 20,
//     isMarried: false
// }

// const name = person.name
// const age = person.age
// const isMarried = person.isMarried

// a shorthand to write the above code in react is given below

// const {name, age, isMarried} = person;

// =============> New Concept <===============

//now suppose if person2 posses the exact same properties as person only the name of person2 is Jack so we can do that using below code

const person = {
    name: "Pranit",
    age: 20,
    isMarried: false
};

const person2 = {...person, name: "Jack"};

// This is not just applicable for  objects but is also used by many other concepts 

// Below is the example for array

const names = ["Pranit", "Jack", "Vivek"];

const names2 = [...names, "Joel"];