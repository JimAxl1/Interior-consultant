function show(){
    document.getElementById("navbar").style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("navbar").style.display = "none";
}