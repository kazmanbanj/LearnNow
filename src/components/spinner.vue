<template>
    <div class="spin" v-if="show">
        <div class="ring">
            <div>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props: ["start"]
        name: 'spin',
        data() {
            return {
                show: true
            }
        },
        mounted() {
            this.showToggle()
        },
        methods: {
            showToggle() {
                setTimeout(() => {
                    this.show = false
                }, 1000)
            }
        }
    }
</script>

<style>
.spin {
    z-index: -10;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.151); */
    /* position: fixed; */
}

.ring {
    /* position: absolute; */
    top: 50%;
    left: 50%;
    margin: 0 auto;
    height: 100%;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #103634;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #103634 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>