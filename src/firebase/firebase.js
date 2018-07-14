import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//    .on('child_removed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
//    });

//    database.ref('expenses')
//    .on('child_changed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
//    });

//    database.ref('expenses')
//    .on('child_added', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
//    });
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
  

// database.ref('notes/LHHgHWRpmTgfZywuVsb').remove();

// database.ref('notes/LHHgHWRpmTgfZywuVsb').update({
//   body: "buy food"
// });

// database.ref('notes').push({
//   title: "Leslie Title",
//   body: 'Go for a run'
// });



// const firebaseNotes = {
//   notes: {
//     afwafw: {
//       title: 'Hatchet',
//       author: 'Gary Paulsen'
//     }
//   }
// }

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
