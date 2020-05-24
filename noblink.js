// ==UserScript==
// @name         noblink
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  取消缤纷用户炫彩功能
// @author       ztc.
// @match        http://oi.nks.edu.cn/*
// @grant        none
// ==/UserScript==

(function(){
	for(var i=0; i<100; i++)window.clearInterval(i);
})();
