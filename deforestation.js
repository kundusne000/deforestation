window.addEventListener("input", showResult, false)
function showResult() {
    var s = document.getElementById("rs-range-line").value;
    if (s>40 & s<50){
        document.getElementById("paragraph").innerHTML = "Correct! The exact number of acres that are cut down daily are 42 million acres. We can do so many things to redude this number if you just follow at least one of the five ways mentioned below. "; 
    }
    else if (s<40){
        document.getElementById("paragraph").innerHTML ="Close, however the number of acres cut down is more than that."; 
    }
    else {
        document.getElementById("paragraph").innerHTML = "Close, however the number of acres cut down is less than that."; 
    }
}


window.addEventListener("input", showSliderValue, false)

function showSliderValue() {
  var rangeSlider = document.getElementById("rs-range-line");
  var rangeBullet = document.getElementById("rs-bullet");
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}