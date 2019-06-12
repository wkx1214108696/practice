<template>
    <div>
        <home-head
        :list="list"
        ></home-head>
        <home-nav></home-nav>
        <lunbo></lunbo>
        <!-- <lunbo-child></lunbo-child> -->
        <buy
        :list="buyList"
        ></buy>
        <flower-box
        :list="flowerList"
        ></flower-box>
        <lunbo-s
        :list="lunboList"
        ></lunbo-s>
        <home-footer
        :list="footLists"
        ></home-footer>
    </div>
    
</template>
<script>
import HomeHead from '../../components/HeaderTop'
import Buy from '../../components/PanicBuy'
import HomeNav from '../../components/NavTop'
import Lunbo from '../../components/LunBo'
import LunboS from '../../components/LunBo2'
import FlowerBox from '../../components/FlowerBox'
import HomeFooter from '../../components/Footer'
export default {
    name: "home",
    components: {
        HomeHead,
        HomeNav,
        Lunbo,
        LunboS,
        Buy,
        FlowerBox,
        HomeFooter
    },
    data () {
        return{
            buyList:[],
            flowerList:[],
            lunboList:[],
            list:[],
            footLists:[
                {
                  title: "新手指南",
                  children: [
                      {title:"购物流程"},
                      {title:"账户注册"},
                      {title:"会员积分"},
                      {title:"联系客服"},
                  ]
                },
                {
                  title: "付款方式",
                  children: [
                      {title:"货到付款"},
                      {title:"在线支付"},
                      {title:"在线充值"},
                  ]
                },
                {
                  title: "配送服务",
                  children: [
                      {title:"配送运费"},
                      {title:"配送范围"},
                      {title:"配送时间"},
                      {title:"配送需知"},
                  ]
                },
                {
                  title: "售后服务",
                  children: [
                      {title:"关于商品的退换"},
                      {title:"关于退换的处理"},
                      {title:"关于退款"},
                      {title:"投诉建议"},
                  ]
                },
                {
                  title: "新手指南",
                  children: [
                      {title:"购物流程"},
                      {title:"账户注册"},
                      {title:"会员积分"},
                      {title:"联系客服"},
                  ]
                },
            ]
        }
    },
    methods: {
        getData() {
            this.$axios.get('/api/index.json')
            .then(res => {
                console.log(res)
                this.buyList = res.data[0];
                this.flowerList = res.data[2];
                this.lunboList = res.data[3];
                this.list = this.buyList.concat(this.flowerList).concat(this.lunboList)
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>
