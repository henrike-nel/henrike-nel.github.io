$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
    });

    $(document).ready(function() {

        $("#academics").click(function(event){
            $('.achievements-pane').removeClass('active');
            $(".achievements-pane").toggleClass("#academics");
            $(this).addClass('active');
            $("#leadership").hide();
            $("#acting").hide();
            $("#public_speaking").hide();
            $($(this).attr('href')).show();
        });

        $("#leadership").click(function(event){
            $('.achievements-pane').removeClass('active');
            $(".achievements-pane").toggleClass("#leadership");
            $(this).addClass('active');
            $("#academics").hide();
            $("#acting").hide();
            $("#public_speaking").hide();
            $($(this).attr('href')).show();
        });

        $("#acting").click(function(event){
            $('.achievements-pane').removeClass('active');
            $(".achievements-pane").toggleClass("#acting");
            $(this).addClass('active');
            $("#leadership").hide();
            $("#academics").hide();
            $("#public_speaking").hide();
            $($(this).attr('href')).show();
        });

        $("#public_speaking").click(function(event){
            $('.achievements-pane').removeClass('active');
            $(".achievements-pane").toggleClass("#public_speaking");
            $(this).addClass('active');
            $("#leadership").hide();
            $("#acting").hide();
            $("#academics").hide();
            $($(this).attr('href')).show();
        });
    
    });

    $("#successfully-sent").click(function () {
        $(".notify").toggleClass("active");
        $("#notifyType").toggleClass("successfully-sent");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("successfully-sent");
        },2000);
      });