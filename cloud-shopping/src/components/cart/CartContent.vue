<template>
    <div class='cart-content' id="cart-content">

        <!--header-->
        <div class="header" id="header">
            <p class='title' id="cart-header">{{titleText}}</p>
        </div>

        <!--items-->
        <div class="items" id="item-list" v-if="hasItemsInCart">
            <Item v-bind:item="item" v-for="item in items" v-bind:key="item.id"/>
        </div>
        <div class="no-items" id="no-items" v-else>
            {{noItemText}}
        </div>

        <!--cart summery-->
        <div class="summary" id="cart-summery" v-if="hasItemsInCart">

            <div class='total' id='total-amount'>
                <div class='row'>
                    <div class='lable col-lg-8'>{{totalText}}</div>
                    <div class='col-lg-4'>{{`${currency} ${total}`}}</div>
                </div>
            </div>
            <div class='discounte' id='discounted-amount'>
                <div class='row'>
                    <div class='lable col-lg-8'>{{discountText}}</div>
                    <div class='col-lg-4'>{{`${currency} ${discount}`}}</div>
                </div>
            </div>
            <div class='tax' id='tax-amount'>
                <div class='row'>
                    <div class='lable col-lg-8'>{{taxText}}</div>
                    <div class='col-lg-4'>{{`${currency} ${tax}`}}</div>
                </div>
            </div>
            <div class='final' id='final-amount'>
                <div class='row'>
                    <div class='lable col-lg-8'>{{finalAmountText}}</div>
                    <div class='value col-lg-3'>{{`${currency} ${finalAmount}`}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as cartCalculations from '../../utill/cart';
    import Item from "./Item";
    import {CART} from '../../constants/cart';
    import STRINGS from "../../constants/strings";
    export default {
        name: "CartContent",
        components: {
            Item
        },
        data: function () {
            return {
                currency: CART.CURRENCY,
                titleText: STRINGS.COMPONENTS.CART.CART_CONTENT.TITLE,
                noItemText: STRINGS.COMPONENTS.CART.CART_CONTENT.NO_ITEM,
                totalText: STRINGS.COMPONENTS.CART.CART_CONTENT.TOTAL,
                discountText: STRINGS.COMPONENTS.CART.CART_CONTENT.DISCOUNT,
                taxText: STRINGS.COMPONENTS.CART.CART_CONTENT.TAX,
                finalAmountText: STRINGS.COMPONENTS.CART.CART_CONTENT.FINAL_MOUNT,
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
        max-width: 60vw;
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

            .lable {
                font-weight: bold;
            }
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

                .value {
                    font-weight: bold;
                    font-size: large;
                }
            }
        }
    }
</style>
