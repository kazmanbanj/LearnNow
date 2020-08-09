<template>
  <div class="container">
    <div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">
      <h1>Contact LearnNow</h1>
    </div>
    <div class="contact-box">
      <div class="contact-left">
        <h3>
          <u>Connect With Us</u>
        </h3>
        <p class="connecttext">
          We are here to help and answer any question you might have.
          <br />We look forward to hearing from you.
        </p>
      </div>
      <div class="contact-right">
        <h3>
          <u>Reach Us</u>
        </h3>
        <table>
          <tr>
            <td>Email:</td>
            <td>kazbanj@yahoo.com</td>
          </tr>
          <tr id="phone">
            <td>Phone:</td>
            <td>+2348084833968, +2348163282411</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>
              Surulere,
              <br />Lagos.
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-size: 14px;
}

.contact-box {
  background-color: #fff;
  display: flex;
  margin: 30px 0 30px 0;
}

.contact-left {
  flex-basis: 50%;
  padding: 40px 60px;
}

.contact-right {
  flex-basis: 50%;
  padding: 40px;
  background: #123b37;
  color: white;
}

h1 {
  margin-bottom: 10px;
  font-size: 40px;
}

.container p {
  margin-bottom: 40px;
}

.contact-left h3 {
  font-weight: 600;
  margin-bottom: 20px;
}

.contact-left p {
  font-size: 20px;
  line-height: 40px;
}

.contact-right h3 {
  font-weight: 600;
  margin-bottom: 20px;
}

tr td:first-child {
  padding-right: 20px;
}

tr td {
  padding-top: 10px;
  font-size: 17px;
}

h3 u {
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .contact-box {
    display: block;
  }

  .contact-right {
    width: 100%;
  }

  .contact-left {
    width: 100%;
    margin-top: 10px;
  }

  h3 u {
    font-size: 15px;
    margin-bottom: 5px;
  }

  tr td {
    padding: -8px;
    font-size: 14px;
    margin-left: 3px;
  }

  .contact-left p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 4px;
  }
}
</style>
