

let ey;
let ex;
let leftgg;
let topgg;
let myelement;
let vymazani = false;
document.body.addEventListener("mousedown", function (a) {
       if (a.button == 0) {
         //console.log("ahoj", ex);
         ey = a.y;
         ex = a.x;
       }


})
document.getElementById("array").addEventListener("mousedown", function (event) {
  ////console.log("add");
mouse(true);
})
document.getElementById("array").addEventListener("mouseup", function (event) {
  ////console.log("not");
  if (vymazani) {
    elremove({element:myelement});
  }
mouse(false);
})
function mouse(value) {
if (value) {
  document.body.addEventListener("mousemove", move);
}
else {
  document.body.removeEventListener("mousemove", move);
}
}
document.getElementById('wrap').addEventListener("contextmenu", function (a) {
  //console.log(event.x, ex);
  if (event.x > ex || event.y > ey) {


           leftgg = a.x - delka;
           topgg = a.y - vyska;
           //console.log("nominus");

  }
  else {

    leftgg = a.x;
    topgg = a.y;
                      //console.log("minus");
  }
})
function move() {

  //console.log(event.y, ey, event.x, ex);
  if (event.x > ex && event.y > ey) {
    //console.log("+");
    delka =  event.x - ex;
    vyska =  event.y - ey;
        eladd({
          string:"",
          element:"div",
          to:document.body,
          style:"borgg",
          left:ex,
          top:ey,
          height:vyska,
          width:delka,
          background:""

        });
    //console.log(delka, " = ", event.x, ex);

  }
      else if (event.x > ex && event.y < ey) {
        //console.log("levo horgg");
        delka =  event.x - ex;
        vyska =  ey - event.y;
        //console.log(ex - event.x, vyska);
            eladd({
              string:"",
              element:"div",
              to:document.body,
              style:"borgg",
              left:ex,
              top:event.y,
              height:vyska,
              width:delka,
              background:""

            });
        //console.log(delka, " = ", event.x, ex);

      }
      else if (event.x < ex && event.y > ey) {
        //console.log("levo horgg");
        delka =  ex - event.x;
        vyska =  event.y - ey;
            eladd({
              string:"",
              element:"div",
              to:document.body,
              style:"borgg",
              left:event.x,
              top:ey,
              height:vyska,
              width:delka,
              background:""

            });
        //console.log(delka, " = ", event.x, ex);

      }
  else if (event.x < ex && event.y < ey) {
    delka = ex - event.x;
    vyska = ey - event.y;
    eladd({
      string:"",
      element:"div",
      to:document.body,
      style:"borgg",
      left:event.x,
      top:event.y,
      height:vyska,
      width:delka,
      background:""

    });
  }

}
function eladd({string, element, to, style, left, top, height, width, background}) {
      if (vymazani) {
    //console.log(myelement);
    elremove({element:myelement});
  }
  vymazani = true;

  const node = document.createElement(element);
    const textnode = document.createTextNode(string);
    node.appendChild(textnode);
    node.className = style;
    node.style.background = background;
    node.style.height = height + "px";
    node.style.width = width + "px";
    node.style.position = "absolute";
    node.style.left = left + "px";
    node.style.top = top + "px";
    //console.log(node);
    myelement = node;

    //console.log(myelement);
    to.appendChild(node);
}
function elremove({element}) {
element.remove();
}
