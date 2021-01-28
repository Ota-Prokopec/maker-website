document.getElementById("button").addEventListener("click", function (event) {
  noneeverygg();
  document.getElementById("edit").style.display="block";
  let is = false;
  let pozadi;
  let napsat;
  let delka;
  let colorelement;
  let vyska;
  let element;
  let ted = true;
  let ey;
  let ex;
  document.getElementById('wrap').addEventListener("mousedown", function (event) {
    is = true;
    controlposition();
  })
  document.getElementById("wrap").addEventListener("mouseup", function (mouse) {
  is = false;
  controlposition();
  })
  controlposition();
  function controlposition() {
      document.getElementById('wrap').addEventListener("mousemove", function (e) {
    if (is) {
           ey = e.y;
           ex = e.x;
                         //
                         ted = true;

                           napsat = document.getElementById("napis").value;
                           pozadi = document.getElementById("background").value;
                           element = document.getElementById("element").value;
                               
                           colorelement = document.getElementById("colorelement").value;
                           document.getElementById("background").addEventListener("click", function () {
                                 document.getElementById("color").style.display="block";
                           })
                           document.getElementById("color").addEventListener("click", function (gg) {
                                  const color = gg.target.getAttribute("class");
                                  pozadi = color;
                                  document.getElementById("background").value = color  ;
                           })
                           delka = document.getElementById("height").value;
                           vyska = document.getElementById("width").value;
                         //
                       }
                       else {
                         is = false;
                       }
                       ted = true;
                               window.addEventListener("contextmenu", function (a) {
                      a.preventDefault();
                       if (ted) {
                         addelement({
                           el:document.body,
                           element:element,
                           string:  napsat,
                           color : colorelement,
                           height: vyska,
                           width: delka,
                           background : pozadi,
                           left : ex,
                           top : ey,
                         });
                         ted = false;

                       }})



    })


    }
              is = "";
              pozadi = "";
              napsat = "";
              delka = "";
              vyska = "";
              ted = "";
              ey = "";
              ex = "";
})
