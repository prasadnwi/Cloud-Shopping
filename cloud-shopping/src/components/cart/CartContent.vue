<template>
    <div class='cart-content' id="cart-content">
        <div class="header" id="header">
            <p class='title' id="cart-header">SHOPPING CART</p>
        </div>
        <div class="items" id="item-list">
            <Item/>
        </div>
    </div>
</template>

<script>
    import Item from "./Item";
    export default {
        name: "CartContent",
        components: {
            Item
        }
    }
</script>

<style lang="scss">
    @import "../../constants/colors";

    .cart-content {
        border-style: solid;
        min-width: 20vw;

        .header {
            background-color: $midnightBlue;

            .title {
                color: $white;
                font-weight: bold;
            }
        }
    }
</style>