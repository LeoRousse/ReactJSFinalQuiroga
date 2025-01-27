import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6izt4xfdj9oOAUYie7EyiEYNnXurEmb0",
    authDomain: "proyectoreactquiroga.firebaseapp.com",
    projectId: "proyectoreactquiroga",
    storageBucket: "proyectoreactquiroga.firebasestorage.app",
    messagingSenderId: "281539623387",
    appId: "1:281539623387:web:103fdadc8843a88b73cffe"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);