import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhpiHhQEmbX0ysMyCfx15vWEIxNCZ5T-w",
  authDomain: "olovshage-d3046.firebaseapp.com",
  projectId: "olovshage-d3046",
  storageBucket: "olovshage-d3046.appspot.com",
  messagingSenderId: "1081189061868",
  appId: "1:1081189061868:web:d7debabe175c6b56e0c1c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
