<template>
    <div id="ptypeListContainer" class="ptypeListContainer">
        <template v-if="state=='success'">
            <ul class="ptypeList">
                <li class="ptypeBox" :class="item.identify" v-for="item in list" :data-ptype="item.identify">
                    <a class="ptypeBoxCon" href="javascript:void(0)">
                        <div class="iconBox"><i class="iconfont" :class="'icon-'+icons[item.identify]"></i></div>
                        <p class="text" v-text="item.name"></p>
                    </a>
                </li>
            </ul>
        </template>
        <template v-if="state!=='success'">
            <div class="state" v-text="state"></div>
        </template>
    </div>
</template>
<script type="es6">
    let getPtypeList = require("SERVICE_M/getptype");
    export default {
        data(){
            return{
                list : null,
                state : "",
                icons : {
                    A : "jingqu",
                    B : "xianlu",
                    C : "jiudian",
                    F : "taopiao",
                    H : "yanchu"
                }
            }
        },
        ready(){
            getPtypeList({
                loading : () => {
                    this.state = PFT.AJAX_LOADING_TEXT;
                },
                complete : () => {
                    this.state = PFT.AJAX_COMPLETE_TEXT;
                },
                success : (res) => {
                    this.state = "success";
                    this.list = res.data;
                },
                empty : (res) => {
                    this.state = "用户没有配置要显示的产品类型";
                    this.list = [];
                },
                fail : (res) => {
                    this.state = (res.msg || PFT.AJAX_ERROR_TEXT);
                }
            })
        }
    }
</script>
<style lang="sass">
    @import "COMMON/css/base/core/px2rem";
    #ptypeListContainer{ padding:px2rem(40) px2rem(16); background:#fff; overflow:hidden}
    #ptypeListContainer .state{
        height:3rem;
        line-height:3rem;
        background:#fff;
        text-align:center;
    }
    #ptypeListContainer .ptypeBox{
        float:left;
        width:20%;
        text-align:center;
    }
    #ptypeListContainer .ptypeBoxCon{ display:block; width:100%}
    #ptypeListContainer .ptypeBox .iconBox{
        width:px2rem(114);
        height:px2rem(114);
        line-height:px2rem(114);
        background:#3cafd5;
        border-radius:50%;
        color:#fff;
        margin:0 auto 0.2rem;
    }
    #ptypeListContainer .ptypeBox .iconfont{
        font-size:0.8rem;
    }
    #ptypeListContainer .ptypeBox .text{
        color:#333;
        font-size:0.35rem;
    }
    #ptypeListContainer .ptypeBox.A .iconBox{ background:#3dafd4}
    #ptypeListContainer .ptypeBox.B .iconBox{ background:#ff516a}
    #ptypeListContainer .ptypeBox.C .iconBox{ background:#64cd3f}
    #ptypeListContainer .ptypeBox.F .iconBox{ background:#f37777}
    #ptypeListContainer .ptypeBox.H .iconBox{ background:#e05a9f}
</style>