<template>
    <div class="home1">
        <nav-page></nav-page>
        <router-link to="/home">
                <el-button>
                    返回首页
                </el-button>
        </router-link>
        <h2>
            <span>您选择的水果是：</span>{{fruitNow}}
        </h2>
        <el-col :span="18" :offset="3">
            <div
                v-for="(item,index) in list" 
                :key="index" v-if="show" 
                class="fruit"
                @click="handClick(item.title)"
                >
                <el-container>
                    <el-header height="200px"><img :src="item.img" alt="" ></el-header>
                    <el-main>{{item.title}}</el-main>
                </el-container>
            </div>
            
        </el-col>
    </div>
</template>

<script>
import navPage from '../../NavTop'
import {mapState, mapMutations} from 'vuex'
export default {
    components: {
        navPage
    },
    data() {
       return {
            list:[],
       }
    },
    methods: {
        getData() {
            this.$axios.get('/api/index.json')
            .then(res => {
                var buyList = res.data[0];
                var flowerList = res.data[2];
                var lunboList = res.data[3];
                this.list = buyList.concat(flowerList).concat(buyList).concat(lunboList)
                console.log(this.list)
            })
        },
        handClick(title) {
            this.chooseFruit(title);
        },
        ...mapMutations(['chooseFruit'])
    },
    computed: {
        show() {
            return this.list.length
        },
        ...mapState(['fruitNow'])
    },
    mounted() {
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
.home1 {
    min-width: 1360px;
}
h2 {
    text-align: center;
    span {
        color: green;
        font-size: 33px;
    }
}
.fruit {
    display: inline-block;
    border: 2px solid #fff;
    height: 250px;
    &:hover {
        border: 2px solid rgba(1, 159, 29, 0.45);
    }
    .el-header {
        img {
            width: 200px;
            height: 200px;
        }
    }
    .el-main {
        text-align: center;
    }
}
button {
    display: block;
    text-align: center;
    margin: 10px auto;
}
</style>

