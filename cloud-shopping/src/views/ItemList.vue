<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <ItemListContent
                v-bind:addItemToCart="addItemToCart"
                v-bind:items="items"
                v-bind:removeItemFromCart="removeItemFromCart"
        />
      </div>
      <div class="col-lg-4">
        <Cart/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  // components
  import ItemListContent from '@/components/itemList/ItemListContent.vue';
  import Cart from "./Cart";

  export default {
    name: 'home',
    components: {
      ItemListContent,
      Cart
    },
    computed: mapState({
      items: state => state.items.all
    }),
    methods: mapActions('cart', [
      'addItemToCart',
      'removeItemFromCart'
    ]),
    created() {
      this.$store.dispatch('getAllItems')
    },
  }
</script>
