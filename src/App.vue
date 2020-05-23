<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="adjustroute">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
// import { db } from 'firebase';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>
  body {
    padding: 20px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url('https://cdn9.dissolve.com/p/D538_225_049/D538_225_049_0004_600.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    background-attachment: fixed;
    color: rgb(37, 32, 32);
  }

  .adjustroute {
    margin-bottom: 40px;
  }
</style>
