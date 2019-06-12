<template>
    <div class="home3">
        <el-container>
            <el-aside><img :src="img" alt=""></el-aside>
            <el-container>
                <el-header><b>名字：</b>{{title}}</el-header>
                <el-main>
                    <p><b>描述：</b>{{desc}}</p>
                    <p><b>价格：</b>{{price}}</p>
                </el-main>
            </el-container>
        </el-container>
        <el-button @click="back">go返回上一页</el-button>
        <router-link to="/home">
            <el-button>push返回上一页</el-button>
        </router-link>
    </div>
</template>

<script>
import BuyHeard from '@/components/HeaderTop'
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'buyPage',
    components: {
        BuyHeard
    },
    data() {
        return {
            title:'',
            desc:'',
            img: '',
            price: '',
            list:[]
        }
    },
    methods: {
        back() {
            // this.$router.push('/home');
            this.$router.go('-1');
        },
        fn () {
            this.title = this.panicBuy.title;
            this.desc = this.panicBuy.desc;
            this.img = this.panicBuy.img
            this.price = this.panicBuy.price
        }
    },
    mounted() {
        this.fn ();
    },
    computed: {
        ...mapState(['panicBuy'])
    }
}
</script>
<style lang="scss" scoped>
.home3 {
    min-width: 1360px;
}
.el-container {
    margin: 0;
    color: #fff;
    background: #2A9F3F;
    width: 1000px;
    margin: 20px auto;
    .el-aside {
        img {
            width: 300px;
        }
    }
    .el-container {
        margin: 0;
        .el-header {
            text-align: center;
            background: green;
            line-height: 60px;
        }
        .el-main {
            p{
                margin-top: 20px;
            }
        }
    }
}
button {
    display: block;
    text-align: center;
    margin: 10px auto;
}
</style>


