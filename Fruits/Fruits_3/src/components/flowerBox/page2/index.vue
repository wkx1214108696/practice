<template>
   <div>
        <h1>水果分页</h1>
        <div class="con">
            <img :src="msg.img" alt="">
                <p>名字：{{msg.title}}</p>
                <p>价格：{{msg.price}}</p>
        </div>
        <router-link to="/">
            <button>返回首页</button>
        </router-link>
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
    margin: 0 auto;
    width: 74px;
    height: 25px;
    background: green;
}
</style>

