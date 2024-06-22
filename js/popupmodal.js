// I made this okay?

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function clickedImage (id) {
    var img = document.getElementById(id);
    modal.style.display = "block";
    // console.log(img.style.backgroundImage);
    var urlString = img.style.backgroundImage;
    var removeUrl1 = urlString.replace("url(", "");
    var removeUrl2 = removeUrl1.replace(")", "");
    var removeUrldone = removeUrl2.replaceAll("\"", "");
    // console.log(removeUrldone);
    modalImg.src = String(removeUrldone);
  } 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}