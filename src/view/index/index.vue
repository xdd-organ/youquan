<template>
    <div id="app2">
        <div class="all">
            <div class="header">
                <label>优荃电子公司</label>
            </div>
            <div class="navigate">
                <table>
                    <td>首&nbsp;&nbsp;&nbsp;&nbsp;页</td>
                    <td>关于优荃</td>
                    <td>产品中心</td>
                    <td>应用方案</td>
                    <td>合作伙伴</td>
                    <td>新闻资讯</td>
                    <td>人力资源</td>
                    <td>联系我们</td>
                </table>
            </div>
            <div>
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel">1
                            <!--<img src="http://www.paceic.com/FileUp/image/20130927/20130927103844_7539.jpg"/>-->
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2
                            <!--<img src="http://www.paceic.com/FileUp/image/20180712/20180712173627_6822.jpg"/>-->
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div>产品目录</div>
            <div>尾部</div>
            <div><a href="#/login">登录页</a></div>
            <div><a href="#/success">成功页</a></div>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue';
    import iView from 'iview';
    import 'iview/dist/styles/iview.css';


    export default {
        data () {
            return {
                value2: 0
/*
                value2: [
                    'http://www.paceic.com//FileUp/image/20130927/20130927103844_7539.jpg'
                ]
*/
            }
        }
    }
</script>

<style lang="less" scoped>

    .all {
        width: 50%;
        margin:0 auto;
        .header {
            background: aqua;
            height: 100px;
        }
        table {
            width: 100%;
        }
        td {
           width: 13%;
        }
    }


</style>