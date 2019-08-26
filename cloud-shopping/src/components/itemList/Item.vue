<template>
    <div class='Product container' id='Product'>
        <div>
            <!--            image-->
            <div class='item-image row' id='cart-image'>
                <img src="../../assets/products/apple.png">
            </div>
            <!--            details-->
            <div class='item-details'>
                <div class='row' id='product-name'>
                    <p class='name'>{{name}}</p>
                </div>

                <div class='row' id='product-price'>
                    <p class='price'> Rs {{price}}</p>
                </div>
            </div>
            <div class='add-cart' id='add-cart'>
                <button @click="addItemToCart(item)" class="add-btn row" v-if="0 == 0">ADD TO CART</button>
                <div class="option-btn row" v-else>
                    <div class="col-lg-6 col-md-6">
                        <button class="inc">+</button>
                    </div>
                    <div class=" col-lg-6 col-md-6">
                        <button class="dec">-</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        props: {
            item: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            addItemToCart: {type: Function},
        },
        data: function () {
            return {
                name: this.item.name,
                price: this.item.price,
            }
        }
    }
</script>

<style lang="scss">
    @import '../../constants/colors';

    .Product {
        border-style: solid;
        border-color: $honeyDew;
        width: 18vw;
        height: 38vh;
        margin-top: 1vw;
        margin-right: 1vw;
        float: left;
        list-style: outside none none;

        .item-image {
            cursor: pointer;
            display: block;
            margin-top: 1.2vh;

            img {
                max-width: 15vw;
                max-height: 15vh;
                display: block;
                margin: auto;
            }
        }

        .item-details {
            display: block;
            max-height: 5vh;
            margin-top: 3vh;
            text-align: left;
            margin-left: 1vw;
            margin-bottom: 3vh;

            .name {
                text-overflow: ellipsis;
                font-weight: bold;
                line-height: 1.5vh;
            }

            .price {
                font-size: 90%;
            }
        }

        .add-cart {
            display: block;
            font-size: 79%;

            .add-btn, .inc, .dec {
                display: block;
                border: none;
                padding: 0.5em;
                outline: none;
            }

            .add-btn {
                width: 90%;
                margin-left: 5%;
                background: #41B883;
                color: #fff;
            }

            .option-btn {
                .inc {
                    width: 100%;
                    background: #418cb8;
                    margin-right: 1%;
                    color: #fff;
                    float: left;
                }

                .dec {
                    width: 100%;
                    background: #418cb8;
                    color: #fff;
                    margin-left: 1%;
                    float: left;
                }
            }
        }


    }
</style>
