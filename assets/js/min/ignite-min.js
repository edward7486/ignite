$(document).ready(function(){$(".banner").unslider({speed:1e3,delay:5e3,keys:!0,dots:!0,fluid:!1}),$(window).width()<=1024?($("ul.nav").prepend("<div id='close'>&#x2715;</div>"),$("body").prepend("<div id='hamburger'>&#9776;</div>")):($("#close").remove(),$("#hamburger").remove()),$("#hamburger").on("click",function(){$("nav ul.nav").addClass("open"),$("body").bind("touchmove",function(e){e.preventDefault()})}),$("#close").on("click",function(){$("nav ul.nav").removeClass("open"),$("body").unbind("touchmove")}),$(".nav li a").on("click",function(){$("nav ul.nav").removeClass("open"),$("body").unbind("touchmove")}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},500),!1}})})});