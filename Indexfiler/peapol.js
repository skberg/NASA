
//ISS Posijon/////////////////////////////////////////////////////////////////////
fetch('http://api.open-notify.org/iss-now.json')
    .then(result => result.json())
    .then((res) => {
        ISS(res);
    })
    .catch(err => console.log(err));


function ISS(result) {
    var details = document.getElementById('ISS');
    details.innerHTML += "iss_position: " + " latitude:" + result.iss_position.latitude + "  " + "longitude:" + result.iss_position.longitude;
}
//////////////////////////////////////////////////////////////////////////////////



////////Peapole //////////////////////////////////////////////////////////////////
fetch('http://api.open-notify.org/astros.json')
    .then(result => result.json())
    .then((res) => {
        nur(res);
    })
    .catch(err => console.log(err));

////HJep/////
function nur(result) {
    var elem = document.getElementById('nur');
    elem.innerHTML += " " + result.people.length + "   ";
}
//////////////////////////////////////////////////////////////////////////////////




///////Navbar/////////////////////////////////////////////////////////////////////
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//////////////////////////////////////////////////////////////////////////////////