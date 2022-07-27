//zoom 
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.childNodes[1].childNodes[1].src; 
  expandImg.parentElement.style.display = "block";
}