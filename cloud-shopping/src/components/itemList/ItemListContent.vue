<template>
    <div class='Product-list-wrapper container-fluid' id='product-list-content'>
        <!--show products-->
        <div class='products' id='products'>
            <div class='list-content' id='product-list'>
                <!--items-->
                <Item :item="item" v-for=" item in items"/>
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
                }
                ]
            }
        }

    }
</script>

<style lang="scss">
    .Product-list-wrapper {
        margin-left: 6vw;

        .products {
            .list-content {
                display: inline-block;
            }
        }

        .cart {

        }
    }
</style>
