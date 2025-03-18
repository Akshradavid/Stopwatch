let timeDisplay = document.getElementById("time")
let start= document.getElementById("start")
let stopTime = document.getElementById("stop")
let restartTime = document.getElementById("restart")



let mins = 0;
let secs =0;
let msecs = 0;
let timerId= null;
 

start.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }

    timerId = setInterval(stopWatch, 10);
});

stopTime.addEventListener("click", function(){

      clearInterval(timerId);
      console.log("hii");
     
  
  
})
restartTime .addEventListener("click", function(){

      clearInterval(timerId);
      mins =0
      secs=0
      msecs=0 
      timeDisplay.innerHTML=`00:00:00`;
     
  
})


function stopWatch(){
   msecs++
   if(msecs==100){
     secs++
     msecs=0
    
   if(secs==60){
     mins++
     secs=0
   }}

   let formattedTime = 
   (mins < 10 ? "0" + mins : mins) + ":" + 
   (secs < 10 ? "0" + secs : secs) + ":" + 
   (msecs < 10 ? "0" + msecs : msecs);
// let msecsSting = msecs<10 ? `0${msecs}`:{msecs}
// let secsSting = secs<10 ? `0${secs}`:{secs}
// let minSting = mins<10 ? `0${mins}`:{mins}

timeDisplay.innerHTML = formattedTime;
// timeDisplay.innerText =`${minSting} : ${secsSting} :${msecsSting}`

}

