
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    //ハンバーガーメニューの開閉
    // ドロワーメニューの開閉
    $(".js-hamburger").click(function () {
        if ($(this).hasClass("is-active")) {
          // メニューを閉じる
          $(this).removeClass("is-active");
          $(".js-sp-nav").fadeOut(300);
          $(".header").removeClass("is-open");
          $("body").css("overflow", "auto"); // 背景スクロールを戻す
        } else {
          // メニューを開く
          $(this).addClass("is-active");
          $(".js-sp-nav").fadeIn(300);
          $(".header").addClass("is-open");
          $("body").css("overflow", "hidden"); // 背景を固定
        }
      });

      //ヘッダーの背景色変更
        const header = $("#js-header");
        const hero = $("#js-fv");
        $(window).on("scroll", function () {
            console.log($(this).scrollTop());
            const heroHeight = hero.height();
            console.log("fv height:" + heroHeight);
            if ($(this).scrollTop() > heroHeight) {
            header.addClass("is-black");
            } else {
            header.removeClass("is-black");
            }
        });
  
      // メニュー内リンクをクリックした時
      $(".js-sp-nav a").click(function (event) {
        const target = $(this).attr("href");
  
        if (target.startsWith("#")) {
          event.preventDefault();
          const position = $(target).offset().top;

          $("html, body").animate({ scrollTop: position }, 500);
        }

        // 共通でメニューを閉じる処理
        $(".js-hamburger").removeClass("is-active");
        $(".js-sp-nav").fadeOut(300);
        $(".header").removeClass("is-open");
        $("body").css("overflow", "auto"); // スクロールを有効に戻す
      });

      // ウィンドウサイズが768px以上になったらメニューを強制的に閉じる
      $(window).resize(function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          $(".js-hamburger").removeClass("is-active");
          $(".js-sp-nav").fadeOut(300);
          $(".header").removeClass("is-open");
          $("body").css("overflow", "auto");
        }
      });

      // アンカーリンクのスムーススクロール
      $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var headerHeight = $(".js-header").outerHeight();
        var href = $(this).attr("href");
        var target = href === "#" || href === "" ? $("html") : $(href);

        if (target.length) {
          var position = target.offset().top - headerHeight;
          $("html, body").animate({ scrollTop: position }, 600, "swing");
        }
      });

      //ファーストビュースライド
      var swiper = new Swiper(".js-fv-swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

   //タブ
    $(function () {
      const tabButton = $(".js-tab-button"),
        tabContent = $(".js-tab-content");
      tabButton.on("click", function () {
        let index = tabButton.index(this);

        tabButton.removeClass("is-active");
        $(this).addClass("is-active");
        tabContent.removeClass("is-active");
        tabContent.eq(index).addClass("is-active");
      });
    });
  });

