window.onload = function(){
   
    var lis = $("#tab li");
    var  mypage=$("#mypage")[0];
    var con = $("#text .page");
    var black=$("#black")[0];
    var lisr=$("#fp-nav li");
    var lisra=$("#fp-nav a");
    var pica=$(".mypic a");
    var big=$("#big")[0];
    var img=$("#bigimg")[0];
    for (var i = 0; i< lis.length; i++) {
        lis[i].index = i; 
        lis[i].onclick = function(){
         
            for( var i=0; i<lis.length; i++ ){
                lis[i].className = "";
                con[i].className = "page";
                
            }
            this.className = "sec";
            con[this.index].className = "cur page";
        }
     };
    //  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     for (var i = 0; i< pica.length; i++) {
        pica[i].index = i; 
        pica[i].onclick=function(){
            var src = this.href;
            black.style.display="block";
            big.style.display = "block";
            big.style.left = "50%";
            big.style.top =$("#about")[0].offsetTop + 360+"px";
            big.style.marginLeft = -big.offsetWidth/2 + "px";
            big.style.marginTop = -big.offsetHeight/2 + "px";
            img.src = src;
            return false;
        }
     };


     for (var i = 0; i< lisr.length; i++) {
        lisr[i].index = i; 
        lisr[i].onclick = function(){
            for( var i=0; i<lisra.length; i++ ){
               lisra[i].className="";
            }
            

            lisra[this.index].className="active";
            switch(this.index)
            {
            case 0:
              bb(home);
              break;
            case 1:
              bb(about);
              break;
              case 2:
              bb(github);
              break;
              case 3:
              bb(connect);
              break;
            }
        }
     }

    black.onclick = function () {
        black.style.display = "none";
        mypage.style.display = "none";
        big.style.display = "none";
    }

var btn = document.getElementById("btn");
var timer = null;
var isTop = true;

btn.onclick = function () {
    timer = setInterval(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var speed = Math.floor(-scrollTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
        isTop = true;
        if (scrollTop == 0) {
            clearInterval(timer);
        }
    }, 50);
}

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   
    if (scrollTop > 500) { btn.style.display = "block"; } else { btn.style.display = "none"; }
    if (!isTop) {
        clearInterval(timer);
    }
    isTop = false;

    if ((scrollTop > $("#home")[0].offsetTop-30)&&(scrollTop< $("#about")[0].offsetTop)){
        for( var i=0; i<lisra.length; i++ ){
            lisra[i].className="";
         }
         

         lisra[0].className="active";
    }
    if ((scrollTop > $("#about")[0].offsetTop-30)&&(scrollTop< $("#github")[0].offsetTop)){
        for( var i=0; i<lisra.length; i++ ){
            lisra[i].className="";
         }
         

         lisra[1].className="active";
    }
    if ((scrollTop > $("#github")[0].offsetTop-30)&&(scrollTop< $("#connect")[0].offsetTop)){
        for( var i=0; i<lisra.length; i++ ){
            lisra[i].className="";
         }
         

         lisra[2].className="active";
    }
    if (scrollTop > $("#connect")[0].offsetTop-30){
        for( var i=0; i<lisra.length; i++ ){
            lisra[i].className="";
         }
         

         lisra[3].className="active";
    }
}
}

function aa(){
   
  black.style.display = "block";
  mypage.style.display = "block";
}
function bb(target) {
    document.documentElement.scrollTop = document.body.scrollTop = target.offsetTop;
}