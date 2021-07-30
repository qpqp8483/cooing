<!DOCTYPE html>
<html lang="en" class="no-js demo-4">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Jchanyeong</title>
		<meta name="description" content="Bookblock: A Content Flip Plugin - Demo 4" />
		<meta name="keywords" content="javascript, jquery, plugin, css3, flip, page, 3d, booklet, book, perspective" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="../favicon.ico"> 
		<link rel="stylesheet" type="text/css" href="css/default.css" />
		<link rel="stylesheet" type="text/css" href="css/bookblock.css" />
        <link rel="stylesheet" href="php/common.php" />
        
		<!-- custom demo style -->
		<link rel="stylesheet" type="text/css" href="css/demo4.css" />
		<script src="js/modernizr.custom.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="bb-custom-wrapper">

				<div id="bb-bookblock" class="bb-bookblock">
					<div class="bb-item">
                    	<!-- 첫 번째 왼쪽 페이지 -->
						<div class="bb-custom-firstpage">
							<div class="left-container">
                            	<div id="contents">
                                    <img src="images/memo.png" alt="메모지이미지">
                                    <div>
                                        <p>“바쁜 일상을 살아낸다는 것은 <br> 내 삶을 주체적이고 열심히 살아가고 있음에 방증일테고,</p>
                                        <p>그럼에도 커피 한 잔의 여유에서 소소한 행복을 찾을 줄 아는 <br> 유연함이 내 삶에 깃들길 소망합니다."</p>
                                    </div>
                                </div>
                                <div id="contact_detail">
                                    <h3 class="screen_out">Contact</h3>
                                    <form action="common.php" method="post" name="contact">
                                        <fieldset>
                                            <label>이름<input type="text" name="name" id="name" autocomplete="off" autofocus></label>
                                            <label>연락처<input type="tel" name="mobile" id="mobile" autocomplete="off"></label>
                                            <label>이메일<input type="text" name="mail" id="mail" autocomplete="off"></label>
                                            <label>회사<input type="text" name="company" id="company" autocomplete="off"></label>
                                            <label>메세지<textarea name="content" id="content"></textarea></label>
                                            <input type="submit" name="send" id="send" value="메모전송">
                                        </fieldset>
                                    </form>
                            	</div>  
                            </div>
						</div>
                        <!-- 첫 번째 오른쪽 페이지 -->
						<div class="bb-custom-side">
                        	<div class="right-container_noPosition">
								<img src="images/profile_02.jpg" alt="프로필 두 번째 이미지">
                                <!--<img src="images/masking_tape_02.png" alt="마스킹테이프 이미지">-->
                            </div>
						</div>
					</div>
					<div class="bb-item custom-02">
                    	<!-- 두 번째 왼쪽 페이지 -->
						<div class="bb-custom-side">
                        	<section class="web_project leftBox">
                            	<h3 class="screen_out">두 번째 왼쪽 페이지</h3>
                            	<ul>
                                	<li><h1>웹<br>프로젝트</li>
                                    <li><a href="#"><img src="images/action_event_page.png" width="200" height="180" alt="옥션이벤트페이지"></a>
                                        <h5>옥션 이벤트 페이지</h5>
                                        <p>유효성검사<span><a href="#">HTML5</a> / <a href="#">CSS3</a></span></p>
                                        <p>크로스브라우징<img src="images/icon/chrome.png" alt="크롬아이콘"></p>
                                   	</li>
                                    <li>
                                    	<div class="ready_project">
                                        	<p>준비중</p>
                                        </div>
                                        <p>새로운 작업을 진행중입니다.<br>조금만 기다려 주세요 :)</p>
                                    </li>
                                    <li>
                                    	<div class="ready_project">
                                        	<p>준비중</p>
                                        </div>
                                        <p>새로운 작업을 진행중입니다.<br>조금만 기다려 주세요 :)</p>
                                    </li>
                                </ul>
                            </section>
						</div>
                        <!-- 두 번째 오른쪽 페이지 -->
						<div class="bb-custom-side">
                        	<section class="web_project rightBox">
                            	<h3 class="screen_out">두 번째 오른쪽 페이지</h3>
                            	<ul>
                                	<li><a href="#"><img src="images/snuh_page.png" alt="서울대학교병원페이지"></a>
                                        <h5>서울대학교병원 페이지</h5>
                                        <p>유효성검사<span><a href="#">HTML5</a> / <a href="#">CSS3</a></span></p>
                                        <p>크로스브라우징<img src="images/icon/chrome.png" alt="크롬아이콘"></p>
                                   	</li>
                                    <li><a href="#"><img src="images/nate_shopping_page.png" alt="네이트쇼핑페이지"></a>
                                        <h5>네이트 쇼핑 페이지</h5>
                                        <p>유효성검사<span><a href="#">HTML5</a> / <a href="#">CSS3</a></span></p>
                                        <p>크로스브라우징<img src="images/icon/chrome.png" alt="크롬아이콘"></p>
                                   	</li>
                                    <li>
                                    	<div class="ready_project">
                                        	<p>준비중</p>
                                        </div>
                                        <p>새로운 작업을 진행중입니다.<br>조금만 기다려 주세요 :)</p>
                                    </li>
                                    <li>
                                    	<div class="ready_project">
                                        	<p>준비중</p>
                                        </div>
                                        <p>새로운 작업을 진행중입니다.<br>조금만 기다려 주세요 :)</p>
                                    </li>
                                </ul>
                            </section>
						</div>
					</div>
					<div class="bb-item custom-03">
                    	<!-- 세 번째 왼쪽 페이지 -->
						<div class="bb-custom-side">
							<section class="design_project leftBox">
                            	<h3 class="screen_out">세 번째 왼쪽 페이지</h3>
                            	<ul>
                                	<li><h1>디자인<br>프로젝트</li>
                                    <li class="font-zero"><img src="images/work/01.jpg" width="200" alt="디자인연습"></li>
                                    <li class="font-zero"><img src="images/work/02.jpg" width="200" alt="팜플렛디자인"></li>
                                    <li class="font-zero"><img src="images/work/03.jpg" width="200" alt="플렛디자인"></li>
                                    <li class="font-zero"><img src="images/work/04.jpg" width="200" alt="플렛디자인"></li>
                                  	<li class="font-zero"><img src="images/work/05.jpg" width="200" alt="배너디자인1"></li>
                                </ul>
                            </section>
						</div>
                        <!-- 세 번째 오른쪽 페이지 -->
						<div class="bb-custom-side">
							<section class="design_project rightBox">
                            	<h3 class="screen_out">세 번째 오른쪽 페이지</h3>
                            	<ul>
                                	<li class="font-zero"><img src="images/work/06.jpg" width="200" alt="팝업디자인1"></li>
                                    <li class="font-zero"><img src="images/work/07.jpg" width="200" alt="팝업디자인2"></li>
                                    <li class="font-zero"><img src="images/work/08.jpg" width="200" alt="플렛디자인"></li>
                                    <li class="font-zero"><img src="images/work/09.jpg" width="200" alt="플렛디자인"></li>
                                  	<li class="font-zero"><img src="images/work/10.jpg" width="200" alt="배너디자인2"></li>
                                   	<li class="font-zero"><img src="images/work/11.jpg" width="200" alt="명함디자인"></li>
                                </ul>
                            </section>
						</div>
					</div>
					<div class="bb-item custom-last">
                   		 <!-- 마지막 왼쪽 페이지 -->
						<div class="bb-custom-side">
							<div class="left-container">
                            	<img src="images/about_me.png" alt="프로필 첫 번째 이미지">
                                <img src="images/masking_tape_01.png" alt="마스킹테이프 이미지">
                                <section>
                                	<h2>장찬영</h2>
                                    <h3>웹퍼블리셔</h3>
                                    <table align="left" cellspacing="0em" width="100%">
                                    	<tr>
                                        	<td>나이</td>
                                            <td>27살</td>
                                        </tr>
                                        <tr>
                                        	<td>연락처</td>
                                            <td>+82 010-5443-2501</td>
                                        </tr>
                                        <tr>
                                        	<td>이메일</td>
                                            <td>jyoe0126@naver.com</td>
                                        </tr>
                                    </table>
                                    <p>jchanyeong.com</p>
                                </section>
                            </div>
						</div>
                        <!-- 마지막 오른쪽 페이지 -->
						<div class="bb-custom-side">
							<div class="right-container">
								<ul>
                                	<p>교육</p>
                                    <li>연세직업전문학교 UI UX 디자인과 웹표준 수료 (~2018.11.08)</li>
                                    <li>한서대학교 아동청소년복지학과 졸업 (~2018.02.28)</li>
                                </ul>
                                <ul>
                                	<p>활동</p>
                                    <li>흥덕 IT 밸리 아이티컨벤션 웨딩홀 주말 일용근무 (18.05 ~ 현재)</li>
                                    <li>한서대학교 국가교육근로장학생 (11.09 ~ 17.06)</li>
                                </ul>
                                <ul>
                                	<p>수상</p>
                                    <li>연세직업전문학교 UI UX 디자인과 웹표준 개근상(이사장상)</li>
                                    <li>한서대학교 아동청소년복지학과 수석 졸업 (총장상)</li>
                                    <li>한서대학교 창업경진대회 금상 (총장상)</li>
                                    <li>한서대학교 학습공동체 창의상 (총장상)</li>
                                </ul>
                                <ul>
                                	<p>자격</p>
                                    <li>웹디자인기능사 필기합격 한국산업인력공단</li>
                                    <li>컴퓨터그래픽스운용기능사 필기합격 한국산업인력공단</li>
                                    <li>청소년지도사 (2급) 한국청소년활동진흥원</li>
                                    <li>사회복지사 (2급) 한국사회복지사협회</li>
                                    <li>보육교사 (2급) 한국보육진흥원</li>
                                    <li>컴퓨터활용능력 (1급) 대한상공회의소</li>
                                </ul>
                                <ul>
                                	<p>병역</p>
                                    <li>육군 / 작전화학병(행정계원) / 병장 / 만기전역 (14.01 ~ 15.10) 예비군 4년차</li>
                                </ul>
                                <ul>
                                	<p>스킬</p>
                                    <li><img src="images/icon/html5.png" alt="HTML5 로고"></li>
                                    <li><img src="images/icon/css3.png" alt="CSS3 로고"></li>
                                    <li><img src="images/icon/js.png" alt="javascript 로고"></li>
                                    <li><img src="images/icon/jquery.png" alt="Jquery 로고"></li>
                                    <li><img src="images/icon/photoshop.png" alt="photoshop 로고"></li>
                                    <li><img src="images/icon/illustrator.png" alt="illustrator 로고"></li>
                                    <li><img src="images/icon/dreamweaver.png" alt="Dreamweaver 로고"></li>
                                    <li><img src="images/icon/animate.png" alt="animate 로고"></li>
                                </ul>
                            </div>
						</div>
					</div>
				</div>

				<nav>
					<a id="bb-nav-first" href="#" class="bb-custom-icon bb-custom-icon-first">First page</a>
					<a id="bb-nav-prev" href="#" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
					<a id="bb-nav-next" href="#" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
					<a id="bb-nav-last" href="#" class="bb-custom-icon bb-custom-icon-last">Last page</a>
				</nav>

			</div>

		</div><!-- /container -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="js/jquerypp.custom.js"></script>
		<script src="js/jquery.bookblock.js"></script>
		<script>
			var Page = (function() {
				
				var config = {
						$bookBlock : $( '#bb-bookblock' ),
						$navNext : $( '#bb-nav-next' ),
						$navPrev : $( '#bb-nav-prev' ),
						$navFirst : $( '#bb-nav-first' ),
						$navLast : $( '#bb-nav-last' )
					},
					init = function() {
						config.$bookBlock.bookblock( {
							speed : 1000,
							shadowSides : 0.8,
							shadowFlip : 0.4
						} );
						initEvents();
					},
					initEvents = function() {
						
						var $slides = config.$bookBlock.children();

						// add navigation events
						config.$navNext.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'next' );
							return false;
						} );

						config.$navPrev.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'prev' );
							return false;
						} );

						config.$navFirst.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'first' );
							return false;
						} );

						config.$navLast.on( 'click touchstart', function() {
							config.$bookBlock.bookblock( 'last' );
							return false;
						} );
						
						// add swipe events
						$slides.on( {
							'swipeleft' : function( event ) {
								config.$bookBlock.bookblock( 'next' );
								return false;
							},
							'swiperight' : function( event ) {
								config.$bookBlock.bookblock( 'prev' );
								return false;
							}
						} );

						// add keyboard events
						$( document ).keydown( function(e) {
							var keyCode = e.keyCode || e.which,
								arrow = {
									left : 37,
									up : 38,
									right : 39,
									down : 40
								};

							switch (keyCode) {
								case arrow.left:
									config.$bookBlock.bookblock( 'prev' );
									break;
								case arrow.right:
									config.$bookBlock.bookblock( 'next' );
									break;
							}
						} );
					};

					return { init : init };

			})();
		</script>
		<script>
				Page.init();
		</script>
	</body>
</html>
<?php
header("Content-Type: text/html; charset=UTF-8");
 
// 빈 필드가 있는지 확인하는 구문
if(empty($_POST['name'])  		|| // post로 넘어온 name값이 비었는지 확인
   empty($_POST['mail']) 		|| // email값이 비었는지 확인
   empty($_POST['content'])	|| // message값이 비었는지 확인
   !filter_var($_POST['mail'],FILTER_VALIDATE_EMAIL)) // 전달된 이메일 값이 유효한 이메일값인지 검증
   {
	echo "인수를 확인해주세요!";
	return false;
   }
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['mail']));
$phone = strip_tags(htmlspecialchars($_POST['mobile']));
$message = strip_tags(htmlspecialchars($_POST['content']));
$company = strip_tags(htmlspecialchars($_POST['company']));
	
// 이메일을 생성하고 메일을 전송하는 부분
$to = 'jyoe0126@naver.com'; // 받는 측의 이메일 주소를 기입하는 부분
$email_subject = "FROM: $name"; // 메일 제목에 해당하는 부분
$email_body = "본 메일은 홈페이지 폼메일로부터 전송된 이메일입니다..\n\n"."세부정보는 다음과 같습니다.\n\nName: $name \n\nEmail: $email_address \n\nmobile: $phone \n\nMessage:\n$message \n\nCompany:\n$company";
$headers = "Reply-To: $email_address\r"; // 답장 주소
 
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers);
			
?>
