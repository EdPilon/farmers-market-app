import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZReJwEBh5D_NDiDlK2tk5Yg2N0hVTeww",
  authDomain: "js-2-45ee7.firebaseapp.com",
  projectId: "js-2-45ee7",
  storageBucket: "js-2-45ee7.firebasestorage.app",
  messagingSenderId: "1015618527112",
  appId: "1:1015618527112:web:5ab74418f08e7b0588a43d",
  measurementId: "G-EQSKLN8BEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };