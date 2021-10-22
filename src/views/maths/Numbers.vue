<template>
  <div class="container-fluid">
    <div class="">
      <h1 style="margin-top: 10px; margin-bottom: 30px; text-align: center;">
        Know your numbers
      </h1>
      <div class="firstdiv">
        <br />
        <div class="cta">
          <span><a @click="addItem">Next Number</a></span>
        </div>
        <br />
        <div class="infotxt">
          <h3><u>Info:</u></h3>
          <ul>
            <li class="textbig">
              Click on the "Next Number" button to display the next number.
            </li>
          </ul>
        </div>
        <br />
      </div>
      <div class="seconddiv">
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="dflexi"
              v-for="number in numbers"
              :key="number"
              style="cursor: pointer;"
            >
              <h2>{{ number }}</h2>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
      ],
    };
  },
  methods: {
    addItem() {
      const pos = Math.floor(this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.textbig {
  font-size: 20px;
  list-style: none;
}

.cta {
  width: 300px;
  text-align: center;
}

.cta span a {
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  border: 1px solid rgb(3, 53, 48);
  border-radius: 3px;
  width: 150px;
  padding: 8px;
  font-size: 15px;
  color: rgb(204, 248, 244);
}

.cta span a:hover,
.cta span a:active {
  background-color: rgb(152, 255, 245);
}

.dflexi h2 {
  margin-left: 2px;
  margin-right: 6px;
  padding: 35px;
  margin-bottom: 7px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(169, 247, 234);
}

.dflexi h2:hover,
.dflexi h2:active {
  background-color: rgb(18, 59, 55);
  color: rgb(177, 248, 241);
  font-weight: bolder;
  font-size: 30px;
}

.coverdiv {
  display: flex;
}

.firstdiv {
  width: 20%;
  height: 450px;
  position: fixed;
}

.seconddiv {
  width: 80%;
  margin-left: 27%;
  margin-bottom: 400px;
}

.dflexi {
  margin-bottom: 25px;
  margin-left: 20px;
  display: inline-block;
  flex-wrap: wrap;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
    transition: translateY(20px);
  }
  to {
    transform: translateY(0);
    transition: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    transition: translateY(0);
  }
  to {
    transform: translateY(20px);
    transition: translateY(20px);
  }
}

@media only screen and (max-width: 1000px) {
  /* For tablets: */
  * {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 40px;
  }

  .cta {
    width: 10%;
    margin-left: -15px;
    margin-top: -30px;
    margin-bottom: -40px;
  }

  .cta span a {
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid rgb(3, 53, 48);
    border-radius: 3px;
    width: 100px;
    padding: 6px;
    color: rgb(3, 53, 48);
  }

  .cta span a:hover,
  .cta span a:active {
    background-color: rgb(204, 255, 250);
    color: rgb(206, 235, 231);
  }

  .coverdiv {
    display: flex;
  }

  .firstdiv {
    width: 20%;
    margin-top: 10px;
    height: 450px;
    position: fixed;
  }

  .seconddiv {
    width: 80%;
    margin-left: 37%;
  }

  .dflexi {
    margin-bottom: 11px;
    display: inline-block;
    flex-wrap: wrap;
    padding: 0px 7px;
  }

  .dflexi h2 {
    font-size: 25px;
  }

  h1 {
    font-size: 30px;
  }

  .infotxt {
    color: rgb(15, 36, 15);
    margin-top: 20px;
  }

  .infotxt h3 u {
    font-size: 19px;
  }

  .textbig {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>
