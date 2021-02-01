

let code = [];
let codefunction;
let word ;

function addelement({ el, color, element, string, height, width, background,
 left, top}) {
//console.log("functionahojiahoijahoiakljoii");


     if (isNaN(element) && element.charAt(0) != " " && element.charAt(1) != " " && element.charAt(2) != " " && element.charAt(3) != " " ) {
       console.log(element);
  var node = document.createElement(element);
  var textnode = document.createTextNode(string);
  node.appendChild(textnode);
  node.style.height = height + "px";
  node.style.width = width + "px";
  node.style.background = background;



  node.style.position = "absolute";
  node.style.color = color;
  node.style.left = left+14 + "px";
  node.style.top = top-18 + "px";
  zkontrolovat("element", element);
  if(doplnek != "") {
    node.setAttribute("type", doplnek);
  }
  if (dothis != "" && dowhat != "") {
    node.setAttribute("on:" + dothis, dowhat);
  }
     if (varconst != "-") {
       node.setAttribute("var", "data." + varconst);
     }
     if (ifdo != "-") {
       if (ifdo != "false" || ifdo != "true") {
         node.setAttribute("if", "data." + ifdo);
       }
       else {
         node.setAttribute("if", ifdo);
       }
     }
  if (checked) {
    node.setAttribute("checked", "");
  }

  document.getElementById("wrap").appendChild(node);
}










            console.log("ahoj");
            math();
            //script();
            //console.log(math());
            if (math() != null) {
              console.log("no null ");
              if (doplnek == "") {
                word = "<" + element + " " + "style='" + "color:" + color +";" + "height:"
             + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
              +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + math()
               + "</" + element + " " + ">";
              }
              else {
                word = "<" + element + " " + doplnek +" " + "style='" + "color:" + color +";" + "height:"
              + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
              +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + math()
               + "</" + element + " " + ">";
               console.log("number");
              }
            }
            else {
              console.log("ahoj");
              if (doplnek == "") {
                word = "<" + element + " " + "style='" + "color:" + color +";" + "height:"
             + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
              +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + string
               + "</" + element + " " + ">";
              }
              else {
                word = "<" + element + " " + doplnek +" " + "style='" + "color:" + color +";" + "height:"
              + height + "px" + ";" + "width:" + width + "px" + ";" + "background:" + background
              +";" + "position: absolute;" + "left:" + left + "px;" + "top:" + top + "px;" + "'>" + string
               + "</" + element + " " + ">";
              }
            }









        codefunction = word + codefunction;

                       document.getElementById("wiewcode").innerText = codefunction;











}/*
function checktrue() {
  const check = document.getElementById("check").checked;

  //console.log(check);
  if (check) {
    checked = true;
  }
  else {
    checked = false;
  }

}*/
