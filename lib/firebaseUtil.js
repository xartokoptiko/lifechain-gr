//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginWithEmailAndPassword = async (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      throw new Error(
        "An error occured while trying to login " + error.message
      );
    });
};

export const logout = async () => {
  try {
    const auth = getAuth();
    await auth.signOut();
  } catch (error) {
    throw new Error("An error occured while trying to logout " + error.message);
  }
};

export const getUserData = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const userDocument = await firestore
        .collection("users")
        .doc(user.uid)
        .get();
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
