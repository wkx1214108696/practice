<template>
    <div class="home">
        <home-head
        :list="list"
        ></home-head>
        <keep-alive exclude="buyPage">
            <router-view/>
        </keep-alive>
        <home-footer
        :list="footLists"
        ></home-footer>
    </div>
</template>
<script>
import HomeHead from '../../components/HeaderTop'
import HomeFooter from '../../components/Footer'
export default {
    name: "home",
    components: {
        HomeHead,
        HomeFooter,
    },
    data () {
        return{
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
        back() {
          this.$router.push('/buy');
        },
        getData() {
          this.$axios.get('/api/index.json')
          .then(res => {
              this.list = res.data[0].concat(res.data[2]).concat(res.data[3])
          })
        }
    },
    created() {
      this.getData();
      this.$router.push('/home');
    }
}
</script>
<style scoped>
.home {
    min-width: 1360px;
}
</style>

