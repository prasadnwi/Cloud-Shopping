<template>
    <div class='Product container-fluid' id='Product'>
        <div>
            <!--            image-->
            <div class='item-image row' id='cart-image'>
                image here
            </div>
            <!--            details-->
            <div class='item-details row' id='product-name'>
                <p class='name'>name</p>
            </div>

            <div class='item-details row' id='product-price'>
                <p class='price'>price</p>
            </div>

            <div class='add-cart' id='add-cart'>
                <button class="add-btn row" v-if="0 == 0">ADD TO CART</button>
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
        props: ['item'],
    }
</script>

<style lang="scss">
    @import '../../constants/colors';

    .Product {
        width: 18vw;
        height: 32vh;
        background-color: $snow;
        margin-top: 1vw;
        margin-right: 1vw;
        float: left;
        list-style: outside none none;

        .item-image {
            cursor: pointer;
            background-color: #5E740B;
        }

        .item-details {
            max-height: 5vh;
            margin-top: 2vh;

            .item-name {
                text-overflow: ellipsis;
            }

            .price {
            }
        }

        .add-cart {
            .add-btn, .inc, .dec {
                display: block;
                border: none;
                padding: 0.5em;
                outline: none;
            }

            .add-btn {
                width: 97%;
                margin-left: 0.25%;
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