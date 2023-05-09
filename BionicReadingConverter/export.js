function showbutton() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "";
}

/*start download img function*/

function downloadImage() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
  content = document.getElementById("outputDiv");
  content.style.background = "white";
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}
/*end download img function*/

/*start copy img function*/
function copyText() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
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
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
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

/*start epub function*/
function generateEpub() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
  const element = document.getElementById("outputDiv");
  document.getElementById("outputDiv").style.display = "block";
  document.getElementById("outputDiv").style.marginTop = "0px";
  document.getElementById("outputDiv").style.border = "1px solid black";
  html2pdf().from(element).save("download.Epug");
}

function downloadCode() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
  var x = document.getElementById("outputDiv");
  generateEpug();
  setTimeout(function () {
    window.location = window.location;
  }, 3000);
}

/*start Epub function*/

/*start copy html function*/
function copyHtml() {
  const buttonDiv = document.getElementById("showbutton");
  buttonDiv.style.display = "none";
  const copyHtml = document.getElementById("outputDiv");

  navigator.clipboard.writeText(copyHtml.outerHTML);
  //alert("Copied the text: " + copyHtml.outerHTML);
}

/*end copy html function*/

/*start markdown function*/
function markdown() {
  const inputData = document.getElementById("inputDiv"),
    outputData = document.getElementById("outputDiv");
  //alert(inputData.value);
  outputData.innerHTML = inputData.value
    //navigator.clipboard.writeText(inputData.value);
    .split(" ")
    .map(
      (w) =>
        `**<b>${w
          .split("")
          .slice(0, Math.ceil(w.length / 2))
          .join("")}</b>**${w
          .split("")
          .slice(Math.ceil(w.length / 2), w.length)
          .join("")} `
    )
    .join(" ");
  navigator.clipboard.writeText(outputData.innerHTML);
  // navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + outputData.innerHTML);
}
/*end markdown function*/
