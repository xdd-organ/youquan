<template>
    <div class="header">
        <span class="group_name">优荃电子有限公司</span>
        <!--<div class="search"><input placeholder="请输入关键字" clearable/></div>-->
        <div class="search">服务热线：13802570139
            <Input search placeholder="请输入关键字"/>
        </div>
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

<style scoped>
    .header {
        /*background: aqua;*/
        height: 100px;
        margin-top: 10px;
    }
    .group_name {
        font-size: 30px;
        font-weight: bold;
    }
    .search {
        width: 200px;
        height: 30px;
        margin-left: 79%;
    }
</style>