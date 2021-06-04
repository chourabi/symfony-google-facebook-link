
$(document).ready(function(){
    


        
    $(".new-prod-mark").on('change',function(e){
        console.log("js is ready");
        var settings = {
            "url": "/model/mark/"+e.target.value,
            "method": "GET",
            "headers": {
              "Content-Type": "application/json"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            var blocOptions = '';

            response.forEach(model => {
                blocOptions+='<option value="'+model.id+'">'+model.model+'</option>';
            });

            $("#selectmodellist").html(blocOptions);

          });
    });


    $("#search-now").click(function(){
        var sorting = $("#product-sorting").val();
        var category = $("#category-sorting").val();
        var mark = $("#mark-sorting").val();
        var model = $("#model-sorting").val();
        var q = $("#q-search").val();


        var url = window.location.pathname;
        url+='?category='+category;

        if (mark != "-1") {
            url+='&mark='+mark;
        }

        if (model != '-1' && model != null ) {
            url+='&model='+model;
        }

        if (q != '' && q != null ) {
            url+='&q='+q;
        }

        

        url+='&sort='+sorting;

        window.location = url;
        
    });

    $("#model-sorting").change(function(e){
        var value = e.target.value;
        var path = window.location.href;
        
        // check for sort changing

        if (path.indexOf("model") != -1) {
            const urlParams = new URLSearchParams(window.location.search);
            const sortVal = urlParams.get('model');
            
                path = path.replace("&model="+sortVal,'&model='+value);
                path = path.replace("?model="+sortVal,'?model='+value);
                window.location = path;
            

        }else{
            if (path.indexOf("?")!= -1 /** this mean that we already querys */) {
                window.location = path+='&model='+value
            }else{
                window.location = path+='?model='+value
            }
        }

    });
    

    
    $("#mark-sorting").change(function(e){
        var value = e.target.value;
        var path = window.location.href;
        
        // check for sort changing

        if (path.indexOf("mark") != -1) {
            const urlParams = new URLSearchParams(window.location.search);
            const sortVal = urlParams.get('mark');
            
                path = path.replace("&mark="+sortVal,'&mark='+value);
                path = path.replace("?mark="+sortVal,'?mark='+value);
                window.location = path;
            

        }else{
            if (path.indexOf("?")!= -1 /** this mean that we already querys */) {
                window.location = path+='&mark='+value
            }else{
                window.location = path+='?mark='+value
            }
        }

    });


    $("#category-sorting").change(function(e){
        var value = e.target.value;
        var path = window.location.pathname;
        
        window.location = path+='?category='+value

    });
    
    $("#product-sorting").change(function(e){
        var value = e.target.value;
        var path = window.location.href;

        console.log(value);
        
        // check for sort changing

        if (path.indexOf("sort") != -1) {
            const urlParams = new URLSearchParams(window.location.search);
            const sortVal = urlParams.get('sort');

                path = path.replace("&sort="+sortVal,'&sort='+value);
                path = path.replace("?sort="+sortVal,'?sort='+value);
                window.location = path;
            

            

        }else{
            if (path.indexOf("?")!= -1 /** this mean that we already querys */) {
                window.location = path+='&sort='+value
            }else{
                window.location = path+='?sort='+value
            }
        }

    });

    
});



(function ($) {
    


    $(document).on('ready', function () {

        
        // Nice Select
        //$('select').niceSelect();
        // -----------------------------
        //  Client Slider
        // -----------------------------
        $('.category-slider').slick({
            slidesToShow:8,
            infinite: true,
            arrows:false,
            autoplay: false,
            autoplaySpeed: 2000
        });
        // -----------------------------
        //  Select Box
        // -----------------------------
        // $('.select-box').selectbox();
        // -----------------------------
        //  Video Replace
        // -----------------------------
        $('.video-box img').click(function() {
            var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
            $(this).replaceWith(video);
        });
        // -----------------------------
        //  Coupon type Active switch
        // -----------------------------
        $('.coupon-types li').click(function () {
            $('.coupon-types li').not(this).removeClass('active');
            $(this).addClass('active');
        });
        // -----------------------------
        // Datepicker Init
        // -----------------------------
        $('.input-group.date').datepicker({
            format: 'dd/mm/yy'
        });
        // -----------------------------
        // Datepicker Init
        // -----------------------------
        $('#top').click(function() {
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          return false;
        });
        // -----------------------------
        // Button Active Toggle
        // -----------------------------
        $('.btn-group > .btn').click(function(){
            $(this).find('i').toggleClass('btn-active');
        });
        // -----------------------------
        // Coupon Type Select
        // -----------------------------
        $('#online-code').click(function(){
            $('.code-input').fadeIn(500);
        });
        $('#store-coupon, #online-sale').click(function(){
            $('.code-input').fadeOut(500);
        });
        /***ON-LOAD***/
        jQuery(window).on('load', function () {
            
        });

    });

})(jQuery);



 $(document).ready(function() {
  $('select').addClass('form-control');      
});



$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



