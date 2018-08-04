<template>
    <div class="sidebar-navigation">
        <div class="logo">
            <a href="#">Ryan<em>Lee</em></a>
        </div>
        <nav>
            <ul>
                <li v-for="(li, index) in asideList">
                    <a href="javascript:;"
                       @click="changeCurrent(index)"
                       :class="{'active-section': index === currentLink}"
                    >
                        <span class="rect"></span>
                        <span class="circle"></span>
                        {{li.title}}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import scroll from '../tool/scroll'
    export default {
        name: "Aside",
        data: function () {
            return {
                currentLink: 0,
                asideList: [
                    {
                        id: '#home',
                        title: '首页'
                    },{
                        id: '#album',
                        title: '相册'
                    },{
                        id: '#picture',
                        title: '图片展示'
                    },{
                        id: '#video',
                        title: '视频'
                    },{
                        id: '#blog',
                        title: '博客'
                    },{
                        id: '#contact',
                        title: '联系我'
                    },
                ]
            }
        },
        methods: {
            changeCurrent: function (index) {
                var that = this;
                scroll.call(this, index, function () {
                    that.currentLink =  index;
                    that.windowScroll();
                })
            },
            windowScroll: function () {
                var that = this;
                var sections = document.getElementsByClassName('section');
                window.onscroll = function () {
                    var scrollTop = document.documentElement.scrollTop;
                    for( var i=0; i<sections.length; i++ ) {
                        if( scrollTop >= sections[i].offsetTop - 20 ) {
                            that.currentLink = i;
                        }
                    }
                }
            }
        },
        mounted: function () {
            this.windowScroll();
        }
    }
</script>

<style scoped lang="scss">
    .sidebar-navigation{
        width: 220px;
        float: left;
        height: 100%;
        position: fixed;
        background-color: rgba(12,12,12,0.9);
        z-index: 10;
        .logo{
            position: absolute;
            width: 100%;
            height: 140px;
            line-height: 100px;
            background-color: #45489a;
            padding: 20px;
            text-align: center;
            a{
                text-decoration: none;
                color: #fff;
                font-size: 18px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                height: 100px;
                width: 100%;
                display: inline-block;
                border: 1px solid rgba(250,250,250,0.5);
                em{
                    font-style: normal;
                    font-weight: 300;
                }
            }
        }
        nav{
            position: relative;
            top: 400px;
            left: 60%;
            transform: translateX(-60%) translateY(-60%);
            ul{
                margin-left: 45px;
                list-style: none;
                padding: 0;
                li{
                    padding: 10px 0;
                    a{
                        display: inline-block;
                        color: #fff;
                        margin-top: 5px;
                        text-decoration: none!important;
                        font-size: 15px;
                        letter-spacing: 0.5px;
                        text-transform: capitalize;
                    }
                    span{
                        display: inline-block;
                        position: relative;
                    }
                    .rect{
                        height: 1px;
                        width: 0px;
                        left: 0;
                        bottom: 5.5px;
                        background-color: #fff;
                        -webkit-transition: -webkit-transform 0.1s, width 0.6s;
                        -moz-transition: -webkit-transform 0.1s, width 0.6s;
                        transition: transform 0.1s, width 0.6s;
                    }
                    .circle{
                        margin-right: 5px;
                        height: 10px;
                        width: 10px;
                        left: 0px;
                        top: -1px;
                        border-radius: 50%;
                        background-color: transparent;
                        border: 2px solid #fff;
                        transition: all 0.3s;
                    }
                    .active-section .rect {
                        width: 30px;
                    }
                    .active-section .circle {
                        background-color: #fff;
                    }
                }
            }
        }
    }
</style>
