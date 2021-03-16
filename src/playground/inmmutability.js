///INMMUTABILITY - OBJECTS
const person = { 
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};
//const updated = Object.assign({}, person, { name: "Bob", age: 30}); //This function clone a object into a empty object
const updated = { 
    ...person, 
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
console.log(updated);

///INMMUTABILITY - ARRAYS
const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];
console.log(added);
/// Output: [1, 4, 2, 3]

//Removing
const remove = numbers.filter(n => n !== 2);
console.log(remove)
/// Output: [1, 3]

//Updating
const update = numbers.map(n => n === 2 ? 20 : n);
console.log(update);
/// Output: [1, 20, 3]

