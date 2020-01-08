// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false;

// Initialize Firebase
let app;
let config = {
  apiKey: "AIzaSyBzsfEfWdAIpqN0umTw9KyfA-2e45dYM5Q",
  authDomain: "vue-firebase-tutorial-ead13.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-ead13.firebaseio.com",
  projectId: "vue-firebase-tutorial-ead13",
  storageBucket: "vue-firebase-tutorial-ead13.appspot.com",
  messagingSenderId: "1067200490292"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app){
    /* eslint-disable no-new */
     app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});




