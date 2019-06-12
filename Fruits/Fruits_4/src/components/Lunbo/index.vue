<template>
    <div class="swiper">
        <el-carousel trigger="click">
            <el-carousel-item v-for="(item,index) in swiperLis" :key="index">
                <img :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
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
.swiper /deep/ .el-carousel__container{
    height: 406px;
}
.swiper /deep/ .el-carousel__arrow {
    width: 50px;
    height: 50px;
}
.swiper {
    width: 100%;
    img {
        width: 100%;
        height: 406px;
    }
}
</style>
