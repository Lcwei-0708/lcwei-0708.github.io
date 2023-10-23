window.onload = function paper_table() {
  var data = [
    {
      "date": "2023/03/14",
      "name": "自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立臺灣大學</p><p class="department"><b>系所名稱：</b>電信工程學系</p><p class="s_name"><b>學生姓名：</b>高偉聰</p><p class="t_name"><b>指導教授：</b>李弘毅</p><text class="update_date"><b>論文上傳日期：</b>中華民國111年06月</text>',
      "PDF_link": "./data/paper/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析.pdf",
      "PPT_link": "./data/paper/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析.pptx"
    },
    {
      "date": "2023/03/28",
      "name": "基於BERT的情緒分析應用於短句自動審查",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立中興大學</p><p class="department"><b>系所名稱：</b>電機工程學系</p><p class="s_name"><b>學生姓名：</b>何宗諭</p><p class="t_name"><b>指導教授：</b>林維亮</p><text class="update_date"><b>論文上傳日期：</b>中華民國111年08月</text>',
      "PDF_link": "./data/paper/基於BERT的情緒分析應用於短句自動審查/基於BERT的情緒分析應用於短句自動審查.pdf",
      "PPT_link": "./data/paper/基於BERT的情緒分析應用於短句自動審查/基於BERT的情緒分析應用於短句自動審查.pptx"
    },
    {
      "date": "2023/04/18",
      "name": "應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立中興大學</p><p class="department"><b>系所名稱：</b>資訊管理學系</p><p class="s_name"><b>學生姓名：</b>陳欽輝</p><p class="t_name"><b>指導教授：</b>蔡孟勳</p><text class="update_date"><b>論文上傳日期：</b>中華民國110年01月</text>',
      "PDF_link": "./data/paper/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例.pdf",
      "PPT_link": "./data/paper/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例.pptx"
    },
    {
      "date": "2023/05/02",
      "name": "運用意見探勘技術於類別不平衡資料集",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>私立中原大學</p><p class="department"><b>系所名稱：</b>資訊管理學系</p><p class="s_name"><b>學生姓名：</b>黃柔螢</p><p class="t_name"><b>指導教授：</b>洪智力</p><text class="update_date"><b>論文上傳日期：</b>中華民國111年06月</text>',
      "PDF_link": "./data/paper/運用意見探勘技術於類別不平衡資料集/運用意見探勘技術於類別不平衡資料集.pdf",
      "PPT_link": "./data/paper/運用意見探勘技術於類別不平衡資料集/運用意見探勘技術於類別不平衡資料集.pptx"
    },
    {
      "date": "2023/05/23",
      "name": "深度神經網路於中文斷詞之研究",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立臺灣科技大學</p><p class="department"><b>系所名稱：</b>資訊工程學系</p><p class="s_name"><b>學生姓名：</b>吳澤鑫</p><p class="t_name"><b>指導教授：</b>陳冠宇</p><text class="update_date"><b>論文上傳日期：</b>中華民國112年01月</text>',
      "PDF_link": "./data/paper/深度神經網路於中文斷詞之研究/深度神經網路於中文斷詞之研究.pdf",
      "PPT_link": "./data/paper/深度神經網路於中文斷詞之研究/深度神經網路於中文斷詞之研究.pptx"
    },
    {
      "date": "2023/06/06",
      "name": "混合資料層面與演算法層面技術之集成分類方法",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立成功大學</p><p class="department"><b>系所名稱：</b>資訊管理學系</p><p class="s_name"><b>學生姓名：</b>蔡函璇</p><p class="t_name"><b>指導教授：</b>翁慈宗</p><text class="update_date"><b>論文上傳日期：</b>中華民國111年05月</text>',
      "PDF_link": "./data/paper/混合資料層面與演算法層面技術之集成分類方法/混合資料層面與演算法層面技術之集成分類方法.pdf",
      "PPT_link": "./data/paper/混合資料層面與演算法層面技術之集成分類方法/混合資料層面與演算法層面技術之集成分類方法.pptx"
    },
    {
      "date": "2023/07/04",
      "name": "基於數據增強的情感辨識技術",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="school"><b>學校名稱：</b>國立高雄科技大學</p><p class="department"><b>系所名稱：</b>資訊管理學系</p><p class="s_name"><b>學生姓名：</b>黃智暘</p><p class="t_name"><b>指導教授：</b>黃文楨</p><text class="update_date"><b>論文上傳日期：</b>中華民國111年06月</text>',
      "PDF_link": "./data/paper/基於數據增強的情感辨識技術/基於數據增強的情感辨識技術.pdf",
      "PPT_link": "./data/paper/基於數據增強的情感辨識技術/基於數據增強的情感辨識技術.pptx"
    },
    {
      "date": "2023/07/25",
      "name": "An Improved Unbalanced Data Classification Method Based on Hybrid Sampling Approach",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>IEEE Access</p><p class="authors"><b>作者：</b>Biru Xu、Wenjia Wang、Rui Yang、Qi Han</p><text class="update_date"><b>論文上傳日期：</b>20 August 2021</text>',
      "PDF_link": "./data/paper/An Improved Unbalanced Data Classification Method Based on Hybrid Sampling Approach/An Improved Unbalanced Data Classification Method Based on Hybrid Sampling Approach.pdf",
      "PPT_link": "./data/paper/An Improved Unbalanced Data Classification Method Based on Hybrid Sampling Approach/An Improved Unbalanced Data Classification Method Based on Hybrid Sampling Approach.pptx"
    },
    {
      "date": "2023/08/15",
      "name": "Unbalanced Data Classification Algorithm Based on Hybrid Sampling and Ensemble Learning",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>IEEE Access</p><p class="authors"><b>作者：</b>Mengfei Wu、Ximing Li</p><text class="update_date"><b>論文上傳日期：</b>18 April 2022</text>',
      "PDF_link": "./data/paper/Unbalanced Data Classification Algorithm Based on Hybrid Sampling and Ensemble Learning/Unbalanced Data Classification Algorithm Based on Hybrid Sampling and Ensemble Learning.pdf",
      "PPT_link": "./data/paper/Unbalanced Data Classification Algorithm Based on Hybrid Sampling and Ensemble Learning/Unbalanced Data Classification Algorithm Based on Hybrid Sampling and Ensemble Learning.pptx"
    },
    {
      "date": "2023/09/05",
      "name": "A Combination Method of Resampling and Random Forest for Imbalanced Data Classification",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>IEEE Access</p><p class="authors"><b>作者：</b>LIU Zheng、QIU Han、ZHU Junhu</p><text class="update_date"><b>論文上傳日期：</b>15 August 2022</text>',
      "PDF_link": "./data/paper/A Combination Method of Resampling and Random Forest for Imbalanced Data Classification/A Combination Method of Resampling and Random Forest for Imbalanced Data Classification.pdf",
      "PPT_link": "./data/paper/A Combination Method of Resampling and Random Forest for Imbalanced Data Classification/A Combination Method of Resampling and Random Forest for Imbalanced Data Classification.pptx"
    },
    {
      "date": "2023/09/19",
      "name": "Two Novel SMOTE Methods for Solving Imbalanced Classification Problems",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>IEEE Access</p><p class="authors"><b>作者：</b>YUAN BAO、SIBO YANG</p><text class="update_date"><b>論文上傳日期：</b>13 January 2023</text>',
      "PDF_link": "./data/paper/Two Novel SMOTE Methods for Solving Imbalanced Classification Problems/Two Novel SMOTE Methods for Solving Imbalanced Classification Problems.pdf",
      "PPT_link": "./data/paper/Two Novel SMOTE Methods for Solving Imbalanced Classification Problems/Two Novel SMOTE Methods for Solving Imbalanced Classification Problems.pptx"
    },
    {
      "date": "2023/10/03",
      "name": "A New Hybrid Sampling Approach for Classification of Imbalanced Datasets",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>IEEE</p><p class="authors"><b>作者：</b>Anantaporn Hanskunatai</p><text class="update_date"><b>論文上傳日期：</b>27-30 April 2018</text>',
      "PDF_link": "./data/paper/A New Hybrid Sampling Approach for Classification of Imbalanced Datasets/A New Hybrid Sampling Approach for Classification of Imbalanced Datasets.pdf",
      "PPT_link": "./data/paper/A New Hybrid Sampling Approach for Classification of Imbalanced Datasets/A New Hybrid Sampling Approach for Classification of Imbalanced Datasets.pptx"
    },
    {
      "date": "2023/10/17",
      "name": "Neighbourhood-based Undersampling Approach for Handling Imbalanced and Overlapped Data",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '<p class="source"><b>來源：</b>Information Sciences</p><p class="authors"><b>作者：</b>Pattaramon Vuttipittayamongkol、Eyad Elyan</p><text class="update_date"><b>論文上傳日期：</b>3 September 2019</text>',
      "PDF_link": "./data/paper/Neighbourhood-based Undersampling Approach for Handling Imbalanced and Overlapped Data/Neighbourhood-based Undersampling Approach for Handling Imbalanced and Overlapped Data.pdf",
      "PPT_link": "./data/paper/Neighbourhood-based Undersampling Approach for Handling Imbalanced and Overlapped Data/Neighbourhood-based Undersampling Approach for Handling Imbalanced and Overlapped Data.pptx"
    },
    {
      "date": "2023/10/24",
      "name": "進度報告",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": '',
      "PDF_link": "https://nantai-my.sharepoint.com/:f:/g/personal/mb190102_office_stust_edu_tw/ErW4j4yhsllAgt6zvF88n0sBtLTbdcHiOzBwjNACnsSgWA?e=rvgklp",
      "PPT_link": "https://nantai-my.sharepoint.com/:f:/g/personal/mb190102_office_stust_edu_tw/ErW4j4yhsllAgt6zvF88n0sBtLTbdcHiOzBwjNACnsSgWA?e=rvgklp"
    }
  ];

  var tableBody = document.querySelector("#table-body"); // 選取表格的tbody

  for(var i = 0; i < data.length; i++) {
    var row = tableBody.insertRow(-1); // 插入新的一行

    var cell1 = row.insertCell(0); // 插入新的一列
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.classList.add("col_1"); // 加入class
    cell2.classList.add("col_2");
    cell3.classList.add("col_3");
    cell4.classList.add("col_4");

    cell1.innerHTML = data[i].date; // 將資料寫入表格
    cell2.innerHTML = data[i].name;
    cell3.innerHTML = data[i].PDF;
    cell4.innerHTML = data[i].PPT;
  }

  // 獲取所有class為pdf的元素
  const pdfElements = document.querySelectorAll('.pdf');

  // 透過 forEach() 方法來為每個 'pdf' 元素綁定點擊事件
  pdfElements.forEach((pdfElement, index) => {    
    // 綁定點擊事件
    pdfElement.addEventListener('click', (e) => {
      e.preventDefault(); // 防止預設事件觸發

      // 在新視窗開啟對應的連結
      window.open(data[index].PDF_link, '_blank');

      // 發送GA事件
      gtag('event', 'Download', {
        'event_category': 'File',
        'event_label': 'PDF',
        'value': 1
      });
    });
  });

  // 獲取所有class為ppt的元素
  const pptElements = document.querySelectorAll('.ppt');

  // 透過 forEach() 方法來為每個 'ppt' 元素綁定點擊事件
  pptElements.forEach((pptElement, index) => {    
    // 綁定點擊事件
    pptElement.addEventListener('click', (e) => {
      e.preventDefault(); // 防止預設事件觸發

      // 在新視窗開啟對應的連結
      window.open(data[index].PPT_link, '_blank');

      // 發送GA事件
      gtag('event', 'Download', {
        'event_category': 'File',
        'event_label': 'PPT',
        'value': 1
      });
    });
  });

  const tds = document.querySelectorAll("#table-body tr");
  const card = document.querySelector('.detail');

  tds.forEach((td) => {
    // 綁定 mousemove 事件
    td.addEventListener('mousemove', (e) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;

      // 計算卡片的位置
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const posX = mouseX + 10;
      const posY = mouseY - cardHeight - 10;

      // 設定卡片的樣式
      card.style.top = posY + 'px';
      card.style.left = posX + 'px';
    });

    td.addEventListener('mouseover', (e) => {
      var row = e.target.closest("tr"); // 取得被滑鼠移入的那一列
      var targetTd = e.target;

      if(row) {
        if (targetTd.classList.contains("col_2")) {
          card.innerHTML = data[td.rowIndex].detail;
          // 顯示 card
          card.style.display = 'block';
        }
        else  {
          card.style.display = 'none';
          return;
        }       
      }
    });

    tableBody.addEventListener("mouseout", function(event) {
      var row = event.target.closest("tr"); // 取得被滑鼠移開的那一列

      if(row) {
        // 隱藏 card
        card.style.display = 'none';
      }
    });
  });

  const tb_header = document.querySelector('.tbl-header');
  const tb_content = document.querySelector('.tbl-content');
  
  if (tb_content.offsetHeight < tb_content.scrollHeight) {
    // 有垂直scroll bar
    tb_content.style.marginLeft = '10px';
    tb_header.style.marginLeft = '10px';
    tb_header.style.marginRight = '10px';    
  } 
  else {
    // 沒有垂直scroll bar
    tb_content.style.marginLeft = '0px';
    tb_header.style.marginLeft = '0px';
    tb_header.style.marginRight = '0px';
  }
}
