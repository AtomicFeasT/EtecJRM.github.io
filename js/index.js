if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../serviceWorker.js").then(registration => {
        console.log("service worker registrado")
        console.log(registration)
    }).catch(error => {
        console.log("service worker falhou")
        console.log(error)
    })
}

function vejaMais() {
    var dots = document.getElementById("pontos");
    var moreText = document.getElementById("mais");
    var btnText = document.getElementById("vejaMaisButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leia mais"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leia menos"; 
      moreText.style.display = "inline";
    }
  }