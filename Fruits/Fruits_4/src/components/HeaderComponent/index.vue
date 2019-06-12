<template>
    <el-row class="head" type="flex" justify="center">
        <el-col :span="18">
            <el-row type="flex" justify="space-between" class="buy">
                <el-col :span="4" >{{c}} <span>{{e}}</span></el-col>
                <el-col :span="2" > 
                    <router-link to="/more">
                        <el-button size="mini" round>more >></el-button>
                    </router-link>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['boxName']),
        c() {
            return this.boxName.c
        },
        e() {
            return this.boxName.e
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    padding-top: 10px;
    margin-top: 30px;
    border-bottom: 4px solid #019F1D;
    .el-col {
        &:first-child {
            color: #019F1D;
            span {
                color: #7D7D7D;
            }
        }
        &:last-child {
            .el-button {
                background: #019F1D;
                color: #fff;
            }
        }
    }
}

</style>
