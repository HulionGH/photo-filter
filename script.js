/*-- FULSCREEN FUNCTION --*/
document.querySelector(".fullscreen").addEventListener("click", (event) => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

/*-- UPDATE INPUTS FUNCTION --*/
const inputs = document.querySelectorAll(".filters input");
const outputs = document.querySelectorAll(".filters output");

function toUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  let updatedName = this.name + "-result";
  document.getElementsByName(`${updatedName}`)[0].innerText = `${this.value}`;
}

inputs.forEach((input) => input.addEventListener("change", toUpdate));

/*-- Buttons --*/
const buttons = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".btn-reset");
const saveBtn = document.querySelector(".btn-save");
const uploadBtn = document.getElementById('btnInput');
const nextPicBtn = document.querySelector(".btn-next");

/*--document.querySelectorAll(".btn").forEach((btn) =>
  btn.addEventListener("click", (element) => {
    let pressedBtn = element.target;
    pressedBtn.classList.add("btn-active");
  })
);--*/

/*-- RESET FUNCTION --*/
function resetValues() {
  inputs.forEach((input) => {
    const value = input.name == "saturate" ? 100 : 0;
    const suffix = input.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${input.name}`,
      value + suffix
    );
    input.value = value;
    let updatedName = input.name + "-result";
    document.getElementsByName(`${updatedName}`)[0].innerText = `${value}`;
  });
}
resetBtn.addEventListener("click", resetValues);

/*-- SAVE IMAGE FUNCTION  --*/
saveBtn.addEventListener("click", function (e) {
  let img = document.getElementById("mirror");
  const canvas = document.getElementById("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const context = canvas.getContext("2d");
  let blurVal = document.querySelector("[name=blur]").value;
  let invertVal = document.querySelector("[name=invert]").value;
  let sepiaVal = document.querySelector("[name=sepia]").value;
  let saturateVal = document.querySelector("[name=saturate]").value;
  let hueVal = document.querySelector("[name=hue]").value;

  context.filter = `blur(${blurVal}px) invert(${invertVal}%) sepia(${sepiaVal}%) saturate(${saturateVal}%) hue-rotate(${hueVal}deg)`;
  context.drawImage(img, 0, 0, img.width, img.height);

  var link = document.createElement("a");
  link.download = img.src;
  link.href = document.getElementById("canvas").toDataURL("image/jpeg");
  link.click();
});

/*-- UPLOAD IMG FUNCTION --*/
uploadBtn.addEventListener('change', function () {
  let img = document.getElementById("mirror");
  const reader = new FileReader();
  reader.onload = (e) => {
    img.src = e.target.result;
  }
  reader.readAsDataURL(this.files[0]);
});

/*-- LOAD TIME PIC FUNCTION --*/
let today = new Date();
let currentHour = today.getHours();

nextPicBtn.addEventListener('click', function () {
  let img = document.getElementById("mirror");
  if (currentHour >= 0 && currentHour < 6) {
    console.log(img.src);
    img.src = "assets/img/night/01.jpg";
  } else if (currentHour >= 6 && currentHour < 12) {
    console.log(img.src);
    img.src = "assets/img/morning/01.jpg";
  } else if (currentHour >= 12 && currentHour < 18) {
    console.log(img.src);
    img.src = "assets/img/day/01.jpg";
  } else if (currentHour >= 18 && currentHour < 24) {
    console.log(img.src);
    img.src = "assets/img/evening/01.jpg";
  }

});



