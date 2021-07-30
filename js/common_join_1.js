var check1 = false;
var check2 = false;
$("#container div:nth-child(4) label,#container div:nth-child(5) label").click(function(){
	if($("#ch_1").is(':checked') && $("#ch_2").is(':checked')){
		$("#container_join a:last").text("동의하기").css("background-color","#999")
	}
})
$("#container a").click(function(){
	if($("#ch_1").is(':checked')){
		check1 = true;
	}else{
		check1 = false;
	}
	if($("#ch_2").is(':checked')){
		check2 = true;
	}else{ 
		check2 = false;
	}
	if(check1==false || check2==false ){
		$("#container_join a:last").text("약관에 모두 동의해주세요").css("background-color","#A7161A")
		return false;	
	}else{ return true; }
});
var param = $(location).attr('search').slice($(location).attr('search').indexOf('=') + 1);
if(param == 'none'){
	$("header").css("display","none");
	$("footer").css("display","none");
}
