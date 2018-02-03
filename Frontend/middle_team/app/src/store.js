import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    description: {
        "ID": 1,
        "IdentityId": 1,
        "Text": "description 1"
    }

  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


