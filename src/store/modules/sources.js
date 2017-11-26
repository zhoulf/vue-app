import * as types from '../mutation-types'
import * as service from '../service'

export default {
    state: {
        result: '123'
    },
    getters: {
        doneCode(state, getters, rootState) {
            return state.result;
        }
    },
    mutations: {
        [types.RUN_CODE](state, res) {
            state.result = res.data;
        }
    },
    actions: {
        async [types.RUN_CODE]({ commit, state }, payload) {
           let res = await service.execScript(payload.code);
           console.log(res);
            if (res.data.success) {
                commit(types.RUN_CODE, res.data.data);
            }
        }
    }  
}
