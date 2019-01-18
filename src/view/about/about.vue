<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <carousel></carousel>
        <div class="about">
            <div class="about_table about_table_gy">
                <div class="about_table_gyyq">关于优荃</div>
                <ul>
                    <li @click="toView(0)">公司简介</li>
                    <li @click="toView(1)">企业文化</li>
                    <li @click="toView(2)">荣誉资质</li>
                </ul>
            </div>
            <div class="about_table about_table_jj">
                <div class="about_table_gsjj">{{title}}</div>
                <div>
                    <p>{{content}}</p>
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
        name: "about",
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "公司简介",
                    "企业文化",
                    "荣誉资质"
                ],
                contentList: [
                    "我司（深圳优荃电子）是DIODES/达尔/美台，AOS万代，富满，长电，航天民芯，\n" +
                    "                        托微集成，UBIQ ,MPS 芯联，晶丰明源，微盟 南麟 ,圣邦微，亿光 ，\n" +
                    "                        CTmicro等授权一级代理商.专业经营电源IC、充电IC. 语 音IC. LDO、MOS管、\n" +
                    "                        肖特基 快恢复二极管，三极管，光耦，发光二极管，\n" +
                    "                        系列IC及MCU，公司成立 以来，一直致力于电子元器件经销业务，累积了丰富的经验。\n" +
                    "                        “诚信为本，以质取胜，真‘芯’服务”是 我们的宗旨",
                    "企业文化",
                    "荣誉资质"
                ]

            }
        },
        methods: {
            toView: function (arg) {
                this.title = this.titleList[arg];
                this.content = this.contentList[arg];
            }
        },
        created: function () {
            this.title = this.titleList[0];
            this.content = this.contentList[0];
        }
    }
</script>

<style scoped  lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
        .about {
            width: 100%;
            height: 500px;
            border: 1px solid #d7d7d7;
            .about_table{
                float: left;
                div:first-of-type{
                    height: 35px;
                    color: black;
                    line-height: 35px;
                    font-size: 16px;
                    font-weight: bold;
                    border-bottom: 1px solid #d7d7d7;
                    padding-left: 10px;
                }
            }
            .about_table_gy {
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
            .about_table_jj {
                width: 75%;
                p{
                    text-indent: 20px;
                    margin-top: 10px;
                    margin-left: 15px;
                    margin-right: 15px;
                    line-height: 30px;
                    font-size: 14px;
                }
            }

        }

    }
</style>