$(function() {
	$('#mobileCodeLogin').html('	<input type="hidden" name="source" id="sourceMobile" value="pc-login">\r\n    <input type="hidden" name="token" id="tokenMobile" value="idPKn8hM5ryFdjCmiovXvTcDy9c_wbFJ">\r\n    <input type="hidden" name="tokencode" id="tokencodeMobile" value="">\r\n    <input type="hidden" name="codetype" id="codetypeMobile" value="0">\r\n    <input type="hidden" name="path" id="pathMobile" value="http:\/\/bj.58.com\/diannao\/?zz=zz&pts=1499325364111">\r\n    <input type="hidden" name="voicetype" id="voicetypeMobile" value="">\r\n    <input type="hidden" name="rsaExponent" id="rsaExponentMobile" value="010001">\r\n    <input type="hidden" name="rsaModulus" id="rsaModulusMobile" value="008baf14121377fc76eaf7794b8a8af17085628c3590df47e6534574efcfd81ef8635fcdc67d141c15f51649a89533df0db839331e30b8f8e4440ebf7ccbcc494f4ba18e9f492534b8aafc1b1057429ac851d3d9eb66e86fce1b04527c7b95a2431b07ea277cde2365876e2733325df04389a9d891c5d36b7bc752140db74cb69f">\r\n    <input type="hidden" name="totalTime" id="totalTimeMobile" value="60">\r\n    <input type="hidden" name="remainTime" id="remainTimeMobile" value="0">\r\n    <input type="hidden" name="vcodekey" id="vcodekeyMobile" value="">\r\n    <input type="hidden" name="successFucntion" id="successFunctionMobile" value="mobileLoginSucc">\r\n\r\n    <ul class="formInput">\r\n        <li class="mobileLoginLi mobilenumberLi">\r\n            <input type="text" id="loginMobile" size="20"  value="" class="passport-login-input"  maxlength="11" name=""  placeholder="手机号">\r\n            <input type="button" class="getcode" id="loginMobilecodeSendBtn" value="获取动态码">\r\n            <span id="mobileLoginTip" class="wrong1"><\/span>\r\n        <\/li>\r\n        <li  class="mobileLoginLi mobilecodeLi">\r\n            <input type="text" size="20"  value="" class="passport-login-input" id="loginMobilecode" maxlength="6" name=""  placeholder="动态码">\r\n            <span id="mobileCodeTip" class="wrong1"><\/span>\r\n            <span id="loginVoicecodeTip" class="loginVoicecodeTip" style="display:none">\r\n            	<span> 验证码收不到?<\/span>\r\n            	<input type="button" id="loginVoicecodeBtn" class="loginVoicecodeBtn" value="使用语音验证">\r\n            <\/span>\r\n            \r\n        <\/li>\r\n        <li class="commitcode_new">\r\n        <input type="checkbox" id="isremember_id_new_mobile">\r\n        <span>下次自动登录<\/span>\r\n        <\/li>\r\n        <li  class="mobileLoginLi mobileBtnLi">\r\n            <input type="button" value="登录" class="submit" id="loginMobileButton"\/>\r\n        <\/li>\r\n    <\/ul>\r\n    <!--图片验证码-->\r\n    <div id="loginValidcodeBox" class="loginValidcodeBox" style="display: none">\r\n        <div id="loginValidcodeTipTextBox">\r\n            <span id="loginValidcodeTipText" class="loginValidcodeTipText loginTipText">请输入图片验证码<\/span>\r\n\r\n        <\/div>\r\n        <div id="loginValidcodeInputBox" class="loginValidcodeInputBox">\r\n            <input type="text" placeholder="图片验证码" id="loginValidcode" class="loginValidcode loginInput" maxlength="11" autocomplete="off">\r\n            <img id="loginValidImg" class="" src="">\r\n        <\/div>\r\n        <div id="loginValidcodeBtnbox" class="loginValidcodeBtnbox">\r\n            <input type="button" value="确定" id="loginValidcodeImgBtn" class="loginValidcodeBtn" autocomplete="off">\r\n\r\n\r\n        <\/div>\r\n        <div id="loginVoiceValidcodeBtnbox" class="loginValidcodeBtnbox" style="display: none">\r\n            <input type="button" value="确定" id="loginVoiceValidcodeImgBtn" class="loginValidcodeBtn" autocomplete="off">\r\n        <\/div>\r\n        <div id="loginValidcodeClose" class="loginValidcodeClose"><\/div>\r\n    <\/div>\r\n    <div id="loginValidcodeBg" class="loginValidcodeBg" style="display: none"><\/div>\r\n');
	var loadJS = function(url){
		var div = document.getElementById('mobileCodeLogin');
		var script = document.createElement('script');
		script.src = url;
		script.type = "text/javascript";
		div.appendChild(script);
	};
	loadJS("//passport.58.com/rsa/ppt_security.js");
	if("loginnew" == "loginnew"){
		loadJS("https://passport.58.com/static_js/js/login/mobilelogin_v20170420151011.js");
	}else if("loginnew" == "flmobile"){
		loadJS("https://passport.58.com/static_js/js/login/flmobilelogin_v20170316174308.js");
	}else{
		loadJS("https://passport.58.com/static_js/js/mobilelogin_js_v20170316174400.js");
	}
	loadJS("https://passport.58.com/static_js/js/login/ppstore_v20161102144259.js");
	loadJS("https://passport.58.com/static_js/js/login/ppfingerprint_v20161217150440.js");
	loadJS("https://passport.58.com/static_js/js/login/passport_fingerprint2_v20170526153213.js");
	
	
});	