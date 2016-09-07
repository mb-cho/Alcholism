/////// photo-page //////////
$(document).on('pageinit','#news-page',function(){
    
    //言語切り替え
    if(l_to == 'en') {
        var t_url = news_url_en;
    }else{
        var t_url = news_url_ja;
    }
                  
    $.ajax({
        url:t_url,
        timeout:1000,
        success:function(xml){
            console.log('xml get');
            $('.news_value').text(xml);
        },
        error:function() {
            console.log('t_url load error');
        }
    });
    
});


