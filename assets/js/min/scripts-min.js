$(document).ready(function(){$(window).width()<=1024?$("button.register").remove().prependTo(".container"):$(window).width()>=1024&&$("button.register").remove().appendTo("header"),$(window).width()<=1024?($("ul.nav").prepend("<div id='close'>&#x2715;</div>"),$("header nav").append("<div id='hamburger'>&#9776;</div>")):($("#close").remove(),$("#hamburger").remove()),$("#hamburger").on("click",function(){$("header nav ul").addClass("open"),$("body").bind("touchmove",function(e){e.preventDefault()})}),$("#close").on("click",function(){$("header nav ul").removeClass("open"),$("body").unbind("touchmove")})});