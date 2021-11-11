const firebaseConfig = {
  apiKey: "AIzaSyBbrZL9449cMCUn4pR6n9lX1AXVICbKYw4",
  authDomain: "mediweb-cf259.firebaseapp.com",
  projectId: "mediweb-cf259",
  storageBucket: "mediweb-cf259.appspot.com",
  messagingSenderId: "541262822403",
  appId: "1:541262822403:web:cfebc7df6c145ee160a236",
  measurementId: "G-VPPJ6FHRHL"
};


firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()


const db = firestore.collection("userData")


let submitButton = document.getElementById("submit")


submitButton.addEventListener("click", (e) => {
	e.preventDefault()
	
	//Form Values(example)
	//let firstName = document.getElementById('fname').value
	//let lastName = document.getElementById('lname').value
	//let country = document.getElementById('country').value
	
	//register page
	
	let firstName = document.getElementById('fname').value
	let lastName = document.getElementById('lname').value
	let email = document.getElementById('email').value
	let pssword = document.getElementById('pass').value
	let repeatpassword = document.getElementById('pass_repeat').value

	

	//Save Form Data to Firebase
	db.doc().set({
		FirstName: firstName,
		LastName: lastName,
		Email: email,
		Password: pssword
	}).then( () => {
		console.log("Data saved")
	}).catch((error) => {
		console.log(error)
		
	})	
	
	alert("Your form has been submitted")
		
})

firestore.collection("userData").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});



//example to add new collection
//firebase
 // .firestore()
 // .collection("books")
 // .doc("another book")
 // .set({
    //title: "War and Peace",
//  })
 // .then(() => {
  //  console.log("Document created");
 // });			
			
//example of merging collections		

//const bookRef = firebase
  //.firestore()
  //.collection("books")
 // .doc("another book");

//bookRef
 // .set({
   // author: "Lev Nikolaevich Tolstoy"
 // }, { merge: true })
 // .then(() => {
   // console.log("Document merged");
    
   // bookRef
    //  .get()
   //   .then(doc => {
    //  console.log("Merged document: ", doc.data());
      // Merged document:  { title: 'War and Peace', author: 'Lev Nikolaevich Tolstoy' }
   // });
 // });