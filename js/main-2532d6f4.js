!function(){$(function(){var e=$("nav li").filter(function(){return"services.html"==$(this).find("a").attr("href")}),t=function(){selectMainMenu(e)};t(),$(window).resize(t)})}(),window.CLIENTS=[{name:"Sephora"},{name:"Voyages-SNCF.com"},{name:"PMU"},{name:"Le Figaro"},{name:"Givaudan"},{name:"La Centrale.fr"},{name:"Orange"}],function(){var e=function(e){return e.replace(/\s/g,"-").replace(/['.]/g,"_").replace(/[ô]/g,"o").replace(/[éè]/g,"e").replace(/\+/g,"_plus").toLowerCase()};window.Client=function(e,t){this.clientTemplate=e,this.idElement=t},window.Client.prototype.displayIn=function(t){var n=t.map(function(t,n){return this.clientTemplate({name:t.name,slurpedName:e(t.name),idx:n})},this).join("");this.getElement().append(n)},window.Client.prototype.getElement=function(){return $("#"+this.idElement)},window.Client.prototype.caroussel=function(){var e=this.getElement(),t=e.children(),n=t.outerWidth(!0),o=t.length,i=Math.round(e.parent().width()/n),a=o%i,r=(o-(a?a:i))*n,c=i*n,s={currentPosition:0,moveLeft:function(){var e=this.currentPosition+c;e>0&&(e=-r),this.move(e)},moveRight:function(){var e=this.currentPosition-c;-r>e&&(e=0),this.move(e)},move:function(t){this.currentPosition=t,e.css("left",t)}};$(".before-button").click(function(){s.moveLeft()}),$(".after-button").click(function(){s.moveRight()})}}(),function(e,t){$(function(){var n=e.client,o=new Client(n,"clients-logo");o.displayIn(t),o.caroussel()})}(window.TEMPLATES,window.CLIENTS),function(e,t){var n=function(e){this.template=e},o=function(t,n,o){var i=e.ajax(t,{dataType:"jsonp"});i.done(function(t){var i=t.posts,a=i.map(function(e){if(!e)return"";var t=e.excerpt.replace(/\s\[(.*)]/g,"$1").split(" ").slice(0,30).join(" ")+"...",o={title:e.title,name:e.author?e.author.name:"",date:e.date?moment(e.date).format("DD MMMM YYYY"):"",description:t,url:e.url};return n(o)}).join("");e("#"+o).html(a)})};n.prototype.displayIn=function(e){var t="http://blog.xebia.fr/wp-json-api/get_recent_posts/?count=3";o(t,this.template,e)},n.prototype.displayCategoryIn=function(e,t){var n="http://blog.xebia.fr/wp-json-api/get_category_posts/?slug="+e+"&count=3";o(n,this.template,t)},t.Blog=n}($,window),function(e){var t=e.blog;$(function(){new Blog(t).displayCategoryIn("mobilite","blog-articles-wrapper")})}(window.TEMPLATES),function(e){"use strict";if("undefined"==typeof e)return"console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."),void 0;var t=e.featherlight=function(n,o){if(this.constructor===t)this.id=t.id++;else{if("string"==typeof n||!1!=n instanceof e){var i=(new t).setup(n,o);return i.config.open.call(i),i}o=e.extend({},t.defaults,n||{}),e(o.selector,o.context).featherlight()}},n=function(e){if(27===e.keyCode&&!e.isDefaultPrevented()){var n=t.current();n&&n.config.closeOnEsc&&(n.$instance.find("."+n.config.namespace+"-close:first").click(),e.preventDefault())}};e.extend(t,{id:0,defaults:{autostart:!0,namespace:"featherlight",selector:"[data-featherlight]",context:"body",type:{image:!1,ajax:!1},targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",beforeOpen:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterClose:e.noop,contentFilters:["jquery","image","html","ajax"],open:function(e){var t=this.config.beforeOpen.call(this,e);return!1!==t&&(t=this.open(e)),!1!==t&&this.config.afterOpen.call(this,e),t},close:function(e){var t=this.config.beforeClose.call(this,e);!1!==t&&this.close(e)}},methods:{setup:function(n,o){"object"!=typeof n||n instanceof e!=!1||o||(o=n,n=void 0),o=e.extend({},t.defaults,o);var i=o.resetCss?o.namespace+"-reset":o.namespace,a=e(o.background||'<div class="'+i+'"><div class="'+i+'-content"><span class="'+i+"-close-icon "+o.namespace+'-close">'+o.closeIcon+"</span></div></div>"),r=this;return e.extend(r,{config:o,target:n,$instance:a.clone().addClass(o.variant)}),r.$instance.on(o.closeTrigger+"."+o.namespace,function(t){var n=e(t.target);("background"===o.closeOnClick&&n.is("."+o.namespace)||"anywhere"===o.closeOnClick||n.is("."+o.namespace+"-close"))&&(t.preventDefault(),o.close.call(r))}),this},attach:function(t,n,o){var i={};return e.each(t[0].attributes,function(){var t=this.name.match(/^data-featherlight-(.*)/);if(t){var n=this.value;try{n=e.parseJSON(n)}catch(o){}i[e.camelCase(t[1])]=n}}),this.$elm=t,this.setup(n,e.extend(i,o)),t.on(this.config.openTrigger+"."+this.config.namespace,e.proxy(this.config.open,this)),this},getContent:function(){var n,o=this,i=o.target||o.$elm.attr(o.config.targetAttr)||"";for(var a in o.config.type)o.config.type[a]===!0&&(n=t.contentFilters[a]);if(!n&&i in t.contentFilters&&(n=t.contentFilters[i],i=o.target&&o.$elm.attr(o.config.targetAttr)),i=i||o.$elm.attr("href")||"",!n){var r=i;if(i=null,e.each(o.config.contentFilters,function(){return n=t.contentFilters[this],n.test&&(i=n.test(r)),!i&&n.regex&&r.match&&r.match(n.regex)&&(i=r),!i}),!i)return"console"in window&&window.console.error("Featherlight: no content filter found "+(r?' for "'+r+'"':" (no target specified)")),!1}return n.process.call(o,i)},setContent:function(t){var n=this;(t.is("iframe")||e("iframe",t).length>0)&&n.$instance.addClass(n.config.namespace+"-iframe"),n.$content=t.clone().addClass(n.config.namespace+"-inner"),n.$instance.find("."+n.config.namespace+"-inner").remove(),n.$instance.find("."+n.config.namespace+"-content").append(n.$content)},open:function(o){var i=this;o&&o.preventDefault();var a=this.getContent();return a?(i.constructor._opened.add(i._openedCallback=function(e){i.$instance.closest("body").length>0&&(e.currentFeatherlight=i)}),this.config.closeOnEsc&&n&&(e(document).bind("keyup."+t.defaults.namespace,n),n=null),this.setContent(a),this.$instance.appendTo("body").fadeIn(this.config.openSpeed),void 0):!1},close:function(e){var t=this;t.constructor._opened.remove(t._openedCallback),t.$instance.fadeOut(t.config.closeSpeed,function(){t.$instance.detach(),t.config.afterClose.call(t,e)})}},contentFilters:{jquery:{regex:/^[#.]\w/,test:function(t){return t instanceof e&&t},process:function(t){return e(t)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,process:function(t){return e('<img src="'+t+'" alt="" class="'+this.config.namespace+'-image" />')}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(t){return e(t)}},ajax:{regex:/./,process:function(t){var n=this,o=e("<div></div>").load(t,function(t,i){"error"!==i&&e.featherlight(o.html(),e.extend({},n.config,{type:{html:!0}}))})}}},current:function(){var e={};return this._opened.fire(e),e.currentFeatherlight},close:function(){var e=t.current();e&&e.config.close.call(e)},_opened:e.Callbacks()}),t.prototype=e.extend({constructor:t},t.methods),e.fn.featherlight=function(n,o){return this.each(function(){(new t).attach(e(this),o,n)}),this},e(document).ready(function(){var n=t.defaults;n.autostart&&e(n.selector,n.context).featherlight()})}(jQuery);