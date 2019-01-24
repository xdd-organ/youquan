<template>
    <div class="navigate">
        <table class="navigate_table">
            <td class="navigate_td" @click="toView(0, 'index')">首&nbsp;&nbsp;&nbsp;&nbsp;页</td>
            <td class="navigate_td" @click="toView(0, 'about')">关于优荃</td>
            <td class="navigate_td" @click="toView(0, 'product')">产品中心</td>
            <td class="navigate_td" @click="toView(0, 'partner')">代理品牌</td>
            <td class="navigate_td" @click="toView(0, 'news')">新闻资讯</td>
            <td class="navigate_td" @click="toView(0, 'hr')">人力资源</td>
            <td class="navigate_td" @click="toView(0, 'contact')">联系我们</td>
        </table>
    </div>
</template>

<script>
    export default {
        name: "navigateIndex",
        computed:{
        },
        data(){
            return{
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
        }
    }
</script>

<style scoped>
    .navigate_table {
        width: 100%;
        /*background: #6F6F6F;*/
        background: #6a91ff;
    }
    .navigate {
        height: 50px;
    }
    .navigate_td {
        height: 40px;
        vertical-align: middle;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        color: white;
    }
    .navigate_td:hover{
        background: white;
        color: black;
        cursor: pointer;
    }
</style>