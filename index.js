  var cursore1;
  var offset1 = [0,0];
  var ogg1;
  var click1 = false;
  ogg1 = document.getElementById("oggettoMobile1");

  var cursore2;
  var offset2 = [0,0];
  var ogg2;
  var click2 = false;
  ogg2 = document.getElementById("oggettoMobile2");

  var cursore3;
  var offset3 = [0,0];
  var ogg3;
  var click3 = false;
  ogg3 = document.getElementById("oggettoMobile3");

  var cursore4;
  var offset4 = [0,0];
  var ogg4;
  var click4 = false;
  ogg4 = document.getElementById("oggettoMobile4");

  ogg1.addEventListener('mousedown', function(e) {
    click1 = true;
    offset1 = [
      ogg1.offsetLeft - e.clientX,
      ogg1.offsetTop - e.clientY
    ];
  }, true);

  ogg2.addEventListener('mousedown', function(e2) {
    click2 = true;
    offset2 = [
      ogg2.offsetLeft - e2.clientX,
      ogg2.offsetTop - e2.clientY
    ];
  }, true);

ogg3.addEventListener('mousedown', function(e3) {
    click3 = true;
    offset3 = [
      ogg3.offsetLeft - e3.clientX,
      ogg3.offsetTop - e3.clientY
    ];
  }, true);

ogg4.addEventListener('mousedown', function(e4) {
    click4 = true;
    offset4 = [
      ogg4.offsetLeft - e4.clientX,
      ogg4.offsetTop - e4.clientY
    ];
  }, true);

  document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    
    if (click1) {
      cursore1 = {
        x : event.clientX,
        y : event.clientY
      };
      ogg1.style.left = (cursore1.x + offset1[0]) + 'px';
      ogg1.style.top  = (cursore1.y + offset1[1]) + 'px';
    }
    
    if (click2) {
      cursore2 = {
        x : event.clientX,
        y : event.clientY
      };
      ogg2.style.left = (cursore2.x + offset2[0]) + 'px';
      ogg2.style.top  = (cursore2.y + offset2[1]) + 'px';
    }
    
    if (click3) {
      cursore3 = {
        x : event.clientX,
        y : event.clientY
      };
      ogg3.style.left = (cursore3.x + offset3[0]) + 'px';
      ogg3.style.top  = (cursore3.y + offset3[1]) + 'px';
    }
    
    if (click4) {
      cursore4 = {
        x : event.clientX,
        y : event.clientY
      };
      ogg4.style.left = (cursore4.x + offset4[0]) + 'px';
      ogg4.style.top  = (cursore4.y + offset4[1]) + 'px';
    }
    
  }, true);


  document.addEventListener('mouseup', function() {
    click1 = false;
    click2 = false;
    click3 = false;
    click4 = false;
  }, true);

//var maxOffset = window.scrollMaxY;
//function onScroll(event) {
//  let offset = window.pageYOffset;
//  let color = "#"+(Math.round(offset/maxOffset*9))+"#E94E1B";
//
//  document.getElementById("btn").style = "color:"+color+";";
//  
//}
//document.addEventListener('scroll', onScroll);

//function btn() {
//  var btns = document.querySelectorAll(".btn");
//
//  for (var i = 0; i < btns.length; i++) {
//    var windowHeight = window.innerHeight;
//    var elementTop = btns[i].getBoundingClientRect().top;
//    var elementVisible = 150;
//
//    if (elementTop < windowHeight - elementVisible) {
//      btns[i].classList.add("active");
//    } else {
//      btns[i].classList.remove("active");
//    }
//  }
//}

//document.addEventListener('DOMContentLoaded', function() {
//    var scroll_pos = 0;
//    window.addEventListener('scroll', function() {
//        scroll_pos = window.pageYOffset || document.documentElement.scrollTop;
//        if (scroll_pos > 280) {
//            document.btn.style.color = 'orange';
//        } else {
//            document.btn.style.color = 'black';
//        }
//    });
//});

//document.addEventListener('DOMContentLoaded', function() {
//  var scroll_pos = 0;
//  var btnElement = document.btn;
//
//  window.addEventListener('scroll', function() {
//    scroll_pos = window.pageYOffset || document.documentElement.scrollTop;
//    if (scroll_pos > 280) {
//      btnElement.classList.add('btn2');
//    } else {
//      btnElement.classList.remove('btn2');
//    }
//  });
//});

//window.addEventListener('scroll', function() {
//  var button = document.getElementsByClassName('btn');
//  var scrollPosition = window.scrollY;
//
//  if (scrollPosition > 280) {
//    button.classList.add('btn2');
//  } else {
//    button.classList.remove('btn2');
//  }
//});

window.onscroll = function() {
//    console.log(document.documentElement.scrollTop);
  windowScroll();
};


//function windowScroll() {
//  if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 919 ) {
//    
//    //    document.getElementsById("alpahbet").className = "btn2";
//    console.log("eureka");
//    
//    var element1 = document.getElementById("menu1");
//    element1.classList.add("attivo"); }
//  else {
//    var element1 = document.getElementById("menu1");
//    element1.classList.remove("attivo");
//    
//  }
//
//    
//  }
function windowScroll() {
  if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 919) {
    
    var element1 = document.getElementById("menu1");
    element1.classList.add("attivo"); }
  else {
    var element1 = document.getElementById("menu1");
    element1.classList.remove("attivo");
    
  }

  
    if (document.documentElement.scrollTop > 920 && document.documentElement.scrollTop < 1799) {
    
    //    document.getElementsById("alpahbet").className = "btn2";
    console.log("eureka");
    
    var element2 = document.getElementById("menu2");
    element2.classList.add("attivo"); }
  else {
    var element2 = document.getElementById("menu2");
    element2.classList.remove("attivo");
    
  }
  
    if (document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2202) {
    
    //    document.getElementsById("alpahbet").className = "btn2";
    console.log("eureka");
    
    var element3 = document.getElementById("menu3");
    element3.classList.add("attivo"); }
  else {
    var element3 = document.getElementById("menu3");
    element3.classList.remove("attivo");
    
  }
    
  }

//function windowScroll() {
//  if (document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2202 ) {
//    
//    //    document.getElementsById("alpahbet").className = "btn2";
//    console.log("eureka");
//    
//    var element3 = document.getElementById("menu3");
//    element3.classList.add("attivo"); }
//  else {
//    var element3 = document.getElementById("menu3");
//    element3.classList.remove("attivo");
//    
//  }
//
//    
//  }

function xy(x) {
    o = document.getElementById(x);
    var l =o.offsetLeft; var t = o.offsetTop;
    while (o=o.offsetParent)
        l += o.offsetLeft;
    o = document.getElementById(x);
    while (o=o.offsetParent)
        t += o.offsetTop;
    return [l,t];
}

