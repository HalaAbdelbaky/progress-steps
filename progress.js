var step = document.querySelectorAll(".list li");
var btnPrev = document.querySelector(".btn1");
var btnNext = document.querySelector(".btn2");
var moveBar = document.querySelectorAll("ul li .progress .overlay");
console.log(moveBar)

var i = 0 , a = 0;

btnNext.onclick = function () {
     btnPrev.classList.remove("stop")
  
    i++;

    if (i >= step.length - 1) {
        i = step.length - 1;
        btnNext.classList.add("stop");
    }

    if(i > 0   || i ==  step.length - 2 ){
        step[i].classList.add("active");
        console.log( "next is " +i)
    }

   if(a >= 0   ||  a == step.length - 2 ){
        moveBar[a].classList.add("move");
        console.log( "add a is " + a)
      }
    a++  
  };



btnPrev.onclick = function () {
     btnNext.classList.remove("stop")

     if (i <= 0  && a <= 0 ) {
        btnPrev.classList.add("stop");
        i=0
     }

     if(i >= 1 || i == step.length - 1){
        step[i].classList.remove("active");
        console.log( "prev is " +i)
     }

  i--;
  a-- ; 

     if(a  ==   step.length - 4 ||
        a  ==   step.length - 3 ||
        a  ==   step.length - 2)
      { 
      moveBar[a].classList.remove("move");
      console.log( "remove a is " + a)
}
}

  

