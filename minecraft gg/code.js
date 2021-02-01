

let pocet = 0;
document.getElementById("code").addEventListener("click", function () {
  pocet ++;
  if (pocet % 2) {
    none("none");
    document.getElementById("wiewcode").style.display = "block";
  }
  else {
      none("block");
      document.getElementById("wiewcode").style.display = "none";
  }
})
function none(value) {
  document.getElementById('every').style.display=value;
  document.getElementById('array').style.display=value;
  document.getElementById('container').style.display=value;
  document.getElementById("wiewcode").style.display = value;
  document.getElementById("js").style.visibility =value;
  document.getElementById("wrap").style.display =value;
  document.getElementById("edit").style.display =value
}
window.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          document.getElementById("wiewcode").style.display = "none";
          document.getElementById("js").style.visibility = "hidden";
          document.getElementById("every").style.display ="block";
          document.getElementById("every").style.visibility ="visible";
          document.getElementById("array").style.display ="block";
          document.getElementById("wrap").style.display ="block";
          document.getElementById("container").style.display ="block";






        }
})
