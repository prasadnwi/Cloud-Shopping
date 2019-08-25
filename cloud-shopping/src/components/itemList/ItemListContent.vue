<template>
    <div class='Product-list-wrapper container-fluid' id='product-list-content'>
        <!--show products-->
        <div class='products' id='products'>
          <div class='list-content' id='product-list'>
            <!--items-->
              <Item v-bind:item="item" v-for=" item in items"/>
          </div>
        </div>
    </div>
</template>

<script>
  import Item from "./Item";

  export default {
        name: 'ItemListContent',
        components: {
            Item
        },
        data: function () {
            return {
                items: [{
                    id: 1,
                    name: 'Apple',
                    price: 100,
                    imageName: 'apple',
                    description: 'this is apple',
                    rating: 5,
                    vendor: 'appleMaker'
                }, {
                    id: 1,
                    name: 'Apple',
                    price: 100,
                    imageName: 'apple',
                    description: 'this is apple',
                    rating: 5,
                    vendor: 'appleMaker'
                },
                  {
                    id: 1,
                    name: 'Apple',
                    price: 100,
                    imageName: 'apple',
                    description: 'this is apple',
                    rating: 5,
                    vendor: 'appleMaker'
                  },
                  {
                    id: 1,
                    name: 'Apple',
                    price: 100,
                    imageName: 'apple',
                    description: 'this is apple',
                    rating: 5,
                    vendor: 'appleMaker'
                  }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .Product-list-wrapper {
        .products {
            width: 100%;
          background-color: #42b983;
            .list-content {
                display: inline-block;
              float: left;
            }
        }
    }
</style>
