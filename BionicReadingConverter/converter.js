// This is **horrible code**. If anyone is good with maths please see
// https://github.com/TayIorRobinson/bionicreading/issues/1
function showtext() {
  const inputData = document.getElementById("inputDiv"),
    outputData = document.getElementById("outputDiv");
  alert(inputData.value);
  outputData.innerHTML = inputData.value
    .split(" ")
    .map(
      (w) =>
        `<b>${w
          .split("")
          .slice(0, Math.ceil(w.length / 2))
          .join("")}</b>${w
          .split("")
          .slice(Math.ceil(w.length / 2), w.length)
          .join("")} `
    )
    .join(" ");
}

/*const e = document.getElementById("inputDiv"),
  showarea = document.getElementById("outputDiv");
const u = () =>
  (showarea.innerHTML = text.innerHTML
    .split(" ")
    .map(
      (w) =>
        `<b>${w
          .split("")
          .slice(0, Math.ceil(w.length / 2))
          .join("")}</b>${w
          .split("")
          .slice(Math.ceil(w.length / 2), w.length)
          .join("")} `
    )
    .join(" "));
showtext();
text.addEventListener("input", showtext);

/* kodun orjinal halini de bırakayım da belki birinin işine yarar
const editor = document.getElementById("edit");
const reader = document.getElementById("read");

const updateContent = (e) => {
  const words = editor.innerHTML.split(" ");
  const edited = [];
  words.forEach((word, index) => {
    const wordSplit = word.split("");
    const boldTo = Math.ceil(word.length / 2);
    const editedWord = `<b>${wordSplit.slice(0,boldTo).join("")}</b>${wordSplit.slice(boldTo,word.length).join("")} `;
    edited.push(editedWord);
  });
  reader.innerHTML = edited.join("");
}

(() => {
  updateContent(); // init
  editor.addEventListener("input", updateContent);
})()
*/
/*function getBoldLength(l) {
  if (l < 5) return 1;
  else if (l < 13) return 2;
  else if (l < 18) return 3;
  else if (l < 24) return 4;
  else if (l < 30) return 5;
  else return Math.ceil(l / 6); // best i could manage.
}

function bionicReader(text, formatter) {
  formatter = formatter || module.exports.html;
  return text.replace(/[A-Za-z']+/g, (word) => {
    var boldChars = word.length - (word.length > 4 ? 2 : 1);
    return text.replace(/[A-Za-z0-9']+/g, (word) => {
      var boldChars = isNaN(Number(word))
        ? word.length - getBoldLength(word.length)
        : 0;
      return formatter(word.substr(0, boldChars), word.substr(boldChars));
    });
  });
}*/

/*function addBionicReadingToPage() {
  const paragraphs = document.querySelectorAll("textarea, li");

  for (let i = 0; i < paragraphs.length; i++) {
    const words = paragraphs[i].innerHTML.split(" ");
    let formattedText = "";

    for (let j = 0; j < words.length; j++) {
      const halfLength = Math.ceil(words[j].length / 2);
      const aTag = paragraphs[i].querySelector(":root > textarea > a");

      // Check if the current word is inside a <button> tag
      const isInsideButton =
        paragraphs[i].querySelectorAll("button").length > 0 &&
        paragraphs[i]
          .querySelectorAll("button")
          .some((button) =>
            button.contains(paragraphs[i].querySelectorAll("b")[j])
          );

      // Check if the current word is inside an <li> tag inside an element with the "navbar" class
      const isInsideNavbar =
        paragraphs[i].querySelectorAll(".nav-item a").length > 0 &&
        paragraphs[i]
          .querySelectorAll(".nav-item a")[0]
          .contains(paragraphs[i].querySelectorAll("b")[j]);

      // Check if the current word is inside an <a> tag inside a <p> tag
      const formattedWord =
        aTag &&
        aTag.contains(
          document.querySelector(":root > textarea > a > " + words[j])
        )
          ? words[j]
          : words[j].replace(/<\/?[^>]+(>|$)/g, "")
          ? "<span>" +
            "<b class='font-weight-bold'>" +
            words[j].substring(0, halfLength) +
            "</b>" +
            words[j].substring(halfLength) +
            "</span>"
          : words[j];

      formattedText += formattedWord + " ";
    }

    paragraphs[i].innerHTML = formattedText;
  }
}*/
