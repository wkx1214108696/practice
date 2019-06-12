<template>
   <div>
        <h1>水果分页</h1>
        <div class="con">
            <img :src="msg.img" alt="">
                <p>名字：{{msg.title}}</p>
                <p>价格：{{msg.price}}</p>
        </div>
        <router-link to="/home">
            <el-button>
                push返回首页
            </el-button>
        </router-link>
        <el-button @click="back">
            go返回
        </el-button>
   </div>
</template>

<script>
export default {
    name: "flowerPage",
    data() {
        return {
            msg: {}
        }
    },
    methods: {
         back() {
            // this.$router.push('/home');
            this.$router.go('-1');
        },
         getData() {
            this.$axios.get('/api/index.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(res => {
                console.log(res.data[2],this.$route.params.id);
                res.data[2].forEach(el => {
                    if (this.$route.params.id == el.id) {
                        this.msg = el
                    }
                });
                
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
.con {
    margin: 0 auto;
    width: 200px;
    height: 250px;
    img {
        width: 200px;
    }
}
button {
    display: block;
    margin: 10px auto;
}
</style>

