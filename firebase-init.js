// Import the Firebase modules using CommonJS syntax
const { initializeApp } = require("https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js");
const { getAnalytics } = require("https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js");
const { firestore } = require("https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP30sj-SqonRadEgJUMqSJiHZIb-ti7NY",
    authDomain: "mail-29b93.firebaseapp.com",
    projectId: "mail-29b93",
    storageBucket: "mail-29b93.appspot.com",
    messagingSenderId: "1094121810798",
    appId: "1:1094121810798:web:330a6ec9f66455bf47ef7f",
    measurementId: "G-F43SXV9VFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase functions
export const firebase = {
    app,
    analytics,
    firestore
};
