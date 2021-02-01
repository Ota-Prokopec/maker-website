let inputtyp = "";
let doplnek = "";
let checked = false;
let varconst;
let ifdo;
let dothis;
let dowhat;





            //document.getElementById("stahno").click();
document.getElementById("element").addEventListener("input", function (event) {
  element = document.getElementById("element").value;
  zkontrolovat("element", element);
})
function zkontrolovat(value, element) {
if (value == "element") {
  if (element == "input") {
    document.getElementById('inputrozhrani').style.display = "block";
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
              //console.log("ahoj");
  }
   else if (element == "calc") {
    document.getElementById('inputrozhrani').style.display = "block";
    document.getElementById("inputrozhranitype").addEventListener("input", function (event) {
      inputtyp = document.getElementById("inputrozhranitype").value;
        varconst = inputtyp;
    })
  }

   else if (element == "scripting") {
    document.getElementById('inputrozhrani').style.display = "block";
    document.getElementById('on--something').style.display = "block";
    document.getElementById("inputrozhranitype").addEventListener("input", function (event) {
      inputtyp = document.getElementById("inputrozhranitype").value;
      const valueofsomething = document.getElementById("on--something").value;
      const valuewhat = document.getElementById("on--what").value;
                dowhat = valuewhat;
            dothis = valueofsomething;
        ifdo = inputtyp;
    })
  }
  else {
    document.getElementById('inputrozhrani').style.display = "none";
    document.getElementById('on--something').style.display = "none";

  }


}

}
