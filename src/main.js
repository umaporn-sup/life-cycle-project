import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Footer from './components/Footer.vue'
console.log('At main.js, before calling createApp() function')
const app = createApp(App) //Vue App Object
//Global Registration
app.component('PageFooter', Footer)
app.mount('#app')
console.log('At main.js, after calling createApp() function')
