<template>
    <div class='ProductDetailsContent container' id="product-detail-content">
        <div class='back row' id="navigation-content">
            <button class="btn" @click="onClickBac"><i class="fa fa-arrow-circle-left"></i>
            </button>
        </div>
        <div class='row'>

            <!--image-->
            <div class='image col-lg-6 col-md-12 col-sm-12' id="product-image">
                <img src='../../assets/products/apple.png' alt="this is a image"/>
            </div>

            <!--details-->
            <div class='details col-lg-4 col-md-9 col-sm-12' id="summery-content">
                <!--name-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="name" class="col-lg-4 col-md-4 col-sm-4 col-form-label">Name</label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="name"
                               v-model="itemDetails.name"/>
                    </div>
                </div>
                <!--price-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="price" class="col-lg-4 col-md-4 col-sm-4 col-form-label">Price</label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="price"
                               v-model="itemDetails.price"/>
                    </div>
                </div>
                <!--description-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="description"
                           class="col-lg-4 col-md-4 col-sm-4 col-form-label">Description </label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="description"
                               v-model="itemDetails.description"/>
                    </div>
                </div>
                <!--rating-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="rating" class="col-lg-4 col-md-4 col-sm-4 col-form-label">Rating</label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="rating"
                               v-model="itemDetails.rating"/>
                    </div>
                </div>
                <!--quantity-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="vendor" class="col-lg-4 col-md-4 col-sm-4 col-form-label">Quantity</label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="quantity"
                               v-model="itemDetails.quantity"/>
                    </div>
                </div>
                <!--vendor-->
                <div class="row col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="vendor" class="col-lg-4 col-md-4 col-sm-4 col-form-label">Vendor</label>
                    <div class="col-lg-8 col-md-6 col-sm-4">
                        <input type="text" readOnly class="form-control-plaintext" id="vendor"
                               v-model="itemDetails.vendor"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped lang="scss">
    @import '../../constants/colors';

    .ProductDetailsContent {
        margin-left: 3vw;
        margin-bottom: 2vh;

        .back {
            i {
                font-size: 4vw;
                margin-left: 3vw;
                margin-top: 2vh;
            }
        }

        .image {
            img {
                width: 20vw;
                height: 20vw;
                display: block;
                margin: auto;
            }
        }

        .details {
            border-style: dashed;
            margin-top: 3vh;
            border-radius: 10px;
        }

        .cart {

        }
    }
</style>
