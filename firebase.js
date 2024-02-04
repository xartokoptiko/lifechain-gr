// Import the functions you need from the SDKs you need
import { getApp, initializeApp  } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword , deleteUser} from "firebase/auth";
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { browserSessionPersistence, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);
var db = getFirestore(app);

export const loginWithEmailAndPassword = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      console.log("Error logging in: ", error);
    });
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error("An error occured while trying to logout " + error.message);
  }
};

export const getUserData = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userDocument = await getDoc(doc(db, "users", user.uid));
      return userDocument.data();
    } else {
      throw new Error("No user is currently logged in");
    }
  } catch (error) {
    throw new Error(
      "An error occured while trying to get user data " + error.message
    );
  }
};


const deleteUserData = async (userId) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    console.log("User data deleted successfully");
  } catch (error) {
    console.error("Error deleting user data:", error);
    throw new Error("An error occurred while trying to delete user data: " + error.message);
  }
};


export const deleteAccount = async (password) => {
  try {
    const user = auth.currentUser;
    const email = user.email;

    const deleted = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (user) {
        user.delete();
        deleteUserData(user.uid);
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      return false;
    });

    console.log(deleted);
    return deleted;


  } catch (error) {
    return false;
  }

};