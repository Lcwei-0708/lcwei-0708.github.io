document.addEventListener('DOMContentLoaded', function() {  
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();

  const copy_btns = document.querySelectorAll('.copy');
  const code_elements = document.querySelectorAll('.code code');

  copy_btns.forEach((copy_btn, index) => {
    copy_btn.addEventListener('click', () => {
      // 切換 icon
      copy_btn.innerHTML = '<iconify-icon icon="tabler:check"></iconify-icon><span>Copied!</span>';

      // 取得純文字內容，不包含行號
      const lines = code_elements[index].innerText.split('\n');
      const cleanedLines = lines.map(line => line.substring(1)).filter(line => line.trim().length > 0);
      const textToCopy = cleanedLines.join('\n');

      // 建立一個 textarea 來暫時存儲文字並複製
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // 一段時間後隱藏 icon 並恢復原本的 icon
      setTimeout(() => {
        copy_btn.innerHTML = '<iconify-icon icon="akar-icons:copy"></iconify-icon>';
      }, 1000); // 1 秒後隱藏
    });
  });
});
