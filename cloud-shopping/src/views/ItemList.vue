<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-10">
        <ItemListContent/>
      </div>
      <div class="col-lg-2">
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
