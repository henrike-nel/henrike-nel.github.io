$(function () {
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


const secondary_btn = document.getElementById("secondary");

secondary_btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

$(document).ready(function () {

    $("#secondary").click(function () {
        $('.tab-pane').removeClass('active');
        $(".tab-pane").toggleClass("#secondary");
        $(this).addClass('active');
        $("#tertiary").hide();
        $($(this).attr('href')).show();
    });

    $("#tertiary").click(function () {
        $('.tab-pane').removeClass('active');
        $(".tab-pane").toggleClass("#tertiary");
        $(this).addClass('active');
        $("#secondary").hide();
        $($(this).attr('href')).show();
    });

});


$("#academic").click(function () {
    $('.achievements-pane').removeClass('active');
    $(".achievements-pane").toggleClass("#academic");
    $(this).addClass('active');
    $("#leadership").hide();
    $("#acting").hide();
    $("#public_speaking").hide();
    $($(this).attr('href')).show();
});

$("#leadership").click(function () {
    $('.achievements-pane').removeClass('active');
    $(".achievements-pane").toggleClass("#leadership");
    $(this).addClass('active');
    $("#academic").hide();
    $("#acting").hide();
    $("#public_speaking").hide();
    $($(this).attr('href')).show();
});

$("#acting").click(function () {
    $('.achievements-pane').removeClass('active');
    $(".achievements-pane").toggleClass("#acting");
    $(this).addClass('active');
    $("#leadership").hide();
    $("#academic").hide();
    $("#public_speaking").hide();
    $($(this).attr('href')).show();
});

$("#public_speaking").click(function () {
    $('.achievements-pane').removeClass('active');
    $(".achievements-pane").toggleClass("#public_speaking");
    $(this).addClass('active');
    $("#leadership").hide();
    $("#acting").hide();
    $("#academics").hide();
    $($(this).attr('href')).show();
});

$("#successfully-sent").click(function () {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("successfully-sent");

    setTimeout(function () {
        $(".notify").removeClass("active");
        $("#notifyType").removeClass("successfully-sent");
    }, 2000);
});