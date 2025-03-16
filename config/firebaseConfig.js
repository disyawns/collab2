// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyACMMigjPc0IQPvoPNW2vWAjpmgi-v2u3c",
//   authDomain: "collab-app-3405f.firebaseapp.com",
//   projectId: "collab-app-3405f",
//   storageBucket: "collab-app-3405f.firebasestorage.app",
//   messagingSenderId: "431140782580",
//   appId: "1:431140782580:web:ec50d61731d8ffb5aa79a1",
//   measurementId: "G-63KPJ6GKR2"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics"; // Added 'isSupported'
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "collab-app-3405f.firebaseapp.com",
  projectId: "collab-app-3405f",
  storageBucket: "collab-app-3405f.firebasestorage.app",
  messagingSenderId: "431140782580",
  appId: "1:431140782580:web:ec50d61731d8ffb5aa79a1",
  measurementId: "G-63KPJ6GKR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Conditionally initialize analytics for client-side only
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}
