<template>
    <div class="item container" id="item">
        <div class="content row" id="item-content">
            <!--image-->
            <div class="image lg-col-3 md-col-3" id="item-image">
                <img src="../../assets/products/apple.png"/>
            </div>
            <!--details -->
            <div class="details lg-col-6 md-col-6" id="item-details">
                <div class="row" id="details-content">
                    <div class="name col-6" id="item-name">
                        <p>{{item.name}}</p>
                    </div>
                    <div class="quantity col-6" id="item-quantity">
                        <p>* {{item.count}}</p>
                    </div>
                </div>
            </div>
            <!--price-->
            <div class="price lg-col-3 md-col-3" id="price">
                <p>{{`${currency} ${price}`}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import * as cartCalculation from '../../utill/cart';
    import {CART} from '../../constants/cart';

    export default {
        name: "Item",
        props: {
            item: {
                type: Object,
                default: function () {
                    return ({})
                }
            }
        },
        data: function () {
            return {
                price: cartCalculation.getAItemPrice(this.item),
                currency: CART.CURRENCY
            }
        },
        beforeUpdate: function () {
            this.price = cartCalculation.getAItemPrice(this.item)
        }
    }
</script>

<style lang="scss" scoped>
    .item {
        margin-bottom: 2vh;
        margin-top: 2vh;

        .content {
            .image {
                cursor: pointer;
                display: block;
                margin-top: 1.2vh;
                margin-left: 1vw;

                img {
                    max-width: 6vw;
                    max-height: 6vh;
                    display: block;
                    margin: auto;
                }
            }

            .details {
                min-width: 17vw;
                padding-top: 2vh;

                .name {
                    max-height: 4vh;

                    p {
                        font-weight: bold;
                        font-family: Arial;
                    }
                }

                .quantity {

                }
            }

            .price {
                padding-top: 2vh;
            }
        }
    }
</style>
