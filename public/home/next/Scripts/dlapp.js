var DlAppSnes=DlAppSnes||{};DlAppSnes.dlAppTip=function(){var b=document.body.offsetWidth||document.documentElement.clientWidth;$(".DlApp .cloBtn").on("click",function(){a(300,100)});$(".DlApp-btn").on("click",function(){c(300,200)});function c(e,d){$(".DlApp-btn").animate({width:0},200);setTimeout(function(){$(".DlApp,.DlApp-wrap").show();$(".DlApp").animate({width:"100%"},e,"swing")},d)}function a(e,d){$(".DlApp").animate({width:0},e,"swing",function(){setTimeout(function(){$(".DlApp-wrap").hide();if(b<=1500){$(".DlApp-btn").addClass("dlAppSmall").animate({width:80},200)}else{$(".DlApp-btn").animate({width:130},200)}},d)})}};$(function(){DlAppSnes.dlAppTip()});