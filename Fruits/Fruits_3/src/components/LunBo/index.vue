<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in swiperLis" :key="index">
                <img :src="item.img" alt="">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import ComHerd from '../headerComponent'
export default {
    name: 'lunbo',
    components: {
        ComHerd
    },
    data () {
        return {
            swiperOption:{
            //    pagination:'.swiper-pagination', //分页器
            //    paginationClickable :true, //点击分页器进行切换
                // autoplay : 2000, //自动切换
                prevButton:'.swiper-button-prev', //左右点击切换
                nextButton:'.swiper-button-next',
                loop: true,//无缝循环,
           },
           swiperLis: [
                {img:require('../../assets/img/bg-pic.png')},
                {img:require('../../assets/img/bg_2.png')},
                {img:require('../../assets/img/4.png')},
                {img:require('../../assets/img/1.png')}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    clear: both;
    width: 100%;
    height: 406px;
    img {
        width: 100%;
        height: 406px;
    }
}
</style>
