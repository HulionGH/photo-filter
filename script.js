/*-- FULSCREEN FUNCTION --*/
document.querySelector('.fullscreen').addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };
  });

 /*-- UPDATE INPUTS FUNCTION --*/
  const inputs = document.querySelectorAll('.filters input');
  const outputs = document.querySelectorAll('.filters output');

  function toUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    let updatedName = this.name + '-result';
    document.getElementsByName(`${updatedName}`)[0].innerText = `${this.value}`;
  }

  inputs.forEach(input => input.addEventListener('change', toUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', toUpdate));

  /*-- Buttons --*/
  const buttons = document.querySelectorAll('.btn');
  const resetBtn = document.querySelector('.btn-reset');
  const saveBtn = document.querySelector('.btn-save');
  
  document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', (element) => {
    let pressedBtn = element.target;
    pressedBtn.classList.add('btn-active');
    }));


  /*-- RESET FUNCTION --*/
  function resetValues () {
    inputs.forEach(input => {
      const value = input.name == 'saturate' ? 100 : 0;
      const suffix = input.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${input.name}`, value + suffix);
      input.value = value;
      let updatedName = input.name + '-result';
      document.getElementsByName(`${updatedName}`)[0].innerText = `${value}`;
    });
  }
  resetBtn.addEventListener('click', resetValues);
  
  /*-- SAVE IMAGE FUNCTION --*/

  let mirror = document.getElementById('mirror');

  function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

saveBtn.addEventListener('click', function (e) {
  forceDownload(mirror.src, 'fdf.png')
});
  
  






