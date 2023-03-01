import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCjIr34X9XWnp_rlVjoZmBcTbk8eEvXv6E",
  authDomain: "vue-subjects-lists.firebaseapp.com",
  projectId: "vue-subjects-lists",
  storageBucket: "vue-subjects-lists.appspot.com",
  messagingSenderId: "837325015973",
  appId: "1:837325015973:web:6f984b2059a98fc634764c",
  measurementId: "G-STEXS7TL96"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export {
    db,
    auth,
    messaging
}
