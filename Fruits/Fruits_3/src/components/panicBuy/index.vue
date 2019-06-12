<template>
    <div class="panic-buy w">
         <ul class="yahei flex font-size--12">
          <li v-for="(item, index) in list" :i="index" :key="index"  v-if='list.length' >
            <div class="panic-buy__top">
              <div class="panic-buy__top__timer">
                <img src="../../assets/img/4.png" alt="">
              </div>
              <img :src="item.img" alt="" class="panic-buy__top__img--fruit" @click="buy(index)">
            </div>
            <div class="panic-buy__bottom">
              <p class="panic-buy__bottom__title">{{item.title}}</p>
              <p class="panic-buy__bottom__desc">{{item.desc}}</p>
              <Dtime
              :endtime="time"
              ></Dtime>
              <p class="panic-buy__bottom__price"><span>{{item.price}}</span>  5斤  <del>{{item.oldPrice}}</del></p>
              <div class="panic-buy__bottom__people--num">
                {{item.numPeople}}人已购买
                <div @click="buy(index)">立即抢购</div>
              </div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
import Dtime from '../time'

import {mapState, mapMutations} from 'vuex'
import { setTimeout } from 'timers';
export default {
    name: 'panicBuy',
    props: {
        list: Array
    },
    components: {
        Dtime
    },
    data() {
        return {
            i: this.index,
            listData: [],
            img:'',
            time: '2019-12-31',
            title: ''
        }
    },
    methods: {
        fn() {
            console.log(this.listData[0].img)
        },
        formatTime (i) { //格式化时间
            if (i < 10) {
                return '0' + i;
            } else {
                return i;
            }
        },
        Countdown() {
            let end = new Date('2019-12-31');
            let _this = this;
            let timer = setInterval(function(){
                var day, hour, minute, second, interval;
                var start = new Date();
                interval = end - start;
                interval /= 1000;
                var me  = this;
                day = _this.formatTime(parseInt(interval / 60 / 60 / 24));
                hour = _this.formatTime(parseInt(interval / 60 / 60 % 24));
                minute = _this.formatTime(parseInt(interval / 60 % 60));
                second = _this.formatTime(parseInt(interval % 60));
                _this.time = day + '天' + hour + '小时' + minute + '分' + second + '秒'
            },1000)
        },
        ...mapMutations(['panic']),
        buy(index) {
            const dataInfo = this.list[index];
            this.panic(dataInfo);
            this.$router.push('/buy')
        }
    },
    mounted() {
        // this.Countdown();
    },
    computed: {
        ...mapState(['panicBuy'])
    }

}
</script>

<style lang="scss" scoped>
// import './style/base.scss';
@mixin text-show {
    white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.panic-buy {
    clear: both;
    margin-top: 40px;
    li {
        position: relative;
	    width: 235px;
	    height: 420px;	
	    background:rgba(255,255,255,1);
        transition: all 1s;
        .panic-buy__top {
            .panic-buy__top__timer {
            	position: absolute;
            	left: 10px;
                top: 0;
            }
        }
        .panic-buy__bottom {
            .panic-buy__bottom__title {
            	margin: 11px 0 0 20px;
            	font-size: 16px;
            	color:rgba(83,83,83,1);
            	line-height: 17px;
            }
            .panic-buy__bottom__desc {
            	margin: 8px 20px 12px;
            	font-family:SimSun;
            	color:rgba(170,170,170,1);
                @include text-show;
            	line-height: 13px;
            }
            .panic-buy__bottom__price {
            	margin: 11px 0 0 20px;
            	color: #535353;
                line-height: 12px;
                span {
                	font-size: 16px;
                	color: #e60012;
                }
            }
            .panic-buy__bottom__people--num {
            	height: 23px;
            	margin: 17px 25px 17px 20px;
            	color: #AAAAAA;
                line-height: 23px;
                div {
                	float: right;
                	width: 83px;
                	height: 23px;
                	background: #e60012;
                	text-align: center;
                	color: #fff;
                	line-height: 23px;
                    border-radius:3px;
                    cursor: pointer;
                }
            }
        }
        &:hover {
            box-shadow:0px 6px 6px 0px rgba(0, 0, 0, 0.35);
            .panic-buy__bottom__title {
            	color: #1B872E;
            }
        }
    }
}
</style>
