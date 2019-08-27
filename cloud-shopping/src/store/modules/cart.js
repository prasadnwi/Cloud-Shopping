const state = {
    all: [] // items in the cart
};

const getters = {};

const actions = {
    /*
    @desc add a item into the cart and remove a item from item list
    @params object $item - added item
    @return adding a item or incrementing the number of added items
     */
    addItemToCart({state, commit, dispatch}, item) {

        let addedItem = {
            id: item.id,
            name: item.name,
            count: 1,
            unitPrice: item.price
        };

        const indexofItem = state.all.findIndex(item => item.id === addedItem.id); // check in the cart

        if (indexofItem === -1) { //  added item isn't available in the cart
            commit('pusItemToCart', {addedItem})
        } else {
            commit('incrementItemQuantity', {indexofItem})
        }

        dispatch('removeItemFromItemList', item.id, {root: true}) // remove a item from cart
    },
    /*
    @desc remove a item from the cart and add the item back to item list
    @params object $item - removed item
    @return removing a item or decreasing number of removed items
     */
    removeItemFromCart({state, commit, dispatch}, item) {

        let updatedCart, temCart;
        const indexofItem = state.all.findIndex(existingItem => existingItem.id === item.id);

        if (indexofItem !== -1 && state.all[indexofItem].count > 1) { // more than one item is available in the cart

            updatedCart = [...state.all];
            updatedCart[indexofItem].count--;

        } else if (indexofItem !== -1 && state.all[indexofItem].count === 1) {

            temCart = state.all.filter(existingItem => existingItem.id != item.id);
            updatedCart = temCart ? temCart : [];  // if update cart is undefine, then return empty array
        }

        commit('updateCart', {updatedCart})

        dispatch('addItemToItemList', item.id, {root: true}) // add a item from cart
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

