<template>
    <div>
        <div class="foot">
            <img src="../../assets/img/10.png" alt="">
        </div>
      <footer>
        <div class="w">
          <foot-list
          :list="list"
          ></foot-list>
          <div class="contact font-size--12">
            <img src="../../assets/img/8.png" alt="">
            <p>客服电话：0571-83539906<br>地址：浙江省杭州市萧山区</p>
          </div>
        </div>
        <div class="footer__bottom font-size--12">
          Copyright ©2005-2014 阿七果园子 aqishop.com All Rights Reserved　 浙IC
        </div>
      </footer>
      
    </div>
</template>

<script>
import footList from '../list'
export default {
    components: {
      footList
    },
    props: {
      list: Array
    },
    mounted() {
      console.log(this.list)
    }
}
</script>

<style lang="scss" scoped>
.foot {
	height:74px;
	text-align: center;
	line-height: 74px;
	border:1px solid rgba(238, 238, 238, 1);
	box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.15);
	background: #fff;
    img {
    	margin: 16px 0;
    }
}
footer {
  height: 180px;
  position: relative;
    .w {
    	margin: 54px auto 64px;
    }
    
    .contact {
    	width: 300px;
    	height: 127px;
      position: absolute;
      right: 140px;
      top: 0;
    	border-left: 2px solid #fff;
    	padding-left: 70px;
    	color: #000;
        img {
        	margin: 8px 0;
        }
    }
}
.footer__bottom {
	height: 55px;
	line-height: 55px;
	background: #000;
	text-align: center;
	color: #626262;
	clear: both;
}
</style>
