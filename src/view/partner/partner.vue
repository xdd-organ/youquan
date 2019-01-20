<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <carousel></carousel>
        <div class="partner">
            <div class="partner_table partner_table_lx">
                <div class="partner_table_lxwm">合作伙伴</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="partner_table partner_table_wz">
                <div class="partner_table_gszb">{{title}}</div>
                <div class="company_table">
                    <div v-for="item in tempList" class="partner_td">
                        <a :href="item.domain" target="_blank">
                            <div class="partner_list partner_cover"><img :src="item.cover_url"/></div>
                            <div class="partner_list partner_content">
                                <h3>{{item.title}}</h3>
                                <p>{{item.content}}</p>
                            </div>
                        </a>
                    </div>
                    <div class="partner_table_page">
                        <Page :total="contentList.length" :page-size="7" @on-change="listPageData"/>
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
    let partnerData = require('./partner.json');

    export default {
        name: "partner",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "合作伙伴"
                ],
                contentList: [],
                tempList:[]

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
                this.contentList = partnerData[arg];
            },
            listPageData:function (curPage) {
                this.tempList = this.contentList.slice((curPage-1) * 7,curPage * 7);
            }
        },
        created: function () {
            this.title = this.titleList[0];
            this.contentList = partnerData[0];
            this.tempList = this.contentList.slice(0,7)
        }

    }
</script>

<style scoped  lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .partner {
            width: 100%;
            height: 850px;
            border: 1px solid #d7d7d7;
            .partner_table{
                float: left;
                .partner_table_gszb, .partner_table_lxwm{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .partner_table_lx {
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
            .partner_table_wz {
                width: 75%;
                .company_table{
                    .partner_td {
                        border-bottom: 1px solid #d7d7d7;
                        height: 100px;
                        .partner_list {
                            float: left;
                            padding-top: 10px;
                        }
                        .partner_cover {
                            padding-left: 10px;
                            width: 25%;
                            img {
                                height: 80px;
                                width: 150px;
                            }
                        }
                        .partner_content {
                            padding-right: 20px;
                            width: 75%;
                            p{
                                text-indent:2em;
                            }
                        }
                    }
                    .partner_td:hover {
                        background: white;
                        color: #2baee9;
                    }
                    .partner_table_page {
                        margin-top: 15px;
                        text-align: center;
                    }
                }

            }

        }

        a {
            text-decoration:none;
            color:inherit;
        }

    }
</style>