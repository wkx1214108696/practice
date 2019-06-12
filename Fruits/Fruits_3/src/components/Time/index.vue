<template>
    <div class="time">
        {{time}}
    </div>
</template>
<script>
export default {
    name: 'Time',
    props: {
        endtime: String
    },
    data() {
        return {
            time: ''
        }
    },
    methods: {
        formatTime (i) { //格式化时间
            if (i < 10) {
                return '0' + i;
            } else {
                return i;
            }
        },
        Countdown() {
            // let end = new Date('2019-12-31');
            let end = new Date(this.endtime);
            let _this = this;
            let timer = setInterval(function(){
                var day, hour, minute, second, interval;
                var start = new Date();
                interval = end - start;
                interval /= 1000;
                day = _this.formatTime(parseInt(interval / 60 / 60 / 24));
                hour = _this.formatTime(parseInt(interval / 60 / 60 % 24));
                minute = _this.formatTime(parseInt(interval / 60 % 60));
                second = _this.formatTime(parseInt(interval % 60));
                _this.time = day + '天' + hour + '小时' + minute + '分' + second + '秒'
            },1000)
        }
    },
    mounted() {
        this.Countdown();
    }
}
</script>

<style lang="scss" scoped>
.time {
    width: 235px;
    height: 44px;
    background: #e60012;
    font-size: 16px;
    text-align: center;
    color: #fff;
    line-height: 44px;
}
</style>
