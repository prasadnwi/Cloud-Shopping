const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    addItemToCart({state, commit}, addedItem) {

        const itemInCart = state.all.find(item => item.id === addedItem.id)
        if (!itemInCart) {
            commit('pusItemToCart', {addedItem})
        } else {
            commit('incrementItemQuantity', {itemId: addedItem.id})
        }

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
