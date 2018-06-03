import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import BasicInformation from '@/components/BasicInformation'
import InternalAnalysis from '@/components/ΙnternalΑnalysis'
import ExternalΑnalysis from '@/components/ExternalΑnalysis'
import Strategy from '@/components/Strategy'
import FinancialPlan from '@/components/FinancialPlan'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/basic-information', name: 'BasicInformation', component: BasicInformation },
    { path: '/internal-analysis', name: 'ΙnternalΑnalysis', component: InternalAnalysis },
    { path: '/external-analysis', name: 'ExternalΑnalysis', component: ExternalΑnalysis },
    { path: '/strategy', name: 'Strategy', component: Strategy },
    { path: '/financial-plan', name: 'FinancialPlan', component: FinancialPlan },
    // rzs_test
    {path: '/test', name: 'test', component: test }
  ],
  mode: 'history'
})
