<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <carousel></carousel>
        <div class="hr">
            <div class="hr_table hr_table_lx">
                <div class="hr_table_lxwm">联系我们</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="hr_table hr_table_wz">
                <div class="hr_table_gszb">{{title}}</div>
                <div class="company_table">
                    <div class="company_name">深圳市优荃电子有限公司</div>
                    <li>公司地址：深圳市龙岗区坂田街道里浦街5号博兴楼C702</li>
                    <li>联系电话：13802570139</li>
                    <li>公司传真：0755-82240760</li>
                    <li>E-mail：249697983@qq.com</li>
                    <div class="company_zt">附近站台：五和地铁站、大发埔油站等</div>
                    <div class="company_lx">途经线路：
                        M301路、M395路、M398路、M415路、M447路、M567路、高峰专线169路
                        313路、317路、391路、612路、M263路、M271路、M281路、M282路、
                        M342路、M346路、M374路、M383路、M461路、M488路、M491路、M533路、M547路、M566路、高峰专线71路
                    </div>
                    <div class="company_dt" id="container">

                    </div>
                </div>
            </div>
        </div>
        <footerIndex></footerIndex>
    </div>
</template>

<script>
    import footerIndex from '@/components/footer/footer.vue'
    import headerIndex from '@/components/header/header.vue'
    import navigateIndex from '@/components/navigate/navigate.vue'
    import carousel from '@/components/carousel/carousel.vue'

    export default {
        name: "hr",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                titleList: [
                    "深圳总部",
                ]

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
            }
        },
        created: function () {
            this.title = this.titleList[0];
        }

    }
</script>

<style scoped  lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .hr {
            width: 100%;
            height: 850px;
            border: 1px solid #d7d7d7;
            .hr_table{
                float: left;
                .hr_table_gszb, .hr_table_lxwm{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .hr_table_lx {
                width: 25%;
                border-right: 1px solid #d7d7d7;
                height: 100%;
                li {
                    line-height: 35px;
                    font-size: 15px;
                    padding-left: 10px;
                }
                li:hover {
                    cursor: pointer;
                    background: white;
                    font-weight: bold;
                }
            }
            .hr_table_wz {
                width: 75%;
                .company_table{
                    padding-left: 10px;
                    .company_name {
                        margin-top: 20px;
                        font-size: 16px;
                        font-weight: bold;
                        height: 40px;
                    }
                    li {
                        margin-top: 5px;
                    }
                    .company_zt{
                        margin-top: 20px;
                    }
                    .company_lx {
                        margin-top: 10px;
                        margin-right: 20px;
                    }
                    .company_dt {
                        margin-right: 10px;
                        margin-top: 20px;
                        height: 500px;
                        border: 1px solid #d7d7d7;
                    }
                }

            }

        }

    }
</style>