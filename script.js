document.querySelector('.fullscreen').addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };
  });

  const inputs = document.querySelectorAll('.filters input');

  function toUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', toUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', toUpdate));




