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
            commit('pusItemToCart', {addedItem})
        } else {
            commit('incrementItemQuantity', {indexofItem})
        }

// Todo : remove one item from item list
    },
    removeItemFromCart({state, commit}, item) {

        let updatedCart, temCart;
        const indexofItem = state.all.findIndex(existingItem => existingItem.id === item.id);

        if (indexofItem !== -1 && state.all[indexofItem].count > 1) {

            updatedCart = [...state.all];
            updatedCart[indexofItem].count--;

        } else if (indexofItem !== -1 && state.all[indexofItem].count === 1) {

            temCart = state.all.filter(existingItem => existingItem.id != item.id);
            // if update cart is undefine, then return empty array
            updatedCart = temCart ? temCart : [];
        }

        commit('updateCart', {updatedCart})
    }
};

const mutations = {
    pusItemToCart(state, addedItem) {
        state.all.push(addedItem.addedItem)
    },
    incrementItemQuantity(state, indexofItem) {
        state.all[indexofItem.indexofItem].count++;
    },
    updateCart(state, updatedItems) {
        state.all = updatedItems.updatedCart ? updatedItems.updatedCart : [];
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

