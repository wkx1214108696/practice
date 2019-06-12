<template>
    <div>
        <buy-heard
        :list="list"
        ></buy-heard>
        <div class="con">
            <img :src="img" alt="">
            <p>名字：{{title}}</p>
            <p>描述：{{desc}} </p>
        </div>
        <button @click="back">返回上一页</button>
        
    </div>
    
</template>

<script>
import BuyHeard from '@/components/header'
import {mapState, mapMutations} from 'vuex'
export default {
    components: {
        BuyHeard
    },
    data() {
        return {
            title:'',
            desc:'',
            img: '',
            list:[]
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        fn () {
            this.title = this.panicBuy.title;
            this.desc = this.panicBuy.desc;
            this.img = this.panicBuy.img
        },
        getData() {
            this.$axios.get('/api/index.json')
            .then(res => {
                this.list = res.data[0].concat(res.data[2]).concat(res.data[3])
            })
        }
    },
    mounted() {
        this.fn ();
        this.getData()
    },
    computed: {
        ...mapState(['panicBuy'])
    }
}
</script>
<style lang="scss" scoped>
.con {
    width: 600px;
    margin: 175px auto 0;
    img {
        width: 600px;
        height: 190px;
    }
}
button {
    display: block;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 10px auto;
}
</style>


