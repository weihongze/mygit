$(function(){
	var ulWidth = 700;//ul宽度 用来设置left
	var length = $('.banner_left ul').length;
	// 设置ul位置
	$('.banner_left ul').each(function(i){
		$(this).css('left',ulWidth*i+'px');
	})
	function func(){
		$('.banner_left ul').animate({
			'left':'-='+ulWidth+'px'
		},1000,function(){
			if($(this).css('left') === -ulWidth+'px'){
				$(this).css('left',(length-1)*ulWidth+'px');
			}
			if($(this).css('left') === '0px'){
				var ulNum = $(this).index();
				$('.banner_bottom span').removeClass('active');
				$('.banner_bottom span:eq('+ulNum+')').addClass('active');
			}
		})
	}
	timer = setInterval(func,3000)
	// 鼠标移入事件
	$('.banner_left').mouseover(function(){
		clearInterval(timer);
	})
	$('.banner_left').mouseout(function(){
		timer = setInterval(func,3000)
	})
	//图片按钮同步

	// 点击事件
	function run(index){
		for (var i = index-1,j=0; i < length; i++,j++) {
			$('.banner_left ul:eq('+i+')').css('left',j*ulWidth)
		}
		for (var i = 0; i < index-1; i++) {
			$('.banner_left ul:eq('+i+')').css('left',(length*ulWidth)-(index-1-i)*ulWidth)
		}
		// console.log(index);
	}
	$('.banner_bottom span').on('click',function(){
		run($(this).index());
		clearInterval(timer);
		timer = setInterval(func,3000);
		$('.banner_bottom span').removeClass('active');
		$('.banner_bottom span:eq('+($(this).index()-1)+')').addClass('active');
	})
	$('.click_left').click(function(){
		$('.banner_left ul').css('left','-='+700);
		clearInterval(timer);
		for (var i = 0; i < 4; i++) {
			if ($('.banner_left ul:eq('+i+')').css('left')=='-700px') {
				$('.banner_left ul:eq('+i+')').css('left','2100px');
			}
		}
		timer = setInterval(func,3000);
	})
	$('.click_right').click(function(){
		$('.banner_left ul').css('left','+='+700);
		clearInterval(timer);
		for (var i = 0; i < 4; i++) {
			if ($('.banner_left ul:eq('+i+')').css('left')=='2800px') {
				$('.banner_left ul:eq('+i+')').css('left','0px')
			}
		}
		timer = setInterval(func,3000);
	})
	// ************section************
	// ************左侧**************
var ul_h = parseInt($('#sec_menu .sec_ul ul').css('height'));
$('#sec_menu .sec_ul ul b').css('top',ul_h/2+5+'px')
$('#sec_menu .sec_ul ul').hover(function(){
	$(this).find('li a').css('color','#fff')
	$(this).find('b').css('display','block')
	$('#sec_menu .box').css('display','block')
	var box_top = $(this).offset().top-$('.first_ul').offset().top
	$('#sec_menu .box').css('top',box_top)
	$(this).addClass('sec_bgc')
},
function(){
	$(this).find('li a').css('color','#999')
	// $(this).removeClass('sec_bgc')
	$('#sec_menu .box').css('display','none')
})
$('.box').hover(function(){
	$(this).css('display','block')
},function(){
	$(this).find('b').css('display','none')
	$(this).css('display','none')
})

// 花吧
$('#sec_r_top .sec_r_bottom dl').each(function(i){
	$(this).css('left',i*180+'px');
})
function tt(){
	$('#sec_r_top .sec_r_bottom dl').animate({
		'left':'-='+180+'px'
	},1000,function(){
		if ($(this).css('left')==='-180px') {
			$(this).css('left',160*9+'px')
		}
	})
}
 tt = setInterval(tt,3000)

// ..................................
//获得sec_bottom_r的垂直偏移量 就是文档上边到sec_bottom_r的距离（602）没有px单位
var sec_bottom_rY = $('.sec_bottom_r').offset().top;
function windowScroll_R(){
		var sec_bottom_lR = $('.sec_bottom_l').offset().left+$('.sec_bottom_l').width();
		var windowX = $(window).scrollTop();
		if (windowX > sec_bottom_rY) {
			$('.sec_bottom_r').css('position','fixed')
			$('.sec_bottom_r').css('bottom','100px')
			$('.sec_bottom_r').css('left',sec_bottom_lR+'px')
		}
	else {
			$('.sec_bottom_r').css('position','static')
		}
}
// 滚动条 scroll
function windowScroll_L(){
		var sec_bottom_lL = $('.sec_left').offset().left;
		var windowX = $(window).scrollTop();
		if (windowX > 800) {
			$('.sec_ul').css('position','fixed')
			$('.sec_ul').css('bottom','200px')
			$('.sec_ul').css('left',sec_bottom_lL+'px')
		}
		else {
			$('.sec_ul').css('position','static')
		}
		$('.sec_left').css('height',$('.sec_bottom_l').height()+380+'px')
}
var hots_top = $('.hot_state').offset().top;
function hots(){
	var windowX = $(window).scrollTop();
	if (windowX>hots_top) {
		$('.hot_state').css('position','fixed')
		$('.hot_state').css('top','0px')
	}
	else {
		$('.hot_state').css('position','static')
	}
}
$(window).resize(function(){
	windowScroll_L();
	windowScroll_R();
});
$(window).scroll(function(){
	windowScroll_L();
	windowScroll_R();
	hots()
});
//game_slide
var G_slideWidth = 180;
var G_slideLength = $('.game_slide a').length;
console.log(G_slideLength);
$('.game_slide a').each(function(i){
	$(this).css('left',G_slideWidth*i+'px')
})
function game_slide(){
	$('.game_slide a').animate({
		'left':'-='+G_slideWidth+'px'
	},2000,function(){
		if ($(this).css('left')== '-'+G_slideWidth+'px') {
			$(this).css('left',(G_slideLength-1)*G_slideWidth+'px')
		}
		if ($(this).css('left')== '0px') {
			var ulNum = $(this).index();
			$('.game_dl dd span').css('background','#666');
			$('.game_dl dd span:eq('+ulNum+')').css('background','#fff');
		}
		})
}
g_timer = setInterval(game_slide,4000)
//放大图片
$('.t_ul img').click(function(){
	var t_num = $(this).parent().html();
	var t_numb = $(this).parents('.cool_pet').index();
	$('.cool_pet:eq('+(t_numb-1)+') .t_ul img').css('display','none');
	$('.t_reply:eq('+(t_numb-1)+')').css('display','block').html(t_num)
})
$('.t_reply').click(function(){
	var t_numb = $(this).parents('.cool_pet').index();
	$('.cool_pet:eq('+(t_numb-1)+') .t_ul img').css('display','block');
	$('.t_reply:eq('+(t_numb-1)+')').empty()
})

//马上登录贴吧
$('.login_but').click(function(){
	$('#popup').css('visibility','visible');
})
$('.popup_head a').click(function(){
	$('#popup').css('visibility','hidden');
})


})
