import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ViewManager from './services/ViewManager';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faDeleteLeft)

ViewManager.checkStatus()
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
