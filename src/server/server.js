
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRABASE_API_KEY,
  authDomain: import.meta.env.VITE_FIRABASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRABASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRABASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRABASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)