import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions'
import sources from './modules/sources'
import menu from './modules/menu'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    
    // actions,
    modules: {
        sources,
        menu
    }
})
