// Import Firebase functions using ES6 module syntax
import { firebase } from './firebase-init.js';

// Define a function to handle the form submission
function submitForm() {
    var email = document.getElementById("txt_subscribe").value;

    if (email !== "") {
        // Get a reference to the Firestore database
        var db = firebase.firestore();

        // Add the email to a Firestore collection
        db.collection("subscribers").add({
            email: email
        })
        .then(function() {
            alert("Subscription successful!");
        })
        .catch(function(error) {
            alert("Error subscribing: " + error);
        });
    } else {
        alert("Please enter a valid email address.");
    }
}

// Add an event listener to the form submission
document.getElementById("form_subscribe").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the submitForm function
});
