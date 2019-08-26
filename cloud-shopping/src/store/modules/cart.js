const state = {
    all: []
};

const getters = {};

const actions = {
    addItemToCart({state, commit}, item) {
        // format item data
        let addedItem = {
            id: item.id,
            name: item.name,
            count: 1,
            unitPrice: item.price
        };
// check in the cart
        const indexofItem = state.all.findIndex(item => item.id === addedItem.id);

        if (indexofItem === -1) {
            commit('pusItemToCart', {item: addedItem})
        } else {
            commit('incrementItemQuantity', {indexofItem})
        }

// remove one item from item list
    }
};

const mutations = {
    pusItemToCart(state, addedItem) {
        state.all.push(addedItem.item)
    },
    incrementItemQuantity(state, indexofItem) {
        state.all[indexofItem.indexofItem].count++;
    }

};

const namespaced = true;

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}

