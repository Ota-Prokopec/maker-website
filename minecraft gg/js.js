let is = false;
let pozadi;
let napsat;
let delka;
let colorelement;
let vyska;
let element;
let ted = true;
document.getElementById("button").addEventListener("click", function (event) {
  noneeverygg();
  document.getElementById("edit").style.display="block";


  document.getElementById('wrap').addEventListener("mousedown", function (event) {
    is = true;
    //controlposition();
  })
  document.getElementById("wrap").addEventListener("mouseup", function (mouse) {
  is = false;
  //controlposition();
  })

  document.getElementById("mycolorbackground").addEventListener("change", function () {
    console.log("change");
    const color = document.getElementById("mycolorbackground").value;
    pozadi = color;
  })

  controlposition();
  function controlposition() {
      document.getElementById('wrap'/*wrap*/).addEventListener("contextmenu", function (a) {
        a.preventDefault();

    if (/*is*/true) {


                         //
                         ted = true;

                           napsat = document.getElementById("napis").value;
                           //pozadi = document.getElementById("background").value;
                           element = document.getElementById("element").value;

                           //colorelement = document.getElementById("colorelement").value;
                           colorelement = document.getElementById("mycolor").value;
                           document.getElementById("background").addEventListener("click", function () {
                                 document.getElementById("color").style.display="block";
                           })

                                  document.getElementById("background").value = color  ;

//////////////////////////////////////////////////////////////
/*
                                  document.getElementById("array").addEventListener("mousedown", function (event) {
                                    //console.log("add");
                                  mouse(true);
                                  })
                                  document.getElementById("array").addEventListener("mouseup", function (event) {
                                    //console.log("not");
                                  mouse(false);
                                  })
                                  function mouse(value) {
                                  if (value) {
                                    window.addEventListener("mousemove", move)
                                  }
                                  else {
                                    window.removeEventListener("mousemove", move)
                                  }
                                  }

                                  function move() {
                                    console.log(event.y, event.x);
                                    delka =  ex - event.x;
                                    vyska =  ey - event.y;
                                         console.log("delka", delka, "vyska",  vyska);
                                  }*/
                                  /////////////////////////////////////////////////////////////////////////////
                           //delka = document.getElementById("height").value;
                           //vyska = document.getElementById("width").value;
                         //
                       }
                       else {
                         is = false;
                       }
                       ted = true;

                      console.log(a);
                       if (ted) {
                         addelement({
                           el:document.body,
                           element:element,
                           string:  napsat,
                           color : colorelement,
                           height: vyska,
                           width: delka,
                           background : pozadi,
                           left : leftgg,
                           top : topgg
                         });
                         ted = false;

                       }



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
