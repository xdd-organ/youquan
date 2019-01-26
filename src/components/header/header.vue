<template>
    <div class="header">
        <div class="header_ logo"></div>
        <div class="header_ header_right">
            <div class="search">服务热线：13802570139
                <Input search placeholder="请输入关键字"/>
            </div>
        </div>
        <!--<span class="group_name">优荃电子</span>-->
        <!--<div class="search"><input placeholder="请输入关键字" clearable/></div>-->

    </div>
</template>

<script>
    export default {
        name: "headerIndex",
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

<style scoped lang="less">
    .header {
        /*background: aqua;*/
        height: 100px;
        margin-top: 10px;
        .header_ {
            float: left;
            height: 100px;
        }
        .logo {
            background: url("../../assets/imgs/logo.png") no-repeat;
            width: 400px;
        }
        .header_right {
        }
    }
    .group_name {
        font-size: 30px;
        font-weight: bold;
    }
    .search {
        margin-top: 50px;
        margin-left: 175%;
        width: 200px;
        height: 100px;
    }
</style>