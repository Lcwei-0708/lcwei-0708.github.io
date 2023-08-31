$(document).ready(function() {
  var Data = {
    "folders": [
      {
        "name": "Machine Learning",
        "icon": '<iconify-icon icon="eos-icons:ai-operator" style="color: rgb(143, 78, 204);"></iconify-icon>',
        "subitems": [
          {
            "name": "Introduction",
            "date": "2023-07-16",
            "link": "./notes/machine_learning/Introduction.html",
            "references": "./notes/machine_learning/Introduction/references.html",
            "image": "./notes/machine_learning/Introduction/Introduction.png"
          },
          {
            "name": "Decision Tree",
            "date": "2023-07-16",
            "link": "./notes/machine_learning/Decision_Tree.html",
            "references": "./notes/machine_learning/Decision_Tree/references.html",
            "image": "./notes/machine_learning/Decision_Tree/Decision_Tree.png"
          },
          {
            "name": "Random Forest",
            "date": "2023-07-16",
            "link": "./notes/machine_learning/Random_Forest.html",
            "references": "./notes/machine_learning/Random_Forest/references.html",
            "image": "./notes/machine_learning/Random_Forest/Random_Forest.png"
          },
          {
            "name": "Naive Bayes",        
            "date": "2023-08-12",
            "link": "./notes/machine_learning/Naive_Bayes.html",
            "references": "./notes/machine_learning/Naive_Bayes/references.html",
            "image": "./notes/machine_learning/Naive_Bayes/Naive_Bayes.png"
          },
          {
            "name": "KNN",         
            "date": "2023-07-31",
            "link": "./notes/machine_learning/KNN.html",
            "references": "./notes/machine_learning/KNN/references.html",
            "image": "./notes/machine_learning/KNN/KNN.png"
          },
          {
            "name": "SVM",         
            "date": "2023-07-27",
            "link": "./notes/machine_learning/SVM.html",
            "references": "./notes/machine_learning/SVM/references.html",
            "image": "./notes/machine_learning/SVM/SVM.png"
          },
          {
            "name": "Linear Regression",     
            "date": "2023-08-12",
            "link": "./notes/machine_learning/Linear_Regression.html",
            "references": "./notes/machine_learning/Linear_Regression/references.html",
            "image": "./notes/machine_learning/Linear_Regression/Linear_Regression.png"
          },
          {
            "name": "Logistic Regression",        
            "date": "2023-08-04",
            "link": "./notes/machine_learning/Logistic_Regression.html",
            "references": "./notes/machine_learning/Logistic_Regression/references.html",
            "image": "./notes/machine_learning/Logistic_Regression/Logistic_Regression.png"
          },
          {
            "name": "Ensemble Learning",          
            "date": "2023-07-16",
            "link": "./notes/machine_learning/Ensemble_Learning.html",
            "references": "./notes/machine_learning/Ensemble_Learning/references.html",
            "image": "./notes/machine_learning/Ensemble_Learning/Ensemble_Learning.png"
          },
          {
            "name": "Data Balance",            
            "date": "2023-08-02",
            "link": "./notes/machine_learning/Data_Balance.html",
            "references": "./notes/machine_learning/Data_Balance/references.html",
            "image": "./notes/machine_learning/Data_Balance/Data_Balance.png"
          },
          {
            "name": "Data Augmentation",            
            "date": "2023-07-08",
            "link": "./notes/machine_learning/Data_Augmentation.html",
            "references": "./notes/machine_learning/Data_Augmentation/references.html",
            "image": "./notes/machine_learning/Data_Augmentation/Data_Augmentation.png"
          },
          {
            "name": "Evaluation Metric",            
            "date": "2023-07-17",
            "link": "./notes/machine_learning/Evaluation_Metric.html",
            "references": "./notes/machine_learning/Evaluation_Metric/references.html",
            "image": "./notes/machine_learning/Evaluation_Metric/Evaluation_Metric.png"
          },
          {
            "name": "InterpretableML",            
            "date": "2023-08-12",
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
            "date": "2023-08-25",
            "link": "./notes/python/Anaconda_Virtual_Environment.html",
            "references": "./notes/python/Anaconda_Virtual_Environment/references.html",
            "image": "./notes/python/Anaconda_Virtual_Environment/Anaconda_Virtual_Environment.png"
          },
          {
            "name": "Selenium",            
            "date": "2023-08-27",
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
            "date": "2023-08-04",
            "link": "./notes/git/Introduction.html",
            "references": "./notes/git/Introduction/references.html",
            "image": "./notes/git/Introduction/Introduction.png"
          },
          {
            "name": "Installation",            
            "date": "2023-08-04",
            "link": "./notes/git/Installation.html",
            "references": "./notes/git/Installation/references.html",
            "image": "./notes/git/Installation/Installation.png"
          },
          {
            "name": "Command",
            "date": "2023-08-04",
            "link": "./notes/git/Command.html",
            "references": "./notes/git/Command/references.html",
            "image": "./notes/git/Command/Command.png"
          }
        ]
      }
    ]
  };
  
  // Function to generate subitem HTML
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

  // Function to generate subitem HTML for table view
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

  // Function to generate group HTML
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

  // Insert data into the .wrapper element
  Data.folders.forEach(function(folder) {
    var groupHTML = generateGroupHTML(folder);
    $('.wrapper').append(groupHTML);
  });

/*============================================================================*/
// 文章排序
/*============================================================================*/
  var currentView = localStorage.getItem('currentView') || 'grid-view';
  
  // 主要資料夾點擊事件
  $('.main-folder').on('click', function() {
    // 更改 <h2> 標籤的内容
    var folderName = $(this).find('.title').text();
    $('h2').css('text-transform', 'none').text(folderName);

    $('.wrapper').css('grid-template-columns', '1fr');

    // 隱藏其他 group
    $(this).closest('.group').siblings('.group').hide();

    // 隱藏被點擊的主要資料夾本身
    $(this).hide();

    // 顯示這個 group 的子項目
    $(this).closest('.group').find('.subitem').show();

    // 根据当前视图模式显示相应的容器
    showView(currentView);

    $('.btn').show();
  });

  // 返回按鈕點擊事件
  $('.back').on('click', function() {
    $('.wrapper').css('grid-template-columns', '');
    // 顯示所有 group 和子項目
    $('.group, .main-folder').show();
    $('.subitem').hide();
    $('.table-view').hide();
    $('.btn').hide();
    $('h2').css('text-transform', 'uppercase').text('NOTES');
    hideView(currentView);
  });

  // 切换显示方式
  $('.view').on('click', function() {
    $('.subitem-container.grid-view, .subitem-container.table-view').toggle();

    if ($('.subitem-container.grid-view').is(':visible')) {
      currentView = 'grid-view';
      $('.subitem-container').css('grid-template-columns', '');
    } else {
      currentView = 'table-view';
      $('.subitem-container').css('grid-template-columns', '1fr');
    }
    localStorage.setItem('currentView', currentView); // 将当前视图模式保存到本地存储中
    showView(currentView);
  });

  // 更新视图
  function showView(view) {    
    if (view === 'table-view') {
      $('.subitem-container.grid-view').hide();
      $('.subitem-container.table-view').show();
    } else {
      $('.subitem-container.table-view').hide();
      $('.subitem-container.grid-view').css('display', 'grid');
    }
  }

  function hideView(view) { 
    $('.subitem-container.grid-view').hide();
    $('.subitem-container.table-view').hide();
  }
});