var originalColor = window.getComputedStyle(document.body, null).getPropertyValue("color");
var originalBgColor = window.getComputedStyle(document.body, null).getPropertyValue("background-color");
var shinyBgImage = "url('shiny_bg1.jpg')"
var shinyColor = "white";

contactButton = document.querySelector("#contact button");
shinyButton = document.querySelector("#shiny button");
notShinyButton = document.querySelector("#not_shiny button");
collapseButton = document.querySelector("#easter_egg button");

contactButton.addEventListener("click", function contactClickhandler(el) {
    window.location='https://www.linkedin.com/in/miryam-yakubov-087840226/';
});

shinyButton.addEventListener("click", function contactClickhandler(el) {
    document.body.style.backgroundImage = shinyBgImage;
    document.body.style.color = shinyColor;
});

notShinyButton.addEventListener("click", function contactClickhandler(el) {
    document.body.style.background = originalBgColor;
    document.body.style.color = originalColor;
    document.getElementById("contact a").style.background = "wheat";
});

collapseButton.addEventListener("click", function contactClickhandler(el) {
    var collapseBlock = document.getElementById("recipe")
    if (collapseBlock.style.display === "none") {
        collapseBlock.style.display = "block";
      } 
      else {
        collapseBlock.style.display = "none";
      }
})
