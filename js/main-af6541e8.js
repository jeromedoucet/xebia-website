window.selectMainMenu=function(e){var n=$(".indicator");if(e){e.addClass("selected");var o=e.position().left+e.outerWidth()/2-n.outerWidth()/2;n.css("left",o)}else n.css("visibility","hidden")},$(function(){function e(){return window.pageYOffset||document.documentElement.scrollTop}$(".mobile-menu-button").click(function(){$("nav").toggleClass("shown")});var n=function(){var e=window.location.href,n=e.substring(e.lastIndexOf("/")+1),o=null;$("nav li").each(function(){var e=$(this);0===n.indexOf(e.find("a").attr("href"))&&(o=e)}),selectMainMenu(o)};n(),$(window).resize(n),$(".xebia-global").click(function(){$(".xebia-links").slideToggle()});var o=$("#mentions-legales-popup");$(".mentions-legales").click(function(){o.slideDown()}),o.find(".close").click(function(){$("#mentions-legales-popup").slideUp()});var l=$("#form-contact-popup");$(".form-popup").click(function(){l.slideDown()}),l.find(".close").click(function(){$("#form-contact-popup").slideUp()});var i=$("#contact-popup");$(".contact-popup").click(function(){i.slideDown()}),i.find(".close").click(function(){$("#contact-popup").slideUp()});var c=300;$(window).scroll(function(){var n=e();n>=c?$(".header-bg").addClass("scroll-header-bg"):$(".header-bg").removeClass("scroll-header-bg"),n>=c?$(".header-links").addClass("scroll-header"):$(".header-links").removeClass("scroll-header"),n>=c?$(".header-content").addClass("scroll-header-2"):$(".header-content").removeClass("scroll-header-2")})});