<template>
    <div class="swiper w" >
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in list" :key="index" class="a" v-if="list.length">
                <div> 
                    <img :src="item.img" alt="">
                    <div class="carousel__li__hidden" id="show">
                    <p class="carousel__li__hidden__title">{{item.title}}</p>
                    <p class="carousel__li__hidden__desc">{{item.desc}}</p>
                    <p class="carousel__li__hidden__price"><span>￥39.00</span> 2斤</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev b" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'lunbo',
    props: {
        list: Array
    },
    data () {
        return {
           swiperOption:{
                prevButton:'.swiper-button-prev', //左右点击切换
                nextButton:'.swiper-button-next',
                loop: true,//无缝循环,
                slidesPerView : 4,//同时显示5个
                autoplay : 1000, //自动切换
           }
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper /deep/ {
    .swiper-wrapper{
        margin-left: 33px;
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-button-next{
        right: 0;
    }
}
.swiper {
    .carousel__li__hidden {
    	position: absolute;
    	bottom: -98px;
    	width: 185px;
    	height: 98px;
    	background: #fff;
    	opacity:0.8;
    	transition: all .5s;
	    padding-left: 5px;
	    font-size: 12px;
	    color: #535353;
        .carousel__li__hidden__title {
        	margin: 6px 5px 13px;
        	font-size: 14px;
        	font-family:MicrosoftYaHei;
        	color: #1B872E;
        	line-height: 14px;
        }
        .carousel__li__hidden__desc{
        	width: 180px;
        	height: 28px;
        	overflow: hidden; 
        }
        .carousel__li__hidden__price {
        	margin: 15px 5px 10px;
        	line-height: 12px;
            span {
            	font-size: 14px;
            	font-family: MicrosoftYaHei;
            	color: #FE5E13;
            }
        }
    }
    .swiper-slide:hover .carousel__li__hidden {
	    bottom: 0px;
    }   
}
</style>