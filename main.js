let message =
  "Write something in the text field and click on Generate QR Code button.";
const QRCodeImage = document.querySelector(".qrcode");
const QRCodeMessage = document.querySelector(".qrcode-message");
const generateBtn = document.querySelector(".generate-btn");

let qrcode = new QRCode(QRCodeImage, {
  text: message,
  width: 300,
  height: 300,
  colorDark: "#001219",
  colorLight: "#ffffff",
});

const generateQRCode = (message) => {
  qrcode.clear();
  qrcode.makeCode(message);
};

generateBtn.addEventListener("click", () => {
  message = QRCodeMessage.value;
  generateQRCode(message);
});
