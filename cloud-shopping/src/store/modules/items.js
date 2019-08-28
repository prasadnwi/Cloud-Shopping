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
    itemDetails: (state) => (id = 0) => {
        return state.all.find(item => item.id === id);
    },
    /*
    @desc check availability in the cart of given item id
    @params number $id - item id
    @return true or false (item availability)
     */
    isAvailbleOnCart: (state, getters, rootState) => (id) => {

        let availability = false;
        if (rootState.cart.all && rootState.cart.all.findIndex(item => item.id === id) !== -1) {
            availability = true
        }
        return availability;
    },
    /*@desc get number of items for given item */
    numberOfItems: (state) => (id = 0) => {
        const indexOfItem = state.all.findIndex(item => item.id === id);
        let numberOfAvailableItems = 0;

        if (indexOfItem !== -1) {
            numberOfAvailableItems = state.all[indexOfItem].quantity;
        }
        return numberOfAvailableItems;
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
    /*
    @desc add a item for a given item id
     */
    addItemToItemList({commit}, id) {
        let updatedCart;
        const indexOfItem = state.all.findIndex(item => item.id === id);
        if (indexOfItem !== -1) {

            updatedCart = [...state.all];
            updatedCart[indexOfItem].quantity++;

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
