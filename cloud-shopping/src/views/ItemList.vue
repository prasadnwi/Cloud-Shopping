<template>
  <div class="home">
    <ItemListContent/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ItemListContent from '@/components/itemList/ItemListContent.vue'

  export default {
  name: 'home',
  components: {
    ItemListContent
  }
}
</script>
