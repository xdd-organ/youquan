<template>
    <div id="app2">
        <div class="all">
            <headerIndex></headerIndex>
            <navigateIndex></navigateIndex>
            <carousel></carousel>
            <div class="catalog">
                <div class="catalog_table1 catalog_table">
                    <div class="catalog_cpml">产品目录</div>
                    <div>
                        <div class="catalog_td catalog_td1">
                            <div><li>电源管理</li></div>
                            <div>
                                <ul>
                                    <li v-for="(item, index) in productList[0].slice(0,9)"><a @click="toView(0, 'product')">{{item.title_one}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td2">
                            <div><li>音频</li></div>
                            <div>
                                <ul>
                                    <li v-for="item in productList[1].slice(0,9)"><a @click="toView(1, 'product')">{{item.title_one}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td3">
                            <div><li>分立器件</li></div>
                            <div>
                                <ul>
                                    <li v-for="item in productList[2].slice(0,9)"><a @click="toView(2, 'product')">{{item.title_one}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td4">
                            <div><li>MCU</li></div>
                            <div>
                                <ul>
                                    <li v-for="item in productList[3].slice(0,9)"><a @click="toView(3, 'product')">{{item.title_one}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="catalog_table2 catalog_table">
                    <div class="catalog_yyfa">光电器件</div>
                    <div>
                        <ul>
                            <li v-for="item in productList[4].slice(0,9)"><a @click="toView(4, 'product')">{{item.title_one}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copy_menu">
                <div class="copy_menu_lb">
                    <div>关于优荃</div>
                    <div>
                        <ul>
                            <li><a @click="toView(0, 'about')">公司简介</a></li>
                            <li><a @click="toView(1, 'about')">企业文化</a></li>
                            <li><a @click="toView(2, 'about')">荣誉资质</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>产品中心</div>
                    <div>
                        <ul>
                            <li><a @click="toView(0, 'product')">电源管理</a></li>
                            <li><a @click="toView(1, 'product')">音频</a></li>
                            <li><a @click="toView(2, 'product')">分立器件</a></li>
                            <li><a @click="toView(3, 'product')">MCU</a></li>
                            <li><a @click="toView(4, 'product')">光电器件</a></li>
                        </ul>
                    </div>
                </div>
                <!--<div class="copy_menu_lb">
                    <div>应用方案</div>
                    <div>
                        <ul>
                            <li>推荐方案</li>
                            <li>3D指纹识别模块</li>
                            <li>LORA模块</li>
                            <li>BMS锂电池保护模块</li>
                            <li>BLE蓝牙模块</li>
                            <li>LED照明</li>
                            <li>移动电源</li>
                        </ul>
                    </div>
                </div>-->
                <div class="copy_menu_lb">
                    <div>新闻资讯</div>
                    <div>
                        <ul>
                            <li><a @click="toView(0, 'news')">公司动态</a></li>
                            <li><a @click="toView(1, 'news')">行业资讯</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>人力资源</div>
                    <div>
                        <ul>
                            <li><a @click="toView(0, 'hr')">员工风采</a></li>
                            <li><a @click="toView(1, 'hr')">致英才</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>联系我们</div>
                    <div>
                        <ul>
                            <li><a href="#/contact">深圳总部</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <slide :imageList = imageLists :imgWidth = imgWidth :containerStyle= containerStyle></slide>
            <footerIndex></footerIndex>
            <div class="footer">

            </div>
        </div>
    </div>
</template>


<script>

    import footerIndex from '@/components/footer/footer.vue'
    import headerIndex from '@/components/header/header.vue'
    import navigateIndex from '@/components/navigate/navigate.vue'
    import carousel from '@/components/carousel/carousel.vue'
    import slide from '@/components/slide/slide.vue'
    let productData = require('../product/product.json');
    let silideData = require('./index.json');

    export default {
        name: 'index',
        components:{
            footerIndex, headerIndex, navigateIndex, carousel, slide
        },
        data () {
            return {
                imageLists:[],
                imgWidth: "0",
                containerStyle: "0"
            }
        },
        methods:{
            toView: function (index, name) {
                this.$router.push({
                    name: name,
                    params: {
                        type: index
                    }
                })
            }
        },
        created: function () {
            this.productList = productData;
            this.imageLists = silideData
        }
    }
</script>

<style lang="less" scoped>

    .all {
        width: 950px;
        margin:0 auto;

        .catalog {
            width: 100%;
            height: 350px;
            .catalog_table1{
                width: 70%;
            }
            .catalog_title{
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
            }
            ul {
                margin-top: 15px;
            }
            li {
                margin-left: 20px;
                margin-top: 10px;
            }

        }
        .catalog_table1 {
            width: 200px;
            height: 350px;
            border: 1px solid #d7d7d7;
        }
        .catalog_table2{
            width: 29%;
            margin-left: 1%;
            height: 350px;
            border: 1px solid #d7d7d7;
            li{
                width: 85%;
                height: 23px;
                border-bottom: 1px dotted #CCC;
                line-height:10px;
            }
            ul {
                li:hover {
                    color: #2baee9;
                }
            }
        }
        .catalog_table {
            float: left;
            .catalog_cpml {
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
                height: 35px;
                line-height: 35px;
                margin-left: 10px;
            }
            .catalog_yyfa {
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
                height: 35px;
                line-height: 35px;
                padding-left: 10px;
            }
        }
        .catalog_td {
            float: left;
            border-top: 1px solid #d7d7d7;
            border-right: 1px solid #d7d7d7;
            height: 313px;
            width: 25%;
            div:first-of-type{
                color: black;
                font-size: 12px;
                font-weight: bold;
            }
            ul {
                li:hover {
                    color: #2baee9;
                }
            }
        }
        .catalog_td4{
            border-right: 1px none #d7d7d7;
        }
        .catalog_yyfa {
            border-bottom: 1px solid #d7d7d7;

        }
        .copy_menu {
            margin-top: 10px;
            height: 270px;
            border: 1px solid #d7d7d7;
        }
        .copy_menu_lb {
            float: left;
            width: 20%;
            div:first-of-type{
                color: black;
                font-size: 12px;
                font-weight: bold;
                margin-left: 20px;
                margin-top: 15px;
            }
            ul {
                margin-top: 10px;
            }
            li {
                margin-left: 20px;
                margin-top: 10px;
            }
            li:hover {
                color: #2baee9;
            }
        }
        .footer{
            height: 30px;
        }
        a {
            text-decoration:none;
            color:inherit;
        }
    }



</style>