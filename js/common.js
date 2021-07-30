/* 메인메뉴와 로그인 in/out */
$("#h_menu").click(function(){
	$("header>div>nav").fadeIn(500);
	$("header>div>p").fadeIn(500);	
})
$("header>div>nav").click(function(){
	$(this).fadeOut(500);
	$("header>div>p").fadeOut(500);	
})

$(window).resize(function(){
	var windowWidth=$(window).width();
	if(windowWidth>1024){
		//alert(windowWidth);
		$("header>div>nav").fadeIn(0);
		$("header>div>p").fadeIn(0);	
	}else if(windowWidth<1024){
		$("header>div>nav").fadeOut(0);
		$("header>div>p").fadeOut(0);	
	}
})
function intro(){
	$("#intro span:nth-child(3)").css("width","242px");
	$("#intro span:nth-child(5)").css("width","242px");
	$("#intro span:nth-child(4)").css("height","62px");
	$("#intro span:nth-child(6)").css("height","62px");
	$("#intro p").delay(1000).animate({
		width:234
		},300,function(){
		$("#intro img").delay(300).fadeIn(0);
		});
		
		$("#intro p").delay(400).animate(
	{width:0},300,function(){
		$("#intro>div").delay(700).fadeOut(1000);
		$("#intro").delay(1300).fadeOut(1000);
	})
};

intro();
var i=1;
var j=1;
var now = $("#slide_roulette1,#slide_roulette2").css("transform")
$("#fade_slide li:not(:eq(0))").fadeOut(0);   
$("#slide_text li:not(:eq(0))").fadeOut(0); // 첫번째 빼고 전부 안보이게
setInterval(function(){
		$("#fade_slide li:eq("+i+")").fadeIn(800);  // i번째를 fadein
		$("#fade_slide li:eq("+(i-1)+")").fadeOut(800);  // i번째 앞에 있는 대상을 fadeout
		$("#slide_text li:eq("+i+")").fadeIn(800);
		$("#slide_text li:eq("+(i-1)+")").fadeOut(800);
		$("#slide_roulette1").css("transform","rotateX("+(90*j)+"deg)");
		$("#slide_roulette2").css("transform","rotateX("+(90*j)+"deg)");
		$("#bt label:eq("+i+") p").css("transform","scale(1.4)").css("border","2px solid #fff");
		$("#bt label p").not($("#bt label:eq("+i+") p")).css("transform","scale(1)").css("border","none");
		i++;
		j++;
		if(i>3){
			i=0;
		}
		/*if(j>5){
			$("#slide_roulette1").css("transform","rotateX(0deg)").css("transition","none;");
			$("#slide_roulette2").css("transform","rotateX(0deg)");
			j=1;
		}*/
},5000);
//첫번째 버튼 누르면
		$("#bt label:eq(0) p").click(function(){
			if(i==1){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-90)+"deg)");
			}else if(i==2){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-180)+"deg)");
			}else if(i==3){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-270)+"deg)");
			}else{
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-360)+"deg)");
			}
			$("#fade_slide li:eq(0),#slide_text li:eq(0)").fadeIn(800);	
			$("#fade_slide li,#slide_text li").not("#fade_slide li:eq(0),#slide_text li:eq(0)").fadeOut(800);
			$("#bt label:eq(0) p").css("transform","scale(1.4)").css("border","2px solid #fff");
			$("#bt label p").not($("#bt label:eq(0) p")).css("transform","scale(1)").css("border","none");
		})
		//두번째 버튼 누르면
		$("#bt label:eq(1) p").click(function(){
			if(i==1){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+(90*j)+"deg)");
			}else if(i==2){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-90)+"deg)");
			}else if(i==3){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-180)+"deg)");
			}else{
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-270)+"deg)");
			}
			$("#fade_slide li:eq(1),#slide_text li:eq(1)").fadeIn(800);	
			$("#fade_slide li,#slide_text li").not("#fade_slide li:eq(1),#slide_text li:eq(1)").fadeOut(800);
			$("#bt label:eq(1) p").css("transform","scale(1.4)").css("border","2px solid #fff");
			$("#bt label p").not($("#bt label:eq(1) p")).css("transform","scale(1)").css("border","none");
		})
		//세번째 버튼 누르면
		$("#bt label:eq(2) p").click(function(){
			if(i==1){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)+90)+"deg)");
			}else if(i==2){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j))+"deg)");
			}else if(i==3){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-90)+"deg)");
			}else{
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-180)+"deg)");
			}
			$("#fade_slide li:eq(2),#slide_text li:eq(2)").fadeIn(800);	
			$("#fade_slide li,#slide_text li").not("#fade_slide li:eq(2),#slide_text li:eq(2)").fadeOut(800);
			$("#bt label:eq(2) p").css("transform","scale(1.4)").css("border","2px solid #fff");
			$("#bt label p").not($("#bt label:eq(2) p")).css("transform","scale(1)").css("border","none");
		})
		//네번째 버튼 누르면
		$("#bt label:eq(3) p").click(function(){
			if(i==1){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)+180)+"deg)");
			}else if(i==2){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)+90)+"deg)");
			}else if(i==3){
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j))+"deg)");
			}else{
				$("#slide_roulette1,#slide_roulette2").css("transform","rotateX("+((90*j)-90)+"deg)");
			}
			$("#fade_slide li:eq(3),#slide_text li:eq(3)").fadeIn(800);	
			$("#fade_slide li,#slide_text li").not("#fade_slide li:eq(3),#slide_text li:eq(3)").fadeOut(800);
			$("#bt label:eq(3) p").css("transform","scale(1.4)").css("border","2px solid #fff");
			$("#bt label p").not($("#bt label:eq(3) p")).css("transform","scale(1)").css("border","none");
		});
	
var param = $(location).attr('search').slice($(location).attr('search').indexOf('=') + 1);

if(param == 'none'){ 
	$("#intro").css("display","none");
	$("#slide>div:eq(0),#slide>div:eq(1)>p,#slide>div:eq(1)>#slide_text,#container section>span,#bt").fadeOut(0);
	$("#screen_hidden").fadeIn(0);
	$("#slide>div:eq(0)").fadeIn(900);
	$("#slide>div:eq(1)>p:eq(0),#slide_text").delay(600).fadeIn(700);
	$("#slide>div:eq(1)>p:eq(1)").delay(900).fadeIn(700);
	$("#screen_hidden").delay(1100).fadeOut(700);
	$("#bt").delay(1300).fadeIn(700);
	$("#container section>span:eq(0)").delay(1600).fadeIn(500);
	$("#container section>span:eq(2)").delay(1680).fadeIn(500);
	$("#container section>span:eq(3)").delay(1760).fadeIn(500);
	$("#container section>span:eq(4)").delay(1840).fadeIn(500);
	$("#container section>span:eq(7)").delay(1920).fadeIn(500);
	$("#container section>span:eq(6)").delay(2000).fadeIn(500);
	$("#container section>span:eq(5)").delay(2080).fadeIn(500);
	$("#container section>span:eq(1)").delay(2160).fadeIn(500);
}


