<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <ItemListContent/>
      </div>
      <div class="col-lg-4">
        <Cart/>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import ItemListContent from '@/components/itemList/ItemListContent.vue';
  import Cart from "./Cart";

  export default {
  name: 'home',
  components: {
    ItemListContent,
    Cart
  }
}
</script>
