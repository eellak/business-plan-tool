import Vue from 'vue'
import Router from 'vue-router'
import TwoIdentity from '@/components/2_business-model/TwoIdentity'
import TwoDescription from '@/components/2_business-model/TwoDescription'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/2a-identity', name: 'TwoIdentity', component: TwoIdentity,
      path: '/2b-description', name: 'TwoDescription', component: TwoDescription
    }
  ],
  mode: 'history'
})
