<template>
    <div class="footlist">
        <div v-for="(item,index) in list" :key="index" class="con">
            <div class="con-title">
                <a href="">{{item.title}}</a>
            </div>
            <div v-if="item.children" class="con-con">
                <foot-list :list="item.children"></foot-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "footList",
    props: {
        list: Array
    }
}
</script>

<style lang="scss" scoped>
.con {
    display: inline-block;
    margin-right: 50px;
    font-size: 12px;
    vertical-align: top;
    width: 89px;
    &:nth-child(5) {
    	margin-right: 0;
    }
    .con-title{
        display: inline-block;
        font-weight: 800;
        a {
            color: #000;
        }
    }
    .con-con {
        display: inline-block;
    	margin-top: 13px;
        a:hover {
        	color: #019F1D;
        }
        .con-title {
            font-weight: 400;
        }
    }
}
</style>
