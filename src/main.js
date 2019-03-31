import Vue from 'vue'
import './plugins/vuetify'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = ''

firebase.initializeApp({
  apiKey: 'AIzaSyBDxw3hKIRswzvXSMI0nR1wu6j41d2vyv4',
  authDomain: 'hairspiration-a6cda.firebaseapp.com',
  databaseURL: 'https://hairspiration-a6cda.firebaseio.com',
  projectId: 'hairspiration-a6cda',
  storageBucket: 'hairspiration-a6cda.appspot.com',
  messagingSenderId: '909276454128'
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
