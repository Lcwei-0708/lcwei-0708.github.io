(function() {
  "use strict";

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  // 獲取當前年份
  var currentYear = new Date().getFullYear();

  // 設定出生年份
  var birthYear = 2000;

  // 計算年齡
  var age = currentYear - birthYear;

  // 將年齡放入 HTML 中
  var ageElement = document.getElementById("age");
  ageElement.textContent = age;

})()