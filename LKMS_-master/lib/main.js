$(function(){

  // 메뉴바 버튼클릭
  $('.header .nav button').click(function(){
    $('.header .nav ul').toggle()
  })

  // 메뉴바 리사이즈
  var aa = true;
  $(window).resize(function(){

     if( $(window).width() > 1024 && aa){
        $('.nav ul').css({
          'display':'block'
        })
        aa = false;
     }else if( $(window).width() < 1024 && !aa ){
         $('.nav ul').css({
           'display':'none'
         })
         aa = true;
     }
  })

  // 메뉴바_회사소개 클릭
  $('.nav ul li:first-child').click(function(){
    $('.intro ul').slideToggle();
    return false;
  })

  // 메뉴바 스크롤이동
  $(window).scroll(function(){
    $('.header').css({
      'background':'rgba(255,255,255,0.8)'
    })

    var aa = $(window).scrollTop();

    if( aa == 0 ){
      $('.header').css({
        'background':'rgba(255,255,255,0.2)'
      })
      $('.nav ul li a').css({
          'color':'white'
      })
    }else {
      $('.nav ul li a').css({
          'color':'black'
      })
    }

    // 플러그인
    if(aa > 500){
        $('.progress').css({
          display:'block'
        })
    }




  })





})
