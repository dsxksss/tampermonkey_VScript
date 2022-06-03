// ==UserScript==
// @name         百度美化
// @namespace    http://ventroar.xyz/
// @version      0.1
// @description  try to take over the world!
// @author       VentCat
// @match        https://www.baidu.com/
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  let submitBtn = document.querySelector("#su");
  submitBtn.value = "浅浅百度下吧";
  submitBtn.style.width = "133px";

  let baiduLogo = document.querySelector("#s_lg_img");
  baiduLogo.style.display = "none";

  let baiduNavBar = document.querySelectorAll(
    "#s-top-left,.s-top-right,.s-bottom-layer-content,#bottom_layer"
  );
  baiduNavBar.forEach(e => (e.style.display = "none"));

  console.log(baiduNavBar);
})();
