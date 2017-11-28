import * as types from '../mutation-types'
import * as service from '../service'

export default {
    state: {
        menus: []
    },
    mutations: {
        [types.MEMU_CHANGE](state, list) {
            state.menus = list;
        }
    },
    actions: {
        async [types.GET_MEMUS]({ commit, state }, payload) {
           let res = await service.getMemus();
            if (res.data.success) {
                commit(types.MEMU_CHANGE, res.data.data);
            }
        }
    }  
}
