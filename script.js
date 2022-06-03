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
  submitBtn.style.width = "125px";

  let submitBtnStyle = document.querySelector(".s_btn");
  submitBtnStyle.style.backgroundColor = "#253446";

  let submitBtnInputStyle = document.querySelector(
    "#s_kw_wrap input[type='text']"
  );
  submitBtnInputStyle.style.border = "2px solid #253446";
  submitBtnInputStyle.style.borderRadius = "100px 0 0 100px";

  let submitBtnInputStyleOnClick = document.querySelectorAll(
    "#s_kw_wrap input[type='text']:hover,#s_kw_wrap input[type='text']:focus"
  );
  submitBtnInputStyleOnClick.forEach(e => {
    e.style.border = "2px solid #253446";
    e.addEventListener("click", () => {
      e.className = "bg s_ipt_wr new-pmd quickdelete-wrap";
    });
  });

  let navBox = document.querySelector("#s_top_wrap");
  navBox.style.minWidth = "0";
  navBox.style.width = "0";

  let baiduLogo = document.querySelector("#s_lg_img");
  baiduLogo.style.display = "none";

  let baiduNavBar = document.querySelectorAll(
    "#s-top-left,.s-top-right,.s-bottom-layer-content,#bottom_layer"
  );
  baiduNavBar.forEach(e => (e.style.display = "none"));
})();
