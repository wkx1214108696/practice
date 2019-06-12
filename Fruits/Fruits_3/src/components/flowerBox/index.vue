<template>
    <div class="figure-box">
        <com-herd></com-herd>
        <ul class="figure-box__body flex w yahei font-size--14">
            <router-link 
            tag="li" 
            id="figure-box" 
            v-for="(item, index) in list" 
            :to="'/flower/' + item.id"
            :key="index" 
            v-if="list.length"
            >
                <div class="figure-box__li__top">
                    <img :src="item.img" alt="">
                
                </div>
                <div class="figure-box__li__bottom">
                <p class="figure-box__li__bottom__title">{{item.title}}</p>
                <p class="figure-box__li__bottom__price"><span>￥{{item.price}}</span> <del>{{item.oldPrice}}</del></p>
                </div>
            </router-link>
        </ul>
      </div>
</template>
<script>
import ComHerd from '../headerComponent'
export default {
    props:{
        list: Array
    },
    components: {
        ComHerd
    }
}
</script>

<style lang="scss" scoped>
.figure-box {
	background: #fff;
}
.figure-box__top {
	margin-top: 10px;
}
.figure-box__body {
	padding: 9px 0 22px;
}
.figure-box__body li {
	padding: 2px 2px 1px 2px;
	border: 2px solid #fff;
	color: #434343;
	transition: border .5s;
}
.figure-box__body p {
	margin: 8px 0;
}
.figure-box__li__bottom__price span {
	font-size: 16px;
	color: #019F1D;
}
.figure-box__li__bottom__price del {
	color: #7D7D7D;
}
.figure-box__body li:hover {
	border: 2px solid rgba(1, 159, 29, 0.45);
}
</style>
