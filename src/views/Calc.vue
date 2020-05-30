<template>
    <div>
        <h1 class="topcalc">Calculator</h1>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 calculator">
                <div class="display">{{ current || '0'}}</div>
                <div @click="clear" class="btn">C</div>
                <div @click="sign" class="btn">+/-</div>
                <div @click="percent" class="btn">%</div>
                <div @click="divide" class="btn operator">÷</div>
                <div @click="append('7')" class="btn">7</div>
                <div @click="append('8')" class="btn">8</div>
                <div @click="append('9')" class="btn">9</div>
                <div @click="times" class="btn operator">x</div>
                <div @click="append('4')" class="btn">4</div>
                <div @click="append('5')" class="btn">5</div>
                <div @click="append('6')" class="btn">6</div>
                <div @click="minus" class="btn operator">-</div>
                <div @click="append('1')" class="btn">1</div>
                <div @click="append('2')" class="btn">2</div>
                <div @click="append('3')" class="btn">3</div>
                <div @click="add" class="btn operator">+</div>
                <div @click="append('0')" class="btn zero">0</div>
                <div @click="dot" class="btn">.</div>
                <div @click="equal" class="btn operator">=</div>
            </div>
        </div>
        <div class="calcbord">
            <h2 style="margin-bottom: 0px;">LearnNow Caculator</h2>
            <p style="font-size: 20px; text-align:left;">This basic calculator will be useful for users who are first time user of a calculator. This will enable the users to be able to know how to perform arithmetic operations on numbers. Users should also take note of the following information:</p>
            <ul>
                <li style="font-size: 20px; text-align:left">The "C" button above stands for clear i.e. to clear the display screen.</li>
                <li style="font-size: 20px; text-align:left">The "+/-" button above represents plus or minus sign. It is useful when you want to obtain either a negative number or a positive number. You can derive it by clicking on any number, then click the "+/-" button.</li>
                <li style="font-size: 20px; text-align:left">The "%" button represents the percentage sign. Click on any number, then click on the "%" button to display the percentage of the number.</li>
                <li style="font-size: 20px; text-align:left">The "÷" button represents the division sign. It is used to divide a number by another number.</li>
                <li style="font-size: 20px; text-align:left">The "x" button represents the multiplication sign. It is used to divide a number by another number.</li>
                <li style="font-size: 20px; text-align:left">The "-" button represents the minus sign. It is used to minus a number from another number.</li>
                <li style="font-size: 20px; text-align:left">The "+" button represents the addition sign. It is used to add two or more numbers together.</li>
                <li style="font-size: 20px; text-align:left">The "=" button represents the equals sign. It is used to get the result of any equation performed.</li>
                <li style="font-size: 20px; text-align:left">The "." button represents the decimal point. It is used to seperate the whole number part from the fractional part of a number.</li>
                <li style="font-size: 20px; text-align:left">The "0" button represents the number "Zero".</li>
                <li style="font-size: 20px; text-align:left">The "1" button represents the number "One".</li>
                <li style="font-size: 20px; text-align:left">The "2" button represents the number "Two".</li>
                <li style="font-size: 20px; text-align:left">The "3" button represents the number "Three".</li>
                <li style="font-size: 20px; text-align:left">The "4" button represents the number "Four".</li>
                <li style="font-size: 20px; text-align:left">The "5" button represents the number "Five".</li>
                <li style="font-size: 20px; text-align:left">The "6" button represents the number "Six".</li>
                <li style="font-size: 20px; text-align:left">The "7" button represents the number "Seven".</li>
                <li style="font-size: 20px; text-align:left">The "8" button represents the number "Eight".</li>
                <li style="font-size: 20px; text-align:left">The "9" button represents the number "Nine".</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                previous: null,
                current: '',
                operator: null,
                operatorClicked: false
            }
        },
        methods: {
            clear() {
                this.current = '';
            },
            sign() {
                this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
            },
            percent() {
                this.current = `${parseFloat(this.current) / 100}`
            },
            append(number) {
                if (this.operatorClicked) {
                    this.current = '';
                    this.operatorClicked = false;
                }
                this.current = `${this.current}${number}`
            },
            dot() {
                if (this.current.indexOf('.') === -1) {
                    this.append('.');
                }
            },
            setPrevious() {
                this.previous = this.current;
                this.operatorClicked = true;
            },
            divide() {
                this.operator = (a, b) => b / a;
                this.setPrevious();
            },
            times() {
                this.operator = (a, b) => a * b;
                this.setPrevious();
            },
            minus() {
                this.operator = (a, b) => b - a;
                this.setPrevious();
            },
            add() {
                this.operator = (a, b) => a + b;
                this.setPrevious();
            },
            equal() {
                this.current = `${this.operator(
                    parseFloat(this.current),
                    parseFloat(this.previous)
                )}`;
                this.previous = null;
            }
        }
    }
</script>

<style scoped>
* {
    text-align: center;
    font-size: 40px;
}

.topcalc {
    margin-top: 18px;
}

.calculator {
    /* width: 90%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
}

.display {
    grid-column: 1 / 5;
    background-color: #333;
    color: #fff;
    /* display: flex; */
    /* flex-wrap: wrap; */
}

.zero {
    grid-column: 1 / 3;
}

.btn {
    background-color: #eee;
    border: 1px solid #999;
}

.operator {
    background-color: orange;
    color: white;
}

h1 {
    text-align: center;
}

.calcbord {
    border: 2px solid black;
    margin-bottom: 30px;
    margin-top: 45px;
    border-radius: 15px;
    padding: 0px 40px 15px 50px;
  }

</style>