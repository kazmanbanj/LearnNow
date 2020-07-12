<template>
  <footer>
    <div class="row flexfoot">
      <div class="col span-1-of-2">
        <ul class="social-links">
          <li>
            <a href="#">
              <ion-icon name="logo-github" class="ion-social-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://m.facebook.com/KazmanBanjoko">
              <ion-icon name="logo-facebook" class="ion-social-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kazmanbanjoko">
              <ion-icon name="logo-twitter" class="ion-social-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/kazeem-banjoko-3a0849189">
              <ion-icon name="logo-linkedin" class="ion-social-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kman_banj">
              <ion-icon name="logo-instagram" class="ion-social-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.yahoo.com/kazmanbanjoko">
              <ion-icon name="logo-yahoo" class="ion-social-yahoo"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <div class="col span-1-of-2">
        <ul class="footer-nav">
          <li class="foottext">Copyright &copy; 2020 by Learnnow. All rights reserved</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.foottext {
  font-size: 16px;
}

footer {
  background-color: #f8f8f8;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  font-size: 80%;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 5px;
}

.footer-nav {
  list-style: none;
  float: right;
}

.social-links {
  list-style: none;
  float: left;
  margin-top: 5px;
}

.footer-nav li,
.social-links li {
  display: inline-block;
  margin-right: 20px;
}

.footer-nav li:last-child,
.social-links li:last-child {
  margin: 0;
}

.social-links li a:link,
.social-links li a:visited {
  text-decoration: none;
  border: 0;
  color: rgb(112, 110, 110);
  transition: color 0.2s;
}

.social-links li a:link,
.social-links li a:visited {
  font-size: 150%;
}

.ion-social-github,
.ion-social-facebook,
.ion-social-twitter,
.ion-social-linkedin,
.ion-social-instagram,
.ion-social-yahoo {
  transition: color 0.2s;
}

.ion-social-github:hover {
  color: #000000;
}

.ion-social-facebook:hover {
  color: rgb(59, 85, 152);
}

.ion-social-twitter:hover {
  color: rgb(0, 172, 237);
}

.ion-social-linkedin:hover {
  color: #0077b7;
}

.ion-social-instagram:hover {
  color: rgb(81, 127, 164);
}

.ion-social-yahoo:hover {
  color: rgb(96, 1, 209);
}

footer p {
  color: rgb(112, 110, 110);
  text-align: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .foottext {
    font-size: 12px;
  }

  .social-links li a:link,
  .social-links li a:visited {
    font-size: 120%;
  }

  .foottext {
    font-size: 11px;
  }

  .flexfoot {
    display: inline-block;
  }

  footer {
    background-color: #f8f8f8;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 6px;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 5px;
  }
}
</style>
