<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light navedit bg-light">
      <router-link class="navbar-brand" to="/">LearnNow</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-if="loggedIn">
          <li class="nav-item">
            <router-link class="nav-link" to="/colors">Colours</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >English</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/alphabet">Alphabets</router-link>
              <router-link class="dropdown-item" to="/engQuiz">EngWords</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Maths</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item active-class" to="/number">Numbers</router-link>
              <router-link class="dropdown-item" to="/arithmeticOperator">Arithmetic Operators</router-link>
              <router-link class="dropdown-item" to="/addMinus">Add&Minus</router-link>
              <router-link class="dropdown-item" to="/timesDivide">Times&Divide</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active-class" to="/standardCalc">Calc</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-sm-2" v-if="loggedIn">
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="text-transform:capitalize;"
            >{{ user && user.email.substring(0,10)+"..." }}</router-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="#" @click="signOut">Sign Out</router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav" style="margin: 0px 0px 0px auto;" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/signin">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth } from "../firebase/firebase.utils";

export default {
  props: ['user'],
  mounted() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },
  beforeDestroy() {
    this.unsubscribeFromAuth();
  },
  data() {
    return {
      email: "",
      loggedIn: false,
      unsubscribeFromAuth: null,
      currentUser: false
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await auth.signOut().then(() =>
          swal({
            title: `Thank you!`,
            text: "You've successfully signed out!",
            icon: "success"
          })
        );
        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.navedit {
  border-radius: 5px;
}
</style>
