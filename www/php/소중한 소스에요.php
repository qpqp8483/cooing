<!-- 
----------------------- 이것만보면 메일보내기 뚝딱 헤헤! ------------------------
-->
<?php
header("Content-Type: text/html; charset=UTF-8");
 
//그니까이게 뭐냐묜 보내는이가 input에 빈칸이 있는지 확인하는거에용 ㅇㅅㅇ
//여기에는 input네임값과 밑에보이는 name,mail,content를 여러분의 네임값으로 바꿔주시면 뒈용><
if(empty($_POST['name'])  		|| // post로 넘어온 name값이 비었는지 확인
   empty($_POST['mail']) 		|| // mail값이 비었는지 확인
   empty($_POST['content'])	|| // content값이 비었는지 확인
   !filter_var($_POST['mail'],FILTER_VALIDATE_EMAIL)) // 전달된 이메일 값이 유효한 이메일값인지 검증 
   {
	echo "인수를 확인해주세요!";
	return false;
   }
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함

//여기도 네임값 바꿔줘요해요! 여러분의 input네임값으루! (밑에 $_POST['이부분!!!!!'])
$name = strip_tags(htmlspecialchars($_POST['name']));	
$email_address = strip_tags(htmlspecialchars($_POST['mail']));
$phone = strip_tags(htmlspecialchars($_POST['mobile']));
$message = strip_tags(htmlspecialchars($_POST['content']));
	
// 이메일을 생성하고 메일을 전송하는 부분
$to = 'qpqp8483@naver.com'; // 받는 측의 이메일 주소를 기입하는 부분( 여기다가 여러분의 이메일을 적어줍시다! )
$email_subject = "FROM:  $name"; // 메일 제목에 해당하는 부분 ( 냅둬용 )
$email_body = "본 메일은 홈페이지 폼메일로부터 전송된 이메일입니다..\n\n"."세부정보는 다음과 같습니다.\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "Reply-To: $email_address\r"; // 답장 주소 ( 냅둬용 )
 
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers);
			
?>