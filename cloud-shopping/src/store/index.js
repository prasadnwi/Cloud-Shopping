import Vue from 'vue';
import Vuex from 'vuex';
//modules
import items from './modules/items';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        items,
        cart,
    }
})
