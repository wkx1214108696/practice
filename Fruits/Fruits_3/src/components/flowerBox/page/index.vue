<template>
    <div>
        
        <h1>更多水果</h1>
        <h2>
            <span>您选择的水果是：</span>{{fruitNow}}
        </h2>
            
        <router-link to="/">
            <div>
                <button>
                    返回
                </button>
            </div>
        </router-link>
        
        <div 
        v-for="(item,index) in list" 
        :key="index" v-if="show" 
        class="fruit"
        @click="handClick(item.title)"
        >
            <div>
                <img :src="item.img" alt="" >
            </div>
            <p>名称：{{item.title}}</p>
        </div>
    </div>
    
</template>

<script>
import aa from '../../nav'
import {mapState, mapMutations} from 'vuex'
export default {
    
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
            this.chooseFruit(title)
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
h2 {
    span {
        color: green;
        font-size: 33px;
    }
}
.fruit {
    div{
        height: 200px;
        width: 200px;
    }
    display: inline-block;
    width: 250px;
    height: 250px;
}
img {
    width: 200px;
    height: 200px;
}
button {
    width: 50px;
    height: 20px;
    background: green;
}
</style>

