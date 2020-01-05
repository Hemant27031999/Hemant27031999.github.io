var width = $(window).width();

var sendername = document.getElementById("sendername");
var senderemail = document.getElementById("senderemail");
var sendermessage = document.getElementById("sendermessage");
// var sendbutton = document.getElementById("sendbutton");

window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

// sendbutton.onclick = function() {
//   var email = senderemail.value;
//   var name = sendername.value;
//   var message = sendermessage.value;
//   window.open(`mailto:hemant@cs.iitr.ac.in?subject=Message&body=${message}`);
// }

document.getElementById("education").style.cursor = "pointer";
document.getElementById("skills").style.cursor = "pointer";
document.getElementById("talks").style.cursor = "pointer";
document.getElementById("childhood").style.cursor = "pointer";
document.getElementById("gallery").style.cursor = "pointer";
document.getElementById("travel").style.cursor = "pointer";

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

function loadPage(parameter){
  window.location.href = `${parameter}.html`;
}

function loadResume(){
  window.location.href = "Resume.html";
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       }
      });
  });
