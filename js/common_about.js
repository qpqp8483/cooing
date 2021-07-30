// JavaScript Document
$("#passion>div>div").fadeOut(0);
$("#main>div>div:eq(0)>h2").animate({marginLeft:0, opacity:1},0);
$("#main>div>div:eq(0)>p:eq(0)").delay(500).animate({marginLeft:0, opacity:1},0);
$("#main>div>div:eq(0)>p:eq(1)").delay(800).animate({marginLeft:0, opacity:1},0);
$("#main>div>div:eq(1)").delay(1100).animate({marginRight:0, opacity:1},0);
$("#skill>h3,#skill>p").delay(1700).animate({opacity:1},500);
$(window).scroll(function(){
	if($(this).scrollTop()>300 && $(this).scrollTop()<1200){
		$("#skill>div:nth-child(3)>ul").css("margin-top","0").css("opacity","1");
	}else{
		$("#skill>div:nth-child(3)>ul").css("margin-top","-300px").css("opacity","0");
	}
})
$(window).scroll(function(){
	if($(this).scrollTop()>=1000 && $(this).scrollTop()<=1750){
		$("#container #effort div li").css("opacity","1");
		$("#container #effort div li:first-child").css("left","0");
		$("#container #effort div li:nth-child(2)").css("top","0");
		$("#container #effort div li:nth-child(3)").css("top","170px");
		$("#container #effort div li:last-child").css("right","0");
	} else{
		$("#container #effort div li").css("opacity","0");
		$("#container #effort div li:first-child").css("left","-250px");
		$("#container #effort div li:nth-child(2)").css("top","-200px");
		$("#container #effort div li:nth-child(3)").css("top","350px");
		$("#container #effort div li:last-child").css("right","-250px");	
	}
});
$(window).scroll(function(){
	if($(this).scrollTop()>=1500){
		$("#passion>#fitst_passion>div:eq(0)").fadeIn(200);
		$("#passion>#fitst_passion>div:eq(1)").delay(150).fadeIn(300);
		$("#passion>#nth_2_passion>div:eq(0)").delay(50).fadeIn(300);
		$("#passion>#nth_2_passion>div:eq(1)").delay(200).fadeIn(300);
		$("#passion>#last_passion>div:eq(0)").delay(100).fadeIn(300);
		$("#passion>#last_passion>div:eq(1)").delay(250).fadeIn(300);
	}else { 
	}
})


/*//첫번째박스의 첫번째박스
$("#container #passion #fitst_passion div:first-child").hover(function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(6)").stop().animate({height:368},100,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(4)").stop().animate({width:275,left:0},100,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(5)").stop().animate({height:368,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(5)").stop().animate({height:0,top:368},200,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(4)").stop().animate({width:0,left:275},200,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(6)").stop().animate({height:0},200,function(){
	$("#container #passion #fitst_passion div:first-child span:nth-child(3)").stop().animate({width:0},200)	
	});
	});
	});
	});
	
	
//첫번째박스의 두번째 박스
$("#container #passion #fitst_passion div:last-child").hover(function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(6)").stop().animate({height:262},100,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(4)").stop().animate({width:275,left:0},100,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(5)").stop().animate({height:257,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(5)").stop().animate({height:0,top:262},200,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(4)").stop().animate({width:0,left:275},200,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(6)").stop().animate({height:0},200,function(){
	$("#container #passion #fitst_passion div:last-child span:nth-child(3)").stop().animate({width:0},200)	
	})	
	})
	});
	});
	
//두번째박스의 첫번째 박스
$("#container #passion #nth_2_passion div:first-child").hover(function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(6)").stop().animate({height:215},100,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(4)").stop().animate({width:280,left:0},100,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(5)").stop().animate({height:215,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(5)").stop().animate({height:0,top:215},200,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(4)").stop().animate({width:0,left:275},200,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(6)").stop().animate({height:0},200,function(){
	$("#container #passion #nth_2_passion div:first-child span:nth-child(3)").stop().animate({width:0},200)	
	})	
	})
	});
	});
	
//두번째박스의 두번째 박스
$("#container #passion #nth_2_passion div:last-child").hover(function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(6)").stop().animate({height:415},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(4)").stop().animate({width:280,left:0},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(5)").stop().animate({height:415,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(5)").stop().animate({height:0,top:415},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(4)").stop().animate({width:0,left:280},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(6)").stop().animate({height:0},100,function(){
	$("#container #passion #nth_2_passion div:last-child span:nth-child(3)").stop().animate({width:0},100)	
	})	
	})
	});
	});
	
//세번째박스의 첫번째 박스
$("#container #passion #last_passion div:first-child").hover(function(){
	$("#container #passion #last_passion div:first-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(6)").stop().animate({height:262},100,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(4)").stop().animate({width:275,left:0},100,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(5)").stop().animate({height:257,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #last_passion div:first-child span:nth-child(5)").stop().animate({height:0,top:262},200,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(4)").stop().animate({width:0,left:275},200,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(6)").stop().animate({height:0},200,function(){
	$("#container #passion #last_passion div:first-child span:nth-child(3)").stop().animate({width:0},200)	
	})	
	})
	});
	});
	
//세번째박스의 세번째박스
$("#container #passion #last_passion div:last-child").hover(function(){
	$("#container #passion #last_passion div:last-child span:nth-child(3)").stop().animate({width:280},100,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(6)").stop().animate({height:368},100,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(4)").stop().animate({width:275,left:0},100,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(5)").stop().animate({height:368,top:5},100)	
	})	
	})
	});
},function(){
	$("#container #passion #last_passion div:last-child span:nth-child(5)").stop().animate({height:0,top:368},200,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(4)").stop().animate({width:0,left:275},200,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(6)").stop().animate({height:0},200,function(){
	$("#container #passion #last_passion div:last-child span:nth-child(3)").stop().animate({width:0},200)	
	})	
	})
	});
	});

	*/
	
	
