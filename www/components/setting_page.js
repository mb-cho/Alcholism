
////////////////////////  setting-page ///////////////////////////////////////////
$(document).on('pageinit','#setting-page',function(){

    $('.target_lang').click(function(){
        l_to = $(this).attr('val');
        set_to_from();
        class_text();
    });
});
