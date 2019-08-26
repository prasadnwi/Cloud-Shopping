import {cartCalculation} from '../../utill/cart';
import {CART} from '../../constants/cart';

const state = {
    all: [],
    total: 0,
    discount: 0,
    tax: 0,
    taxRate: CART.TAX_RATE,
    finalAmount: 0,
    currency: CART.CURRENCY

}

// getters
const getters = {}

// actions
const actions = {
    addItemToCart({state, commit}, addedItem) {
        console.log(addedItem);
        // check in the cart
        const itemInCart = state.all.find(item => item.id === addedItem.id);
        if (!itemInCart) {
            commit('pusItemToCart', {addedItem})
        } else {
            commit('incrementItemQuantity', {itemId: addedItem.id})
        }

        // update cart

        // remove one item from item list
    }
}

// mutations
const mutations = {
    pusItemToCart(state, item) {
        state.all.push(item)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
