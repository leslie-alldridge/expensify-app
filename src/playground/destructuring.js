//Object Destructuring*****

// const person = {
//     name:'Leslie',
//     age: 26,
//     location: {
//         city: 'Wellington',
//         temp: 25
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}.`);
// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// const {title, author}= book;

// console.log(`The book named ${title}, is published by ${publisherName}.`)

//Array Destructuring *****

const address = ['400 Somes Crescent', 'Wellington', 'New Zealand', '6037'];
const [street, city = "none", country, zip] = address;
console.log(`You are in ${city} ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}.`)