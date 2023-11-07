// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase_api_key = import.meta.env.VITE_FIREBASE_API_KEY;
const firebase_auth_domain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const firebase_project_id = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const firebase_storage_bucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const firebase_message_sender_id = import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID;
const firebase_app_id = import.meta.env.VITE_FIREBASE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${firebase_api_key}`,
  authDomain: `${firebase_auth_domain}`,
  projectId: `${firebase_project_id}`,
  storageBucket: `${firebase_storage_bucket}`,
  messagingSenderId: `${firebase_message_sender_id}`,
  appId: `${firebase_app_id}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;