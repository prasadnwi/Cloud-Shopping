<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <ItemListContent v-bind:items="items"/>
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
    methods: mapActions('', []),
    created() {
      this.$store.dispatch('getAllItems')
    }
  }
</script>
