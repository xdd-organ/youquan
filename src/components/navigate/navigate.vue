<template>
    <div class="navigate">
        <table class="navigate_table">
            <td class="navigate_td"><font color="white"><a href="#/">首&nbsp;&nbsp;&nbsp;&nbsp;页</a></font></td>
            <td class="navigate_td"><font color="white"><a href="#/about">关于优荃</a></font></td>
            <td class="navigate_td"><font color="white">产品中心</font></td>
            <td class="navigate_td"><font color="white">应用方案</font></td>
            <td class="navigate_td"><font color="white">合作伙伴</font></td>
            <td class="navigate_td"><font color="white">新闻资讯</font></td>
            <td class="navigate_td"><font color="white">人力资源</font></td>
            <td class="navigate_td"><font color="white">联系我们</font></td>
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
    }
    a {
        text-decoration:none;
        color:inherit;
    }
</style>