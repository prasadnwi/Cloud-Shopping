<template>
    <div class='Product-list-wrapper container-fluid' id='product-list-content'>
        <!--show products-->
        <div class='products' id='products'>
            <div class='list-content' id='product-list'>
                <!--items-->
                <Item
                        v-bind:addItemToCart="addItemToCart" v-bind:item="item"
                        v-for=" item in items"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: 'ItemListContent',
        props: {
            items: {
                type: Array,
                default: []
            },
            addItemToCart: {type: Function},
        },
        components: {
            Item
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
