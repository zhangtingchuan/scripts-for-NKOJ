// ==UserScript==
// @name         copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  添加样例复制按钮
// @author       ztc.
// @match        http://oi.nks.edu.cn/*/Problem/*
// @grant        none
// ==/UserScript==

(function(){
	var t=document.getElementsByClassName("col-lg-6");
	var btn="<button class=\"cp btn btn-default\">复制</button>";
	for(var i=0;i<t.length;i++)t[i].childNodes[1].innerHTML+=btn;
	$(".cp").click(function(){
		var t0=this;
		var text=t0.parentNode.parentNode.childNodes[3].children[0].innerText;
        console.log(text);
		var $tmp=$("<textarea>");
		$("body").append($tmp);
		$tmp.val(text).select();
		document.execCommand("copy");
		$tmp.remove();
		$(t0).text("复制成功");
		setTimeout(function(){$(t0).text("复制");},750);
	})
})();
