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
    /*
    @desc get all item from the data scource
     */
    getAllItems({commit}) {
        commit('setItems', items);
    },
    /*
    @desc remove a item for a given item id
     */
    removeItemFromItemList({commit}, id) {
        let updatedCart;
        const indexofItem = state.all.findIndex(item => item.id === id);

        if (indexofItem !== -1 && state.all[indexofItem].quantity > 0) {

            updatedCart = [...state.all];
            updatedCart[indexofItem].quantity--;

            commit('updateItemList', updatedCart);
        }
    },

    addItemToItemList({commit}, id) {
        let updatedCart;
        const indexofItem = state.all.findIndex(item => item.id === id);

        if (indexofItem !== -1 && state.all[indexofItem].quantity > 0) {

            updatedCart = [...state.all];
            updatedCart[indexofItem].quantity++;

            commit('updateItemList', updatedCart);
        }
    }
}

// mutations
const mutations = {
    setItems(state, items) {
        state.all = items
    },
    updateItemList(state, updatedCart) {
        state.all = updatedCart;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
