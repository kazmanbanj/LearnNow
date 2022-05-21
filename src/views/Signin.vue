<template>
  <div class="signin-form">
    <p class="signinhead">Sign in to your account</p>
    <form @submit.prevent="pressed">
      <div class="input">
        <label for="email">Mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <h5 id="showbtn">
        <input
          type="checkbox"
          id="showMe"
          class="input-field"
          @click="showPassword"
        />Show Password
      </h5>
      <div class="submit1">
        <button type="submit" class="emailbtn">Sign in with email</button>
      </div>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <br />
    <h5 style="text-align: center; font-weight: bold;">Or</h5>
    <div class="submit" style="margin-top: 15px;">
      <button @click="signInWithgoogle" class="googlebtn">
        Sign in with Google
      </button>

      <button @click="resetPassword" class="resetbtn">
        Reset Password
      </button>
    </div>
    <span class="signfoot">Need an account? Click here to <router-link to="/signup">register</router-link></span>
  </div>
</template>

<script>
import swal from "sweetalert";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

export default {
  data() {
    return {
      email: null,
      password: "",
      error: "",
    };
  },
  methods: {
    resetPassword() {
      const auth = auth.auth();
      auth.sendPasswordResetEmail(auth.currentUser.email).then(() => 
      swal({
          title: `Signed in as ${this.email}!`,
          text: "You've successfully signed in!",
          icon: "success",
          button: "Continue",
        })
      ).catch((error) => {
        swal({
          title: "Email doesn't exist on our records!",
          text:
            "Please, input the correct email or check your internet connection and try again!",
          button: "OK",
          dangerMode: true,
        });
      })
    },

    async pressed() {
      try {
        const val = await auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() =>
            swal({
              title: `Signed in as ${this.email}!`,
              text: "You've successfully signed in!",
              icon: "success",
              button: "Continue",
            })
          );
        this.$router.replace({ name: "Home" });
      } catch (error) {
        swal({
          title: "Wrong Email or Password!",
          text:
            "Please, input the correct login details or check your internet connection and try again!",
          button: "OK",
          dangerMode: true,
        });
      }
    },

    async signInWithgoogle() {
      try {
        signInWithGoogle().then(() =>
          swal({
            title: `Welcome!`,
            text: "You've successfully signed in!",
            icon: "success",
            button: "Continue",
          })
        );
        this.$router.replace({ name: "Home" });
      } catch (error) {
        swal({
          title: "Login Failed!",
          text:
            "Please, input the correct login details or check your internet connection and try again!",
          button: "OK",
          dangerMode: true,
        });
      }
    },
    showPassword() {
      var Pass = document.getElementById("password");
      var confirmPass = document.getElementById("confirmPassword");
      var showPass = document.getElementById("showMe");
      if (showPass.checked) {
        Pass.setAttribute("type", "text");
      } else {
        Pass.setAttribute("type", "password");
      }
    },
  },
};
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.signinhead {
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid rgb(3, 53, 48);
  background-color: #eee;
}

.emailbtn {
  margin-left: 105px;
  border-radius: 5px;
}

.googlebtn {
  margin-top: 5px;
  margin-left: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
}

#showbtn {
  font-size: 15px;
}

.submit button {
  border: 1px solid rgb(3, 53, 48);
  color: rgb(3, 53, 48);
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: rgb(3, 53, 48);
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.submit1 button {
  border: 1px solid rgb(3, 53, 48);
  background-color: rgb(159, 236, 236);
  color: rgb(3, 53, 48);
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit1 button:hover,
.submit1 button:active {
  background-color: rgb(3, 53, 48);
  color: white;
}

.signfoot {
  margin-left: 60px;
  font-style: italic;
}

@media only screen and (max-width: 768px) {
  .signin-form {
    width: 280px;
    margin: 50px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .submit button {
    border: 1px solid rgb(3, 53, 48);
    color: rgb(3, 53, 48);
    padding: 10px 10px;
    font: inherit;
    cursor: pointer;
    margin-left: 40px;
    border-radius: 5px;
  }

  .emailbtn {
    margin-left: 40px;
    border-radius: 5px;
  }

  .googlebtn {
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .signfoot {
    margin-left: 0px;
    font-style: italic;
  }
}
</style>
