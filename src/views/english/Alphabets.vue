<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
            <h1 class="tophead">Know your Alphabets</h1>
            <div class="homebord">
                <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Capital Letters</h2>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="dflexi"
                            v-for="alphabet in alphabets"
                            :key="alphabet"
                            style="cursor: pointer"><h2>{{ alphabet }}</h2>
                        </li>
                    </transition-group>
                </ul>
            </div>
            <div class="homebord">
                <h2 style="text-align:center; text-decoration:underline; font-weight:bolder; margin-top: 0px; padding: 15px">Small Letters</h2>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="dflexi"
                            v-for="alphabet in alphabets1"
                            :key="alphabet"
                            style="cursor: pointer"><h2>{{ alphabet }}</h2>
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
                        style="cursor: pointer"><h2>{{ alphabet }}</h2>
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
                        style="cursor: pointer"><h2>{{ alphabet }}</h2>
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
                alphabets: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                alphabets1: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
                vowels: ["A","E","I","O","U"],
                consonants: ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
            }
        },
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
        padding: 25px;
    }
}
@media only screen and (max-width: 1023px) {
/* For Desktop */
}
</style>
