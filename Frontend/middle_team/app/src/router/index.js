import Vue from 'vue'
import Router from 'vue-router'
import TwoIdentity from '@/components/2_business-model/TwoIdentity'
import TwoDescription from '@/components/2_business-model/TwoDescription'
import Managers from '@/components/3_human-resources/Managers'
import Partners from '@/components/3_human-resources/Partners'
import HumanCosts from '@/components/3_human-resources/HumanCosts'
import MarketSwot from '@/components/6_market/MarketSwot'
import MarketGeneral from '@/components/6_market/MarketGeneral'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/2a-identity', name: 'TwoIdentity', component: TwoIdentity },
    { path: '/2b-description', name: 'TwoDescription', component: TwoDescription },
    { path: '/managers', name: 'Managers', component: Managers },
    { path: '/partners', name: 'Partners', component: Partners },
    { path: '/humancosts', name: 'HumanCosts', component: HumanCosts },
    { path: '/market-swot', name: 'MarketSwot', component: MarketSwot },
    { path: '/market-general', name: 'MarketGeneral', component: MarketGeneral },
  ],
  mode: 'history'
})
