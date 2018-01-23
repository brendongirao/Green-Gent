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

    // $("li").click(function(){
    //     console.log("click");
    // })

    function checkSelected(id){
        if($(id)[0].classList.length == 1){
            $(".menu-item-selected").removeClass("menu-item-selected")
            $(id).addClass("menu-item-selected");
        }
    }

    
    $("#1").click(function(){
        checkSelected("#1");     
        if($(".black-body").scrollTop() == screen){

        }else{
            $(".black-body").animate({ scrollTop:screen }, 600);
        }
    })

    $("#2").click(function(){
        checkSelected("#2");        
        if($(".black-body").scrollTop() == screen*2){

        }else{
            $(".black-body").animate({ scrollTop:screen*2 }, 600);
        }
    })

    $("#3").click(function(){
        checkSelected("#3");             
        if($(".black-body").scrollTop() == screen*3){

        }else{
            $(".black-body").animate({ scrollTop:screen*3 }, 600);
        }
    })

    $("#4").click(function(){
        checkSelected("#4");             
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
        // console.log(currentScrollTop);
    })
    
    $("#up").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/up/up.html";
        }, 400)             
    })
    $("#geoleo").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/geoleo/geoleo.html";
        }, 400)             
    })
    $("#quixique").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/quixique/quixique.html";
        }, 400)             
    })


    $(".read-more").click(function(){
        var wimWidth = $(".wim")[0].offsetWidth;
        var wimWidthR = $(".wim")[1].offsetWidth;
        if(wimWidth > 0){
            $(".wim-cont-1").animate({marginLeft: 0-wimWidth}, 300);
            $(".wim-cont-2").animate({marginLeft: 0}, 300);
        } else if(wimWidthR > 0){
            $(".wim-cont-1").animate({marginLeft: 0-wimWidthR}, 300);
            $(".wim-cont-2").animate({marginLeft: 0}, 300);

        }
    })

    $(".read-less").click(function(){
        var wimWidth = $(".wim")[0].offsetWidth;
        var wimWidthR = $(".wim")[1].offsetWidth;       
        if(wimWidth > 0){
            $(".wim-cont-1").animate({marginLeft: 0}, 300);
            $(".wim-cont-2").animate({marginLeft: wimWidth}, 300);
        } else if(wimWidthR > 0){
            $(".wim-cont-1").animate({marginLeft: 0}, 300);
            $(".wim-cont-2").animate({marginLeft: wimWidthR}, 300);
        }
    })

    var isOpen = false;

    $(".openmenu").click(function(){
        if(isOpen==false){
            isOpen = true;
            $(".body").animate({height: window.innerHeight}, 300);        
            $(".menu").addClass("menu-show-responsive");
            $("#1r").click(function(){
                isOpen = false
                checkSelected("#1r");
                if($(".black-body").scrollTop() == 0){
                    $(".body").animate({height: window.innerHeight*0.1}, 300);            
                    $(".black-body").animate({ scrollTop:0 }, 600);
                }else{
                }
            })
        
            $("#2r").click(function(){
                isOpen = false
                checkSelected("#2r");        
                if($(".black-body").scrollTop() == screen){
        
                }else{
                    $(".body").animate({height: window.innerHeight*0.1}, 300);            
                    $(".black-body").animate({ scrollTop:screen }, 600);
                }
            })
        
            $("#3r").click(function(){
                isOpen = false
                checkSelected("#3r");             
                if($(".black-body").scrollTop() == screen*2){
        
                }else{
                    $(".body").animate({height: window.innerHeight*0.1}, 300);            
                    $(".black-body").animate({ scrollTop:screen*2 }, 600);
                }
            })
        
            $("#4r").click(function(){
                isOpen = false
                checkSelected("#4r");             
                if($(".black-body").scrollTop() == screen*3){
        
                }else{
                    $(".body").animate({height: window.innerHeight*0.1}, 300);            
                    $(".black-body").animate({ scrollTop:screen*3 }, 600);
                }
            })
        }else{
            isOpen = false;            
            $(".body").animate({height: window.innerHeight*0.1}, 300);
        }
    })

    $("#up-r").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/up/up.html";
        }, 400)             
    })
    $("#geoleo-r").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/geoleo/geoleo.html";
        }, 400)             
    })
    $("#quixique-r").click(function(){
        // console.log("clickou");
        $(".project").hide();
        $(".menu").hide();
        $(".body").addClass("body-fadeout");   
        $(".black-body").addClass("black-body-fadein");   
        setTimeout(function(){
            window.location.href="./pages/quixique/quixique.html";
        }, 400)             
    })

})