<template>
    <div class="container bord">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-sm-offset-6 col-md-6 col-md-offset-6">
                <h1 class="text-center" style="margin-top: 10px">Add and Minus Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-sm-offset-6 col-md-6 col-md-offset-6">
              <transition name="flip" mode="out-in">
                <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from '../views/maths/addmin/Add&Minus.vue';
    import Answer from '../views/maths/addmin/AddAnswer.vue';
    import swal from 'sweetalert';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  swal('Wrong, try again!', {
                    closeOnClickOutside: false,
                  });
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer,
        }
    }
</script>

<style>
    .bord {
        height: 65vh;
    }

    /* .flip-enter {
        transform: rotateY(0deg);
    } */

    .flip-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }

    /* .flip-leave {
        transform: rotateY(0deg);
    } */

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>