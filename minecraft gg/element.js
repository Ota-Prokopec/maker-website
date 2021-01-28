




    document.getElementById("array").addEventListener("mousedown", function (event) {
      //console.log(event);
      if (event.button == 0) {
        document.getElementById("array").style.transform="scaleX(1.7)";
   document.getElementById("container").style.visibility ="hidden";
   document.getElementById("edit").style.visibility ="hidden";
      }

    })
    document.getElementById("array").addEventListener("mouseup", function (event) {
                   if (event.button == 0) {
                     document.getElementById("array").style.transform="scaleX(1)";
          document.getElementById("container").style.visibility ="visible";
                 document.getElementById("edit").style.visibility ="visible";
                   }



    })
