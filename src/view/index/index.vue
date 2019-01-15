<template>
    <div id="app2">
        <div class="all">
            <headerIndex></headerIndex>
            <navigateIndex></navigateIndex>
            <carousel></carousel>
            <div class="catalog">
                <div class="catalog_table1 catalog_table">
                    <div class="catalog_cpml">产品目录</div>
                    <div>
                        <div class="catalog_td catalog_td1">
                            <div><li>电源管理</li></div>
                            <div>
                                <ul>
                                    <li>DC-DC降压</li>
                                    <li>DC-DC升压</li>
                                    <li>AC-DC</li>
                                    <li>复位IC</li>
                                    <li>LDO</li>
                                    <li>LED驱动</li>
                                    <li>锂电充电管理</li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td2">
                            <div><li>分立器件</li></div>
                            <div>
                                <ul>
                                    <li>二三极管</li>
                                    <li>MOS管</li>
                                    <li>EEPROM</li>
                                    <li>陶瓷散热片</li>
                                    <li>逻辑芯片</li>
                                    <li>SPI Flash</li>
                                    <li>霍尔器件</li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td3">
                            <div><li>MCU</li></div>
                            <div>
                                <ul>
                                    <li>ST MCU/8位/32位</li>
                                    <li>精简指令单片机</li>
                                    <li>USB HOST</li>
                                </ul>
                            </div>
                        </div>
                        <div class="catalog_td catalog_td4">
                            <div><li>音频放大</li></div>
                            <div>
                                <ul>
                                    <li>AB类</li>
                                    <li>CLASS &nbsp; D类</li>
                                    <li>数字功放</li>
                                    <li>DSP</li>
                                </ul>
                            </div></div>
                    </div>

                </div>
                <div class="catalog_table2 catalog_table">
                    <div class="catalog_yyfa">应用方案</div>
                    <div>
                        <ul>
                            <li>3D指纹识别模块</li>
                            <li>LORA模块</li>
                            <li>BMS锂电池保护板</li>
                            <li>BLE蓝牙模块</li>
                            <li>无刷电机&控制板PCBA</li>
                            <li>PLC</li>
                            <li>电池</li>
                            <li>音响</li>
                            <li>LED照明</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copy_menu">
                <div class="copy_menu_lb">
                    <div>关于优荃</div>
                    <div>
                        <ul>
                            <li>公司简介</li>
                            <li>企业文化</li>
                            <li>荣誉资质</li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>产品中心</div>
                    <div>
                        <ul>
                            <li>推荐产品</li>
                            <li>电源管理</li>
                            <li>分立器件</li>
                            <li>MCU</li>
                            <li>音频放大</li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>应用方案</div>
                    <div>
                        <ul>
                            <li>推荐方案</li>
                            <li>3D指纹识别模块</li>
                            <li>LORA模块</li>
                            <li>BMS锂电池保护模块</li>
                            <li>BLE蓝牙模块</li>
                            <li>LED照明</li>
                            <li>移动电源</li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>新闻资讯</div>
                    <div>
                        <ul>
                            <li>公司动态</li>
                            <li>行业资讯</li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>人力资源</div>
                    <div>
                        <ul>
                            <li>招聘职位</li>
                            <li>致英才</li>
                            <li>员工风采</li>
                        </ul>
                    </div>
                </div>
                <div class="copy_menu_lb">
                    <div>联系我们</div>
                    <div>
                        <ul>
                            <li>深圳总部</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footerIndex></footerIndex>
            <div class="footer">

            </div>
            <!--<div><a href="#/login">登录页</a></div>
            <div><a href="#/success">成功页</a></div>-->
        </div>
    </div>
</template>


<script>

    import footerIndex from '@/components/footer/footer.vue'
    import headerIndex from '@/components/header/header.vue'
    import navigateIndex from '@/components/navigate/navigate.vue'
    import carousel from '@/components/carousel/carousel.vue'

    export default {
        name: 'index',
        components:{
            footerIndex, headerIndex, navigateIndex, carousel
        },
        data () {
            return {
                value2: 0,
                theme1: 'dark'
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

        .catalog {
            width: 100%;
            height: 350px;
            .catalog_table1{
                width: 70%;
            }
            .catalog_title{
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
            }
            ul {
                margin-top: 15px;
            }
            li {
                margin-left: 20px;
                margin-top: 10px;
            }

        }
        .catalog_table1 {
            width: 200px;
            height: 350px;
            border: 1px solid #d7d7d7;
        }
        .catalog_table2{
            width: 29%;
            margin-left: 1%;
            height: 350px;
            border: 1px solid #d7d7d7;
            li{
                width: 85%;
                height: 23px;
                border-bottom: 1px dotted #CCC;
                line-height:10px;
            }
        }
        .catalog_table {
            float: left;
            .catalog_cpml {
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
                height: 35px;
                line-height: 35px;
                margin-left: 10px;
            }
            .catalog_yyfa {
                color: #DA251E;
                font-size: 16px;
                font-weight: bold;
                height: 35px;
                line-height: 35px;
                margin-left: 10px;
            }
        }
        .catalog_td {
            float: left;
            border-top: 1px solid #d7d7d7;
            border-right: 1px solid #d7d7d7;
            height: 313px;
            width: 25%;
            div:first-of-type{
                color: black;
                font-size: 12px;
                font-weight: bold;
            }
        }
        .catalog_yyfa {
            border-bottom: 1px solid #d7d7d7;

        }
        .copy_menu {
            margin-top: 10px;
            height: 270px;
            border: 1px solid #d7d7d7;
        }
        .copy_menu_lb {
            float: left;
            width: 16.6%;
            div:first-of-type{
                color: black;
                font-size: 12px;
                font-weight: bold;
                margin-left: 20px;
                margin-top: 15px;
            }
            ul {
                margin-top: 10px;
            }
            li {
                margin-left: 20px;
                margin-top: 10px;
            }
        }
        .footer{
            height: 30px;
        }


    }



</style>