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
                    <a hrev="javascript:void(0)"></a>
                </div>
                <div class="nav-menu">
                    <div class="menu-item">
                        <span>小米手机</span>
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
            a{
                width:110px;
                height:55px;
                display: block;
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
            &:hover{
                transform: translateX(-50%);
            }
        }
        
    }
    .nav-menu{
        display: flex;
        .menu-item{
            padding:0 20px;
            font-size:16px;
            line-height:112px;
            font-weight: bold;
            span{
                cursor:pointer  
            }
            &:hover{
                color:#FF6600;
            } 
        }
        
        
    }
    
}
</style>