<template>
    <div class='cart-content' id="cart-content">

        <!--header-->
        <div class="header" id="header">
            <p class='title' id="cart-header">SHOPPING CART</p>
        </div>

        <!--items-->
        <div class="items" id="item-list" v-if="hasItemsInCart">
            <Item v-bind:item="item" v-for="item in items" v-bind:key="item.id"/>
        </div>
        <div class="no-items" id="no-items" v-else>
            No Items
        </div>

        <!--cart summery-->
        <div class="summary" id="cart-summery" v-if="hasItemsInCart">

            <div class='total' id='total-amount'>
                <div class='row'>
                    <div class='col-lg-8'>TOTAL</div>
                    <div class='col-lg-4'>{{`${currency} ${total}`}}</div>
                </div>
            </div>
            <div class='discounte' id='discounted-amount'>
                <div class='row'>
                    <div class='col-lg-8'> DISCOUNT</div>
                    <div class='col-lg-4'>{{`${currency} ${discount}`}}</div>
                </div>
            </div>
            <div class='tax' id='tax-amount'>
                <div class='row'>
                    <div class='col-lg-8'>TAX</div>
                    <div class='col-lg-4'>{{`${currency} ${tax}`}}</div>
                </div>
            </div>
            <div class='final' id='final-amount'>
                <div class='row'>
                    <div class='col-lg-8'>FINAL AMOUNT</div>
                    <div class='col-lg-4'>{{`${currency} ${finalAmount}`}}</div>
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
        data: function () {
            return {
                currency: CART.CURRENCY
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
            },
            total: function () {
                return cartCalculations.totalprice(this.items)
            },
            discount: function () {
                return cartCalculations.discountPrice(this.total)
            },
            tax: function () {
                return cartCalculations.calculateTotalTax(this.total, CART.TAX_RATE);
            },
            finalAmount: function () {
                return cartCalculations.calculateFinalAmount(this.total, this.tax, this.discount);
            }

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

        /*content of summery*/
        .items {
        }

        .no-items {
            margin-bottom: 2vh;
            font-weight: bold;
        }

        .summary {
            text-align: left;
            margin-left: 2vw;

            .total {
                margin-top: 2vh;
            }

            .discounte {
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
