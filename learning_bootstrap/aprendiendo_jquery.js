$(document).ready(function(){
    $("#gatoid").click(function(){    //click, o mouseenter
        $("#gatoid").hide();       //puedo darla animate({right:'250px'})
    })
    $("#gatoid").mouseleave(function(){    
        $("#gatoid").fadeOut(2000);
    })
    $("#gatoid").mouseenter(function(){    
        $("#gatoid").fadeIn(2000);
    })
});