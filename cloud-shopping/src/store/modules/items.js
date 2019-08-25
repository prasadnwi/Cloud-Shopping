const state = {
    all: []
}

// getters
const getters = {}

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
            quantity: 4,
            vendor: 'appleMaker'
        }, {
            id: 1,
            name: 'Orange',
            price: 100,
            imageName: 'apple',
            description: 'this is apple',
            rating: 5,
            quantity: 4,
            vendor: 'appleMaker'
        },
            {
                id: 1,
                name: 'Apple',
                price: 100,
                imageName: 'apple',
                description: 'this is apple',
                rating: 5,
                quantity: 4,
                vendor: 'appleMaker'
            },
            {
                id: 1,
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
    }
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
    mutations
}
