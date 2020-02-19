import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import {Button,Row,Col,Search,Tab,Tabs,Swipe,SwipeItem, Grid, GridItem,Sticky} from 'vant'
import 'vant/lib/index.css'

Vue.use(Button).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Sticky);
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
