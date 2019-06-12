<template>
    <div>
        <com-herd></com-herd>
        <el-row type="flex" justify="center">
            <el-col :span="18" class="figure">
                <el-row type="flex" justify="space-between" class="figure__body">
                    <router-link 
                        tag="div" 
                        v-for="(item, index) in list" 
                        :to="'/flower/' + item.id"
                        :key="index" 
                        >
                        <el-container>
                            <el-main><img :src="item.img" alt=""></el-main>
                            <el-footer>
                                <p>{{item.title}}</p>
                                <p class="price"><span>￥{{item.price}}</span> <del>{{item.oldPrice}}</del></p>
                            </el-footer>
                        </el-container>
                    </router-link>
                </el-row>
            </el-col>
        </el-row>
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
.el-row {
    background: #fff;
    .figure {
        .figure__body {
            padding: 9px 0 22px;
            .el-container {
                border: 2px solid #fff;
                &:hover {
                    border: 2px solid rgba(1, 159, 29, 0.45);
                }
                color: #434343;
                transition: border .5s;
                .el-main {
                    padding: 0;
                }
                p {
                    margin: 8px 0;
                }
                .price {
                    span {
                        font-size: 16px;
                        color: #019F1D;
                    }
                    del {
                        color: #7D7D7D;
                    }
                }
            }
        }
    }
}

</style>
