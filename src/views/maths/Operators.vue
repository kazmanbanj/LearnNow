<template>
  <div id="app">
    <div class="arithtitle">
      <h1 style="margin-top: 10px; font-size: 35px;">
        Know your Arithmetic Operators
      </h1>
    </div>
    <div class="addclass">
      <h2 class="addname" style="padding: 20px;">Addition(+):</h2>
      <p>
        This lets you sum up numbers together i.e. it adds numbers together.
        e.g.
      </p>
      <p>2 + 3 = 5</p>
      <p>9 + 89 = 98</p>
      <p>8 + 9 = 17</p>
      <p>100 + 34 = 134</p>
      <b>Now, input any number in the spaces below to add them together</b>
      <div class="addinput" :class="{ invalid: $v.number1.$error }">
        <input
          type="number"
          name="number1"
          v-model="number1"
          @input="$v.number1.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">+</p>
        &nbsp;
        <input
          type="number"
          name="number2"
          v-model="number2"
          @input="$v.number2.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">=</p>
        &nbsp;
        <p class="result">{{ parseInt(number1) + parseInt(number2) }}</p>
        <!-- <p v-else>This field must not be empty</p> -->
      </div>
      <p class="num1" v-if="$v.number1.$invalid || $v.number2.$invalid">
        Note: The number length must be less than or equal to 16 digits and must
        be valid
      </p>
    </div>
    <div class="minusclass">
      <h2 class="minusname" style="padding: 20px;">Subtraction(-):</h2>
      <p>
        This lets you subtract a number from another number to get a result e.g.
      </p>
      <p>40 - 15 = 25</p>
      <p>100 - 39 = 61</p>
      <p>87 - 80 = 7</p>
      <p>230 - 67 = 163</p>
      <b
        >Now, input any number in the spaces below to subtract the second digit
        from the first digit</b
      >
      <div class="addinput" :class="{ invalid: $v.number11.$error }">
        <input
          type="number"
          name="number11"
          v-model="number11"
          @input="$v.number11.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">-</p>
        &nbsp;
        <input
          type="number"
          name="number22"
          v-model="number22"
          @input="$v.number22.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">=</p>
        &nbsp;
        <p class="result">{{ parseInt(number11) - parseInt(number22) }}</p>
      </div>
      <p class="num1" v-if="$v.number11.$invalid || $v.number22.$invalid">
        Note: The number length must be less than or equal to 16 digits and must
        be valid
      </p>
    </div>
    <div class="timesclass">
      <h2 class="timesname" style="padding: 20px;">Multiplication(x):</h2>
      <p>This lets you multiply numbers together e.g.</p>
      <p>6 x 5 = 30</p>
      <p>100 x 7 = 700</p>
      <p>8 x 7 = 56</p>
      <p>9 x 8 = 72</p>
      <b
        >Now, input any number in the spaces below to multiply the numbers
        together</b
      >
      <div class="addinput" :class="{ invalid: $v.number111.$error }">
        <input
          type="number"
          name="number111"
          v-model="number111"
          @input="$v.number111.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">x</p>
        &nbsp;
        <input
          type="number"
          name="number222"
          v-model="number222"
          @input="$v.number222.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">=</p>
        &nbsp;
        <p class="result">{{ parseInt(number111) * parseInt(number222) }}</p>
      </div>
      <p class="num1" v-if="$v.number111.$invalid || $v.number222.$invalid">
        Note: The number length must be less than or equal to 16 digits and must
        be valid
      </p>
    </div>
    <div class="divideclass">
      <h2 class="dividename" style="padding: 20px;">Division(÷):</h2>
      <p>This lets you divide a number with another number e.g.</p>
      <p>120 ÷ 5 = 24</p>
      <p>9 ÷ 3 = 3</p>
      <p>72 ÷ 9 = 8</p>
      <p>36 ÷ 6 = 6</p>
      <b
        >Now, input any number in the spaces below to divide the first number by
        the second number</b
      >
      <div class="addinput" :class="{ invalid: $v.number1111.$error }">
        <input
          type="number"
          name="number1111"
          v-model="number1111"
          @input="$v.number1111.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">÷</p>
        &nbsp;
        <input
          type="number"
          name="number2222"
          v-model="number2222"
          @input="$v.number2222.$touch()"
          placeholder="Input number"
          class="input"
        />
        &nbsp;
        <p class="result">=</p>
        &nbsp;
        <p class="result">{{ parseInt(number1111) / parseInt(number2222) }}</p>
      </div>
      <p class="num1" v-if="$v.number1111.$invalid || $v.number2222.$invalid">
        Note: The number length must be less than or equal to 16 digits and must
        be valid
      </p>
    </div>
  </div>
</template>

<script src="vue.js"></script>
<script>
import {
  required,
  maxLength,
  minLength,
  minValue,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      number1: 0,
      number2: 0,

      number11: 0,
      number22: 0,

      number111: 0,
      number222: 0,

      number1111: 0,
      number2222: 1,
      error: "",
    };
  },
  methods: {
    updateInput() {
      this.$emit("event");
    },
  },
  validations: {
    number1: {
      required,
      maxLen: maxLength(16),
    },
    number2: {
      required,
      maxLen: maxLength(16),
    },
    number11: {
      required,
      maxLen: maxLength(16),
    },
    number22: {
      required,
      maxLen: maxLength(16),
    },
    number111: {
      required,
      maxLen: maxLength(16),
    },
    number222: {
      required,
      maxLen: maxLength(16),
    },
    number1111: {
      required,
      maxLen: maxLength(16),
    },
    number2222: {
      required,
      maxLen: maxLength(16),
    },
  },
};
</script>

<style scoped>
* {
  font-size: 25px;
}

.arithtitle {
  text-align: center;
}

.addclass {
  margin-bottom: 40px;
  padding-bottom: 30px;
  line-height: 40px;
  padding-left: 30px;
  border: 2px dashed black;
}

.addbtn {
  background-color: rgb(133, 133, 224);
  cursor: pointer;
  width: 35px;
}

.addname {
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 0px;
  font-size: 30px;
}

.addinput {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.minusclass {
  margin-bottom: 40px;
  padding-bottom: 30px;
  line-height: 50px;
  padding-left: 30px;
  border: 2px dashed black;
}

.minusbtn {
  background-color: rgb(133, 133, 224);
  cursor: pointer;
  width: 35px;
}

.minusname {
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 0px;
}

.timesclass {
  margin-bottom: 40px;
  padding-bottom: 30px;
  line-height: 50px;
  padding-left: 30px;
  border: 2px dashed black;
}

.timesbtn {
  background-color: rgb(133, 133, 224);
  cursor: pointer;
  width: 35px;
}

.timesname {
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 0px;
}

.divideclass {
  margin-bottom: 40px;
  padding-bottom: 30px;
  line-height: 50px;
  padding-left: 30px;
  border: 2px dashed black;
}

.dividebtn {
  background-color: rgb(133, 133, 224);
  cursor: pointer;
  width: 35px;
}

.dividename {
  font-style: italic;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 0px;
}

.result {
  margin-top: 6px;
  margin-left: 10px;
  height: 3vh;
  padding-right: 10px;
}

input {
  margin: 10px 10px;
}

/* .input {
      width: 270px;
    } */

.addinput input,
.num1 {
  font: inherit;
  /* width: 100%; */
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.addinput input:focus {
  outline: none;
  border: 1px solid rgb(3, 53, 48);
  background-color: #eee;
}

.addinput.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.num1 {
  border: 1px solid red;
  background-color: #ffc9aa;
  color: red;
}

@media only screen and (max-width: 768px) {
  input {
    margin: 10px 10px;
  }

  .input {
    width: 40px;
  }

  .addinput input,
  .num1 {
    font: inherit;
    width: 80%;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }
}
</style>
