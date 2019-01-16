<template>
    <div class="all">
        id={{id}}
        <div><a @click="routerTo()">成功页</a></div>
    </div>
</template>

<script>
    export default {
        name: "article",
        data(){
            return{
                id : this.$route.params.id
            }
        },
        methods: {
            routerTo() {
                this.$router.push({
                    name: 'article'
                })
            }
        },
        created : function () {
            // var id = this.$route.params.id;
            // console.log("初始化" + id);
            // this.$data.id = id;
        }

    }
</script>

<style scoped lang="less">
    .all {
        width: 950px;
        margin: 0 auto;
    }
</style>