<template>
  <div class="signup-form">
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <p class="signuphead">Sign Up Here</p>
      <div class="input" :class="{invalid: $v.email.$error}">
        <label for="email">Mail</label>
        <input
                type="email"
                id="email"
                @blur="$v.email.$touch()"
                v-model="email">
        <p id="pfont" v-if="!$v.email.email">Please provide a valid email address.</p>
        <p id="pfont" v-if="!$v.email.required">This field must not be empty.</p>
      </div>
      <div class="input" :class="{invalid: $v.password.$error}">
        <label for="password">Password</label>
        <input
                type="password"
                id="password"
                @blur="$v.password.$touch()"
                v-model="password">
        <p id="pfont" v-if="$v.password.$error">Minimum of 6 characters is required for the password.</p>
      </div>
      <div class="input" :class="{invalid: $v.confirmPassword.$error}">
        <label for="confirmPassword">Confirm Password</label>
        <input
                type="password"
                id="confirmPassword"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword">
        <p id="pfont" v-if="$v.confirmPassword.$error">The password must match the password above.</p>
      </div>
      <div class="showpassbtn">
				<h5 id="showbtn"><input type="checkbox" id="showMe" class="input-field" @click="showPassword">Show Password</h5>
      </div>
      <div class="submit">
        <button type="submit" :disabled="$v.$invalid" class="submitbtn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from '../../axios-auth';
// import axios from '../axios-auth';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { auth } from '../firebase/firebase.utils'

  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
      }
    },
    methods: {
      async pressed() {
      try{
        const user = await auth.createUserWithEmailAndPassword(this.email, this.password)
          // console.log(val)
          .then(() => swal({
              title: `Welcome ${this.email}!`,
              text: "You've successfully signed up!",
              icon: "success",
              button: "Continue",
            }))
          this.$router.replace({name: 'Home'})
        } catch(error) {
          swal({
            title: "Sign up failed!",
            text: "Please, check your internet connection and try again!",
            // icon: "warning",
            button: "OK",
            dangerMode: true,
          })
        }},
        
        showPassword() {
          var Pass = document.getElementById("password");
          var confirmPass = document.getElementById("confirmPassword");
          var showPass = document.getElementById("showMe");
          if (showPass.checked) {
                Pass.setAttribute('type', 'text');
            } else {
                Pass.setAttribute('type', 'password');
            }
          
            if (showPass.checked) {
                confirmPassword.setAttribute('type', 'text');
            } else {
                confirmPassword.setAttribute('type', 'password');
            }
            // showPass.addEventListener("click", showPassword);
        }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        // sameAs: sameAs('password')
        sameAs: sameAs(vm => {
          return vm.password
        })
      }
    }
  }

</script>

<style>
  .signup-form {
    width: 400px;
    margin: 50px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .signuphead {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .input {
    margin: 10px 0 auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid rgb(3, 53, 48);
    background-color: #eee;
  }

  .input.invalid label {
    color: red;
  }

  .input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }
  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .showpassbtn {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  #showbtn {
    font-size: 15px;
  }

  #pfont {
    font-size: 15px;
    margin-bottom: 4px;
  }

  .submit button {
    border: 1px solid rgb(3, 53, 48);
    color: rgb(3, 53, 48);
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    margin-left:140px;
    border-radius:5px;
  }

  .submit button:hover,
  .submit button:active {
    background-color: rgb(3, 43, 39);
    color: rgb(150, 248, 237);
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid rgb(70, 83, 82);
    background-color: transparent;
    color: rgb(3, 53, 48);
    cursor: not-allowed;
  }


 @media only screen and (max-width: 768px) {
   .signup-form {
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
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    margin-left:80px;
    border-radius:5px;
  }
 }
</style>