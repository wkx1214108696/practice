<template>
    <div class="header">
        <el-row class="header-top">
            <el-col :span="3" :offset="3"><span @click="handClick">您好,欢迎来到阿七果园子！</span></el-col>
            <el-col :span="7" :offset="9">
                   [<a href="http://127.0.0.1:3000/">登录</a>] | [<a href="#"><span>注册有惊喜</span></a>] | <a href="#">我的果园</a> | <a href="#">手机果园</a> | <i class="el-icon-phone"></i> 400-720-0770
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-row>
                    <el-col :span="7">
                        <router-link to="/">
                            <img src="../../assets/img/1.png" alt="">
                        </router-link>
                    </el-col>
                    <el-col class="head__right" :offset="4" :span="13">
                        <div class="head__right__search--hot">热点搜索：<a href="#">橙</a> <a href="#">苹果</a> <a href="#">香梨</a> <a href="#">火龙果</a> <a href="#">牛油果</a> <a href="#">柠檬</a></div>
                            <el-input placeholder="请输入内容" v-model="keyword" class="input" prefix-icon="el-icon-search" size="mini">
                                <el-button slot="append">搜索</el-button>
                            </el-input>
                            <ul class="search-list" v-show="keyword">
                                <li 
                                class="search-item"
                                v-for="(item, index) in searchlist" 
                                :key="index">
                                    {{item}}
                                </li>
                                <li class="search-item" v-show="!searchlist.length">无搜索结果</li>
                            </ul>
                            配送至
                            <el-cascader
                              size="mini"
                              :options="options"
                              v-model="selectedOptions"
                              @change="handleChange">
                            </el-cascader>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { regionData } from 'element-china-area-data'
export default {
    name: 'HomeHeard',
    props:{
        list: Array
    },
    data() {
        return {
          options: regionData,
          selectedOptions: [],
          keyword: '',
          searchlist: []
        }
    },
    methods:{
        //测试
        handClick (e) {
            e.target.style.color = 'red'
        },
        handleChange (value) {
          console.log(value,this.selectedOptions);
        }
    },
    watch: {
        keyword() {
            if(!this.keyword) {
                this.searchlist = [];
                return
            }
            const result = [];
            this.list.forEach(el => {
                if(el.title.indexOf(this.keyword) > -1) {
                    result.push(el.title)
                }
            });
            this.searchlist = result;
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 160px;
	color:#7D7D7D;
    line-height: 40px;
    font-size: 12px;
    .header-top{
        background: #EEEEEE;
    }
    .head__right {
	    font-size: 12px;
	    color: #A0A0A0;
      .head__right__search--hot {
          margin: 20px 0 13px;
          & a:hover {
              color: #2A9F3F;
          }
      }
      .search-list{
                width: 240px;
                height: 230px;
                overflow: hidden;
                position: absolute;
                top: 109px;
                left: 468px;
                z-index: 999;
                .search-item {
                    background: #fff;
                    font-size: 16px;
                    line-height: 32px;
                    padding-left: 34px;
                    &:hover {
                        background: green;
                    }
                }
            }
      .input {
          width: 296px;   
      }
      .el-cascader {
      width: 200px;
      text-align: center;
    }
    }
    
}
</style>

