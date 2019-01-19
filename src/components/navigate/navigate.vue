<template>
    <div class="navigate">
        <table class="navigate_table">
            <td class="navigate_td"><a href="#/">首&nbsp;&nbsp;&nbsp;&nbsp;页</a></td>
            <td class="navigate_td"><a href="#/about">关于优荃</a></td>
            <td class="navigate_td"><a href="#/scheme">产品中心</a></td>
            <td class="navigate_td"><a href="#/scheme">应用方案</a></td>
            <td class="navigate_td">合作伙伴</td>
            <td class="navigate_td">新闻资讯</td>
            <td class="navigate_td">人力资源</td>
            <td class="navigate_td"><a href="#/contact">联系我们</a></td>
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
        width: 12%;
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
    }
    a {
        text-decoration:none;
        color:inherit;
    }
</style>