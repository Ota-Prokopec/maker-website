let inputtyp = "";
let doplnek = "";
let checked = false;
document.getElementById("element").addEventListener("input", function (event) {
  element = document.getElementById("element").value;
  zkontrolovat("element", element);
})
function zkontrolovat(value, element) {
if (value == "element") {
  if (element == "input") {
    document.getElementById('inputrozhrani').style.display = "block";

              //console.log("ahoj");
  }
  else {
    document.getElementById('inputrozhrani').style.display = "none";

  }

}

}
document.getElementById("inputrozhranitype").addEventListener("input", function (event) {
  inputtyp = document.getElementById("inputrozhranitype").value;
  doplnek = inputtyp;
  //console.log("ahoj");
  //console.log(doplnek);
  if (doplnek == "checkbox" || doplnek == "radio") {

            document.getElementById("rozbaleni__checked").style.display = "block";



  }
  else {
    document.getElementById("rozbaleni__checked").style.display = "none";

  }
})
