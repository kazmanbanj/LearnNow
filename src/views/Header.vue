<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light navedit bg-light">
      <a class="navbar-brand" href="/">LearnNow</a>
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
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-if="loggedIn">
          <li class="nav-item">
            <a class="nav-link" href="/colors">Colours</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >English</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/alphabet">Alphabets</a>
              <a class="dropdown-item" href="/engQuiz">EngWords</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Maths</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item active-class" href="/number">Numbers</a>
              <a class="dropdown-item" href="/arithmeticOperator">Arithmetic Operators</a>
              <a class="dropdown-item" href="/addMinus">Add&Minus</a>
              <a class="dropdown-item" href="/timesDivide">Times&Divide</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link active-class" href="/standardCalc">Calc</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-sm-2" v-if="loggedIn">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="signOut">Sign Out</a>
          </li>
        </ul>
        <ul class="navbar-nav" style="margin: 0px 0px 0px auto;" v-else>
          <li class="nav-item">
            <a class="nav-link" href="/signin">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth } from "../firebase/firebase.utils";

export default {
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
