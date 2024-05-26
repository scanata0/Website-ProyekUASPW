window.onload = function() {
    var log=[];
    var buybtn1 = document.getElementById("buy1");
    var buybtn2 = document.getElementById("buy2");
    var buybtn3 = document.getElementById("buy3");
    var buybtn4 = document.getElementById("buy4");
    var buybtn5 = document.getElementById("buy5");
    var buybtn6 = document.getElementById("buy6");
    var buybtn7 = document.getElementById("buy7");
    var buybtn8 = document.getElementById("buy8");
    buybtn1.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        }  
        else {
            let container = document.querySelector("#circle");
            let isi="";
            isi = `
            <div id = "circle" style = "border: 1 px solid red; background-color: red; border-radius : 100%; width : 15px; height : 15px; margin-bottom : 35px; margin-left : -30px; color :white;">1</div>
             `
            $(container).append(isi);
        }
    }
    buybtn2.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn3.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn4.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn5.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn6.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn7.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
    buybtn8.onclick = function () {
        if (log.length <1) {
            alert("You haven't registered or logged in :(");
        } else {

        }
    }
}