//
// onscroll：页面滚动就会触发，事件仅仅在有滚动条时发生，使用overflow属性为元素创建一个滚动条。    
// onmousewheel：鼠标滚动会触发
document.body.onscroll = function() {
    var aside = document.getElementsByTagName('aside')[0];
    console.log(document.documentElement.scrollTop||document.body.scrollTop)
    if (document.documentElement.scrollTop||document.body.scrollTop >= 200) {
        aside.style.top = 60 + 'px';
    } else {
        aside.style.top = 150 + 'px';
    }
}

/* 选项切换模块
 * 参数data为对象，包括switchHead，switchBody，judge
 */

function barSwitch(data) {
    var switchHead = document.getElementById(data.switchHead); //点击部分
    var switchBody = document.getElementById(data.switchBody); //切换部分
    var judge = data.judge  //切换方式的判断
    var timer; //定时器
    var index = 0; //记录第几个按钮
    for (let i = 0; i <switchHead.children.length; i++) {
        switchHead.children[i].onclick = function() {
            for (let j = 0; j <switchHead.children.length; j++) {
                switchHead.children[j].className = '';
                console.log(2);
            };
            this.className = 'a--visit';
            if (judge) {
                if (index < i){
                    index = i;
                    timer = setInterval(function() {
                        var oldLeft = switchBody.offsetLeft;
                        if (oldLeft <= -i*switchBody.children[i].offsetWidth) {
                            clearInterval(timer);
                            switchBody.style.left = -i*switchBody.children[i].offsetWidth + 'px';
                            return;
                        } 
                        switchBody.style.left = oldLeft - 10 + 'px';
                    },3)
                }
                if (index > i){
                    index = i;
                    timer = setInterval(function() {
                        var oldLeft = switchBody.offsetLeft;
                        if (oldLeft >= -i*switchBody.children[i].offsetWidth) {
                            clearInterval(timer);
                            switchBody.style.left = -i*switchBody.children[i].offsetWidth + 'px';
                            return;
                        } 
                        switchBody.style.left = oldLeft + 10 + 'px';
                    },3)
                }
            } else {
                console.log(3);
                switchBody.style.left = -i*switchBody.children[i].offsetWidth + 'px';
            }
        }
    }
}
barSwitch({
    switchHead:'switchHead',
    switchBody: 'switchBody',
    judge: true
})

barSwitch({
    switchHead:'switchHead_2',
    switchBody: 'switchBody_2',
    judge: false
}) 


