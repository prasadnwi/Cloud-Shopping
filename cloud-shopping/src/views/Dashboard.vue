<template>
    <div class='Dashboard-content'>
        <div class='page-title'>
            <span class='chocolate'>{{firstName}} </span>
            <span class='goldenrod'>{{secondName}}</span>
        </div>
    </div>
</template>

<script>
    import STRING from '../constants/strings';

    export default {
        name: 'CartContent',
        data: () => {
            return ({
                firstName: STRING.VIEWS.DASHBOARD.FIRST_NAME,
                secondName: STRING.VIEWS.DASHBOARD.LAST_NAME
            })
        }
    }
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
