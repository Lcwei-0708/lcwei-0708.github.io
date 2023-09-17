document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  hljs.initLineNumbersOnLoad();

  /*--------------------------------------------------------------
  #   CopyButton
  --------------------------------------------------------------*/

  // 獲取所有的複製按鈕和代碼元素
  const copy_btns = document.querySelectorAll('.copy');

  // 為每個複製按鈕添加點擊事件
  copy_btns.forEach((copy_btn, index) => {
    copy_btn.addEventListener('click', (e) => {
      const parentCard = e.target.closest('.card');
      const codeElement = parentCard.querySelector('pre.code-wrap:not(.hidden) code');

      if (codeElement) {
        const textToCopy = codeElement.innerText;
        copyToClipboard(textToCopy, copy_btn);
      }
      else {
        console.log("error")
      }

      // 禁用按鈕
      copy_btn.disabled = true;

      // 取得代碼的所有行
      const lines = codeElement.innerText.split('\n');

      // 多行代碼，去掉行號並且去掉每行的首字符空格
      const cleanedLines = lines.filter((line, index) => index % 2 === 0).map(line => line.replace(/^\t/, ''));
      const textToCopy = cleanedLines.join('\n');

      // 複製代碼
      copyToClipboard(textToCopy, copy_btn);
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

  /*--------------------------------------------------------------
  #   LanguageSelection
  --------------------------------------------------------------*/

  // 獲取所有語言選擇器元素
  const languageSelectedList = document.querySelectorAll('.languageSelected');

  // 點擊語言選擇器時觸發的函數
  function handleLanguageSelectorClick(e) {
    const parentBlockContainer = this.closest('.block-container');
    const languageOptions = parentBlockContainer.querySelector('.languageOptions');
    const Options = languageOptions.querySelectorAll('li');
    const codeBlocks = parentBlockContainer.querySelectorAll('pre');
    const annotationBlocks = parentBlockContainer.querySelectorAll('p');

    // 切換選項的顯示與隱藏
    languageOptions.classList.toggle('active');

    // 停止事件冒泡，以防止點擊語言選擇器時觸發文檔點擊事件
    e.stopPropagation();

    // 點擊語言選項時的處理函數
    function handleOptionClick() {
      Options.forEach((option) => {
        option.classList.remove('selected');
      });

      this.classList.add('selected');

      // 隱藏選項
      languageOptions.classList.remove('active');

      // 獲取選擇的語言
      const selectedLanguage = this.getAttribute('language');

      // 顯示對應的程式碼和註釋，隱藏其他的
      codeBlocks.forEach((code) => {
        const language = code.getAttribute('language');
        if (language === selectedLanguage) {
          code.classList.remove('hidden');
        } else {
          code.classList.add('hidden');
        }
      });

      annotationBlocks.forEach((annotation) => {
        const language = annotation.getAttribute('language');
        if (language === selectedLanguage) {
          annotation.classList.remove('hidden');
        } else {
          annotation.classList.add('hidden');
        }
      });

      // 找到父元素 .languageSelector
      var parentElement = this.parentElement.parentElement;

      // 從 .languageSelector 中找到 .languageSelected
      var languageSelected = parentElement.querySelector('.languageSelected');

      languageSelected.innerHTML = selectedLanguage + '<i class="bi bi-chevron-down"></i>';
    }

    // 為每個語言選項綁定點擊事件
    const optionsList = parentBlockContainer.querySelectorAll('.options');
    optionsList.forEach((option) => {
      option.addEventListener('click', handleOptionClick);
    });

    document.addEventListener('click', (event) => {  
      if (!languageOptions.contains(event.target)) {
        languageOptions.classList.remove('active');
      }    
    });
  }  

  // 為所有語言選擇器綁定點擊事件
  languageSelectedList.forEach((element) => {
    element.addEventListener('click', handleLanguageSelectorClick);
  });

  /*--------------------------------------------------------------
  #   PageSelection
  --------------------------------------------------------------*/

  const pageOptions = document.querySelectorAll('.pageOptions li');

  pageOptions.forEach(option => {
    option.addEventListener('click', function() {
      pageOptions.forEach(otherOption => {
        if (otherOption !== option) {
          otherOption.classList.remove('selected');
        }
      });

      option.classList.add('selected');

      const selectedPage = option.getAttribute('page');

      const parentBlockContainer = option.closest('.block-container');
      const codeBlocks = parentBlockContainer.querySelectorAll('pre');
      const annotationBlocks = parentBlockContainer.querySelectorAll('p');

      // 顯示對應的程式碼和註釋，隱藏其他的
      codeBlocks.forEach((code) => {
        const page = code.getAttribute('page');
        if (page === selectedPage) {
          code.classList.remove('hidden');
        } else {
          code.classList.add('hidden');
        }
      });

      annotationBlocks.forEach((annotation) => {
        const page = annotation.getAttribute('page');
        if (page === selectedPage) {
          annotation.classList.remove('hidden');
        } else {
          annotation.classList.add('hidden');
        }
      });
    });
  });
  
});