//
// onscroll：页面滚动就会触发，事件仅仅在有滚动条时发生，使用overflow属性为元素创建一个滚动条。    
// onmousewheel：鼠标滚动会触发
$(window).scroll(function() {
    var aside = $('aside');
    $(window).scrollTop() >= 150 ? aside.css('top',60) : aside.css('top',150);
})
/* 选项切换模块
 * 参数data为对象，包括switchHead，switchBody，judge
 */

function barSwitch(options) {
    var defaults = {
        switchHead: 'switchHead',
        switchBody: 'switchBody',
        switchBodyBox: 'switchBodyBox',
        judge: true
    };
    var options = $.extend(defaults,options);
    var switchHead = $('#'+options.switchHead);
    var switchBody = $('#'+options.switchBody);
    var switchBodyBox = $('.'+options.switchBodyBox);

    var judge = options.judge;
    var timer;
    var index = 0;
    switchHead.children().click(function () {
        $(this).addClass('a--visit').siblings().removeClass('a--visit');
        var i = $(this).index();
        if (judge) {
            if (index < i){
                index = i;
                timer = setInterval(function() {
                    var oldLeft = switchBody.offset().left-switchBodyBox.offset().left;
                    if (oldLeft <= -index*$(switchBody.children()[0]).outerWidth() ) {
                        clearInterval(timer);
                        switchBody.css('left',-index*$(switchBody.children()[0]).outerWidth());
                        return;
                    } 
                    switchBody.css('left',oldLeft-10)
                },3)
                
            }
            if (index > i){
                index = i;
                console.log(2);
                timer = setInterval(function() {
                    var oldLeft = switchBody.offset().left-switchBodyBox.offset().left;
                    if (oldLeft >= -index*$(switchBody.children()[0]).outerWidth()) {
                        clearInterval(timer);
                        switchBody.css('left',-index*$(switchBody.children()[0]).outerWidth());
                        return;
                    } 
                    switchBody.css('left',oldLeft + 10)
                },3)
            }
        } else {
            switchBody.css('left',-i*switchBodyBox.innerWidth())
        }
    })
}
barSwitch()

barSwitch({
    switchHead:'switchHead_2',
    switchBody: 'switchBody_2',
    switchBodyBox: 'switchBodyBox_2',
    judge: false
}) 










// function getData(type) {
//     var type = type+8 || 0;
//     $.ajax({
//         url: 'http://v.juhe.cn/toutiao/index',
//         type: 'get',
//         data: {
//             type:'top',
//             key:'93b9d7decaf238eec4f4b6cc03a3d347'
//         },
//         dataType: 'jsonp',
//         success:function(result){
//             console.log(result)
//             var data = result.result.data;
//             for (let i = type; i<= type+8; i++) {
//                 console.log(type,i);
//                 var str = `<li><a href="">${data[i].title}</a><div>${data[i].date}</div></li>`;
//                 if(type ==0) {
//                     $('.news-events__body__list__body1').append(str);
//                 } else {
//                     $('.news-events__body__list__body2').append(str);
//                 }
//             }
//         }

//     })
// }
// getData()
// getData(1)


var script = document.createElement('script');
script.src = 'index.json?callback=fn';
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);


function fn(result) {
    console.log(result);
    var data = result[0];
    var data2 = result[1];
    for (let i = 0; i< data.length; i++) {
        var str = `<li><a href="">${data[i]}</a><div>2014-04-14</div></li>`;
        var str2 = `<li><a href="">${data2[i]}</a><div>2014-04-14</div></li>`;
            $('.news-events__body__list__body1').append(str);
        
            $('.news-events__body__list__body2').append(str2);
        
    }
}




$.ajax({
    url: 'http://apis.juhe.cn/cook/query.php',
	type: 'get',
	data: {
		pn:0,
		rn:5,
		key:'f1021e126b3c15b186cec0ad915c9805',//appKey
		menu:'西红柿'
	},
    dataType: "jsonp",
    success: function( res ) {
        console.log(res)
        var result = res.result.data;
        for (let i = 0; i < 5 ;i++){
            var name = result[i].title;
            var pic = result[i].steps[0].img;
            $('.name')[i].innerText = name;
            $('.advantages__body__expert__img > img')[i].src = pic;
            
        }
    },
    error:function(){
        alert
    },
})



$("#switchHead_2").children().one("click",function(){
    console.log($(this).index());
    var index = $(this).index();
    if(index!=0){
        $.ajax({
            url: 'http://apis.juhe.cn/cook/query.php',
            type: 'get',
            data: {
                pn:index*5,
                rn:5,
                key:'f1021e126b3c15b186cec0ad915c9805',//appKey
                menu:'西红柿'
            },
            dataType: "jsonp",
            success: function( res ) {
                console.log(res)
                var result = res.result.data;
                for (let i =0; i < 5 ;i++){
                    console.log(index*5+i)
                    var name = result[i].title;
                    var pic = result[i].steps[0].img;
                    console.log(name,pic)
                    $('.name')[index*5+i].innerText = name;
                    $('.advantages__body__expert__img > img')[index*5+i].src = pic;
                }
            },
            error:function(){
                alert('错误');
            },
        })
    }
    
  });


// $.ajax({
//     url: 'http://apis.juhe.cn/cook/query.php',
//     type: 'get',
//     data: {
//         pn:0,
//         rn:5,
//         key:'f1021e126b3c15b186cec0ad915c9805',//appKey
//         menu:'西红柿'
//     },
//     dataType: "jsonp",
//     success: function( res ) {
//         console.log(res)
//         var result = res.result.data;
//         for (let i = 0; i < 5 ;i++){
//             // console.log(i)
//             var name = result[i].title;
//             var pic = result[i].steps[0].img;
//             $('.name')[i].innerText = name;
//             $('.advantages__body__expert__img > img')[i].src = pic;
//         }
//     },
//     error:function(){
//         alert('错误');
//     },
// })

$.ajax({
    url: 'http://suggest.taobao.com/sug?code=utf-8&q=衣服&callback=cb',
    type: 'post',
    // data: {
    //     pn:0,
    //     rn:5,
    //     key:'f1021e126b3c15b186cec0ad915c9805',//appKey
    //     menu:'西红柿'
    // },
    dataType: "jsonp",
    success:function(data) {
        console.log(data)
    }
})