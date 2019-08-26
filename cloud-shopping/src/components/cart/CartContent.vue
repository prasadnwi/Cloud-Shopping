<template>
    <div class='cart-content' id="cart-content">

        <!--        header-->
        <div class="header" id="header">
            <p class='title' id="cart-header">SHOPPING CART</p>
        </div>

        <!--        items-->
        <div class="items" id="item-list" v-if="hasItemsInCart">
            <Item v-bind:item="item" v-for="item in items" v-bind:key="item.id"/>
        </div>
        <div class="no-items" id="no-items" v-else>
            No Items
        </div>

        <!--        cart summery-->
        <div class="summary" id="cart-summery">
            <div class='total' id='total-amount'>
                <div class='row'>
                    <div class='col-lg-8'>total</div>
                    <div class='col-lg-4'>{{this.total}}</div>
                </div>
            </div>
            <div class='discounte' id='discounted-amount'>
                <div class='row'>
                    <div class='col-lg-8'>discount</div>
                    <div class='col-lg-4'>{{this.discount}}</div>
                </div>
            </div>
            <div class='tax' id='tax-amount'>
                <div class='row'>
                    <div class='col-lg-8'>tax</div>
                    <div class='col-lg-4'>{{tax}}</div>
                </div>
            </div>
            <div class='final' id='final-amount'>
                <div class='row'>
                    <div class='col-lg-8'>final amount</div>
                    <div class='col-lg-4'>{{finalAmount}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as cartCalculations from '../../utill/cart';
    import Item from "./Item";
    import {CART} from '../../constants/cart';
    export default {
        name: "CartContent",
        components: {
            Item
        },
        data: function(){
            return{
                total:0,
                discount: 0,
                tax: 0,
                finalAmount: 0
            }
        },
        props: {
            items: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        computed: {
            hasItemsInCart: function () {
                return (this.items.length > 0 ? true : false)
            }
        },
        beforeUpdate:function (){
            console.log('i ma running');
            this.total = cartCalculations.totalprice(this.items);
            this.discount = cartCalculations.discountPrice(this.total);
            this.tax = cartCalculations.calculateTotalTax(this.total, CART.TAX_RATE);
            this.finalAmount = cartCalculations.calculateFinalAmount(this.total, this.tax, this.discount)
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

        .items {
        }

        .no-items {
        }
        .summary {
            text-align: left;

            .total {
                margin-top: 2vh;
            }

            .discount {
                margin-top: 2vh;
            }

            .tax {
                margin-top: 2vh;
            }

            .final {
                margin-top: 2vh;
                margin-bottom: 4vh;
            }
        }
    }
</style>
