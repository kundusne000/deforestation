function slider() {
    var s = document.getElementById("myRange").value;
    if (s>"50" & s<"60"){
        document.getElementById("paragraph").innerHTML = "Correct!";
    }
    else if (s<"50"){
        document.getElementById("paragraph").innerHTML ="Close, however the number of acres cut down is more than that.";
    }
    else {
        document.getElementById("paragraph").innerHTML = "Close, however the number of acres cut down is less than that.";
    }
}