function showbutton() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "";
}

/*start download img function*/

function downloadImage() {
  content = document.getElementById("outputDiv");
  content.style.background = "white";
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}
/*end download img function*/

/*start copy img function*/
function copyText() {
  var copyText = document.getElementById("outputDiv");
  copyText.style.background = "#08BDBA";
  copyText.style.color = "white";

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
/*end copy img function*/
