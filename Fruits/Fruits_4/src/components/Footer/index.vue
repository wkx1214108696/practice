<template>
  <el-container>
    <el-header><img src="../../assets/img/10.png" alt=""></el-header>
    <el-main>
      <el-col :offset="3" :span="13">
        <foot-list
          :list="list"
        ></foot-list>
      </el-col>
      <el-col :span="5">
        <img src="../../assets/img/8.png" alt="">
        <p>客服电话：0571-83539906<br>地址：浙江省杭州市萧山区</p>
      </el-col>
    </el-main>
    <el-footer>Copyright ©2005-2014 阿七果园子 aqishop.com All Rights Reserved　 浙IC</el-footer>
  </el-container>
</template>

<script>
import footList from '../list'
export default {
    components: {
      footList
    },
    props: {
      list: Array
    },
    mounted() {
      console.log(this.list)
    }
}
</script>

<style lang="scss" scoped>
.el-container {
  .el-header {
    padding-top: 10px;
    background: #fff;
    text-align: center;
    height: 74px;
    box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  }
  .el-main {
    padding: 40px;
    .el-col {
      &:last-child {
        padding-left: 95  px;
        border-left: 3px solid #fff;
      }
      p {
        font-size: 12px;
      }
    }
  }
  .el-footer {
    text-align: center;
    background: #000;
    color: #626262;
    line-height: 60px;
    font-size: 12px;
  }
}
</style>
