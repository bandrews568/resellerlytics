import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCd3CeTNZQ28mp83KnXCzBRSIWiUwWHsWo",
    authDomain: "resellerlytics-web.firebaseapp.com",
    projectId: "resellerlytics-web",
    storageBucket: "resellerlytics-web.firebasestorage.app",
    messagingSenderId: "846163918484",
    appId: "1:846163918484:web:63d635ea904e30163dfe81",
    measurementId: "G-5215KG5YFW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };