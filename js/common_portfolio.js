//인트로//
$("#prev1,#next1").fadeOut(0);
$("#li_screen").delay(600).fadeOut(800);
$("#nav_screen").delay(1100).fadeOut(800);
$("#prev1,#next1").delay(1100).fadeIn(800);
$("#screen_none").delay(1900).fadeOut(0);
//포트폴리오 딜레이 롤링
$(document).ready(function(){
	$("#rolling li:eq(0)").css("transform","rotateX(360deg)");
	$("#rolling li:eq(1)").css("transition-delay","0.03s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(2)").css("transition-delay","0.06s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(3)").css("transition-delay","0.1s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(4)").css("transition-delay","0.15s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(5)").css("transition-delay",".35s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(6)").css("transition-delay","0.5s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(7)").css("transition-delay","0.7s").css("transform","rotateX(360deg)");
	$("#rolling li:eq(8)").css("transition-delay",".95s").css("transform","rotateX(360deg)");
});

//목록 클릭시 다른 목록 안보이기
$("#menu>li").click(function(){
	$(this).children("nav,button,ul").css("display","block")
	$("#menu>li").not(this).children("nav,button,ul").css("display","none");
	$("#menu>li").not(this).children("nav").children("ul").css("margin-left","0");
	$("#radio1>li:eq("+i+") p").css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio1>li").not($("#radio1>li:eq("+i+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	$("#radio2>li:eq("+j+") p").css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio2>li").not($("#radio2>li:eq("+j+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	$("#radio3>li:eq("+k+") p").css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio3>li").not($("#radio3>li:eq("+k+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
});
$("#menu>li:eq(0)").click(function(){
	j=0;
	k=0;
});
$("#menu>li:eq(1)").click(function(){
	i=0;
	k=0;
});
$("#menu>li:eq(2)").click(function(){
	i=0;
	j=0;
});

//라디오 버튼 클릭
$("#radio1>li p").click(function(){
	$(this).css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio1>li p").not(this).css("border","none").css("transform","scale(1)");
});
$("#radio2>li p").click(function(){
	$(this).css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio2>li p").not(this).css("border","none").css("transform","scale(1)");
});
$("#radio3>li p").click(function(){
	$(this).css("border","2px solid #666").css("transform","scale(1.3)");
	$("#radio3>li p").not(this).css("border","none").css("transform","scale(1)");
});

//퍼블리싱 슬라이드
var i=0,
	j=0,
	k=0;
$("#next1").click(function(){
	if(i<5){
		i++;
		$("#publishing>nav>ul").css("margin-left",(-669*i)+"px");
		$("#radio1>li:eq("+i+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio1>li").not($("#radio1>li:eq("+i+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
$("#prev1").click(function(){
	if(i>0){
		i--;
		$("#publishing>nav>ul").css("margin-left",(-669*i)+"px");
		$("#radio1>li:eq("+i+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio1>li").not($("#radio1>li:eq("+i+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
//플랫/배너 디자인
$("#next2").click(function(){
	if(j<4){
		j++;
		$("#banner>nav>ul").css("margin-left",(-669*j)+"px");
		$("#radio2>li:eq("+j+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio2>li").not($("#radio2>li:eq("+j+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
$("#prev2").click(function(){
	if(j>0){
		j--;
		$("#banner>nav>ul").css("margin-left",(-669*j)+"px");
		$("#radio2>li:eq("+j+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio2>li").not($("#radio2>li:eq("+j+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
//팝업보이게
$(".click>p").click(function(){
	$(this).parent("div").children("div").fadeIn(300);
	$("#detail_screen1,#detail_screen2,#detail_screen3").fadeIn(300);
});

$("#ex,#ex2,#ex3,#ex4,#ex5,#ex6,#ex7,#ex8,#ex9,#ex10,#ex11,#ex12,#ex13,#ex14").click(function(){
	$(".click>div").fadeOut(300);
	$("#detail_screen1,#detail_screen2,#detail_screen3").fadeOut(300);
});
$("#detail_screen1").click(function(){
	$("#detail_screen1,#detail_screen2,#detail_screen3").fadeOut(300);
	$(".click>div").fadeOut(300);
});
$("#detail_screen2").click(function(){
	$("#detail_screen1,#detail_screen2,#detail_screen3").fadeOut(300);
	$(".click>div").fadeOut(300);
});
$("#detail_screen3").click(function(){
	$("#detail_screen1,#detail_screen2,#detail_screen3").fadeOut(300);
	$(".click>div").fadeOut(300);
});
//캐릭터/로고 디자인
$("#next3").click(function(){
	if(k<2){
		k++;
		$("#logo>nav>ul").css("margin-left",(-669*k)+"px");
		$("#radio3>li:eq("+k+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio3>li").not($("#radio3>li:eq("+k+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
$("#prev3").click(function(){
	if(k>0){
		k--;
		$("#logo>nav>ul").css("margin-left",(-669*k)+"px");
		$("#radio3>li:eq("+k+") p").css("border","2px solid #666").css("transform","scale(1.3)");
		$("#radio3>li").not($("#radio3>li:eq("+k+")")).children("label").children("p").css("border","none").css("transform","scale(1)");
	};
});
//라디오 클릭시 ul 마진
$("#radio1 li:eq(0) p").click(function(){i=0; $("#publishing>nav>ul").css("margin-left","0px"); });
$("#radio1 li:eq(1) p").click(function(){i=1; $("#publishing>nav>ul").css("margin-left","-669px"); });
$("#radio1 li:eq(2) p").click(function(){i=2; $("#publishing>nav>ul").css("margin-left",(-669*2)+"px"); });
$("#radio1 li:eq(3) p").click(function(){i=3; $("#publishing>nav>ul").css("margin-left",(-669*3)+"px"); });
$("#radio1 li:eq(4) p").click(function(){i=4; $("#publishing>nav>ul").css("margin-left",(-669*4)+"px"); });
$("#radio1 li:eq(5) p").click(function(){i=5; $("#publishing>nav>ul").css("margin-left",(-669*5)+"px"); });

$("#radio2 li:eq(0) p").click(function(){j=0; $("#banner>nav>ul").css("margin-left","0px"); });
$("#radio2 li:eq(1) p").click(function(){j=1; $("#banner>nav>ul").css("margin-left","-669px"); });
$("#radio2 li:eq(2) p").click(function(){j=2; $("#banner>nav>ul").css("margin-left",(-669*2)+"px"); });
$("#radio2 li:eq(3) p").click(function(){j=3; $("#banner>nav>ul").css("margin-left",(-669*3)+"px"); });
$("#radio2 li:eq(4) p").click(function(){j=4; $("#banner>nav>ul").css("margin-left",(-669*4)+"px"); })

$("#radio3 li:eq(0) p").click(function(){k=0; $("#logo>nav>ul").css("margin-left","0px"); });
$("#radio3 li:eq(1) p").click(function(){k=1; $("#logo>nav>ul").css("margin-left","-669px"); });
$("#radio3 li:eq(2) p").click(function(){k=2; $("#logo>nav>ul").css("margin-left",(-669*2)+"px"); });


