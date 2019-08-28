<template>
  <div class="container-fluid">
    <ItemContent v-bind:itemDetails="itemDetail"/>
  </div>
</template>

<script>
  // components
  import ItemContent from "../components/itemDetails/ItemContent";
  // components
  export default {
    name: 'productDetails',
    components: {
      ItemContent
    },
    computed: {
      itemDetail(){
        const itemId = this.$route.params.id;
        return this.$store.getters.itemDetails(itemId);
      }
    },
    created() {
      // this.$store.dispatch('getAllItems')
    },
  }
</script>
