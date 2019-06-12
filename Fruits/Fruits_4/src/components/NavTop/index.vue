<template>
        <el-row >
            <el-col :span="16" :offset="3">
                <el-menu
                    class="nav"
                    mode="horizontal"
                    background-color="#019F1D"
                    text-color="#fff"
                    active-text-color="#1B872E">
                    <el-submenu 
                        index="1">
                        <template slot="title"  class="title">全部商品</template>
                        <el-menu-item index="2-1">所有鲜果</el-menu-item>
                        <el-menu-item index="2-2">进口鲜果</el-menu-item>
                        <el-menu-item index="2-3">国产鲜果</el-menu-item>
                        <el-menu-item index="2-3">休闲食品</el-menu-item>
                        <el-menu-item index="2-3">礼盒花篮</el-menu-item>
                        <el-menu-item index="2-3">国产鲜果</el-menu-item>
                        <el-menu-item index="2-3">老人水果</el-menu-item>
                        <el-menu-item index="2-3">其他</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">首页</el-menu-item>
                    <el-menu-item index="3" >进口鲜果</el-menu-item>
                    <el-menu-item index="4">国产鲜果</el-menu-item>
                    <el-menu-item index="5">团购配送</el-menu-item>
                    <el-menu-item index="6">团购配送</el-menu-item>
                    <el-menu-item index="7">其他</el-menu-item>
            </el-menu>
            </el-col>
            <el-col :span="2"><a href=""><i class="el-icon-shopping-cart-2 car"></i> 购物车</a></el-col>
        </el-row>
</template>

<script>
export default {
    name: 'HomeNav'
}
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
.el-row {
    background-color:#019F1D;
    .el-col {
        .el-menu {
            max-height: 60px;
        }
        &:last-child {
            text-align: center;
            background: #73c328;
            border-left: 1px solid rgba(253,239,54,0.4);
            border-right: 1px solid rgba(253,239,54,0.4);
            a {
                color: #FDEF36;
                .car {
                    line-height: 60px;
                    font-size: 24px;
                }
            }
        }
    }
}
</style>

