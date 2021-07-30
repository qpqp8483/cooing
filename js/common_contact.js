$("#contact h2").slideUp(0);
$("#contact h2>span").slideUp(0);
$("#contact h2").slideDown(500);
$("#contact h2>span").delay(300).slideDown(800);
$("#contact li:first").delay(900).animate({
	opacity:1,
	marginTop:0 
},800)
$("#contact li:last").delay(1200).animate({
	opacity:1,
	marginTop:0 
},800)	
// JavaScript Document
$("#contact_detail,#contact_screen").css("display","none");
$("#contact_detail,#contact_screen").fadeOut(0);
$("#contact_detail span").css("display","none");
$("#contact li:eq(1)").click(function(){
	$("#contact_detail,#contact_screen").fadeIn(300);
});
$("#ex,#contact_screen").click(function(){
	$("#contact_detail,#contact_screen,#contact_detail span").fadeOut(300);
	$("#contact_detail #mail").val("","");
	$("#contact_detail #out").fadeIn(200);
	$("#contact_detail #send").fadeOut(200);
});

var check1 = false;	
var check2 = false;	
var ckeck3 = false;

//이메일 검사
$("#contact_detail #mail").keyup(function(){
	function mailCheck() { 
		var titleCheck_2 = $("#mail").val();
		var mailCheck = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
		if (!mailCheck.test(titleCheck_2)) {
			$("#contact_detail span:nth-child(2)").css("display","block");
			ckeck1 = false;
		}else{ 
			ckeck1 = true; 
			$("#contact_detail span:nth-child(2)").css("display","none"); 
		}  
	};
	mailCheck();
});

//이름 검사
$("#contact_detail #name").keyup(function(){
	function idCheck() { 
		var titleCheck = $("#name").val();
		var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		if (!languageCheck.test(titleCheck)) {
			$("#contact_detail span:nth-child(5)").css("display","block");
			ckeck2 = false;
		}else{ 
			ckeck2 = true; 
			$("#contact_detail span:nth-child(5)").css("display","none"); 
		}  
	};
	idCheck();
});

//콘텐츠 검사
$("#contact_detail #content").keyup(function(){
	if($("#content").val().length<=0){ 		
		check3 = false;
		$("#contact_detail span:nth-child(7)").css("display","block");
	}else{
		ckeck3 = true; 
	 	$("#contact_detail span:nth-child(7)").css("display","none");
	};
});
$("body").keyup(function(){
	if(ckeck1 == true && ckeck2 == true && ckeck3 == true){
		$("#contact_detail #out").fadeOut(200);
		$("#contact_detail #send").fadeIn(200);
	}else{ 
		$("#contact_detail #out").fadeIn(200);
		$("#contact_detail #send").fadeOut(200);
	}
});

