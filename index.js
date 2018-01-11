$(document).ready(function(){

    // scroll(100);
    $(".loading").hide();
    var vh = window.innerHeight/100;
    var currentScrollTop = 0;
    var screen = window.innerHeight;
    var scroll = [true, true, true];

    function checkScroll(){
        for(i in scroll){
            if(scroll[i] == null){
                return true;
            }
            else if(scroll[i] == true){
                scroll[i] = false;
                return true;
            }
        }
        return false;
    }

    var logoCod = "<img src='./assets/images/logos/logotype/color.png' class='logo'>";
    setTimeout(function() {
        $(".body").append(logoCod);
        
        setTimeout(function(){
            $(".logo").fadeOut("fast");
            $(".body").addClass("body-reduce");
            $(".black-body").addClass("black-body-expand");
            // $(".black-body").scroll(100);

            setTimeout(function(){
                $(".content").addClass("display-block");
                $(".white-logo").addClass("white-logo-expanded");
                $(".white-logo")[0].draggable =false;
                $(".menu").addClass("menu-show"); 
            }, 500)
        }, 1000);

    }, 0);

    
    $("#1").click(function(){
        console.log("scroo" + currentScrollTop);
        if($(".black-body").scrollTop() == screen){

        }else{
            $(".black-body").animate({ scrollTop:screen }, 600);
        }
    })

    $("#2").click(function(){
        if($(".black-body").scrollTop() == screen*2){

        }else{
            $(".black-body").animate({ scrollTop:screen*2 }, 600);
        }
    })

    $("#3").click(function(){
        if($(".black-body").scrollTop() == screen*3){

        }else{
            $(".black-body").animate({ scrollTop:screen*3 }, 600);
        }
    })

    $("#4").click(function(){
        if($(".black-body").scrollTop() == screen*4){

        }else{
            $(".black-body").animate({ scrollTop:screen*4 }, 600);
        }
    })


    function updateScrollTop(){
        currentScrollTop = $(".black-body").scrollTop();
    }

    var keepScrolling = true;

    $(".black-body").bind('scroll', function(){
        updateScrollTop();
        console.log(currentScrollTop);
    })
    
    $("#up").click(function(){
        console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/up/up.html";
        }, 400)             
    })
    $("#geoleo").click(function(){
        console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/geoleo/geoleo.html";
        }, 400)             
    })
    $("#quixique").click(function(){
        console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/quixique/quixique.html";
        }, 400)             
    })

})