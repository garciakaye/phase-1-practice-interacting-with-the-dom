window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    timer();
});
 
//identifiers
let counterElement = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let pauseButton = document.getElementById("pause")

let seconds = 0;

let timer = () => {
    setInterval(function(){
        ++seconds;
        counterElement.innerText = seconds;
    }, 1000)
}

//listeners
pauseButton.addEventListener("click", pauseTimer)
minusButton.addEventListener("click", seconds - 1)
plusButton.addEventListener("click", seconds + 1)



function pauseTimer() {
    // console.log(counterElement.innerText)
    clearInterval(counterElement.innerText);
    
    //disable(pauseButton);
}


//function disable(element){ 
   // element.setAttribute("pause",""); }


