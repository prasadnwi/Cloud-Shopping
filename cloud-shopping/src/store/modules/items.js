import {items} from '../../constants/itemData';
const state = {
    all: []
}

// getters
const getters = {
    /*
    @desc get item detail for given item id
    @params number $id - item id
    @return item details
     */
    itemDetails: (state) => (id) => {
        return state.all.find(item => item.id === id);
    },
    /*
    @desc check availability in the cart of given item id
    @params number $id - item id
    @return true or false (item availability)
     */
    isAvailbleOnCart:(state, getters, rootState) => (id) => {

        let availability = false;
        if(rootState.cart.all && rootState.cart.all.findIndex(item => item.id === id) !== -1){
            availability = true
        }
        return availability;
    }
}

// actions
const actions = {
    getAllItems({commit}) {
        commit('setItems', items);
    },
}

// mutations
const mutations = {
    setItems(state, items) {
        state.all = items
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
