const state = {
    all: []
}

// getters
const getters = {
    itemDetails: (state) => (id) => {
        return state.all.find(item => item.id === id);
    },
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
        const items = [{
            id: 1,
            name: 'Apple',
            price: 100,
            imageName: 'apple',
            description: 'this is apple',
            rating: 5,
            quantity: 0,
            vendor: 'appleMaker'
        }, {
            id: 2,
            name: 'Orange',
            price: 100,
            imageName: 'apple',
            description: 'this is apple',
            rating: 5,
            quantity: 4,
            vendor: 'appleMaker'
        },
            {
                id: 3,
                name: 'Apple',
                price: 100,
                imageName: 'apple',
                description: 'this is apple',
                rating: 5,
                quantity: 4,
                vendor: 'appleMaker'
            },
            {
                id: 4,
                name: 'Apple',
                price: 100,
                imageName: 'apple',
                description: 'this is apple',
                rating: 5,
                quantity: 4,
                vendor: 'appleMaker'
            }
        ]
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
