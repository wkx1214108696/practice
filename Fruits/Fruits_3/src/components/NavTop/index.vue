<template>
    <div class="nav">
        <div class="w">
            <ul class="nav__body">                                       
              <li class="list nav__body__nav" id="nav">
                <a href="#">全部商品</a>
                <ul class="nav__body__nav__body" id="navList">         
                  <li><a href="#">所有鲜果</a></li>
                  <li><a href="#">进口鲜果</a></li>
                  <li><a href="#">国产鲜果</a></li>
                  <li><a href="#">休闲食品</a></li>
                  <li><a href="#">礼盒花篮</a></li>
                  <li><a href="#">消费卡券</a></li>
                  <li><a href="#">宝贝水果</a></li>
                  <li><a href="#">孕妇水果</a></li>
                  <li><a href="#">老人水果</a></li>
                  <li><a href="#">其它</a></li>
                </ul>
              </li>
              <li><a href="#">首页</a></li>
              <li><a href="#">进口鲜果</a></li>
              <li><a href="#">国产鲜果</a></li>
              <li><a href="#">在线充值</a></li>
              <li><a href="#">团购配送</a></li>
              <li><a href="#">其它</a></li>
            </ul>
            <div class="nav__shopping-cart fr">购物车</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeNav'
}
</script>

<style lang="scss" scoped>
.nav {
    clear: both;
    height: 61px;
    margin-top: 5px;
	background: #019F1D;
	line-height: 61px;
    font-size:16px;
    li {
        float: left;
        &:hover {
        	background: #1B872E;
        }
        a {
        	display: inline-block;
        	padding: 0 17px;
        	font-size:16px;
        	color: #fff;
        }
        &:first-child:hover .nav__body__nav__body{
            color: red;
            display: block;;
        }
    }
    .nav__body__nav {
        position: relative;
        width: 116px;
        &:hover {
        	background: #019F1D;
        }
        text-align: center;
        .nav__body__nav__body {
        	display: none;
        	position: absolute;
        	background: #019F1D;
            z-index: 999;
            li {
            	width: 116px;
            	height: 26px;
                color: #fff;
                &:hover {
                    background: #FDEF36;
                }
                line-height: 26px;
                a {
                    font-size: 14px;
                    &:hover {
                    	color: #29472E;
                    }
                }
            }
        }
    }
    .nav__shopping-cart {
    	width: 150px;
    	height: 61px;
    	background: #73c328 url('../../assets/img/2.png') no-repeat 0 -1px;
    	padding-left: 67px;
    	color: #FDEF36;
    	border-left: 1px solid rgba(253,239,54,0.4);
    	border-right: 1px solid rgba(253,239,54,0.4);
    }
}

</style>

