<template>
    <div class='Product container' id='Product'>
        <div>
            <!--            image-->
            <div class='item-image row' id='cart-image' @click="onClickImage">
                <img src="../../assets/products/apple.png">
            </div>
            <!--            details-->
            <div class='item-details'>
                <div class='row' id='product-name'>
                    <p class='name'>{{name}}</p>
                </div>

                <div class='row' id='product-price'>
                    <div class="col-lg-8">
                        <p class='price'> Rs {{price}}</p>
                    </div>
                    <div class="col-lg-4">
                        <p class='name'>{{numberOfItems}}</p>
                    </div>
                </div>
            </div>

            <div class='add-cart' id='add-cart' v-if="!isAvailbleOnCart">
                <button @click="addItemToCart(item)" class="add-btn row" v-if="count !== 0">ADD TO CART</button>
                <div class="option-btn row" v-else>
                    <button class="add-btn disable-btn row" disabled>OUT OF STOCK</button>
                </div>
            </div>
            <!--disable-->
            <div class="option-btn row" v-else>
                <div class="col-lg-6 col-md-6">
                    <button v-bind:class="increaseButtonStyle" @click="addItemToCart(item)"
                            :disabled="!isAbleToAddItems">+
                    </button>
                </div>
                <div class=" col-lg-6 col-md-6">
                    <button class="dec" @click="removeItemFromCart(item)">-</button>
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
            removeItemFromCart: {type: Function}
        },
        data: function () {
            return {
                name: this.item.name,
                price: this.item.price,
                count: this.item.quantity
            }
        },
        methods: {
            onClickImage() {
                this.$router.push({
                    name: 'product',
                    params: {
                        id: this.item.id
                    }
                });
            },
        },
        computed: {
            isAvailbleOnCart() {
                return this.$store.getters.isAvailbleOnCart(this.item.id);
            },
            numberOfItems() {
                return this.$store.getters.numberOfItems(this.item.id);
            },
            isAbleToAddItems() {
                let ability = true;
                if (this.$store.getters.numberOfItems(this.item.id) === 0) {
                    ability = false
                }
                return ability;
            },
            increaseButtonStyle() {
                let style = "inc"
                if (this.$store.getters.numberOfItems(this.item.id) === 0) {
                    style = "disable"
                }
                return style;
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

        /*item details*/
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

        /*cart adding buttons*/
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

            .disable-btn {
                background-color: #2c3e50;
            }
        }

        .option-btn {
            font-size: 79%;

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

            .disable {
                background-color: darkgrey;
                width: 100%;
                margin-right: 1%;
                color: #fff;
                float: left;
            }
        }


    }
</style>
