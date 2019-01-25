(function ($) {
  "use strict";
  $(document).ready(function () {
    //Menu Mobile
    $(".burger").on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("open")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    function openMenu() {
      $(".menu-bg").addClass("animate");
      $(".burger").addClass("open");
      $(".x, .z").addClass("collapse-icon");
      $(".menu-navigation").addClass("animate");
      $("body").css({
        overflow: "hidden",
        height: "100vh"
      });
      // var header = $('.header').outerHeight();
      // console.log(header)
      // $('.menu-navigation').css({
      //   'top': header
      // });
      setTimeout(function () {
        $(".y").hide();
        $(".x").addClass("rotate30");
        $(".z").addClass("rotate150");
      }, 70);
      setTimeout(function () {
        $(".x").addClass("rotate45");
        $(".z").addClass("rotate135");
      }, 120);
    }

    function closeMenu() {
      $(".menu-navigation").removeClass("animate");
      $("body").css({
        overflow: "",
        height: ""
      });
      // $('.menu-navigation').css({
      //   'top': ''
      // });

      setTimeout(function () {
        $(".burger").removeClass("open");
        $(".x")
          .removeClass("rotate45")
          .addClass("rotate30");
        $(".z")
          .removeClass("rotate135")
          .addClass("rotate150");
        $(".menu-bg").removeClass("animate");

        setTimeout(function () {
          $(".x").removeClass("rotate30");
          $(".z").removeClass("rotate150");
        }, 50);
        setTimeout(function () {
          $(".y").show();
          $(".x, .z").removeClass("collapse-icon");
        }, 70);
      }, 100);
    }

    // function headerScroll(target) {
    //   var target = $(target);
    //   var targetHeight = target.outerHeight();
    //   var paddingPercent = (targetHeight - window.scrollY) / targetHeight * 30; // from 1 to 0
    //   var scrollPercent = window.scrollY / targetHeight; // from 0 to 1
    //   if (scrollPercent >= 0){
    //     target.css('background-color', 'rgba(255, 255, 255,' + scrollPercent + ')');
    //     if ($(window).width() > 991) {
    //       target.css('padding', paddingPercent + 'px 0');
    //     }else{
    //       target.css('padding', '10px 0');
    //     }
    //   }
    // }
    // $(window).on("scroll resize",function(e){
    //   headerScroll('.header');
    // });

    function pasienLama() {
      $(".button-option").addClass("d-none");
      $(".form-pasien-lama").removeClass("d-none");
    }

    $("#pasien-lama").on("click", function (e) {
      e.preventDefault();
      pasienLama();
    });

    $("#modalDaftar").on("hidden.bs.modal", function (e) {
      $(".button-option").removeClass("d-none");
      $(".form-pasien-lama").addClass("d-none");
    });

    $("#pasien-lama").on("click", function (e) {
      e.preventDefault();
      pasienLama();
    });

    // Validation Pasien Lama
    $("#input-pasien-lama").focusout(function () {
      if (this.value === "") {
        $(this).addClass("not-validate");
      } else {
        $(this).removeClass("not-validate");
      }
    });

    $("#input-pasien-lama").on("change paste keyup", function () {
      if ($(this).val().length > 0) {
        $(this).removeClass("not-validate");
      }
    });

    $("#lanjut").click(function (e) {
      if ($("#input-pasien-lama").val().length == 0) {
        e.preventDefault();
        $("#input-pasien-lama").addClass("not-validate");
      }
    });
    //select 2
    $('select').select2({
      minimumResultsForSearch: -1
    });


    //slider blog
    $('.blog-content').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });

    $('.form-input-valid input, .form-input-valid textarea').each(function () {
      $(this).focusout(function () {
        if (this.value === "") {
          $(this).addClass("not-validate");
        } else {
          $(this).removeClass("not-validate");
        }
      });
      $('.form-input-valid input, .form-input-valid textarea').on("change paste keyup", function () {
        if ($(this).val().length > 0) {
          $(this).removeClass("not-validate");
        }
      })
      $("#step-3").click(function (e) {
        if ($(".form-input-valid input, .form-input-valid textarea").val().length == 0 && !$(".form-input-valid input, .form-input-valid textarea").hasClass('not-validate')) {
          e.preventDefault();
          e.stopPropagation();
          $(".form-input-valid input, .form-input-valid textarea").addClass("not-validate");
        } 
        else if ($(".form-input-valid input, .form-input-valid textarea").hasClass('not-validate')) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    })
    $('#modalEstimasi').modal('show');
  });
})(jQuery);