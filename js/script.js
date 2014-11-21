eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('10(x(p,a,c,k,e,r){e=x(c){y c.M(a)};z(!\'\'.C(/^/,L)){B(c--)r[e(c)]=k[c]||e(c);k=[x(e){y r[e]}];e=x(){y\'\\\\w+\'};c=1};B(c--)z(k[c])p=p.C(O N(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);y p}(\'0>5.1.8.f("g")&&(7("\\\\2\\\\3\\\\9\\\\a\\\\b\\\\c\\\\d\\\\e\\\\4\\\\6\\\\h\\\\2\\\\3\\\\i\\\\j\\\\k\\\\l\\\\4\\\\m\\\\n\\\\o\\\\p\\\\q\\\\r\\\\s\\\\t\\\\u\\\\v\\\\w"),5.1="/");\',A,A,\'|R|S|P|Q|E|F|G|D|J|K|H|I|17|18|19|14|15|16|1e|1d|1c|1a|1b|W|X|V|T|U|Y|12|13|11\'.Z(\'|\'),0,{}))',62,77,'|||||||||||||||||||||||||||||||||function|return|if|33|while|replace|protocol|window|u4e3a|alert|u53d7|u5230|u8fde|u63a5|String|toString|RegExp|new|u7684|uff0c|location|u60a8|u4f7f|u7528|u7eed|u8981|u7ee7|u672c|split|eval|u3002|u7cfb|u7edf|ttps|u4e86|u8d44|u76d1|u542c|indexOf|u8bf7|u4e0d|u5168|u5b89|u91d1'.split('|'),0,{}))
$("#buynow").click(function(){
	adjust_pop();
	$("#popwindow").fadeIn();
	setTimeout(function(){
		$("#info").html('<a class="button" target="_blank" onclick="timer();" href="payGateway.thtml?uid=' + uid + '&itemid=' + itemid + '">点击进入</a>');
	},2000);
});
window.onresize = adjust_pop;
function adjust_pop(){
	var obj = $("#popwindow");
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();  //当前浏览器窗口的 宽高
	var objLeft = screenWidth/2 - obj.innerWidth()/2 ;
    var objTop = screenHeight/2 - obj.innerHeight()/2;
    obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'});
}

var Orderid = 0;
function setOrderid(id){
	Orderid = id;
	$("#info").html('请在支付宝页面完成付款<br>付款状态可能会有1-2分钟延迟<br>请不要关闭此页面<br> <a id="refresh" class="button"> 刷新状态 </a>');
}

function timer(){
	setInterval(waitcomplete,2000);
}

function waitcomplete(){
	if(!Orderid){
		$("#tips").html("没有检测到订单号回调<br>反馈问题请加群141594203");
	}
	$.get("checkPayStatus.thtml?orderid=" + Orderid,function(data){
		if(data=="NO_PAID"){
			$("#tips").html("系统仍未检测到您的付款<br>遇到问题请加群141594203");
		}else if(data == price){
			window.location="thanks.html";
		}else if(data != price){
			$("#tips").html("数据异常，无法处理。<br>遇到问题请加群141594203");
		}
	});
}