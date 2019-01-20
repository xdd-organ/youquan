<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <carousel></carousel>
        <div class="news">
            <div class="news_table news_table_lx">
                <div class="news_table_lxwm">新闻资讯</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="news_table news_table_wz">
                <div class="news_table_gszb">{{title}}</div>
                <div class="content_table">
                    <div class="content_list" v-for="item in contentList">
                        <div class="content_title">{{item.title}}</div>
                        <div class="content_content"><p>{{item.content}}</p></div>
                        <div class="content_date">{{item.date}}</div>
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
    let newsData = require('./news.json');

    export default {
        name: "news",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "公司动态",
                    "行业动态"
                ],
                contentList: []

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
                this.contentList = newsData[arg];
            }
        },
        created: function () {
            this.title = this.titleList[0];
            this.contentList = newsData[0];
        }

    }
</script>

<style scoped  lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .news {
            width: 100%;
            height: 850px;
            border: 1px solid #d7d7d7;
            .news_table{
                float: left;
                .news_table_gszb, .news_table_lxwm{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .news_table_lx {
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
            .news_table_wz {
                width: 75%;
                .content_table{
                    width: 100%;
                    .content_list{
                        padding-top: 10px;
                        padding-left: 20px;
                        .content_title{
                            padding-top: 5px;
                            font-size: 15px;
                            font-weight: bold;
                        }
                        .content_content{
                            padding-top: 5px;
                            padding-right: 20px;
                            p{
                                text-indent:2em;
                            }
                        }
                        .content_date {
                            padding-top: 5px;
                        }
                    }
                    .content_list:hover {
                        cursor: pointer;
                        background: white;
                    }
                }

            }

        }

    }
</style>