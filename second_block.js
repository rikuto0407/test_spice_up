/*about*/

/*title*/

$(window).scroll(function(){
    var about_topa = $(".about-head").offset().top + 200; // ターゲットの位置取得
    var position = about_topa - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('h2').addClass('slide_on-about'); 
    }else{
    }
})

/*sentences*/

$(window).scroll(function(){
    var about_topb = $(".about-sentences").offset().top + 200; // ターゲットの位置取得
    var position = about_topb - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('li').addClass('slide_on-a'); 
    }else{
    }
})

/*image*/

$(window).scroll(function(){
    var about_topc = $(".about-img").offset().top + 250; // ターゲットの位置取得
    var position = about_topc - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('p').addClass('img-animation'); 
    }else{
    }
})

/*profile*/

/*title*/

$(window).scroll(function(){
    var profile_topa = $(".profile").offset().top + 200; // ターゲットの位置取得
    var position = profile_topa - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('h2').addClass('slide_on-profile'); 
    }else{
    }
})

/*icon*/

$(window).scroll(function(){
    var profile_topb = $(".profile-icon").offset().top; // ターゲットの位置取得
    var position = profile_topb - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('div').addClass('slide_on'); 
    }else{
    }
})

/*sentences*/

$(window).scroll(function(){
    var profile_topc = $(".profile-sentences").offset().top + 200; // ターゲットの位置取得
    var position = profile_topc - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
        $('span').addClass('slide_on'); 
    }else{
    }
})
