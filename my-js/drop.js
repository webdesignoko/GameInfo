


    // open nevbar
function  dropDown() {
    let hold = document.querySelector('#nav-down').style.display = "block";


     hold += document.querySelector('.header-content').style.display = "none"
     hold += document.querySelector('.burger-icon-close').style.display = "block"
     hold += document.querySelector('.burger-icon').style.display = "none"
    
    return hold;
  };

  // close navbar
function closeNav() {
  let hold = document.querySelector('#nav-down').style.display = "none";

  hold += document.querySelector('.header-content').style.display = "block";
  hold += document.querySelector('.burger-icon').style.display = "block";
  hold += document.querySelector('.burger-icon-close').style.display = "none";

 return hold;
}

// animation typewriter

var i = 0;
var textContent = 'Neymar became the most expensive footballer in history when he joined PSG for £200m in August 2017';
var speed = 50;



  function typeWriter() {
    if (i < textContent.length)  {
      document.getElementById('demo').innerHTML += textContent.charAt(i);
      i++;
      setTimeout(typeWriter,speed);
    }
  };
   typeWriter()








