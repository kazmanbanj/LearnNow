<template>
  <div>
    <div class="english">
      <h1 class="tophead">Know Your English Words</h1>
      <h3 class="text">
        Info: Click on the button below to display an english word and try to spell them offhand.
      </h3>
      <div class="cta">
        <span><a @click="gentext">Generate word</a></span>
      </div>
      <p id="press" style="word-wrap:break-word;"></p>
    </div>

    <div class="english2">
      <h1 class="tophead">Know Your Advanced English Words</h1>
      <h3 class="text">
        Info: Click on the button below to display an english word and try to spell them offhand.
      </h3>
      <div class="cta">
        <span><a @click="advancedGentext">Generate word</a></span>
      </div>
      <p id="press2" style="word-wrap:break-word;"></p>
    </div>
  </div>
</template>

<script>
import advancedEnglishWords from './AdvancedEngwords.js';

export default {
  methods: {
    gentext() {
      var randomWords = require('random-words');
      var para = document.getElementById("press");
      para.innerHTML = randomWords();
    },

    advancedGentext() {
      var advancedWords = advancedEnglishWords;
      var para2 = document.getElementById("press2");
      para2.innerHTML = advancedWords[Math.floor(Math.random() * advancedWords.length)];
    },
  },
};
</script>

<style scoped>
.english {
  height: 600px;
  border: 2px dashed black;
  border-radius: 10px;
  margin: 15px 0px 50px 0px;
  padding: 4px;
}

.english2 {
  height: 600px;
  border: 2px dashed black;
  border-radius: 10px;
  margin: 15px 0px 0px 0px;
  padding: 4px;
}

.tophead {
  margin-top: 30px;
}

.text {
  margin-top: 25px;
}

p {
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 90px;
  text-transform: uppercase;
  color: rgb(3, 53, 48);
  text-align: center;
}

p#press2 {
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 70px;
  text-transform: uppercase;
  color: rgb(3, 53, 48);
  text-align: center;
}

h1,
h3 {
  text-align: center;
}

.btneng {
  text-align: center;
}

.btneng p {
  color: rgb(20, 20, 14);
  padding: 15px;
  font-size: 20px;
}

.cta {
  width: auto;
  margin: auto;
  text-align: center;
}

.cta span a {
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  border: 2px solid rgb(3, 53, 48);
  border-radius: 6px;
  width: 200px;
  padding: 8px;
  box-sizing: border-box;
  color: rgb(3, 53, 48);
  cursor: pointer;
  margin-top: 25px;
}

.cta span a:hover,
.cta span a:active {
  background-color: rgb(18, 59, 55);
  color: rgb(216, 252, 247);
}

@media only screen and (max-width: 768px) {
  /* For tablets: */
  p {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 50px;
    text-transform: uppercase;
    color: rgb(3, 53, 48);
    text-align: center;
  }

  p#press2 {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 40px;
    text-transform: uppercase;
    color: rgb(3, 53, 48);
    text-align: center;
  }

  .cta span a {
    font-weight: bold;
    margin-top: 10px;
    text-decoration: none;
    display: inline-block;
    border: 2px solid rgb(3, 53, 48);
    border-radius: 6px;
    font-size: 20px;
    width: 200px;
    padding: 8px;
    box-sizing: border-box;
    color: rgb(3, 53, 48);
  }
}
</style>
