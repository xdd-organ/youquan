<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <!--<carousel></carousel>-->
        <div class="product">
            <div class="product_table product_table_fat">
                <div class="product_table_cpzx">产品中心</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="product_table product_table_fac">
                <div class="product_table_cpzs">{{title}}</div>
                <div class="product_title_list" v-for="item in titleData">
                    <div class="product_title title_list_one">{{item.title_one}}</div>
                    <div class="product_title title_list_two">{{item.title_two}}</div>
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
    let productData = require('./product.json');

    export default {
        name: "product",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "电源管理",
                    "音频",
                    "分立器件",
                    "MCU/处理器",
                    "光电器件"
                ],
                titleData: []

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
                this.titleData = productData[arg];
                // this.content = this.contentList[arg];
            }
        },
        created: function () {
            this.title = this.titleList[0];
            this.titleData = productData[0];
        }
    }
</script>

<style scoped lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .product {
            width: 100%;
            height: 1000px;
            border: 1px solid #d7d7d7;
            .product_table{
                float: left;
                .product_table_cpzx ,.product_table_cpzs{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .product_table_fat {
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
            .product_table_fac {
                width: 75%;
                .product_title_list {
                    .product_title {
                        float: left;
                        padding-left: 10px;
                        padding-top: 10px;
                        font-size: 13px;
                    }

                    .title_list_one{
                        width: 25%;
                        color: #e84343;
                    }
                    .title_list_two{
                        width: 75%;
                        border-left: 1px solid #d7d7d7;
                    }
                }
                .product_title_list:hover {
                    background: #ff7569;
                    font-weight: bold;

                }
            }
        }


    }
</style>