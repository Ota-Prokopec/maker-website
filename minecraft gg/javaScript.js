


    let varriable = "";
    let value = 0;
document.getElementById("javaScript").addEventListener("click", function (event) {
  document.getElementById("js").style.visibility ="visible";
  document.getElementById("wiewcode").style.visibility ="hidden";
  document.getElementById("every").style.visibility ="hidden";
       document.getElementById("js").addEventListener("dblclick", function (event) {
              varriable = document.getElementById("vargg").value;
              value = document.getElementById("value").value;
              console.log(value, varriable);
              const gg = new Function(`return  data = setData({
                ${ varriable } : ${value}
              }) `)();


       })
})
