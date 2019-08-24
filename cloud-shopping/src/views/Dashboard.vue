<template>
    <div class='Dashboard-content'>
        <div class='page-title'>
            <span class='chocolate'>Cloud </span>
            <span class='goldenrod'>Shopping</span>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
    @import "../../src/constants/colors";
    .Dashboard-content{
        margin-top: 1vw;
        .page-title{
            margin-right: 40vw;
            span{
                font-size: 5vw;
            }
            .chocolate{
                color: $chocolate;
                margin-left: 10vw;
            }
            .goldenrod{
                color: $goldenrod;
            }
        }
    }

</style>