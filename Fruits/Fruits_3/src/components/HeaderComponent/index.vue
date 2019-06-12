<template>
    <div class="head">
        <div class="figure-box__top w yahei">
          {{c}} <span>{{e}}</span>
          <router-link to="/more">
                <div class="figure-box__top__right fr">
                    more >>
                </div>
          </router-link>
            
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['boxName']),
        c() {
            return this.boxName.c
        },
        e() {
            return this.boxName.e
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    margin-bottom: 30px;
    margin-top: 40px;
    border-bottom: 4px solid #019F1D;
    .figure-box__top {
    	height: 53px;
    	padding-top: 28px;
    	font-size: 18px;
    	color: #019F1D;
        span {
        	font-size: 14px;
        	color: #7D7D7D;
        }
        .figure-box__top__right {
        	width: 77px;
        	height: 18px;
        	margin-top: 4px;
        	background: #019F1D;
        	font-size: 12px;
        	line-height: 18px;
        	text-align: center;
        	color: #fff;
        	border-radius: 5px;
        }
    }
}

</style>
