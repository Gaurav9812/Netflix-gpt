import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);