<template>
    <div class="all">
        <!--<remote-script src="http://api.map.baidu.com/api?v=3.0&ak=zDyZneP3vBERNestqdHYzsWQ60KfLDy0"></remote-script>-->
        <!--<script async type="javascript" src="http://api.map.baidu.com/api?v=3.0&ak=zDyZneP3vBERNestqdHYzsWQ60KfLDy0"></script>-->
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <show></show>
        <div class="contact">
            <div class="contact_table contact_table_lx">
                <div class="contact_table_lxwm">联系我们</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="contact_table contact_table_wz">
                <div class="contact_table_gszb">{{title}}</div>
                <div class="company_table">
                    <div class="company_name">深圳市优荃电子有限公司</div>
                    <li>公司地址：深圳市龙华新区民治街道民新社区民治大道241号民泰大厦525室</li>
                    <li>联系电话：13802570139</li>
                    <li>公司传真：0755-82240760</li>
                    <li>E-mail：249697983@qq.com</li>
                    <div class="company_zt">附近站台：民治地铁站、樟坑三区、横岭工业区等</div>
                    <div class="company_lx">途经线路：
                        地铁5号线、M572路、B656路、高快巴士4号、M112路、M347路、M365路a环、M374路、M521路、M537路
                    </div>
                    <baidu-map class="company_dt" :center="{lng: 114.049, lat: 22.610}" :zoom="14" scroll-wheel-zoom>
                        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                        <bm-marker :position="{lng: 114.0486, lat: 22.6197}" :dragging="true" @click="infoWindowOpen">
                            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">深圳市优荃电子有限公司</bm-info-window>
                        </bm-marker>
                    </baidu-map>
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
    import show from '@/components/show/show.vue'

    export default {
        name: "contact",
        components:{
            footerIndex, headerIndex, navigateIndex, show
        },
        data(){
            return{
                title: "",
                titleList: [
                    "深圳总部",
                ],
                show: true

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
            },
            infoWindowClose () {
                this.show = false
            },
            infoWindowOpen () {
                this.show = true
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
        .contact {
            width: 100%;
            height: 850px;
            border: 1px solid #d7d7d7;
            .contact_table{
                float: left;
                .contact_table_gszb, .contact_table_lxwm{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .contact_table_lx {
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
            .contact_table_wz {
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