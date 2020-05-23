import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyBDhpmh_9F5o--PTkCpSCaDYgXqn5royZs",
    authDomain: "learnnow-6d195.firebaseapp.com",
    databaseURL: "https://learnnow-6d195.firebaseio.com",
    projectId: "learnnow-6d195",
    storageBucket: "learnnow-6d195.appspot.com",
    messagingSenderId: "299623752447",
    appId: "1:299623752447:web:2e2492cf62d00b6a39e2ca"
  };
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;