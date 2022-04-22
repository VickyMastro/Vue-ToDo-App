import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Autoimportacion de componentes

import {upperFirst, camelCase} from 'lodash';

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
});

// Bootstrap Vue
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.css'

import VModal from 'vue-js-modal'
Vue.use(VModal)

// calendar
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
