const fileInput = document.querySelector("input");
const downloadBtn = document.getElementById("btn");

downloadBtn.addEventListener("click", e => {
  e.preventDefault();
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file);
    let aTag = document.createElement("a");
    aTag.href = tempUrl;
    aTag.download = url.replace(/.*[\\\//]/, '');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    URL.revokeObjectURL(aTag);
    downloadBtn.innerText = "Downloading File";
  }).catch(() => {
    downloadBtn.innerText = "Download File";
    alert("file unable to download");
  });
}