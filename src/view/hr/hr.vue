<template>
    <div class="all">
        <headerIndex></headerIndex>
        <navigateIndex></navigateIndex>
        <show></show>
        <div class="hr">
            <div class="hr_table hr_table_lx">
                <div class="hr_table_lxwm">人力资源</div>
                <ul>
                    <li @click="toView(index)" v-for="(item,index) in titleList">{{item}}</li>
                </ul>
            </div>
            <div class="hr_table hr_table_wz">
                <div class="hr_table_gszb">{{title}}</div>
                <div class="company_table">
                    {{content}}
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
        name: "humanResources",
        components:{
            footerIndex, headerIndex, navigateIndex, show
        },
        data(){
            return{
                title: "",
                content: "",
                titleList: [
                    "人力资源",
                    "员工风采",
                    "致英才"
                ],
                contentList: [
                    "人力资源",
                    "员工风采",
                    "致英才"
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
            var type = this.$route.params.type;
            if (!type) {
                type = 0;
            }
            this.title = this.titleList[type];
            this.content = this.contentList[type];
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
                }

            }

        }

    }
</style>