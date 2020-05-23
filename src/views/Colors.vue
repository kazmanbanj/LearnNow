<template>
<div id="app">
    <!-- Header starts -->
    <div class="nav-header">
        <h1 style="text-align: center; margin-top: 15px">Know your colours with ease.</h1>
    </div>
    <!-- Header ends -->

    <!-- Landingpage starts -->
    <div class="landpagebg">
        <div class="colorflex">
            <div class="card red">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Red</h4>
                    <h4 class="card-title" v-show="show"></h4>					
                </div>
            </div>
            <div class="card green">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Green</h4>
                    <h4 class="card-title" v-show="show"></h4>					
                </div>
            </div>
            <div class="card blue">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Blue</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
            <div class="card yellow">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Yellow</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
            <div class="card brown">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Brown</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
            <div class="card pink">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Pink</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
            <div class="card orange">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Orange</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
            <div class="card purple">
                <div class="card-body">
                    <h4 class="card-title" v-if="show">Colour Purple</h4>
                    <h4 class="card-title" v-show="show"></h4>
                </div>
            </div>
        </div>

        <div class="showbtn">
            <h3 class="card-text cardtext" v-if="show">Info: Click on the button below to hide the colour name.</h3>
            <h3 class="card-text cardtext" v-else>Info: Click on the button below to show the colour name.</h3>
            <button class="btn btn-primary adjbtn" @click="show = !show" v-if="show">Hide name</button>
            <button class="btn btn-primary adjbtn" @click="show = !show" v-else>Show name</button>
        </div>

        <div>
            <p style="font-size: 20px"><b>Note</b>: <i>With this, students should be able to know the name of the colours when their names are hidden. Students are required to know each colour's name before clicking on the hide button so that they can be able to pronounce the colour names offhand.</i></p>
        </div>
    </div>
    <!-- Landingpage starts -->

    <!-- Color changer starts here -->
    <div class="colorchgbg">
        <div class="colorchgctrl">
            <div class="demo" @click="attachRed = !attachRed" :class="{red: attachRed}"></div>
            <div class="demo" @click="attachGreen = !attachGreen" :class="{green: attachGreen}"></div>
            <div class="demo" @click="attachBlue = !attachBlue" :class="{blue: attachBlue}"></div>
            <div class="demo" @click="attachYellow = !attachYellow" :class="{yellow: attachYellow}"></div>
            <div class="demo" @click="attachBrown = !attachBrown" :class="{brown: attachBrown}"></div>
            <div class="demo" @click="attachPink = !attachPink" :class="{pink: attachPink}"></div>
            <div class="demo" @click="attachOrange = !attachOrange" :class="{orange: attachOrange}"></div>
            <div class="demo" @click="attachPurple = !attachPurple" :class="{purple: attachPurple}"></div>
        </div>
        <div class="colorchginfo">
            <h3 class="card-text cardtext">Info: Click on any of the boxes above to switch the colour from gray to another colour and vice versa.</h3>
        </div>
        <div style="margin-top: 15px">
            <p style="font-size: 20px"><b>Note</b>: <i>Under this, students should be able to differentiate between colours after changing the colour from gray to whatever colour displays.</i></p>
        </div>
    </div>
    <!-- Color changer ends here -->	

    <!-- color display starts -->
    <div class="colorfoot">			
        <div class="adjfoot">
            <input class="inputtri" type="text" v-model="color">
            <div class="triangle">
                <div class="triangle-up" :style="myStyle"></div>
            </div>
        </div>
        <h3 class="card-text cardtext">Info: Input any colour name in the rectangular box above to display the colour in the triangle above. E.g. Green</h3>
        <div style="margin-top: 15px">
            <p style="font-size: 20px"><b>Note</b>: <i>Here, students should be able to know the different kinds of colours we have just by inputting any name of a colour in the box above (e.g. green) so as to display the colour in the triangle.</i></p>
        </div>
    </div>
    <!-- color display ends -->
    
</div>
</template>

<script>
export default {
        // el: '#app',
        data() { return {
            show: true,
            attachRed: false,
            attachGreen: false,
            attachBlue: false,
            attachYellow: false,
            attachBrown: false,
            attachPink: false,
            attachOrange: false,
            attachPurple: false,
            color: 'Green',
            }
        },
        computed: {
            myStyle: function() {
                return {
                    borderBottomColor: this.color,
                }
            }
        },
    };
</script>

<style>
    .landpagebg {
        border: 2px solid black;
        margin-bottom: 30px;
        margin-top: 25px;
        border-radius: 15px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 15px;
    }

    .demo {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 18px;
        cursor: pointer;
        width: 14rem;
        height: 12rem;  
    }

    .red {background-color: red;}
    .green {background-color: green;}
    .blue {background-color: blue;}
    .yellow {background-color: yellow;}
    .brown {background-color: brown;}
    .pink {background-color: pink;}
    .orange {background-color: orange;}
    .purple {background-color: purple;}

    .demo2 {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 18px;
        border: 2px solid black;
    }

    .colorchgctrl, .colorflex {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .card {
        margin-left: 40px;
        margin-top: 20px;
        padding: 15px;
        width: 14rem; 
        height: 12rem;
    }

    .card-title {padding-bottom: 5px;}

    .colorchginfo, .showbtn {
        text-align: center;
        margin-top: 35px;
    }

    .adjbtn {
        font-size: large;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .colorchgbg {
        /* padding: 20px; */
        border: 2px solid black;
    margin-bottom: 30px;
    margin-top: 25px;
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    }
    
    .triangle {
        border: 1px solid black;
        width: 305px;
        border-radius: 5px;
        margin-right: 4px;
    }

    .triangle-up {
        width: 0px;
        height: 0px;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
        border-bottom: 300px solid transparent;
    }

    .triangle-up:after {
        position: absolute;
        left: 350%;
        margin-left: -20%;
    }

    .adjfoot {
        display: flex;
        flex-wrap: wrap;
    }

    .inputtri {
        height: 30px;
        margin: auto 150px auto 200px;
    }

    .card-text {
        text-align: center;
    }

    .colorfoot {
    border: 2px solid black;
    margin-bottom: 30px;
    margin-top: 25px;
    border-radius: 15px;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    }

@media only screen and (max-width: 768px) {
  /* For tablets: */
  .demo {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: flex;
        flex-wrap: wrap;
        /* margin: 18px; */
        cursor: pointer;
        width: 9rem !important;
        height: 10rem !important; 
    }

    h4 {
        font-size: 16px;
    }

    .red {background-color: red;}
    .green {background-color: green;}
    .blue {background-color: blue;}
    .yellow {background-color: yellow;}
    .brown {background-color: brown;}
    .pink {background-color: pink;}
    .orange {background-color: orange;}
    .purple {background-color: purple;}

    .demo2 {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 18px;
        border: 2px solid black;
    }

    .colorchgctrl, .colorflex {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .card {
        margin-left: 5px;
        margin-top: 5px;
        padding: 10px;
        width: 10rem !important;
        height: 10rem !important;
    }

    .card-title {padding-bottom: 5px;}

    .colorchginfo, .showbtn {
        text-align: center;
        margin-top: 35px;
    }

    .adjbtn {
        font-size: large;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .colorchgbg {
        padding: 20px;
    }

    .adjfoot {
        /* display: inline-block; */
        margin-right: 8px;
    }

    .triangle {
        border: 1px solid black;
        width: 10px;
    }

    .triangle-up {
        width: 0px;
        height: 0px;
        border-left: 120px solid transparent;
        border-right: 120px solid transparent;
        border-bottom: 300px solid transparent;
        
    }

    .triangle-up:after {
        position: absolute;
        left: 175%;
        margin-left: 100%;
    }

    .inputtri {
        margin-bottom: 25px;
    }

    .card-text {
        text-align: center;
    }

    .colorfoot {
        padding-right: 7px;
        border: 2px solid black;
    }
}

@media only screen and (max-width: 1023px) {
/* For Big Tablets */
    .demo {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 18px;
        cursor: pointer;
        width: 14rem;
        height: 12rem; 
    }

    .red {background-color: red;}
    .green {background-color: green;}
    .blue {background-color: blue;}
    .yellow {background-color: yellow;}
    .brown {background-color: brown;}
    .pink {background-color: pink;}
    .orange {background-color: orange;}
    .purple {background-color: purple;}

    .demo2 {
        width: 100px;
        height: 100px;
        background-color: grey;
        display: inline-block;
        margin: 18px;
        border: 2px solid black;
    }

    .colorchgctrl, .colorflex {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .card {
        margin-left: 40px;
        margin-top: 20px;
        padding: 15px;
        width: 14rem; height: 14rem;
    }

    .card-title {padding-bottom: 5px;}

    .colorchginfo, .showbtn {
        text-align: center;
        margin-top: 35px;
    }

    .adjbtn {
        font-size: large;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .colorchgbg {
        padding: 15px;
    }

    .triangle {
        border: 1px solid black;
        width: 265px;
        margin-bottom: 13px;
    }

    .triangle-up {
        width: 0px;
        height: 0px;
        border-left: 130px solid transparent;
        border-right: 130px solid transparent;
        border-bottom: 300px solid transparent;
    }

    .triangle-up:after {
        position: absolute;
        left: 350%;
        margin-left: -20%;
    }

    .inputtri {
        margin-left: 50px;
        margin-bottom: 25px;
    }

    .cardtext {
        text-align: center;
        font-size: 20px;
    }
}

@media only screen and (max-width: 1200px) {
/* For Desktop */
}
</style>
