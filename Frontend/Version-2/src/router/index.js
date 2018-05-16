import Vue from 'vue'
import Router from 'vue-router'

import BasicInformation from '@/components/BasicInformation'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/basic-information', name: 'BasicInformation', component: BasicInformation },
  ],
  mode: 'history'
})
