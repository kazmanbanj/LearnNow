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
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: "/signin", name: 'signin', component: Signin },
  { path: "/signup", name: 'signup', component: Signup },
  { path: "/colors", name: 'colors', component: Colors, meta: {requiresAuth: true} },
  { path: "/standardCalc", name: 'standardCalc', component: StandardCalc, meta: {requiresAuth: true} },
  { path: "/alphabet", name: 'alphabet', component: Alphabet, meta: {requiresAuth: true} },
  { path: "/engQuiz", name: 'engQuiz', component: EngQuiz, meta: {requiresAuth: true} },
  { path: "/number", name: 'number', component: Numbers, meta: {requiresAuth: true} },
  { path: "/arithmeticOperator", name: 'arithmeticOperator', component: ArithmeticOperator, meta: {requiresAuth: true} },
  { path: "/addMinus", name: 'Addminus', component: AddMinus, meta: {requiresAuth: true} },
  { path: "/timesDivide", name: 'Timesdivide', component: TimesDivide, meta: {requiresAuth: true} },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated) {
    next("/signin");
  } else {
    next();
  }
})

export default router