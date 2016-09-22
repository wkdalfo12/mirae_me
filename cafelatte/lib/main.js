$(function(){

// header 부분
  // $('#gnb li:first-child a').click(function(){
  //     var aa = $('#contents #section1').offset().top;
  //     $('body,html').stop().animate({
  //         scrollTop:aa
  //     },600)
  //     return false;
  // })


  $('#gnb li').click(function(){
      var idx = $(this).index();
      var aa = $('#contents section').eq(idx).offset().top;
      $('html,body').animate({
          scrollTop:aa
      })

      return false;
  })


// tv cf 광고영상 슬라이드스크롤
var idx = 0;
var lw = $('.videolist li').width()+40;
var leftVal = 0;

$('.videobtn .next').click(function(){

   if(idx < 6){
     leftVal = leftVal - lw;
     $('.videolist').stop().animate({
       left: leftVal
     })
      console.log(idx)
      idx ++
   }

  return false;
})


// 맨 밑에 top 아이콘부분
    $(window).scroll(function(){
           var sctop = $(window).scrollTop()
           if( sctop == 0 ){
               $('.contop a').fadeOut()
           }else{
                $('.contop a').fadeIn()
           }
   })
    $('.contop a').click(function(){
        $('body,html').stop().animate({
            scrollTop:0
        },600)
        return false;
    })




})
