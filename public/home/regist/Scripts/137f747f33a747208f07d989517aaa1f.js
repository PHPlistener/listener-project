$(function() {
    $('#regBox').html('<ul id="regUl" class="regUl">\n\n    <input type="hidden" name="source" id="sourceReg" value="passport">\n    <input type="hidden" name="token" id="tokenReg" value="rHL0curPgIi_NY8ISGSsTSDLAqUjZc3N">\n    <input type="hidden" name="tokencode" id="tokencodeReg" value="$tokencode">\n    <input type="hidden" name="codetype" id="codetypeReg" value="13">\n    <input type="hidden" name="targeturl" id="targeturlReg" value="">\n    <input type="hidden" name="voicetype" id="voicetypeReg" value="0">\n    <input type="hidden" name="validcode" id="validcodeReg" value="">\n    <input type="hidden" name="rsaExponent" id="rsaExponentReg" value="010001">\n    <input type="hidden" name="rsaModulus" id="rsaModulusReg" value="008baf14121377fc76eaf7794b8a8af17085628c3590df47e6534574efcfd81ef8635fcdc67d141c15f51649a89533df0db839331e30b8f8e4440ebf7ccbcc494f4ba18e9f492534b8aafc1b1057429ac851d3d9eb66e86fce1b04527c7b95a2431b07ea277cde2365876e2733325df04389a9d891c5d36b7bc752140db74cb69f">\n    <input type="hidden" name="totalTime" id="totalTimeReg" value="60">\n    <input type="hidden" name="remainTime" id="remainTimeReg" value="0">\n    <input type="hidden" name="vcodekey" id="vcodekeyReg" value="">\n    <input type="hidden" name="vcodekeyvoice" id="vcodekeyVoiceReg" value="">\n    <input type="hidden" name="callback" id="callbackReg" value="">\n\n    <!--手机号-->\n    <li id="regMobileLi" class="regLi regMobile">\n        <span class="regLable">手机号<\/span>\n        <input type="text" placeholder="手机号" name="mobile" id=\'regMobile\' class="regMobile regInput" maxlength="11" autocomplete="off"\/>\n        <input type="button" id=\'regGetcodeBtn\' class="regGetcodeBtn"  value="获取验证码"\/>\n\n    <\/li>\n    <li id="regMobileTip" class="regMobileTip regMobileTipClear regTip">\n        <span id="regMobileTipText" class="regTipText"><\/span>\n        <span id="regVoicecodeTip" class="regVoicecodeTip">\n        <span>验证码收不到?<\/span>\n        <input type="button"  id="regVoicecodeBtn" class="regVoicecodeBtn" value="使用语音验证"\/>\n        <\/span>\n    <\/li>\n\n    <!--短信验证码-->\n    <li id="regMobileCodeLi" class="regLi regMobileCodeLi">\n        <span class="regLable">验证码<\/span>\n        <input type="text" placeholder="验证码" id="regMobileCode" class="regMobileCode regInput" maxlength="6" autocomplete="off"\/>\n    <\/li>\n    <li id="regMobileCodeTip" class="regMobileCodeTip regMobileCodeTipClear regTip">\n        <span id="regMobileCodeTipText" class="regTipText"><\/span>\n            <span id="regMobileSure" class="regMobileSure">该手机号已注册，\n               	<span id="regLoginBtn" class="regLoginBtn">立即登录<\/span>&nbsp;或&nbsp;<span id="regContinue" class="regContinue">继续注册<\/span>\n            <\/span>\n            <span id="regMobileSureOnlyLogin" class="regMobileSure">该手机号已注册，\n                <span id="regLoginBtnOnlyLogin" class="regLoginBtn">立即登录<\/span> \n            <\/span>\n    <\/li>\n    \n    <!--username-->\n    <li id="regMobileUsernameLi" class="regLi regMobileUsernameLi">\n     	<span class="regLable">用户名<\/span>\n    	<input type="text" placeholder="用户名" id="regMobileUsername" class="regMobileUsername regInput" maxlength="20" autocomplete="off">\n	<\/li>\n    \n    <li id="regMobileUsernameTip" class="regMobileUsernameTip regMobileUsernameTipClear regTip">\n   		<span id="regMobileUsernameTipText" class="regTipText"><\/span>\n	<\/li>\n    \n	\n    <!--设置密码-->\n    <li id="regPasswordLi" class="regLi">\n        <span class="regLable">设置密码<\/span>\n        <input type="password" placeholder="设置密码" maxlength="16" autocomplete="off" style="display: none"\/>\n        <input type="password" placeholder="设置密码" maxlength="16" autocomplete="off" style="display: none"\/>\n        <input type="text" placeholder="设置密码" id="regPasswordText" class="regPassword regInput" maxlength="16" autocomplete="off"\/>\n        <input type="password" placeholder="设置密码" id="regPassword" class="regPassword regInput" maxlength="16" autocomplete="off" style="display: none"\/>\n    <\/li>\n     <li id="regPasswordTip" class="regPasswordTip regPasswordTipClear regTip">\n     	<span id="regPasswordTipText" class="regTipText"><\/span>\n        <div id="passwordlevelBox" class="passwordlevelBox">\n        	<span id="passwordlevel1" class="passwordlevel passwordlevelon">弱<\/span>\n            <span id="passwordlevel2" class="passwordlevel">中<\/span>\n            <span id="passwordlevel3" class="passwordlevel">强<\/span>\n         <\/div>\n      <\/li>\n\n    <!--确认密码-->\n    <li id="regRepasspordLi" class="regLi">\n        <span class="regLable">确认密码<\/span>\n        <input type="text" placeholder="确认密码" id="regRepasswordText" class="regRepassword regInput" maxlength="16" autocomplete="off"\/>\n        <input type="password" placeholder="确认密码" id="regRepassword" class="regRepassword regInput" maxlength="16" autocomplete="off" style="display: none"\/>\n    <\/li>\n    <li id="regRepasswordTip" class="regRepasswordTip regRepasswordTipClear regTip">\n        <span id="regRepasswordTipText" class="regTipText"><\/span>\n    <\/li>\n\n    <!--登录按钮-->\n    <li id="regButtonLi"  class="regButtonLi regLi">\n        <div id="regAgreementBox">\n            <input type="checkbox" checked="checked" id="regAgreementCheckbox"\/>\n                        <span>我已阅读并同意\n                            <a id="regAgreement" target="_blank" href="http:\/\/about.58.com\/home\/announcement.html">《58同城使用协议》<\/a>\n                        <\/span>\n\n        <\/div>\n        <div class="regButtonBox">\n            <input type="button" value="注册" id="regButton" class="regButton"\/>\n        <\/div>\n    <\/li>\n\n<\/ul>\n<div id="regValidcodeBox" class="regValidcodeBox" style="display: none">\n    <div id="regValidcodeTipTextBox">\n        <span id="regValidcodeTipText"  class="regValidcodeTipText regTipText">请输入图片验证码<\/span>\n\n    <\/div>\n    <div id="regValidcodeInputBox" class="regValidcodeInputBox">\n        <input type="text" placeholder="图片验证码" id="regValidcode" class="regValidcode regInput" maxlength="11" autocomplete="off">\n        <img id="regValidImg" class="" src="\/\/passport.58.com\/validcode\/get?vcodekey=8Z9FPZQ6gKufQr1HUYpEXfH7qAHVt6bK&amp;time=1474376098844">\n    <\/div>\n    <div id="regValidcodeBtnbox" class="regValidcodeBtnbox">\n        <input type="button" value="确定" id="regValidcodeImgBtn" class="regValidcodeBtn"  autocomplete="off">\n\n\n    <\/div>\n    <div id="regVoiceValidcodeBtnbox" class="regValidcodeBtnbox" style="display: none">\n        <input type="button" value="确定" id="regVoiceValidcodeImgBtn" class="regValidcodeBtn"  autocomplete="off">\n    <\/div>\n    <div id="regValidcodeClose" class="regValidcodeClose"><\/div>\n<\/div>\n<div id="regValidcodeBg" class="regValidcodeBg" style="display: none"><\/div>');

    var loadJS = function(url){
        var oHead = document.getElementsByTagName('head').item(0);
        var script = document.createElement('script');
        script.src = url;
        script.type = "text/javascript";
        oHead.appendChild(script);
    };

    loadJS("https://passport.58.com/static_js/js/login/pc_reg_v20170517163519.js");
    loadJS("https://passport.58.com/static_js/js/login/ppstore_v20161102144259.js");
	loadJS("https://passport.58.com/static_js/js/login/ppfingerprint_v20161217150440.js");
    loadJS("https://passport.58.com/static_js/resource/xxzl/tracker/tracker.sp.min_v20170524141057.js");
    setTimeout(function(){
        var _conf = {
            clientType: '1',
            buttonId: ['^regButton','^regGetcodeBtn','^regValidcodeImgBtn','^regVoiceValidcodeImgBtn'],
            inputId: ['^regMobile','^regMobileCode','^regMobileUsername','^regPassword','^regRepassword','^regValidcode'],
            triggerId:['^regButton','^regGetcodeBtn','^regValidcodeImgBtn','^regVoiceValidcodeImgBtn']
        };
        window.__tracker.init(_conf);
    
    },500);
});
