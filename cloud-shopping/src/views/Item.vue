<template>
  <div class="container-fluid">
    <ItemContent v-bind:itemDetails="itemDetail"/>
  </div>
</template>

<script>
  // components
  import ItemContent from "../components/ItemDetails/ItemContent";
  // components
  export default {
    name: 'productDetails',
    components: {
      ItemContent
    },
    computed: {
      itemDetail(){
        return this.$store.getters.itemDetails(1);
      }
    },
    created() {
      this.$store.dispatch('getAllItems')
    },
  }
</script>
