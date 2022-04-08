<template>
  <div>
    <div class="english">
      <h1 class="tophead">Know Your English Words</h1>
      <h3>
        Info: Click on the button below to display an english word and try to spell them offhand.
      </h3>
      <div class="cta">
        <span><a @click="gentext">Generate word</a></span>
      </div>
      <p id="press" style="word-wrap:break-word;"></p>
    </div>

    <div class="english2">
      <h1 class="tophead">Know Your Advanced English Words</h1>
      <h4>
        Info: This section contains advanced english words. Click on the button below to display an advanced english word and try to spell them offhand.
      </h4>
      <div class="cta">
        <span><a @click="advancedGentext">Generate word</a></span>
      </div>
      <p id="press2" style="word-wrap:break-word;"></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    gentext() {
      var randomWords = require('random-words');
      var para = document.getElementById("press");
      para.innerHTML = randomWords();
    },

    async advancedGentext() {
      const response = await axios ({
        url: process.env.VUE_APP_advancedEnglishWordsUrl,
        method: "get"
      });
        
      const advancedWords = response.data.split(',');
      var para2 = document.getElementById("press2");
      var advWords = advancedWords[Math.floor(Math.random() * advancedWords.length)];
      para2.innerHTML = advWords.replace(/['"]+/g, '');
    }
  },
};

// async function getQuote() {
//     loading();
//     const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
//     const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//     try {
//         const response = await fetch(proxyUrl + apiUrl);
//         const data = await response.json();
//         if (data.quoteAuthor === '') {
//             authorText.innerText = 'Unknown';
//         } else {
//             authorText.innerText = data.quoteAuthor;
//         }
//         if (data.quoteText.length > 120) {
//             quoteText.classList.add('long-quote');
//         } else {
//             quoteText.classList.remove('long-quote');
//         }
//         quoteText.innerText = data.quoteText;
//         complete();
//     } catch (error) {
//         getQuote();
//     }
// }
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
  margin: 0px 0px 0px 0px;
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

h4 {
  padding: 15px;
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
