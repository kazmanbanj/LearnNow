<template>
    <div class="container">
        <div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">
            <h1>Contact LearnNow</h1>
        </div>
        <div class="contact-box">
            <div class="contact-left">                
                <h3 style="text-align: center;"><u>Connect With Us</u></h3>
                <p>We are here to help and answer any question you might have.<br> We look forward to hearing from you.</p>
            </div>
            <div class="contact-right">
                <h3 style="text-align: center;"><u>Reach Us</u></h3>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td>banjoko10@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>+2348084833968</td>
                        <td>+2348163282411</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>No 27, Hassan Idowu Street,<br>
                            Aguda,<br>
                            Surulere,<br>
                            Lagos.</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

body {
    background-color: #55ffe5;
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
    background: #123B37;
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
    /* color: #1c00b5; */
    font-weight: 600;
    margin-bottom: 30px;
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
    padding-top: 20px;
    font-size: 17px;
}

@media only screen and (max-width: 768px) {

.contact-box {
    background-color: #fff;
    display: inline-block;
    /* margin: 30px 0 30px 0; */
}

.contact-right {
    /* flex-basis: 50%; */
    /* padding: 40px; */
    background: #123B37;
    color: white;
}

h1 {
    margin-bottom: 10px;
    font-size: 30px;
}

.container p {
    margin-bottom: 40px;
}

.contact-left h3 {
    /* color: #1c00b5; */
    font-weight: 600;
    margin-bottom: 30px;
}

.contact-left p {
    font-size: 16px;
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
    padding-top: 20px;
    font-size: 15px;
}
}
</style>