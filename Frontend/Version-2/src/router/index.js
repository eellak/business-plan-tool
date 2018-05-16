import Vue from 'vue'
import Router from 'vue-router'

import BasicInformation from '@/components/BasicInformation'

import Synopsis from '@/components/1_synopsis/Synopsis'
import Identity from '@/components/2_business-model/Identity'
import Description from '@/components/2_business-model/Description'
import Faculties from '@/components/4_equipment/Faculties'
import Equipment from '@/components/4_equipment/Equipment'
import RunningCost from '@/components/4_equipment/RunningCost'
import Characteristics from '@/components/5_products/Characteristics'
import Copyrights from '@/components/5_products/Copyrights'
import Revenues from '@/components/5_products/Revenues'
import Swot from '@/components/6_market/Swot'
import PestelFactors from '@/components/6_market/PestelFactors'
import MarketNote from '@/components/6_market/MarketNote'
import Strategy from '@/components/7_marketing/Strategy'
import MarketingActions from '@/components/7_marketing/MarketingActions'
import StartActions from '@/components/8_financial-plan/StartActions'
import FunctionCost from '@/components/8_financial-plan/FunctionCost'
import DeadSpot from '@/components/8_financial-plan/DeadSpot'
import Timeline from '@/components/9_timeline/Timeline'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/basic-information', name: 'BasicInformation', component: BasicInformation },

    // 1. Synopsis
    { path: '/synopsis', name: 'Synopsis', component: Synopsis },
    // 2. Business Model
    { path: '/identity', name: 'Identity', component: Identity },
    { path: '/description', name: 'Description', component: Description },
    // 4. Equipment
    { path: '/equipment', name: 'Equipment', component: Equipment },
    { path: '/faculties', name: 'Faculties', component: Faculties },
    { path: '/running-cost', name: 'RunningCost', component: RunningCost },
    // 5. Products
    { path: '/characteristics', name: 'Characteristics', component: Characteristics },
    { path: '/copyrights', name: 'Copyrights', component: Copyrights },
    { path: '/revenues', name: 'Revenues', component: Revenues },
    // 6. Market
    { path: '/swot', name: 'Swot', component: Swot },
    { path: '/pestel-factors', name: 'PestelFactors', component: PestelFactors },
    { path: '/market-note', name: 'MarketNote', component: MarketNote },
    // 7. Marketing
    { path: '/Strategy', name: 'Strategy', component: Strategy },
    { path: '/marketing-actions', name: 'MarketingActions', component: MarketingActions },
    // 8. Financial Plan
    { path: '/start-actions', name: 'StartActions', component: StartActions },
    { path: '/function-cost', name: 'FunctionCost', component: FunctionCost },
    { path: '/dead-spot', name: 'DeadSpot', component: DeadSpot },
    // 9. Timeline
    { path: '/timeline', name: 'Timeline', component: Timeline },
  ],
  mode: 'history'
})
