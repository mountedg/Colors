document.getElementById('white').addEventListener('click', function() {
    changeColor('white');
  });
  
  document.getElementById('warm').addEventListener('click', function() {
    changeColor('rgb(255, 165, 0)'); // Warm color (orange)
  });
  
  document.getElementById('teal').addEventListener('click', function() {
    changeColor('teal');
  });
  
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  const fs = document.getElementById('fs'); // Corrected to fs
  
  fs.addEventListener('click', () => { // Corrected to fs
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });
  
  function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }
  
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  