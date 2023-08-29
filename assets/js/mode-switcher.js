let currentMode = 'light';
// 獲取模式切換按鈕和 icon
const modeIcon = document.querySelector('.mobile-mode');

// 在其他頁面讀取儲存的模式
const savedMode = localStorage.getItem('selectedMode');
const dropdown = document.querySelector('.dropdown');

// 取得兩種 highlight 樣式表的 link 元素
const lightStyle = document.getElementById('highlight-style-light');
const darkStyle = document.getElementById('highlight-style-dark');

if (savedMode) {
    // 套用儲存的模式到頁面
    setMode(savedMode);    
}

const modeSwitches = document.querySelectorAll('.mode-switch');

const dropdownItems = dropdown.querySelectorAll('ul li .mode-switch');

modeSwitches.forEach((switchElement) => {
    switchElement.addEventListener('click', () => {
    const selectedMode = switchElement.getAttribute('data-mode');
    setMode(selectedMode);
    });
});

document.addEventListener('click', (event) => {
  
    // 檢查點擊事件的目標是否在 .dropdown 之外
    if (!dropdown.contains(event.target)) {
      // 關閉 .dropdown 的 ul 介面
      dropdown.classList.remove('active');
    }    

  });

// 點擊顯示/隱藏下拉選單
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');

    const bodyElement = document.querySelector('body');
    const computedStyles = getComputedStyle(bodyElement);
    var bgColor = computedStyles.getPropertyValue('--bg2-color');
    var fontColor = computedStyles.getPropertyValue('--font2-color');

    // 根據 currentMode 設定每個 li 的背景顏色和文字顏色
    dropdownItems.forEach(item => {
        const itemMode = item.getAttribute('data-mode');
        const itemIcon = item.querySelector('i.bi');
        

        if (dropdown.classList.contains('active')) {
            if (itemMode === currentMode) {
                item.style.backgroundColor = fontColor;
                item.style.color = bgColor;
                itemIcon.style.color = bgColor;            
            } 
            else {
                item.style.backgroundColor = bgColor;
                item.style.color = fontColor;
                itemIcon.style.color = fontColor;
            }
        } 
    });
});

function setMode(mode) {
    // 更新 currentMode 變數
    currentMode = mode;

    // 儲存選擇的模式到 LocalStorage
    localStorage.setItem('selectedMode', currentMode);

    document.body.classList.remove('light-mode', 'dark-mode', 'auto-mode');
    // 加上目前選擇的模式相關類別
    document.body.classList.add(currentMode + '-mode');

    if (currentMode === 'light') {
        // 更新 icon
        dropdown.querySelector('i.bi').classList.remove('bi-moon', 'bi-circle-half');
        dropdown.querySelector('i.bi').classList.add('bi-sun');
        modeIcon.setAttribute('data-mode', 'light');
        dropdown.classList.toggle('active'); 
        modeIcon.classList.remove('bi-circle-half');
        modeIcon.classList.add('bi-sun');

        if(lightStyle != null && darkStyle != null){
            lightStyle.disabled = false;
            darkStyle.disabled = true;
        }
    
    } else if (currentMode === 'dark') {
        // 更新 icon
        dropdown.querySelector('i.bi').classList.remove('bi-sun', 'bi-circle-half');
        dropdown.querySelector('i.bi').classList.add('bi-moon');
        modeIcon.setAttribute('data-mode', 'dark');
        dropdown.classList.toggle('active');       
        modeIcon.classList.remove('bi-sun');
        modeIcon.classList.add('bi-moon'); 
        
        if(lightStyle != null && darkStyle != null){
            lightStyle.disabled = true;
            darkStyle.disabled = false;
        }
    
    } else if (currentMode === 'auto') {
        // 更新 icon
        dropdown.querySelector('i.bi').classList.remove('bi-sun', 'bi-moon');
        dropdown.querySelector('i.bi').classList.add('bi-circle-half');
        modeIcon.setAttribute('data-mode', 'auto');
        dropdown.classList.toggle('active');      
        modeIcon.classList.remove('bi-moon');
        modeIcon.classList.add('bi-circle-half');

        if(lightStyle != null && darkStyle != null){
            // 判斷是否是暗色模式
            const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            // 根據模式設定樣式表的可見性
            if (isDarkMode) {
                lightStyle.disabled = true; // 關閉日間模式樣式表
                darkStyle.disabled = false; // 啟用夜間模式樣式表
            } else {
                lightStyle.disabled = false; // 啟用日間模式樣式表
                darkStyle.disabled = true; // 關閉夜間模式樣式表
            }
        }
    }
    
    // 設定為依系統模式
    if (dropdown.classList.contains('active')){
        
        // 設定為依系統模式
        dropdown.classList.remove('active');
    }
    else {
        // 設定為依系統模式
        dropdown.classList.toggle('active');
    }
}

// 監聽圖示的點擊事件
modeIcon.addEventListener('click', () => {
  // 獲取當前模式和 icon 的 class
  currentMode = modeIcon.getAttribute('data-mode');
  
  if (currentMode === 'light') {
    // 切換為暗黑模式
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    modeIcon.setAttribute('data-mode', 'dark');
    modeIcon.classList.remove('bi-sun');
    modeIcon.classList.add('bi-moon');
    dropdown.querySelector('i.bi').classList.remove('bi-bi-circle-half', 'bi-sun');
    dropdown.querySelector('i.bi').classList.add('bi-moon');
    currentMode = 'dark';

    if(lightStyle != null && darkStyle != null){
        lightStyle.disabled = true;
        darkStyle.disabled = false;
    }
  } else if (currentMode === 'dark') {
    // 切換為 auto 模式
    document.body.classList.remove('dark-mode');
    document.body.classList.add('auto-mode');
    modeIcon.setAttribute('data-mode', 'auto');
    modeIcon.classList.remove('bi-moon');
    modeIcon.classList.add('bi-circle-half');      
    dropdown.querySelector('i.bi').classList.remove('bi-sun', 'bi-moon');
    dropdown.querySelector('i.bi').classList.add('bi-circle-half');  
    currentMode = 'auto';

    if(lightStyle != null && darkStyle != null){
        // 判斷是否是暗色模式
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        // 根據模式設定樣式表的可見性
        if (isDarkMode) {
            lightStyle.disabled = true; // 關閉日間模式樣式表
            darkStyle.disabled = false; // 啟用夜間模式樣式表
        } else {
            lightStyle.disabled = false; // 啟用日間模式樣式表
            darkStyle.disabled = true; // 關閉夜間模式樣式表
        }
    }
  } else if (currentMode === 'auto') {
    // 切換回日間模式
    document.body.classList.remove('auto-mode');
    document.body.classList.add('light-mode');
    modeIcon.setAttribute('data-mode', 'light');
    modeIcon.classList.remove('bi-circle-half');
    modeIcon.classList.add('bi-sun');    
    dropdown.querySelector('i.bi').classList.remove('bi-moon', 'bi-circle-half');
    dropdown.querySelector('i.bi').classList.add('bi-sun');
    currentMode = 'light';

    if(lightStyle != null && darkStyle != null){
        lightStyle.disabled = false;
        darkStyle.disabled = true;
    }
  }
  // 儲存選擇的模式到 LocalStorage
  localStorage.setItem('selectedMode', currentMode);
});
