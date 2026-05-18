const qrDiv = document.getElementById("qrcode");
let qr;

function generateQR() {
  const text = document.getElementById("text").value.trim() || " ";
  const size = parseInt(document.getElementById("size").value);
  const fg = document.getElementById("fgColor").value;
  const bg = document.getElementById("bgColor").value;

  qrDiv.innerHTML = "";
  qr = new QRCode(qrDiv, {
    text: text,
    width: size,
    height: size,
    colorDark: fg,
    colorLight: bg,
    correctLevel: QRCode.CorrectLevel.H
  });
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", generateQR);
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const img = qrDiv.querySelector("img") || qrDiv.querySelector("canvas");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
  }
});

generateQR(); // initial empty QR
