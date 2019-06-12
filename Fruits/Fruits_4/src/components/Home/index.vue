<template>
    <div class="home">
        <home-nav></home-nav>
        <lunbo></lunbo>
        <buy
        :list="buyList"
        ></buy>
        <flower-box
        :list="flowerList"
        ></flower-box>
        <lunbo-s
        :list="lunboList"
        ></lunbo-s>
    </div>
    
</template>
<script>
import Buy from '../PanicBuy'
import HomeNav from '../NavTop'
import Lunbo from '../Lunbo'
import LunboS from '../Lunbo2'
import FlowerBox from '../FlowerBox'
export default {
    name: "home",
    components: {
        HomeNav,
        Lunbo,
        LunboS,
        Buy,
        FlowerBox
    },
    data () {
        return{
            buyList:[],
            flowerList:[],
            lunboList:[],
        }
    },
    methods: {
        back() {
            this.$router.push('/buy');
        },
        getData() {
            this.$axios.get('/api/index.json')
            .then(res => {
                console.log(res)
                this.buyList = res.data[0];
                this.flowerList = res.data[2];
                this.lunboList = res.data[3];
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>
<style scoped>
.home {
    min-width: 1360px;
}
</style>

