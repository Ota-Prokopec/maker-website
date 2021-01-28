

let code = [];
let codefunction;
let word ;

function addelement({ el, color, element, string, height, width, background,
 left, top}) {
//console.log("functionahojiahoijahoiakljoii");



  var node = document.createElement(element);
  var textnode = document.createTextNode(string);
  node.appendChild(textnode);
  node.style.height = height + "px";
  node.style.width = width + "px";
  node.style.background = background;



  node.style.position = "absolute";
  node.style.color = color;
  node.style.left = left + "px";
  node.style.top = top-14 + "px";
  zkontrolovat("element", element);
  if(doplnek != "") {
    node.setAttribute("type", doplnek);
  }


  if (checked) {
    node.setAttribute("checked", "");
  }

  document.getElementById("wrap").appendChild(node);

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








        codefunction = word + codefunction;

                       document.getElementById("wiewcode").innerText = codefunction;











}
function checktrue() {
  const check = document.getElementById("check").checked;

  //console.log(check);
  if (check) {
    checked = true;
  }
  else {
    checked = false;
  }

}
