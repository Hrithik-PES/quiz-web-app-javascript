let m = 2;
let s = 0;

var myTime = setInterval(myTimer, 1000);

function myTimer() {
  document.getElementById("demo").innerHTML = m + ":" + s;
  if(s == 0){
      if(m != 0){
          m = m - 1;
          s = 59;
      }
      else{
          clearInterval(myTime);
          location.href = "final.html";
      }
  }
  else{
      s = s - 1;
  }
}