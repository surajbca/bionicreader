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

  /* copyText.select();
  copyText.setSelectionRange(0, 99999);*/ // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
/*end copy img function*/

/*start pdf function*/
function generatePDF() {
  const element = document.getElementById("outputDiv");
  document.getElementById("outputDiv").style.display = "block";
  document.getElementById("outputDiv").style.marginTop = "0px";
  document.getElementById("outputDiv").style.border = "1px solid black";
  html2pdf().from(element).save("download.pdf");
}

function downloadCode() {
  var x = document.getElementById("outputDiv");
  generatePDF();
  setTimeout(function () {
    window.location = window.location;
  }, 3000);
}
/* end pdf function*/
function generateEpug() {
  const element = document.getElementById("outputDiv");
  document.getElementById("outputDiv").style.display = "block";
  document.getElementById("outputDiv").style.marginTop = "0px";
  document.getElementById("outputDiv").style.border = "1px solid black";
  html2pdf().from(element).save("download.Epug");
}

function downloadCode() {
  var x = document.getElementById("outputDiv");
  generateEpug();
  setTimeout(function () {
    window.location = window.location;
  }, 3000);
}

/*start Epub function*/

/*start copy html function*/
function CopyToClipboard() {
  var copyinput = document.createElement("div");
  copyinput.value = document.getElementById("outputDiv").outerHTML;
  copyinput.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyinput.value);
}
/*end copy html function*/
