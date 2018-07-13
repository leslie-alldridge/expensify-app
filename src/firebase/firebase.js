import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBzijTedq7S52-J72DJhQqGmc6YoLiA9gw",
    authDomain: "expensify-1eaff.firebaseapp.com",
    databaseURL: "https://expensify-1eaff.firebaseio.com",
    projectId: "expensify-1eaff",
    storageBucket: "expensify-1eaff.appspot.com",
    messagingSenderId: "1042268364216"
};

firebase.initializeApp(config);

const database = firebase.database();


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(29);
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data", e);
//   });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   }).catch((e) => {
//     console.log("nothing removed", e);
//   });


// database.ref().set({
//   name: 'Leslie Alldridge',
//   age: 26,
//   stressLevel: 7,
//   job: {
//     title: 'developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Wellington',
//     country: 'New Zealand'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed', e);
// });

// // database.ref('age').set(27);
// // database.ref('location/city').set('New Plymouth');

// database.ref('attributes').set({
//   height: 173,
//   weight: 83
// }).then(() => {
//  console.log('second set call');
// }).catch((e) => {
//   console.log('failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// // setting to null deletes the info
// // database.ref('isSingle').set(null);
