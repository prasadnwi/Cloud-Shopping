<template>
    <div class='ProductDetailsContent container' id="product-detail-content">
        <div class="row">
            <div class="image-content col-lg-7 col-md-7">
                <div class='back row' id="navigation-content">
                    <button class="btn" @click="onClickBac"><i class="fa fa-arrow-circle-left"></i>
                    </button>
                </div>
                <div class='row'>
                    <!--image-->
                    <div class='image col-lg-6 col-md-12 col-sm-12' id="product-image">
                        <img src='../../assets/products/apple.png' alt="this is a image"/>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <!--details-->
                <div class='details' id="summery-content">
                    <!--name-->
                    <div class=" name row col-lg-12 col-md-12 col-sm-12">
                        <p>{{itemDetails.name}}</p>
                    </div>
                    <!--price-->
                    <div class="price row col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="price" class="col-lg-5 col-md-5 col-sm-5">Price</label>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <p>{{`${currency} ${itemDetails.price} `}}</p>
                        </div>
                    </div>
                    <!--description-->
                    <div class="row col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="description" class="col-lg-5 col-md-5 col-sm-5">Description </label>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <p>{{itemDetails.description}}</p>
                        </div>
                    </div>
                    <!--rating-->
                    <div class="row col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="rating" class="col-lg-5 col-md-5 col-sm-5">Rating</label>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <p>{{itemDetails.rating}}</p>
                        </div>
                    </div>
                    <!--quantity-->
                    <div class="row col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="vendor" class="col-lg-5 col-md-5 col-sm-5">Quantity</label>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <p>{{(itemDetails.quantity == 0) ? 'OUT OF STOCKS' : itemDetails.quantity}}</p>
                        </div>
                    </div>
                    <!--vendor-->
                    <div class="row col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="vendor" class="col-lg-5 col-md-5 col-sm-5">Vendor</label>
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <p>{{itemDetails.vendor}}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {CART} from '../../constants/cart';
    export default {
        name: "ItemContent",
        props: {
            itemDetails: {
                type: Object,
                default: function () {
                    return ({})
                }
            }
        },
        methods: {
            onClickBac() {
                this.$router.push({
                    name: 'home'
                });
            }
        },
        data: () => {
            return ({
                currency: CART.CURRENCY
            })
        }
    }
</script>

<style scoped lang="scss">
    @import '../../constants/colors';

    .ProductDetailsContent {
        margin-left: 3vw;

        .back {
            i {
                font-size: 4vw;
                margin-left: 3vw;
                margin-top: 2vh;
            }
        }

        .image-content {
            .image {
                margin-left: 20vh;

                img {
                    width: 20vw;
                    height: 20vw;
                    display: block;
                    margin: auto;
                }
            }
        }

        .details {
            text-align: left;
            margin-top: 1vh;
            border-radius: 10px;

            label {
                font-weight: bold;
            }

            .name {
                font-size: 5vh;
                font-weight: bold;
                background-color: #DCDCDC;
            }

            .price {
                margin-top: 2vh;
            }
        }
        .cart {

        }
    }
</style>
