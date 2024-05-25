import { useContext, createContext, useState, useEffect } from "react";
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const logOut = () => {
    signOut(auth);
  };

  const signInWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Error signing in:", error);
      return null;
    }
  };

  const getUserDetails = async (userId) => {
    try {
      const userDoc = await getDoc(doc(firestore, "users", userId));
      if (userDoc.exists()) {
        setUserDetails(userDoc.data()); // Set user details state
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error getting user:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await getUserDetails(currentUser.uid)
      } else {
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, userDetails, signInWithEmail, logOut, userDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
