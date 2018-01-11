$(document).ready(function(){
    
    $(".voltar").click(function(){
        $(".voltar").addClass("nopacity");
        $(".infos-box").addClass("nopacity");
        setTimeout(function(){
            $(".black-body").addClass("black-body-close");
        }, 200)
        setTimeout(function(){
            window.location.href="./../../index.html";
        },500)
    })

    $(".black-body").addClass("black-body-open");
    
    setTimeout(function(){
        $(".voltar").addClass("opacity");
        $(".infos-box").addClass("opacity");
    },400)

})