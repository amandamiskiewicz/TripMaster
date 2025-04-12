import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerSW } from "virtual:pwa-register";
import 'leaflet/dist/leaflet.css';


createApp(App)
  .use(router)  
  .mount('#app');

  registerSW({
    onNeedRefresh() {
      console.log("Nowa wersja dostępna. Odśwież stronę!");
    },
    onOfflineReady() {
      console.log("Aplikacja jest teraz dostępna offline!");
    }
  });

