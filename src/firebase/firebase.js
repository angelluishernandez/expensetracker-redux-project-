import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.GOOGLE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID ,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID ,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };





///////////////////////////////////////////////////////

///////////////////REFERNCE////////////////////////////

///////////////////////////////////////////////////////


// // Child removed

// database.ref("expenses").on("child_removed", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // Child changed

// database.ref("expenses").on("child_changed", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // Child added

// database.ref("expenses").on("child_added", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // database
// // 	.ref("expenses")
// // 	.on("value", (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach(expense => {
// // 			expenses.push({
// // 				id: expense.key,
// // 				...expense.val(),
// // 			});
// //     });
// //     console.log(expenses)
// //   })

// // database.ref("expenses").push({
// //   description: "Rent",
// //   note: "",
// //   amount: 198264,
// //   createdAt: 354054975
// // })

// // database.ref("expenses").push({
// //   description: "HOme",
// //   note: "",
// //   amount: 236942648726,
// //   createdAt: 127642142
// // })
// // database.ref("expenses").push({
// //   description: "Food",
// //   note: "",
// //   amount: 42743541,
// //   createdAt: 1123456789
// // })

// // database.ref("notes").push({
// //   title: "reactttttt ",
// //   body: "fsohfsiofh"
// // })

// // const firebaseNotes = {
// // 	notes: {
// // 		note1: {
// // 			title: "Some note",
// // 			body: "This is the body",
// // 		},
// // 		note2: {
// // 			title: "Some note 2",
// // 			body: "This is the body",
// // 		},
// // 	},
// // };

// // const notes = [
// // 	{
// // 		id: 12,
// // 		title: "Some note",
// // 		body: "This is the body",
// // 	},
// // 	{
// // 		id: 452,
// // 		title: "Some note 2",
// // 		body: "This is the body",
// // 	},
// // ];

// // database.ref("notes").set(notes);
// // //

// // database.ref().on("value", snapshot => console.log(snapshot.val()));

// // database
// // 	.ref()
// // 	.once("value")
// // 	.then(snapshot=> console.log(snapshot.val()))
// // 	.catch(error => console.log(error));

// // database
// // 	.ref()
// // 	.set({
// // 		name: "Angel",
// // 		age: 32,
// // 		isSingle: false,
// // 		location: {
// // 			city: "Madrid",
// // 			country: "Spain",
// //     },

// // 	})
// // 	.then(() => console.log("Data is saved"))
// //   .catch(e => console.log("this failed", e));

// //   database.ref("isSingle").set(null)

// // // database
// // // 	.ref("location")
// // // 	.remove()
// // // 	.then(() => console.log("Data removed"))
// // // 	.catch((error) => console.log(error));
