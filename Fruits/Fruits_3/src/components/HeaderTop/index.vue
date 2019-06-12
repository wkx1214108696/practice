<template>
    <div class="header">
        <div class="w">
            <div class="top">
                <span @click="handClick">您好,欢迎来到阿七果园子！</span>
                <div class="header__right fr">
                  [<a href="http://127.0.0.1:3000/">登录</a>] | [<a href="#"><span>注册有惊喜</span></a>] | <a href="#">我的果园</a> | <a href="#">手机果园</a> | <img src="../../assets/img/11.png" alt="" class="header__right__img--tel"> 400-720-0770
                </div>
            </div>
            <div class="bottom">
                <router-link to="/">
                    <img src="../../assets/img/1.png" alt="">
                </router-link>
                <div class="head__right fr">
                    <div class="head__right__search--hot">热点搜索：<a href="#">橙</a> <a href="#">苹果</a> <a href="#">香梨</a> <a href="#">火龙果</a> <a href="#">牛油果</a> <a href="#">柠檬</a></div>
                    <input type="text" placeholder="台湾青芒" class="head__right__search--input" v-model="keyword"><button class="head__right__search--button">搜索</button>
                    <ul class="search-list" v-show="keyword">
                        <li 
                        class="search-item"
                        v-for="(item, index) in searchlist" 
                        :key="index">
                            {{item}}
                        </li>
                        <li class="search-item" v-show="!searchlist.length">无搜索结果</li>
                    </ul>
                    <div class="head__right__express-delivery">
                        配送至
                        <input type="text" placeholder="济南" class="search head__right__express-delivery__button" >
                    <span>全国满百顺丰包邮</span>
                    </div>
                </div>	
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeard',
    props:{
      list: Array
    },
    data() {
      return {
          keyword: '',
          searchlist: []
      }
    },
    methods:{
      //测试
      handClick (e) {
          e.target.style.color = 'red'
      }
    },
    watch: {
      keyword() {
          if ( !this.keyword ) {
              this.searchlist = [];
              return
          }
          const result = [];
          this.list.forEach(el => {
              if( el.title.indexOf ( this.keyword ) > -1) {
                  result.push( el.title )
              }
          });
          this.searchlist = result;
      }
    }
}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 40px;
	background: #EEEEEE; 
	color:#7D7D7D;
    line-height: 40px;
    font-size: 12px;
    .top{
        .header__right {
            span {
                color: #e60012;
            }
            .header__right__img--tel {
	            margin-top: 12px;
            }
        }
    }
    .bottom {
        clear: both;
        .head__right {
	        width: 557px;
	        font-size: 12px;
	        color: #A0A0A0;
            position: relative;
            .search-list{
                width: 240px;
                height: 230px;
                overflow: hidden;
                position: absolute;
                top: 137px;
                left: 0;
                z-index: 999;
                .search-item {
                    background: #fff;
                    font-size: 16px;
                    line-height: 32px;
                    padding-left: 34px;
                    &:hover {
                        background: green;
                    }
                }
            }
            .head__right__search--hot {
                margin: 44px 0 13px;
                & a:hover {
                    color: #2A9F3F;
                }
            }
            .head__right__search--input {
            	width: 240px;
            	height: 30px;
            	padding-left: 35px;
            	font-size: 14px;
            	border:1px solid rgba(42, 159, 63, 1);
                background: url('../../assets/img/9.png') no-repeat;
                vertical-align: bottom;
            }
            .head__right__search--button {
            	width:75px;
            	height:30px;
            	background: #1B872E;
            	font-size: 16px;
            	color: #fff;
            }
            .head__right__express-delivery {
            	position: absolute;
            	left: 347px;
                top: 106px;
                .head__right__express-delivery__button {
                	text-align: center;
                	width: 50px;
                	height: 21px;
                	background: #fafafa;
                	font-size: 14px;
                	color: #2A9F3F;
                    border: 1px solid #AAAAAA;
                    vertical-align: center;
                }
                 span{
                	color: #2A9F3F;
                }
            }
        }
    }
}
</style>

