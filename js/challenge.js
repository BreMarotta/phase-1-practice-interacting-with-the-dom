//Define Variables:
const counter =document.getElementById("counter")
const minus =document.getElementById("minus")
const plus =document.getElementById("plus")
const heart =document.getElementById("heart")
const pause =document.getElementById("pause")
const form =document.querySelector('form')
const submit =document.getElementById('submit')
const comment =document.getElementById("#comment-input")
const allButtons =document.getElementsByClassName("#button")

function timer(){
    setInterval(function(){
        return counter.innerText++},
        1000)
}

//WORKS!!! Timer-- increments every second after page has loaded
document.addEventListener("DOMContentLoaded", () => {
    counter.innerText = 0; 
    timer();
    //setInterval(function(){
    //return counter.innerText++},
    //1000)
    })


//_--------------------------------------------
//WORKS!!! Manually increment or decrement the counter
 plus.addEventListener("click", () => counter.innerText++)
 minus.addEventListener("click", () => counter.innerText --)


 //---------------------------------------------
//"Like" individual numbers, can see the count of number of likes
heart.addEventListener("click", (e) => {
    e.preventDefault()
    const number = counter.innerText;
    console.log(e)
    console.log(number)
    //console.log(counter.innerText)
    let p = document.createElement('p')
    p.textContent = `${counter.innerText} has been liked 1 times!`
    document.querySelector('ul').appendChild(p)
})
//buttonHome.addEventListener("click", function() {
   // CountButtonHomeClicks += 1;
    //console.log(CountButtonHomeClicks);
  //});

//Can Pause/Resumer counter
pause.addEventListener("click", haltCounter);

function haltCounter(){
    if(pause.innterText = "pause"){
    pause.innerText = "resume";
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    clearInterval(counter)
    //counter.innerText
    }else{
        pause.innerText = "pause";
        minus.disabled = false;
        plus.diabled = false;
        heart.disabled = false;
        submit.diabled = false;
        counter= setInterval(timer, 1000)
        counter.innerText++;
    }
}


//-------------------------------------------
//WORKS!!! Can leave comments 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addComment(e.target[0].value)
    form.reset()
})

function addComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment}`
    document.querySelector('#list').appendChild(p)
}
