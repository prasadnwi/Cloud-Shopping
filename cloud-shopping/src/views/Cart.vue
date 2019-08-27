<template>
    <CartContent v-bind:items="items"/>
</template>

<script>
    import {mapState} from 'vuex';
    import CartContent from "../components/cart/CartContent";

    export default {
        name: "Cart",
        components: {
            CartContent
        },
        computed: mapState({
            items: state => state.cart.all
        }),
    }
</script>

<style scoped>

</style>
