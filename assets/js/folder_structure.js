$(document).ready(function() {
  var Data = {
    "folders": [
      {
        "name": "Machine Learning",
        "icon": '<iconify-icon icon="eos-icons:ai-operator" style="color: rgb(143, 78, 204);"></iconify-icon>',
        "subitems": [
          {
            "name": "Introduction",
            "date": "2023-07-03",
            "link": "./notes/machine_learning/Introduction.html",
            "references": "./notes/machine_learning/Introduction/references.html",
            "image": "./notes/machine_learning/Introduction/Introduction.png"
          },
          {
            "name": "Decision Tree",
            "date": "2023-07-03",
            "link": "./notes/machine_learning/Decision_Tree.html",
            "references": "./notes/machine_learning/Decision_Tree/references.html",
            "image": "./notes/machine_learning/Decision_Tree/Decision_Tree.png"
          },
          {
            "name": "Random Forest",
            "date": "2023-07-04",
            "link": "./notes/machine_learning/Random_Forest.html",
            "references": "./notes/machine_learning/Random_Forest/references.html",
            "image": "./notes/machine_learning/Random_Forest/Random_Forest.png"
          },
          {
            "name": "Naive Bayes",        
            "date": "2023-07-04",
            "link": "./notes/machine_learning/Naive_Bayes.html",
            "references": "./notes/machine_learning/Naive_Bayes/references.html",
            "image": "./notes/machine_learning/Naive_Bayes/Naive_Bayes.png"
          },
          {
            "name": "KNN",         
            "date": "2023-07-05",
            "link": "./notes/machine_learning/KNN.html",
            "references": "./notes/machine_learning/KNN/references.html",
            "image": "./notes/machine_learning/KNN/KNN.png"
          },
          {
            "name": "SVM",         
            "date": "2023-07-06",
            "link": "./notes/machine_learning/SVM.html",
            "references": "./notes/machine_learning/SVM/references.html",
            "image": "./notes/machine_learning/SVM/SVM.png"
          },
          {
            "name": "Linear Regression",     
            "date": "2023-07-07",
            "link": "./notes/machine_learning/Linear_Regression.html",
            "references": "./notes/machine_learning/Linear_Regression/references.html",
            "image": "./notes/machine_learning/Linear_Regression/Linear_Regression.png"
          },
          {
            "name": "Logistic Regression",        
            "date": "2023-07-07",
            "link": "./notes/machine_learning/Logistic_Regression.html",
            "references": "./notes/machine_learning/Logistic_Regression/references.html",
            "image": "./notes/machine_learning/Logistic_Regression/Logistic_Regression.png"
          },
          {
            "name": "Ensemble Learning",          
            "date": "2023-07-09",
            "link": "./notes/machine_learning/Ensemble_Learning.html",
            "references": "./notes/machine_learning/Ensemble_Learning/references.html",
            "image": "./notes/machine_learning/Ensemble_Learning/Ensemble_Learning.png"
          },
          {
            "name": "Data Balance",            
            "date": "2023-07-10",
            "link": "./notes/machine_learning/Data_Balance.html",
            "references": "./notes/machine_learning/Data_Balance/references.html",
            "image": "./notes/machine_learning/Data_Balance/Data_Balance.png"
          },
          {
            "name": "Data Augmentation",            
            "date": "2023-07-11",
            "link": "./notes/machine_learning/Data_Augmentation.html",
            "references": "./notes/machine_learning/Data_Augmentation/references.html",
            "image": "./notes/machine_learning/Data_Augmentation/Data_Augmentation.png"
          },
          {
            "name": "Evaluation Metric",            
            "date": "2023-07-14",
            "link": "./notes/machine_learning/Evaluation_Metric.html",
            "references": "./notes/machine_learning/Evaluation_Metric/references.html",
            "image": "./notes/machine_learning/Evaluation_Metric/Evaluation_Metric.png"
          },
          {
            "name": "InterpretableML",            
            "date": "2023-07-17",
            "link": "./notes/machine_learning/Interpretable_ML.html",
            "references": "./notes/machine_learning/Interpretable_ML/references.html",
            "image": "./notes/machine_learning/Interpretable_ML/Interpretable_ML.png"
          }
        ]
      },
      {
        "name": "Python",
        "icon": '<iconify-icon icon="logos:python"></iconify-icon>',
        "subitems": [
          {
            "name": "Anaconda Virtual Environment",            
            "date": "2023-06-25",
            "link": "./notes/python/Anaconda_Virtual_Environment.html",
            "references": "./notes/python/Anaconda_Virtual_Environment/references.html",
            "image": "./notes/python/Anaconda_Virtual_Environment/Anaconda_Virtual_Environment.png"
          },
          {
            "name": "Selenium",            
            "date": "2023-06-27",
            "link": "./notes/python/Selenium.html",
            "references": "./notes/python/Selenium/references.html",
            "image": "./notes/python/Selenium/Selenium.png"
          }
        ]
      },
      {
        "name": "Git",
        "icon": '<iconify-icon icon="devicon:git"></iconify-icon>',
        "subitems": [
          {
            "name": "Introduction",            
            "date": "2023-06-14",
            "link": "./notes/git/Introduction.html",
            "references": "./notes/git/Introduction/references.html",
            "image": "./notes/git/Introduction/Introduction.png"
          },
          {
            "name": "Installation",            
            "date": "2023-06-15",
            "link": "./notes/git/Installation.html",
            "references": "./notes/git/Installation/references.html",
            "image": "./notes/git/Installation/Installation.png"
          },
          {
            "name": "Command",
            "date": "2023-06-16",
            "link": "./notes/git/Command.html",
            "references": "./notes/git/Command/references.html",
            "image": "./notes/git/Command/Command.png"
          }
        ]
      },
      {
        "name": "Data Structure",
        "icon": '<iconify-icon icon="carbon:data-structured" style="color: #59885c;"></iconify-icon>',
        "subitems": [
          {
            "name": "Complexity",            
            "date": "2023-09-09",
            "link": "./notes/data_structure/Complexity.html",
            "references": "./notes/data_structure/Complexity/references.html",
            "image": "./notes/data_structure/Complexity/Complexity.png"
          },
          {
            "name": "Array",            
            "date": "2023-09-10",
            "link": "./notes/data_structure/Array.html",
            "references": "./notes/data_structure/Array/references.html",
            "image": "./notes/data_structure/Array/Array.png"
          },
          {
            "name": "Linked List",            
            "date": "2023-09-11",
            "link": "./notes/data_structure/Linked_List.html",
            "references": "./notes/data_structure/Linked_List/references.html",
            "image": "./notes/data_structure/Linked_List/Linked_List.png"
          },
          {
            "name": "Stack",            
            "date": "2023-09-12",
            "link": "./notes/data_structure/Stack.html",
            "references": "./notes/data_structure/Stack/references.html",
            "image": "./notes/data_structure/Stack/Stack.png"
          },
          {
            "name": "Queue",            
            "date": "2023-09-13",
            "link": "./notes/data_structure/Queue.html",
            "references": "./notes/data_structure/Queue/references.html",
            "image": "./notes/data_structure/Queue/Queue.png"
          },
          {
            "name": "Set",            
            "date": "2023-09-14",
            "link": "./notes/data_structure/Set.html",
            "references": "./notes/data_structure/Set/references.html",
            "image": "./notes/data_structure/Set/Set.png"
          },
          {
            "name": "Map",            
            "date": "2023-09-15",
            "link": "./notes/data_structure/Map.html",
            "references": "./notes/data_structure/Map/references.html",
            "image": "./notes/data_structure/Map/Map.png"
          },
          {
            "name": "Tree",            
            "date": "2023-09-16",
            "link": "./notes/data_structure/Tree.html",
            "references": "./notes/data_structure/Tree/references.html",
            "image": "./notes/data_structure/Tree/Tree.png"
          }
        ]
      }
    ]
  };
  
  // 生成網格模式版面
  function generateSubitemHTML(subitems) {
    var subitemHTML = '';
    subitems.forEach(function(subitem) {
      subitemHTML += `
        <div class="subitem">
          <a href="${subitem.link}" target="_blank">
            <img src="${subitem.image}" alt="${subitem.name}">
          </a>
        </div>
      `;
    });
    return subitemHTML;
  }

  // 生成表格模式版面
  function generateTableSubitemHTML(subitems) {
    var subitemHTML = '';
    subitems.forEach(function(subitem) {
      subitemHTML += `      
        <tr>          
          <td class="col_1">${subitem.date}</td>
          <td class="col_2"><a href="${subitem.link}" target="_blank">${subitem.name}</a></td>
          <td class="col_3"><a href="${subitem.references}" target="_blank"><i class='bx bx-link-external'></i></a></td>
        </tr>      
      `;
    });
    return subitemHTML;
  }

  // 生成main-folder群組
  function generateGroupHTML(folder) {
    var subitemTableHTML = generateTableSubitemHTML(folder.subitems);
    return `
      <div class="group">
        <div class="main-folder">
          <div class="icon">${folder.icon}</div>
          <h4 class="title">${folder.name}</h4>
        </div>
        <div class="subitem-container grid-view">
          ${generateSubitemHTML(folder.subitems)}
        </div>
        <div class="subitem-container table-view">
          <div class="table-wrapper">
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" class="responsive-table">
                <thead>
                  <tr>
                    <th class="col_1">建立日期</th>
                    <th class="col_2">文章名稱</th>
                    <th class="col_3">參考文獻</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" class="responsive-table">
                <tbody id="table-body">
                  ${subitemTableHTML}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 將資料新增到.wrapper之中
  Data.folders.forEach(function(folder) {
    var groupHTML = generateGroupHTML(folder);
    $('.wrapper').append(groupHTML);
  });

/*============================================================================*/
// 文章排序
/*============================================================================*/
  var currentView = localStorage.getItem('currentView') || 'grid-view';

  // 用於解析 URL 參數的函數
  function getURLParameter(name) {
    var value = (new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)').exec(window.location.href) || [null, ''])[2];
    return value ? decodeURIComponent(value) : null;
  }

  // 檢查 URL 中是否有 category 參數
  var categoryParam = getURLParameter('category');
  if (categoryParam) {
    showSubitemsForCategory(categoryParam);
  }

  // 顯示對應類別的子項目
  function showSubitemsForCategory(category) {
    // 隱藏所有 group 和子項目
    $('.group').hide();
    $('.main-folder').show();
    $('.subitem').hide();

    $('.wrapper').css('grid-template-columns', '1fr');
    $('.btn').show();

    // 尋找對應類別的主要資料夾
    var matchingFolder = $('.group').filter(function() {
      var folderName = $(this).find('.title').text().toLowerCase();
      return folderName === category;
    });

    if (matchingFolder.length > 0) {
      // 顯示對應類別的主要資料夾和子項目
      matchingFolder.show();
      matchingFolder.find('.main-folder').hide();
      matchingFolder.find('.subitem').show();
      showView(currentView);
      $('h2').css('text-transform', 'none').text(matchingFolder.find('.title').text());
    } else {
      // 如果找不到該類別的子項目，顯示自訂警示訊息
      var message = '查無此項目：' + category;
      showCustomAlert(message);
    }

    // 修改網址
    var newUrl = 'notes.html?category=' + category;
    window.history.pushState({}, '', newUrl);
  }

  function hideSubitemsForCategory() {
    $('.wrapper').css('grid-template-columns', '');
    // 顯示所有 group 和子項目
    $('.group, .main-folder').show();
    $('.subitem').hide();
    $('.table-view').hide();
    $('.btn').hide();
    $('h2').css('text-transform', 'uppercase').text('NOTES');
    hideView(currentView);

    // 將網址改回原本的狀態
    window.history.pushState({}, '', 'notes.html');
  }
  
  // 主要資料夾點擊事件
  $('.main-folder').on('click', function() {
    var folderName = $(this).find('.title').text();
    showSubitemsForCategory(folderName.toLowerCase());
  });

  // 返回按鈕點擊事件
  $('.back').on('click', function() {
    hideSubitemsForCategory();
  });

  // 切換顯示方式
  $('.view').on('click', function() {
    $('.subitem-container.grid-view, .subitem-container.table-view').toggle();

    if ($('.subitem-container.grid-view').is(':visible')) {
      currentView = 'grid-view';
      $('.subitem-container').css('grid-template-columns', '');
    } else {
      currentView = 'table-view';
      $('.subitem-container').css('grid-template-columns', '1fr');
    }
    localStorage.setItem('currentView', currentView); // 將目前的顯示模式儲存到本地
    showView(currentView);
  });

  // 點擊事件觸發自訂對話框顯示
  $('#show-custom-alert').on('click', function() {
    var category = 'Python'; // 假設您要顯示的類別名稱
    showCustomAlert('查無此項目：' + category);
  });

  // 自訂對話框關閉按鈕
  $('#custom-alert-close').on('click', function() {
    hideCustomAlert();
  });

  // 顯示子項目
  function showView(view) {    
    if (view === 'table-view') {
      $('.subitem-container.grid-view').hide();
      $('.subitem-container.table-view').show();
      $('.view i').removeClass('bi-list-ul').addClass('bi-grid-3x2-gap-fill');
    } else {
      $('.subitem-container.table-view').hide();
      $('.subitem-container.grid-view').css('display', 'grid');
      $('.view i').removeClass('bi-grid-3x2-gap-fill').addClass('bi-list-ul');
    }
  }

  function hideView(view) { 
    $('.subitem-container.grid-view').hide();
    $('.subitem-container.table-view').hide();
  }

  // 顯示自訂對話框
  function showCustomAlert(message) {
    $('#custom-alert-message').text(message);
    $('.custom-alert-overlay').show();
  }

  // 隱藏自訂對話框
  function hideCustomAlert() {
    $('.custom-alert-overlay').fadeOut();
    hideSubitemsForCategory();
  }

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
});