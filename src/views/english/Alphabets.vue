<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
            <h1 class="tophead">Know your Alphabets</h1>
            <div class="homebord">
                <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Capital Letters</h2>
            <div class="d-flex dflexi">

                <!-- <hr> -->
                <h2 @click="load1 = !load1" style="cursor: pointer; margin: 20px; margin-top: 10px;">A
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load1">A for Apple <img width="40" src="./images/apple.jpg" alt=""></u>
                    </transition>
                </h2>
                <br><br>
                
                <!-- <hr>
                <hr> -->
                <h2 @click="load2 = !load2" style="cursor: pointer; margin: 20px; margin-top: 10px;">B
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px; " v-if="!load2">B for Ball <img width="40" src="./images/football.jpg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load3 = !load3" style="cursor: pointer; margin: 20px; margin-top: 10px;">C
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load3">C for Cat <img width="40" src="./images/cat.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load4 = !load4" style="cursor: pointer; margin: 20px; margin-top: 10px;">D
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load4">D for Dog <img width="40" src="./images/dog.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load5 = !load5" style="cursor: pointer; margin: 20px; margin-top: 10px;">E
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load5">E for Egg <img width="40" src="./images/egg.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load6 = !load6" style="cursor: pointer; margin: 20px; margin-top: 10px;">F
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load6">F for Fish <img width="40" src="./images/fish.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load7 = !load7" style="cursor: pointer; margin: 20px; margin-top: 10px;">G
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load7">G for Goat <img width="50" src="./images/goat.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load8 = !load8" style="cursor: pointer; margin: 20px; margin-top: 10px;">H
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load8">H for House <img width="50" src="./images/house.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load9 = !load9" style="cursor: pointer; margin: 20px; margin-top: 10px;">I
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load9">I for Iron <img width="50" src="./images/iron.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load10 = !load10" style="cursor: pointer; margin: 20px; margin-top: 10px;">J
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load10">J for Jug <img width="50" src="./images/jug.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load11 = !load11" style="cursor: pointer; margin: 20px; margin-top: 10px;">K
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load11">K for Kite <img width="50" src="./images/kite.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load12 = !load12" style="cursor: pointer; margin: 20px; margin-top: 10px;">L
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load12">L for Lion <img width="50" src="./images/lion.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load13 = !load13" style="cursor: pointer; margin: 20px; margin-top: 10px;">M
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load13">M for Mat <img width="50" src="./images/mat.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load14 = !load14" style="cursor: pointer; margin: 20px; margin-top: 10px;">N
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load14">N for Nose <img width="50" src="./images/nose.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load15 = !load15" style="cursor: pointer; margin: 20px; margin-top: 10px;">O
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load15">O for Orange <img width="50" src="./images/orange.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load16 = !load16" style="cursor: pointer; margin: 20px; margin-top: 10px;">P
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load16">P for Pencil <img width="50" src="./images/pencil.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load17 = !load17" style="cursor: pointer; margin: 20px; margin-top: 10px;">Q
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load17">Q for Queen <img width="50" src="./images/queen.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load18 = !load18" style="cursor: pointer; margin: 20px; margin-top: 10px;">R
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load18">R for Rat <img width="50" src="./images/rat.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load19 = !load19" style="cursor: pointer; margin: 20px; margin-top: 10px;">S
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load19">S for Ship <img width="50" src="./images/ship.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load20 = !load20" style="cursor: pointer; margin: 20px; margin-top: 10px;">T
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load20">T for Table <img width="50" src="./images/table.png" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load21 = !load21" style="cursor: pointer; margin: 20px; margin-top: 10px;">U
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 20px; height: 0px;" v-if="!load21">U for Umbrella <img width="30" src="./images/umbrella.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load22 = !load22" style="cursor: pointer; margin: 20px; margin-top: 10px;">V
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load22">V for Van <img width="50" src="./images/van.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load23 = !load23" style="cursor: pointer; margin: 20px; margin-top: 10px;">W
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load23">W for Wheel <img width="50" src="./images/wheel.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load24 = !load24" style="cursor: pointer; margin: 20px; margin-top: 10px;">X
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load24"> X for Xylophone <img width="50" src="./images/xylophone.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load25 = !load25" style="cursor: pointer; margin: 20px; margin-top: 10px;">Y
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load25">Y for Yam <img width="50" src="./images/yam.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>

                <h2 @click="load26 = !load26" style="cursor: pointer; margin: 20px; margin-top: 10px;">Z
                    <transition
                        name="slide"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        

                        @before-leave="beforeLeave"
                        @leave="leave"
                        
                        :css="false">
                        <u style="width: 30px; height: 0px;" v-if="!load26">Z for Zebra <img width="50" src="./images/zebra.jpeg" alt=""></u>
                    </transition>
                </h2>
                <br><br>
            </div>
            </div>

            <div class="homebord">
                <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Small Letters</h2>
                <ul class="d-flex list-group">
                    <transition-group name="slide">
                        <li
                            class="dflexi"
                            v-for="alphabet in alphabets1"
                            :key="alphabet"
                            style="cursor: pointer;"><h2>{{ alphabet }}</h2>
                        </li>
                    </transition-group>
                </ul>
            </div>
            <div class="homebord">
                    <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Vowels</h2>
                    <ul class="list-group">
                    <transition-group name="slide">
                    <li
                        class="dflexi"
                        v-for="alphabet in vowels"
                        :key="alphabet"
                        style="cursor: pointer;"><h2>{{ alphabet }}</h2>
                    </li>
                    </transition-group>
                </ul>
            </div>
            <div class="homebord">
                    <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Consonants</h2>
                    <ul class="list-group">
                    <transition-group name="slide">
                    <li
                        class="dflexi"
                        v-for="alphabet in consonants"
                        :key="alphabet"
                        style="cursor: pointer;"><h2>{{ alphabet }}</h2>
                    </li>
                    </transition-group>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                load1: true, load2: true, load3: true, load4: true, load5: true, load6: true, load7: true, load8: true, load9: true, load10: true, load11: true, load12: true, load13: true, load14: true, load15: true, load16: true, load17: true, load18: true, load19: true, load20: true, load21: true, load22: true, load23: true, load24: true, load25: true, load26: true,
                elementWidth: 80,
                alphabets: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                alphabets1: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
                vowels: ["A","E","I","O","U"],
                consonants: ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
            }
        },
        methods: {
            beforeEnter(el) {
                this.elementWidth = 40;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 50);
            },
            beforeLeave(el) {
                this.elementWidth = 50;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 10);
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .tophead {
        margin-top: 10px;
    }

    .dflexi h2{
        /* margin-bottom: 8px; */
        margin-left: 3px; 
        margin-right: 3px; 
        /* margin-top: 18px; */
        margin-bottom: 7px;
        display: flex; 
        flex-wrap: wrap;
        background-color: rgb(169, 247, 234);    
    }

    .dflexi h2:hover,
    .dflexi h2:active {
        background-color: rgb(18,59,55);
        color: rgb(177, 248, 241);
        font-weight: bolder;
        font-size: 33px;
    }

    h1 {
        text-align: center;
    }

    h2 {
        padding: 40px;
        margin-left: 19px; 
        /* margin-right: 8px; */
        /* margin-top: 18px; */
        margin-bottom: 28px;
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

    @media only screen and (max-width: 600px) {
  /* For small phones: */
  .dflexi h2{
        /* margin-bottom: 8px;
        margin-left: 2px; 
        margin-right: 2px;  */
        display: flex; 
        flex-wrap: wrap;      
    }

    .dflexi h2:hover,
    .dflexi h2:active {
        background-color: rgb(18,59,55);
        color: rgb(177, 248, 241);
        font-weight: bold;
    }

    h1 {
        text-align: center;
    }

    h2 {
        padding: 10px;
    }
}
@media only screen and (max-width: 768px) {
  /* For tablets: */
  .dflexi h2{
        /* margin-bottom: 8px; */
        margin-left: 2px; 
        margin-right: 2px; 
        display: inline-block; 
        flex-wrap: wrap;      
    }

    .dflexi h2:hover,
    .dflexi h2:active {
        background-color: rgb(18,59,55);
        color: rgb(177, 248, 241);
        font-weight: bold;
    }

    h1 {
        text-align: center;
    }

    h2 {
        padding: 25px;
    }
}
@media only screen and (max-width: 1023px) {
/* For Desktop */
}
</style>
