document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
    ],
    // • rendering keys, e.g.:
    throwOnError : false
  });

  // 獲取所有的 math-container 元素
  var mathContainers = document.querySelectorAll('.math-container');
  var customAlertOverlay = document.getElementById('custom-alert-overlay');
  var mathFormula = document.getElementById('math-formula');
  var customAlertCopy = document.getElementById('custom-alert-copy');
  var customAlertClose = document.getElementById('custom-alert-close');

  // 點擊任何 math-container 元素觸發警告框
  mathContainers.forEach(function(mathContainer) {
    mathContainer.addEventListener('dblclick', function() {
      var latex = mathContainer.getAttribute('data-latex');
      mathFormula.innerHTML = latex;
      customAlertOverlay.style.display = 'flex';
    });
  });

  // 複製按鈕複製公式
  customAlertCopy.addEventListener('click', function() {
    var range = document.createRange();
    range.selectNode(mathFormula);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // 切換 icon 過一秒再切回來
    var originalIcon = customAlertCopy.innerHTML;
    customAlertCopy.innerHTML = '<iconify-icon icon="tabler:check"></iconify-icon>';
    setTimeout(function() {
      customAlertCopy.innerHTML = originalIcon;
    }, 1000);
  });

  // 點擊關閉按鈕關閉警告框
  customAlertClose.addEventListener('click', function() {
    customAlertOverlay.style.display = 'none';
  });

  // 點擊警告框外的區域關閉警告框
  customAlertOverlay.addEventListener('click', function(event) {
    if (event.target === customAlertOverlay) {
      customAlertOverlay.style.display = 'none';
    }
  });
});