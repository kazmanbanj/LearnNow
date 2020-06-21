<template>
    <div class="about">
      <h1 class="abouthead">About Us</h1>
      <p class="abouttext"><strong>LearnNow</strong> is a self study app which lets you self study at any place, anywhere or anytime at your convenience. It is basically an app for students in nursery, primary and secondary schools (even useful for students in universities and polytechnics). This app is truly a tool for discovering unique learning skills and has a blend of different contents as far as education is concerned.<br>
      Our users can count on us to expect the unexpected; we are fun, elegant, know how to add technology to everyday learning and also add spice to your learning ability.<br>
      Browse through our app now and see all that we have to offer.<strong> LearnNow</strong> app is not just a learning app but a special one which will blow your mind away with its features.</p>
    </div>
</template>

<script>

export default {
}
</script>

<style>

  .abouthead {    
    font-weight: 700;
    font-size: 30px;
    color: rgb(22, 21, 21);
    text-align: center;
    text-decoration: underline;
  }

  p .abouthead {
    margin-bottom: 8px !important;
  }

  .about {
    margin-top: 15px;
  }

  .abouttext {
    font-size: 25px;
    line-height: 65px;
    color: rgb(22, 21, 21);
    padding: 5px;
  }

  @media only screen and (max-width: 768px) {
    .abouttext {
    font-size:20px;
    line-height: 30px;
  }
  }
</style>
