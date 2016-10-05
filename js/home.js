$(function(){
    var Slider_ul_li_width = 451;//li幅
    var li_num = 10;//li数（偶数）
    var speed = 1500;//スピード
    var moveFlag = false;
    var Slider_ul_width = Slider_ul_li_width*li_num*4;

    $('.block').width(Slider_ul_width).css('left',-Slider_ul_width/2+'px');
    $('.block li').clone().appendTo(".block").addClass("clone_li");//li複製
    $('.block li').clone().appendTo(".block").addClass("clone_li");//li複製

    //自動スライド
    autoSlide();
    function autoSlide(){
      slideTimer = setInterval(function(){
        if(!moveFlag){
          moveFlag = true;
          var listLeft = parseInt($('.block').css('left'));

          //listLeftがSlider_ul_width以下になる場合位置を調整しループする
          if(listLeft - Slider_ul_li_width <= -Slider_ul_width + Slider_ul_width / 4){
            listLeft = - Slider_ul_width / 4 + Slider_ul_li_width;
            $('.block').css({
              left : listLeft
            });
          }
          $('.block').stop().animate({
            'left': listLeft - Slider_ul_li_width + 'px'
          }, speed, function(){
            moveFlag = false;
          });
        }
      },4000);
    }

    //左右ボタン
    $('.slide_btn_right').click(function(){
      if(!moveFlag){
        moveFlag = true;
        var listLeft = parseInt($('.block').css('left'));

        //listLeftがSlider_ul_width以下になる場合位置を調整しループする
        if(listLeft - Slider_ul_li_width <= -Slider_ul_width + Slider_ul_width / 4){
          listLeft = - Slider_ul_width / 4 + Slider_ul_li_width;
          $('.block').css({
            left : listLeft
          });
        }
        $('.block').stop().animate({
          'left': listLeft - Slider_ul_li_width + 'px'
        }, speed, function(){
          moveFlag = false;
        });
      }
    });
    $('.slide_btn_left').click(function(){
      if(!moveFlag){
        moveFlag = true;
        var listLeft = parseInt($('.block').css('left'));

        //listLeftが0になる場合位置を調整しループする
        if(listLeft + Slider_ul_li_width >= -Slider_ul_width / 4){
          listLeft = - Slider_ul_width / 2 - Slider_ul_li_width;
          $('.block').css({
            left : listLeft
          });
        }
        $('.block').stop().animate({
          'left': listLeft + Slider_ul_li_width + 'px'
        }, speed, function(){
          moveFlag = false;
        });
      }
    });

    //ホバーイベント
    //ホバー時に自動スライドを停止する
    $('.slide_btn_left, .slide_btn_right').on({
      mouseenter : function(){
        clearInterval(slideTimer);
      },
      mouseleave : function(){
        autoSlide();
      }
    });
  });