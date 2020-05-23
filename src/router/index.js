import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Signin from "../views/Signin.vue"
import Signup from "../views/Signup.vue"
import Colors from "../views/Colors.vue"
import StandardCalc from "../views/Calc.vue"
import Alphabet from "../views/english/Alphabets.vue"
import EngQuiz from "../views/english/EnglishQuiz/EnglishQuiz.vue"
import Numbers from "../views/maths/Numbers.vue"
import ArithmeticOperator from "../views/maths/Operators.vue"
import AddMinus from '../components/addminus.vue'
import TimesDivide from '../components/timesdivide.vue'
// import * as firebase from 'firebase/app'
// import { auth } from '../firebase/firebase.utils'
// import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: "/signin", name: 'signin', component: Signin },
  { path: "/signup", name: 'signup', component: Signup },
  { path: "/colors", name: 'colors', component: Colors },
  { path: "/standardCalc", name: 'standardCalc', component: StandardCalc },
  { path: "/alphabet", name: 'alphabet', component: Alphabet },
  { path: "/engQuiz", name: 'engQuiz', component: EngQuiz },
  { path: "/number", name: 'number', component: Numbers },
  { path: "/arithmeticOperator", name: 'arithmeticOperator', component: ArithmeticOperator },
  { path: "/addMinus", name: 'Addminus', component: AddMinus },
  { path: "/timesDivide", name: 'Timesdivide', component: TimesDivide },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router