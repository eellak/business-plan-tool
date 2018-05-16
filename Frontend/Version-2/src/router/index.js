import Vue from 'vue'
import Router from 'vue-router'

import BasicInformation from '@/components/BasicInformation'
import InternalAnalysis from '@/components/ΙnternalΑnalysis'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/basic-information', name: 'BasicInformation', component: BasicInformation },
    { path: '/internal-analysis', name: 'ΙnternalΑnalysis', component: InternalAnalysis },
  ],
  mode: 'history'
})
