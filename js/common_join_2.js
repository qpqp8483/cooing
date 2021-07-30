var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;
var check5 = false;
var check6 = false;
$("header").css("display","none");
$("footer").css("display","none");
$("#id").keyup(function(){
	function idCheck() { 
		var titleCheck_1 = $("#id").val();
		var idCheck = /^[a-z]+[a-z0-9]{2,19}$/g;
		if (!idCheck.test(titleCheck_1)) {
			$("form div:eq(0)>span:nth-child(2)").css("opacity","1");
			check1 = false;
		}else{ 
			$("form div:eq(0)>span:nth-child(2)").css("opacity","0");
			$("#id").css("border","1px solid #d4d4d4");
			check1 = true;
		}  
	};
	idCheck();
});

$("#pw").keyup(function(){
	if ($("#pw").val().length<=5) {
		$("form div:eq(0)>span:nth-child(4)").css("opacity","1");
		check2 = false;
	}else{ 
		$("form div:eq(0)>span:nth-child(4)").css("opacity","0");
		$("#pw").css("border","1px solid #d4d4d4");
		check2 = true;
	}  
});

$("#pw_again").keyup(function(){
	if ($("#pw_again").val()!==$("#pw").val()) {
		$("form div:eq(0)>span:nth-child(6)").css("opacity","1");
		check3 = false;
	}else{ 
		$("form div:eq(0)>span:nth-child(6)").css("opacity","0");
		$("#pw_again").css("border","1px solid #d4d4d4");
		check3 = true;
	}  
});

$("#name").keyup(function(){
	function nameCheck() { 
		var titleCheck_2 = $("#name").val();
		var nameCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		if (!nameCheck.test(titleCheck_2)) {
			$("form div:eq(1)>span:nth-child(2)").css("opacity","1");
			check4 = false;
		}else{ 
			check4 = true;
			$("#name").css("border","1px solid #d4d4d4"); 
			$("form div:eq(1)>span:nth-child(2)").css("opacity","0"); 
		}  
	};
	nameCheck();
});

$("#nickname").keyup(function(){
	if ($("#nickname").val().length<=1 || $("#nickname").val().length>=11) {
		$("form div:eq(1)>span:nth-child(4)").css("opacity","1");
		check5 = false;
	}else{ 
		$("form div:eq(1)>span:nth-child(4)").css("opacity","0");
		$("#nickname").css("border","1px solid #d4d4d4");
		check5 = true;
	}  
});

$("#mail").keyup(function(){
	function mailCheck() { 
		var titleCheck_3 = $("#mail").val();
		var mailCheck = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
		if (!mailCheck.test(titleCheck_3)) {
			$("form div:eq(1)>span:nth-child(6)").css("opacity","1");
			check6 = false;
		}else{ 
			$("form div:eq(1)>span:nth-child(6)").css("opacity","0");
			$("#mail").css("border","1px solid #d4d4d4");
			check6 = true; 
		}  
	};
	mailCheck();
});

$("form").submit(function(){
	//e.preventDefault();
	//alert(check1+","+ check2+","+ check3+","+ check4+","+ check5+","+ check6);
	if(check1 == false) { 
		$("#id").focus().css("border","1px solid #FF5959"); 
	}else if(check2 == false){ 
		$("#pw").focus().css("border","1px solid #FF5959"); 
	}else if(check3 == false){ 
		$("#pw_again").focus().css("border","1px solid #FF5959"); 
		$("form div:eq(0)>span:nth-child(6)").css("opacity","1");
	}else if(check4 == false){ 
		$("#name").focus().css("border","1px solid #FF5959"); 
		$("form div:eq(1)>span:nth-child(2)").css("opacity","1");
	}else if(check5 == false){ 
		$("#nickname").focus().css("border","1px solid #FF5959"); 
	}else if(check6 == false){ 
		$("#mail").focus().css("border","1px solid #FF5959"); 
		$("form div:eq(1)>span:nth-child(6)").css("opacity","1");
	}
	if(check1 == false || check2 == false || check3 == false || check4 == false || check5 == false || check6 == false){
		return false;
	}else { 
		return true;
	}
		

});

