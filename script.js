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
    console.log(updatedName);
    document.getElementsByName(`${updatedName}`)[0].innerText = `${this.value}`;
  }

  inputs.forEach(input => input.addEventListener('change', toUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', toUpdate));

 
 






