$(window).scroll(function(){
    if($(this).scrollTop()>50)
    {
        $(".menu").addClass("sticky")
    }
    else{
        $(".menu").removeClass("sticky")
    }
})

$(window).scroll(function(){
    if($(this).scrollTop()>50)
    {
        $(".top-scroll-btn").addClass("sss")
        
    }
    else{
        $(".top-scroll-btn").removeClass("sss")
       
    }
    
})
