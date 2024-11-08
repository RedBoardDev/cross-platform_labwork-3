import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkYEevuV-mrv2xodA03Ajhs6fESw0GZh0",
  authDomain: "feur-5699e.firebaseapp.com",
  projectId: "feur-5699e",
  storageBucket: "feur-5699e.firebasestorage.app",
  messagingSenderId: "816665174983",
  appId: "1:816665174983:web:cf1a2a3e6ac695ec026fe2",
  measurementId: "G-PHFXHS9TD6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

