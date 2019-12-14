$(function(){
  // childrenカテゴリのhtml作成
  // function buildCategoryList_Children(category_children, selected_category_root){
  //   category_children.forEach(function(children) {
  //     $(`#${selected_category_root}`).append(buildCategoryBox_children(children));
  //   });

  //   function buildCategoryBox_children(children){
  //     var optionHtmlChild = `<li class="header__menu-box--left__children__child" value="${children.id}">
  //                              <a href="#">${children.name}</a>
  //                              <ul class="header__menu-box--left__grand-children" id="${children.id}"></ul>
  //                            </li>`
  //     return optionHtmlChild;
  //   };
  // };

  // grandchildrenカテゴリのhtml作成
  function buildCategoryList_GrandChildren(category_grandchildren, selected_category_children){
    category_grandchildren.forEach(function(grandchildren) {
      $(`#${selected_category_children}`).append(buildCategoryBox_grandchildren(grandchildren));
    });

    function buildCategoryBox_grandchildren(grandchildren){
      var optionHtmlGrandchild = `<li class="header__menu-box--left__grand-children__grand-child">
                                    <a href="#">${grandchildren.name}</a>
                                  </li>`
      return optionHtmlGrandchild;
    };
  };

  // rootカテゴリにmouseenterで発火
  // $(document).on("mouseenter",".header__menu-box--left__parents__parent", function(e) {
  //   var selected_category_root = $(this).val();

  //   $.ajax({
  //     url: "/products/get_category_children",
  //     type: "GET",
  //     data: {root_category_id: selected_category_root},
  //     dataType: "json"
  //   })

  //   .done(function(category_children){
  //     buildCategoryList_Children(category_children, selected_category_root);
  //   })
  //   .fail(function(){
  //     console.log('error');
  //   })
  // });

  // childrenカテゴリにmouseenterで発火
  $(document).on("mouseenter",".header__menu-box--left__children__child", function(e) {
    var selected_category_children = $(this).val();

    $.ajax({
      url: "/products/get_category_grandchildren",
      type: "GET",
      data: {child_category_id: selected_category_children},
      dataType: "json"
    })

    .done(function(category_grandchildren){
      buildCategoryList_GrandChildren(category_grandchildren, selected_category_children);
    })
    .fail(function(){
      console.log('error');
    })
  });

  // $(document).on("mouseleave",".header__menu-box--left__parents__parent", function(e) {
  //   $(".header__menu-box--left__children__child").remove();
  // }).on("mouseleave",".header__menu-box--left__children__child", function(e) {
  //   $(".header__menu-box--left__grand-children__grand-child").remove();
  // });

  $(document).on("mouseleave",".header__menu-box--left__children__child", function(e) {
    $(".header__menu-box--left__grand-children__grand-child").remove();
  })
})