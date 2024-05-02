import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
import router from "./routes/index";
import { firestorePlugin } from 'vuefire'
import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// General configuration for the Vue app
// And Firebase

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyDX4XJFSytEtEvt8EdP814PQGMPYp8FS68",
    authDomain: "palmart-f7427.firebaseapp.com",
    projectId: "palmart-f7427",
    storageBucket: "palmart-f7427.appspot.com",
    messagingSenderId: "394965523403",
    appId: "1:394965523403:web:552f783c7e8a396ac6344e",
    measurementId: "G-EPZQRN5JW9"
  };  

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

// Tell Vue the plugins it needs to use
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);

// Export the database object to the components
export const db = firebase.firestore();

// Initialisation of the Vue app
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
