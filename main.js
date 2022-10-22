//get elements
const form = document.querySelector("#form");
const input = document.querySelector("#url");
const submit = document.querySelector("#submit-btn");
const wrapper = document.querySelector("section.wrapper");
const image = document.querySelector("#qr-img");

//empty input on relaod
input.value = "";

form.addEventListener("submit", generateQR);

function generateQR(e) {
  e.preventDefault();
  let value = input.value;
  //check if the value of the input is empty
  if (!value) return;
  //change button inner text
  submit.value = "generating QR code....";
  //assign new value to the image form the qr api
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${value}`;
  //add class show after loading the image
  image.addEventListener("load", () => {
    wrapper.classList.add("show");
    submit.value = "Generate QR Code";
  });
}

input.addEventListener("keyup", collapseArea);
function collapseArea() {
  if (!input.value) {
    wrapper.classList.remove("show");
  }
}
