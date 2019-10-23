////////////expedition 56-57
/////////demo/////////////////////////////////////////////////////////
var countDownDate = new Date("june 6, 2018 12:7:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
   
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
//////////////////////////////////////////////////////////////////////////////////




////june navn (countDownDat)
/////////TIC/////////////////////////////////////////////////////////
var countDownDat = new Date("June 14, 2018 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDat - now;
    

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    document.getElementById("TIC").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
   
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("TIC").innerHTML = "EXPIRED";
    }
}, 1000);
///////////////////////////////////////////////////////////////




////july navn (july)
/////////july/////////////////////////////////////////////////////////
var july = new Date("july 31, 2018 19:12:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = july - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("july").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("july").innerHTML = "EXPIRED";
    }
}, 1000);
///////////////////////////////////////////////////////////////



////Septmeber navn (ICESat)
/////////ICESat/////////////////////////////////////////////////////////
var ICESat = new Date("September 12 , 2018 18:55:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
    var distance = ICESat - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("ICESat").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ICESat").innerHTML = "EXPIRED";
    }
}, 1000);
///////////////////////////////////////////////////////////////



////October navn (e58)
/////////57/////////////////////////////////////////////////////////
var e57 = new Date("oct 4 , 2018 11:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = e57 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    document.getElementById("e57").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("e57").innerHTML = "EXPIRED";
    }
}, 1000);

///////////////////////////////////////////////////////////////



////october 11 navn (nick)
/////////59/////////////////////////////////////////////////////////
var Nick  = new Date("oct 11 , 2018 13:07:45").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = Nick - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("Nick").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Nick").innerHTML = "EXPIRED";
    }
}, 1000);
///////////////////////////////////////////////////////////////



////Demenber 13 navn (Alexsander)
/////////Alecander/////////////////////////////////////////////////////////
var Alexsander  = new Date("December  13 , 2018 17:05:15").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = Alexsander - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("Alexsander").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Alexsander").innerHTML = "EXPIRED";
    }
}, 1000);
///////////////////////////////////////////////////////////////





/////////David/////////////////////////////////////////////////////////
var David = new Date(" December 20 , 2018 15:07:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = David - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("David").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("David").innerHTML = "EXPIRED";
    }
}, 1000);

///////////////////////////////////////////////////////////////



/////////Navbar//
/////////////////////////////////////////////////////////////////////
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
///////////////////////////////////////////////////////////////