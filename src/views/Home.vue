<template>
  <div id="welcome">
    <div v-if="loggedIn">
      <h1>LearnNow Study App</h1>
      <div class="homebord colourhome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Colours
        </h2>
        <p class="homewords">
          <strong>Colour</strong> is the property possessed by an object of
          producing different sensations on the eye as a result of the way it
          reflects or emits light. This app has some cool colours which you can
          play with, which will also display any colour you need to know about.
          Know your colours with ease by clicking
          <a href="/colors" style="text-decoration: none;">LearnNow Colours</a>
          to see some fantastic colours we have. It will be fun all through as
          you get to know the kinds of colour we have.
        </p>
      </div>
      <div class="homebord alphahome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Alphabets
        </h2>

        <p class="homewords">
          <strong>Alphabets</strong> are a set of letters or symbols in a fixed
          order used to represent the basic set of speech sounds of a language,
          which consists of a set of letters from A to Z. The LearnNow Alphabets
          is basically for nursery school students which display the capital
          letters, small letters, vowels and consonants for them to study. Know
          your alphabets with ease by clicking
          <a href="/alphabet" style="text-decoration: none;">Alphabets</a> under
          the English section to know the various alphabets we have. It will be
          fun all through as you get to know the Alphabets.
        </p>
      </div>
      <div class="homebord enghome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          EngWords
        </h2>
        <p class="homewords">
          <strong>EngWords</strong> stands for English Words. LearnNow English
          Words helps you learn new words and the most common words in english. It
          also allows you to study the words and try to spell them offhand so as
          to improve your vocabulary and explore language. Know your english
          words with ease by clicking
          <a href="/engQuiz" style="text-decoration: none;">EngWords</a> under
          the English section to know the various english words we have. It will
          be fun all through as you get to know the English words.
        </p>
      </div>
      <div class="homebord numberhome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Numbers
        </h2>

        <p class="homewords">
          <strong>Number</strong> is an arithmetical value, expressed by a word,
          symbol, or figure, representing a particular quantity and used in
          counting and making calculations. They are mathematical objects used
          to count, measure, and label. LearnNow Numbers is basically for nursery
          school students which helps them learn the various numbers we have.
          The LearnNow Numbers also let you add more numbers as you get to know
          each of them. Know your numbers with ease by clicking
          <a href="/number" style="text-decoration: none;">Numbers</a> under the
          Maths section to know the various numbers we have. It will be fun all
          through as it lets you add more numbers in just one click.
        </p>
      </div>
      <div class="homebord arithhome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Arithmetic Operators
        </h2>
        <p class="homewords">
          <strong>Arithmetic Operator</strong> is a mathematical function that
          takes two or more operands and performs a calculation on them. LearnNow
          Arithmetic Operator helps you learn how to add, subtract, divide and
          multiply numbers with ease. It lets you improve your calculations
          skills. Know your Arithmetic Operators with ease by clicking
          <a href="/arithmeticOperator" style="text-decoration: none;"
            >Arithmetic Operators</a
          >
          under the Maths section to know the basic arithmetic operators we
          have. It will be fun all through as you get to know them.
        </p>
      </div>
      <div class="homebord addhome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Add&Minus
        </h2>
        <p class="homewords">
          <strong>Add&Minus</strong> stands for Addition and Subtraction.
          LearnNow Add&Minus helps you learn the Addition and Subtraction of numbers
          with ease. It lets you play the LearnNow Add and Minus game that will
          improve your addition and subtraction skills. Know your addition and
          subtraction with ease by clicking
          <a href="/addMinus" style="text-decoration: none;">Add&Minus</a> under
          the Maths section to play the addition and subtraction game. It will
          be fun all through as you get to know how to add and subtract numbers.
        </p>
      </div>
      <div class="homebord timeshome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Times&Divide
        </h2>
        <p class="homewords">
          <strong>Times&Divide</strong> stands for Multiplication and Division.
          LearnNow Times&Divide helps you learn Multiplication and Division of
          numbers with ease. It lets you play the LearnNow Times and Divide game
          that will improve your multiplication and division skills. Know your
          multiplication and division with ease by clicking
          <a href="/timesDivide" style="text-decoration: none;">Times&Divide</a>
          under the Maths section to play the multiplication and division game.
          It will be fun all through as you get to know how to multiply and
          divide numbers.
        </p>
      </div>
      <div class="homebord calchome">
        <h2
          style="
            text-align: center;
            text-decoration: underline;
            margin-bottom: 0px;
          "
        >
          Calc
        </h2>
        <p class="homewords">
          <strong>Calc</strong> stands for the calculator. A calculator is something
          that performs arithmetic operations on numbers, it could be a small
          electronic device with a keyboard and a visual display. It was
          invented by <strong>Jack Kilby</strong>. This app has some cool
          arithmetic functions you can play with. Test your calculator skills
          with ease by clicking
          <a href="/standardCalc" style="text-decoration: none;">LearnNow Calc</a> to see some fantastic arithmetic functions we have. It will be fun all through as you get to know the basic arithmetic operations in action.
        </p>
      </div>
    </div>

    <div id="welcome" v-else>
      <h1 class="welcometext">Welcome to LearnNow Study App</h1>
      <h2 class="hometext1">Time to learn something new now!</h2>
      <p class="hometext">
        You found the best place to learn - and now you're just one sign in (or sign up) away from it!
      </p>
      <div class="ctad">
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserProfileDocument } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";

export default {
  created() {
    auth.onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  mounted() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          console.log(snapShot);
        });
      }
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
    };
  },
};
</script>

<style>
#welcome {
  margin-top: 10px;
}

.welcometext {
  color: rgb(25, 59, 33);
}

.homebord {
  border: 2px solid black;
  margin-bottom: 30px;
  margin-top: 25px;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
}

.colourhome {
  background-color: rgb(183, 213, 223);
}

.alphahome {
  background-color: rgb(222, 223, 183);
}

.enghome {
  background-color: rgb(223, 183, 221);
}

.numberhome {
  background-color: rgb(226, 200, 208);
}

.arithhome {
  background-color: rgb(176, 199, 209);
}

.addhome {
  background-color: rgb(209, 195, 176);
}

.timeshome {
  background-color: rgb(185, 209, 176);
}

.calchome {
  background-color: rgb(176, 199, 209);
}

h1 {
  text-align: center;
  font-weight: bolder;
  color: rgb(22, 21, 21);
}

h2 {
  text-align: center;
  color: rgb(22, 21, 21);
}

.hometext {
  text-align: center;
  color: rgb(16, 54, 52);
  font-size: 60px;
  background-color: rgba(235, 236, 240, 0.212);
}

.hometext1 {
  font-size: 40px;
  margin: 0px;
}

.homewords {
  font-size: 25px;
  line-height: 55px;
}

.ctad {
  margin: auto;
  text-align: center;
}

.ctad a {
  margin: 0px 10px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  border: 1px solid rgb(3, 53, 48);
  border-radius: 3px;
  padding: 10px;
  color: rgb(22, 21, 21);
}

.ctad a:hover,
.cta a:active {
  background-color: rgb(18, 59, 55);
  color: rgb(105, 241, 228);
}

@media only screen and (max-width: 1000px) {
  .hometext {
    text-align: center;
    font-size: 30px;
  }

  @media only screen and (max-width: 890px) {
    .homewords {
      font-size: 20px;
      line-height: 34px;
    }
  }

  @media only screen and (max-width: 400px) {
    .homewords {
      font-size: 20px;
      line-height: 30px;
    }

    .hometext1 {
      font-size: 27px;
    }
  }
}
</style>
