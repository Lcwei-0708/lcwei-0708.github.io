document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();

  // 獲取所有的複製按鈕和代碼元素
  const copy_btns = document.querySelectorAll('.copy');
  const code_elements = document.querySelectorAll('.code code');

  // 為每個複製按鈕添加點擊事件
  copy_btns.forEach((copy_btn, index) => {
    copy_btn.addEventListener('click', () => {
      // 禁用按鈕
      copy_btn.disabled = true;

      // 取得代碼的所有行
      const lines = code_elements[index].innerText.split('\n');

      // 如果只有一行代碼，去掉首尾空格即可
      if (lines.length === 1) {
        const textToCopy = lines[0].trim();

        // 複製代碼
        copyToClipboard(textToCopy, copy_btn);
      } else {
        // 多行代碼，去掉行號並且去掉每行的首字符空格
        const cleanedLines = lines.map(line => line.substring(1)).filter(line => line.trim().length > 0);
        const textToCopy = cleanedLines.join('\n');

        // 複製代碼
        copyToClipboard(textToCopy, copy_btn);
      }
    });
  });

  // 複製代碼到剪貼板的函數
  function copyToClipboard(text, copy_btn) {
    // 切換圖示
    copy_btn.innerHTML = '<iconify-icon icon="tabler:check"></iconify-icon><span>已複製！</span>';

    // 創建一個 textarea 用來臨時存儲文字並複製
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // 一段時間後啟用按鈕並隱藏圖示
    setTimeout(() => {
      copy_btn.innerHTML = '<iconify-icon icon="akar-icons:copy"></iconify-icon>';
      copy_btn.disabled = false; // 啟用按鈕
    }, 1000); // 1 秒後隱藏
  }
});