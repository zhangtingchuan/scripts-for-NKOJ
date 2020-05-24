// ==UserScript==
// @name         noblink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  取消缤纷用户炫彩功能
// @author       me
// @match        http://oi.nks.edu.cn/*
// @grant        none
// ==/UserScript==

(function(){
	for(i=0; i<100; i++)window.clearInterval(i);
})();
