  var changeSize = function () {
    const percentW = document.documentElement.clientWidth / 1920

    const percentH = document.documentElement.clientHeight / 1050
    $('.video').css('width','1920px')
    $('.video').css('height','1050px')
    $('.video').css('transform','scale(' + percentW + ',' + percentH + ')')
  }

  window.addEventListener('resize', changeSize)

  

  new Swiper("#firstslide", {
    pagination: {
      el: ".swiper-pagination1",
      clickable:true,
    },
    on:{
        init: function(){
            changeSize()
        }, 
        slideChangeTransitionEnd: function(){ 

            console.log(this.activeIndex)
            if (this.activeIndex ==1) {
                $('.banner2 .sc').addClass('scdown')
            }
        } 
    }
  });

  new Swiper("#mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件

        }, 
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时运行当前slide动画
            this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次

            console.log(this.activeIndex)
        } 
    }
  });