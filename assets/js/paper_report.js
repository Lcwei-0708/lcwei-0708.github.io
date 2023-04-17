window.onload = function paper_table() {
  var data = [
    {
      "date": "2023/03/14",
      "name": "自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": "<div style='margin-left: 2%;'><p><b>學校名稱：</b>國立臺灣大學</p><p><b>學生姓名：</b>高偉聰</p><p><b>指導教授：</b>李弘毅</p><p><b>論文上傳日期：</b>中華民國111年06月</p></div>",
      "PDF_link": "./data/paper/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析.pdf",
      "PPT_link": "./data/paper/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析/自監督式學習模型在語音關鍵詞偵測上的應用及其轉移能力分析.pptx"
    },
    {
      "date": "2023/03/28",
      "name": "基於BERT的情緒分析應用於短句自動審查",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": "<div style='margin-left: 2%;'><p><b>學校名稱：</b>國立中興大學</p><p><b>學生姓名：</b>何宗諭</p><p><b>指導教授：</b>林維亮</p><p><b>論文上傳日期：</b>中華民國111年08月</p></div>",
      "PDF_link": "./data/paper/基於BERT的情緒分析應用於短句自動審查/基於BERT的情緒分析應用於短句自動審查.pdf",
      "PPT_link": "./data/paper/基於BERT的情緒分析應用於短句自動審查/基於BERT的情緒分析應用於短句自動審查.pptx"
    },
    {
      "date": "2023/04/18",
      "name": "應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例",
      "PDF": "<i class='bx bx-download bx-sm pdf'></i>",
      "PPT": "<i class='bx bx-download bx-sm ppt'></i>",
      "detail": "<div style='margin-left: 2%;'><p><b>學校名稱：</b>國立中興大學</p><p><b>學生姓名：</b>陳欽輝</p><p><b>指導教授：</b>蔡孟勳</p><p><b>論文上傳日期：</b>中華民國110年01月</p></div>",
      "PDF_link": "./data/paper/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例.pdf",
      "PPT_link": "./data/paper/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例/應用機器學習演算法改善模型優化方法的研究-以UCI慢性腎臟疾病資料集為例.pptx"
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
    });
  });

  // 獲取所有class為ppt的元素
  const pptElements = document.querySelectorAll('.ppt');

  // 透過 forEach() 方法來為每個 'pdf' 元素綁定點擊事件
  pptElements.forEach((pptElement, index) => {    
    // 綁定點擊事件
    pptElement.addEventListener('click', (e) => {
      e.preventDefault(); // 防止預設事件觸發

      // 在新視窗開啟對應的連結
      window.open(data[index].PPT_link, '_blank');
    });
  });

  /*const tds = document.querySelectorAll("tr");

  tds.forEach((td) => {
    td.addEventListener('mouseover', (e) => {
      var row = event.target.closest("tr"); // 取得被滑鼠移入的那一列

      if(row) {
        var detailRow = row.nextElementSibling;

        // 如果詳細資料列還沒被建立，就建立一個
        if(detailRow == null || !detailRow.classList.contains("detail-row")) {
          detailRow = tableBody.insertRow(row.rowIndex + 1);
          detailRow.classList.add("detail-row");

          var detailCell = detailRow.insertCell(0);
          detailCell.setAttribute("colspan", "4"); // 設定跨列
        }

        // 將詳細資料寫入欄位
        var date = row.querySelector(".col_1").textContent;
        var name = row.querySelector(".col_2").textContent;
        var detailCell = detailRow.querySelector("td");
        detailCell.innerHTML = data[row.rowIndex].detail;
      }
    });

    tableBody.addEventListener("mouseout", function(event) {
      var row = event.target.closest("tr"); // 取得被滑鼠移開的那一列

      if(row) {
        var detailRow = row.nextElementSibling;

        // 如果詳細資料列存在，就刪除它
        if(detailRow && detailRow.classList.contains("detail-row")) {
          detailRow.remove();
        }
      }
    });
  });*/


  // 選取所有的 row
  const rows = document.querySelectorAll("#table-body tr");

  // 監聽每一行的點擊事件
  rows.forEach(row => {
    row.addEventListener("click", (e) => {
      var targetTd = e.target;
      // 判斷點擊的 td 是否有 class 為 pdf
      if (targetTd.classList.contains("pdf")) {
        return;
      }
      else if (targetTd.classList.contains("ppt")) {
        return;
      }
      else {

        if(row) {
          var detailRow = row.nextElementSibling;
  
          // 如果詳細資料列還沒被建立，就建立一個
          if(detailRow == null || !detailRow.classList.contains("detail-row")) {

            // 選取所有的 detail-row
            const rows = document.querySelectorAll(".detail-row");
            rows.forEach(row => {          
              row.remove();
            });

            detailRow = tableBody.insertRow(row.rowIndex + 1);
            detailRow.classList.add("detail-row");
  
            var detailCell = detailRow.insertCell(0);
            detailCell.setAttribute("colspan", "4"); // 設定跨列
  
            // 將詳細資料寫入欄位
            var detailCell = detailRow.querySelector("td");
            detailCell.innerHTML = data[row.rowIndex].detail;
          }
          // 如果詳細資料列存在，就刪除它
          else if(detailRow && detailRow.classList.contains("detail-row")) {
            detailRow.remove();
          }
        }      
      }
    });
  });

}
