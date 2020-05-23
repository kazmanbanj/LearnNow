import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import '@firebase/firestore'
import 'firebase/auth'
import Vuelidate from 'vuelidate'

// Vue.use(VueFirestore)
Vue.use(Vuelidate)

Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhpmh_9F5o--PTkCpSCaDYgXqn5royZs",
  authDomain: "learnnow-6d195.firebaseapp.com",
  databaseURL: "https://learnnow-6d195.firebaseio.com",
  projectId: "learnnow-6d195",
  storageBucket: "learnnow-6d195.appspot.com",
  messagingSenderId: "299623752447",
  appId: "1:299623752447:web:2e2492cf62d00b6a39e2ca"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

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


let app;

firebase.auth().onAuthStateChanged(user=> {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')
