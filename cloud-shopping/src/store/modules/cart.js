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

// Todo : remove one item from item list
    },
    removeItemFromCart({state, commit}, item) {
        const updatedCart =  state.all.filter(existingItem => existingItem.id != item.id);
        commit('updateCart', {updatedCart})
    }
};

const mutations = {
    pusItemToCart(state, addedItem) {
        state.all.push(addedItem.item)
    },
    incrementItemQuantity(state, indexofItem) {
        state.all[indexofItem.indexofItem].count++;
    },
    updateCart(state, updatedItems){
        console.log('updatdItems');
        console.log(updatedItems);
        // state.all = updatedItems;
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

