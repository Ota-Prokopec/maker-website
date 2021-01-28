


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
}
window.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          document.getElementById("wiewcode").style.display = "none";

          none("block");


        }
})
