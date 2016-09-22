// 슬라이드스크롤
$(function(){

   var lw = $('.jCarouselLite ul li').width()+14
   var idx = 6;
   var leftVal = -lw*5;


   $('.interior_sum .right').click(function(){

      if(idx < 16){
         leftVal = leftVal - lw;
         $('.jCarouselLite').children('ul').stop().animate({
            left:leftVal
         },3000)
         idx ++

      }else if(idx == 16){
         leftVal = -655 - lw;
         idx = 6
         $('.jCarouselLite ul').css({left:'-655px'}).stop().animate({
            left:leftVal},3000)

         idx ++

      }

      return false;

   })

   $('.interior_sum .left').click(function(){
      console.log(idx)

      if( idx  >6 && idx < 17){
         leftVal = leftVal + lw
         $('.jCarouselLite').children('ul').stop().animate({
            left:leftVal
         })
         idx --

         }else if(idx ==  6){

         leftVal = -lw * 15 + lw
         idx = 16
         $('.jCarouselLite ul').css({left:-lw * 15+'px'}).stop().animate({
            left:leftVal})



         idx --


      }
      return false;


   })
