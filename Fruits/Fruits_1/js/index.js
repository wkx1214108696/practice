// 插件调用
$('.search').kuCity();

//导航栏显示隐藏模块开始
function Pserson(obj) {
    console.log(obj.through, document.getElementById('nav'))
    this.through = obj.through || null;
    this.response = obj.response || null;
    this.init();
}
Pserson.prototype = {
    constructor: Pserson, // 手动将 constructor 指向正确的构造函数
    show: function () {
        this.response.style.display = 'block';
    },
    hidden: function () {
        this.response.style.display = 'none';
    },
    init: function() {
        this.through.onmouseover = function() {
            this.show();
        }.bind(this);
        this.through.onmouseout = function() {
            this.hidden();
        }.bind(this);
    }
  }
//导航栏显示隐藏模块结束
var sdasd = new Pserson({
    through: nav,
    response: navList
});

// 问题：输入id名直接会获取到该节点

//轮播图模块开始

function Carousel(obj) {
    this.container = document.getElementById(obj.container) || null;     //组件容器, 包括所有
    this.inner = document.getElementById(obj.inner) || null;             //装载图片的容器
    this.length = this.inner.children.length;
    this.left = document.getElementById(obj.left) || null;               //左移button
    this.right = document.getElementById(obj.right) || null;             //右移button
    this.dotButton = document.getElementById(obj.dotButton) || null;       //底部按钮容器
    

    this.cloneNum = 1;  //需要克隆的图片数目
    this.distance = this.inner.children[0].offsetWidth;  //可视区的宽度
    console.log(this.distance);
    this.innerWidth = this.distance * this.inner.children.length; //装载图片的容器的宽度
   
    for (let i = 0; i < this.container.offsetWidth/this.distance; i++) {
        var cloneLi = this.inner.children[i].cloneNode(true);
        this.inner.appendChild(cloneLi);
    }
    this.inner.style.width = this.distance * this.inner.children.length + 'px'; //克隆后的容器宽度
    this.timer; //模拟点击的定时器
    this.num = 0; //记录第几个按钮
    this.timerId; //移动的定时器
    this.direction = true; //方向
    var index = 0;
    var me = this;
    this.left.onclick = function () {
        this.direction = true;
        if (this.inner.offsetLeft === 0) {
            this.inner.style.left = -this.innerWidth +"px";
            console.log(this.inner.style.left);
        }
        console.log(index);
        if (index == 0) {
            index = this.length;
            console.log(index);
        }
        index--;
        console.log(index);
        this.animate(this.inner,-this.distance*index,me);
        if(obj.dotButton) {
            this.num--;
            this.buttonMove ();
        }
        
    }.bind(this);

    this.right.onclick = function () {
        this.direction = false;
        if (this.inner.offsetLeft <= -this.innerWidth ) {
            this.inner.style.left = 0 + "px";
            clearInterval(this.timerId);
        }
        if (index == this.length) {
            index = 0;
        }
        index++;
        this.animate(this.inner,-this.distance*index,me);
        if(obj.dotButton) {
            this.num++;
            this.buttonMove();
        }
        
    }.bind(this);

    this.container.onmouseover = function() {
        clearInterval(this.timer);
    }.bind(this);

    this.container.onmouseout = function() {
        this.simulationClick(me);
    }.bind(this);

    if(obj.dotButton) {
        this.dotButtonChild = this.dotButton.children; //底部按钮容器中的按钮
        this.buttonMove ();
        for (let i = 0; i < this.dotButtonChild.length; i++) {
            this.dotButtonChild[i].onclick = function () {
                this.dotButtonChild[index].style.backgroundColor = '#fff';
                if (i > index) {
                    this.direction = false;
                } else {
                    this.direction = true;
                }
                index = i;
                this.num = i;
                buttonMove ();
                // console.log(index);
                this.animate(bgPic,-liWidth*index);
            }.bind(this);
        }
    }
    this.simulationClick(me);
}

Carousel.prototype = {
    constructor: Carousel,
    animate: function (element, target, me) { //移动的函数
        clearInterval(me.timerId);
        me.timerId = setInterval(function () {
        // 步进  每次移动的距离
        var step = 10;
        // 盒子当前的位置
        var current = element.offsetLeft;
        if (me.direction) {
            if (current >= target) {
                clearInterval(this.timerId);
                element.style.left = target + 'px';
                return;
            }
            current += step;
        } else {
            if (current <= target) {
                clearInterval(this.timerId);
                element.style.left = target + 'px';
                return;
            }
            current -= step;
        }
        element.style.left = current + 'px';
      }, 3);
    },
    simulationClick: function (me) { //每隔一秒点击一次向左的按钮
        this.timer = setInterval(function() {
            me.right.click();
        },2000);
    },
    buttonMove: function  () { //下面的小圆圈按钮的样式
        function siblings(elm) {
            var a = [];
            var p = elm.parentNode.children;
            for(let i = 0, pl = p.length; i < pl; i++) {
                if(p[i] !== elm) {
                    a.push(p[i]);
                }
            }
            return a;
        }
        if (this.num > this.dotButtonChild.length - 1) {
            this.num = 0
        }
        if (this.num < 0) {
            this.num = this.dotButtonChild.length - 1
        }
        var siblings = siblings(this.dotButtonChild[this.num]); 
        this.dotButtonChild[this.num].style.backgroundColor = '#fff'; //被点击的按钮样式
        for (let j = 0; j < siblings.length; j++) {
            siblings[j].style.backgroundColor = '#000'; //其他的按钮样式
        }
    }
}
// 轮播图模块结束
//上部分的轮播
new Carousel({
    container:'bg-pic-box', 
    inner: 'bg-pic', 
    left: 'buttonLeft_1', 
    right: 'buttonRight_1', 
    dotButton: 'buttonBottom_1', 
});
//下部分的轮播
new Carousel({
    container:'carouse__body-div', 
    inner: 'carouse__body', 
    left: 'buttonLeft', 
    right: 'buttonRight'
})


//倒计时模块开始
function Countdown(obj) {
    this.container = document.getElementsByClassName(obj.className);
    console.log(obj.className);
    this.end = obj.end; //获取时间的容器
    var me = this;
    this.formatTime = function (i) { //格式化时间
        if (i < 10) {
            return '0' + i;
        } else {
            return i;
        }
    };
    this.getInterval = function () { //相差时间的函数
        var day, hour, minute, second, interval;
        var start = new Date();
        interval = this.end - start;
        interval /= 1000;
        day = parseInt(interval / 60 / 60 / 24);
        hour = parseInt(interval / 60 / 60 % 24);
        minute = parseInt(interval / 60 % 60);
        second = parseInt(interval % 60);
        day = this.formatTime(day);
        hour = this.formatTime(hour);
        minute = this.formatTime(minute);
        second = this.formatTime(second);
        for (let i = 0; i < this.container.length; i++) {
            this.container[i].innerHTML = day + '天' + hour + '小时' + minute + '分' + second + '秒';
        }
    }.bind(this);
    this.init = function() {
        this.getInterval();
        setInterval(this.getInterval,1000);
    }
    this.init();
}
// 倒计时模块结束

//倒计时
new Countdown({
    className: 'panic-buy__bottom__time',
    end: new Date('2019-4-1')
});