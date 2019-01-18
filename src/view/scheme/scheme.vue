<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <!--<carousel></carousel>-->
        <div class="scheme">
            <div class="scheme_table scheme_table_fat">
                <div class="scheme_table_yyfa">应用方案</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="scheme_table scheme_table_fac">
                <div class="scheme_table_tjfa">{{title}}</div>
                <div class="scheme_table_content" v-for="item in contentList">
                    <div class="content_list">
                        <div class="apple_list content_img">
                            <img :src="item.cover_url" alt="">
                        </div>
                        <div class="apple_list content_details">
                            <li>{{item.title}}</li>
                            <p>
                                {{item.content}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="scheme_table_page">
                    <Page :total="contentList.length" />
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
    let schemeData = require('./scheme.json');

    export default {
        name: "scheme",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "3D识别模块",
                    "LORA模块",
                    "BMS锂电池保护板",
                    "BLE蓝牙模块",
                    "PLC",
                    "电池",
                    "音响",
                    "LED照明"
                ],
                contentList: []

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
                this.contentList = schemeData[arg];
                // this.content = this.contentList[arg];
            }
        },
        created: function () {
            this.title = this.titleList[0];
            this.contentList = schemeData[0];
            // this.content = this.contentList[0];
        }
    }
</script>

<style scoped lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .scheme {
            width: 100%;
            height: 1000px;
            border: 1px solid #d7d7d7;
            .scheme_table{
                float: left;
                .scheme_table_yyfa ,.scheme_table_tjfa{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .scheme_table_fat {
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
            .scheme_table_fac {
                width: 75%;
                .scheme_table_content {
                    .content_list {
                        border-bottom: 1px dotted #ccc;
                        /*padding-top: 20px;*/
                        /*padding-left: 20px;*/
                        height: 220px;
                        width: 100%;
                        img {
                            width: 260px;
                            height: 146px;
                            margin-top: 35px;
                            margin-left: 20px;
                            border: 1px solid #ccc;
                        }
                        .apple_list {
                            float: left;
                            height: 200px;
                            vertical-align: middle;
                        }
                        .content_img{
                            width: 290px;
                        }
                        .content_details {
                            font-size: 12px;
                            width: 400px;
                            li {
                                margin-top: 35px;
                                font-weight: bold;
                                font-size: 14px;
                            }
                            p{
                                text-indent: 20px;
                                margin-top: 10px;
                                margin-left: 15px;
                                margin-right: 15px;
                                line-height: 25px;
                                font-size: 12px;
                            }

                        }
                    }
                    .content_list:hover {
                        cursor: pointer;
                        background: white;
                        color: #2baee9;
                    }
                }

            }
            .scheme_table_page {
                margin-top: 15px;
                text-align: center;
            }
        }


    }
</style>