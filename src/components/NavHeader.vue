<template>
    <div class="header">
        <div class="top-bar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="">小米商城</a>
                    <a href="">Mui</a>
                    <a href="">云服务</a>
                    <a href="">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:void(0)">登录</a>
                    <a href="javascript:void(0)">退出</a>
                    <a href="javascript:void(0)">我的订单</a>
                    <a href="javascript:void(0)" class="my-cart"><span></span>购物车</a>   
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="log-box">
                    <a href="javascript:void(0)"></a>
                </div>
                <div class="nav-menu">
                    <div class="menu-item">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                <li>
                                    <div class="pro-img">
                                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" />
                                    </div>
                                    <div class="pro-name">小米CC9e</div>
                                    <div class="pro-price">￥1299.00元</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="menu-item">
                        <span>RedMi红米</span>
                    </div>
                    <div class="menu-item">
                        <span>电视</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import './../assets/css/mixin.scss';
@import "../assets/css/base.scss";
.header{
    .top-bar{
        display:flex;
        height:40px;
        line-height:40px;
        background:#333333;
        .container{
            @include flex();
        }
        a{
            color:#fff;
            padding:0 10px;
        }
        .my-cart{
            background-color: #FF6600;
            text-align: center;
            color: #ffffff;
            margin-right: 0;
            width:100px;
            display: inline-block;
            span{
                display: inline-block;
                width: 16px;
                height: 12px;
                background:url("../assets/images/icon-cart-checked.png") no-repeat left center;
                background-size:contain;
            }
        }
        
    }
}
.nav-header{
    .container{
        display: flex;
        .log-box{
            background:#FF6600;
            width:55px;
            height:55px;
            overflow: hidden;
            margin-top:26px;
            a{
                width:115px;
                height:55px;
                display: block;
                transition: all 0.1s;
                &:hover{
                    transform: translateX(-50%);
                    
                }
                &:before{
                    display: inline-block;
                    content:"";
                    width:55px;
                    height:55px;
                    background:url("/imgs/mi-home.png");  
                }
                &:after{
                    display: inline-block;
                    content:"";
                    width:55px;
                    height:55px;
                    background:url("/imgs/mi-logo.png"); 
                }
            }
            
            
            
        }
        
    }
    .nav-menu{
        display: flex;
        .menu-item{
            padding:0 20px;
            font-size:16px;
            font-weight: bold;
            position:relative;
            span{
                cursor:pointer;
                line-height:112px; 
            }
            &:hover{
                color:#FF6600;
                .children{
                    display:block;
                }
            }
            .children{
                // display:none;
                position:absolute;
                left:0;
                top:120px;
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                border-top: 1px solid #E5E5E5;
                padding-bottom:30px;
                display: none;
                ul {
                    display: flex;
                    li{
                        .pro-img{
                            padding-top:30px;
                            padding-bottom:30px;
                            text-align: center;
                            img{
                                height:110px;
                            }
                        }
                        .pro-name{
                            line-height:30px;
                            font-size:12px;
                            color:#333333;
                            font-weight: bold;
                            text-align:center;
                            position:relative
                        }
                        .pro-price{
                            color:#FF6600;
                            text-align:center;
                        }
                        &:before{
                            content:"";
                            display:block;
                            height:100px;
                            width:1px;
                            border-left:1px solid #ddd;
                            position:absolute;
                            right:0px;
                            top:50%;
                            transform-origin: 0 50%;
                            transform: translateY(-50%);
                            
                        }
                    }
                }
            } 
        }
        
        
    }
    
}
</style>