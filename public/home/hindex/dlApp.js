var DlAppSnes=DlAppSnes||{};DlAppSnes.dlAppTip=function(){var e=document.body.offsetWidth||document.documentElement.clientWidth;if(e<=1500){$(".DlApp-btn").addClass("dlAppSmall")}$(".DlApp .cloBtn").on("click",function(){d(300,100)});$(".DlApp-btn").on("click",function(){c(300,200)});function c(a,b){$(".DlApp-btn").animate({width:0},200);setTimeout(function(){$(".DlApp,.DlApp-wrap").show();$(".DlApp").animate({width:"100%"},a,"swing")},b)}function d(a,b){$(".DlApp").animate({width:0},a,"swing",function(){setTimeout(function(){$(".DlApp-wrap").hide();if(e<=1500){$(".DlApp-btn").animate({width:80},200)}else{$(".DlApp-btn").animate({width:130},200)}},b)})}};$(function(){DlAppSnes.dlAppTip()});