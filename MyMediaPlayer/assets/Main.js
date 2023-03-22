
const body = document.querySelector('body');
const logoDiv = document.createElement('div');
const logoImg = document.createElement('img');
const containerDiv = document.createElement('div');
const allVidDiv = document.createElement('div');
const videoEl = document.createElement('video');
const controlsDiv = document.createElement('div');
const orangeBarDiv = document.createElement('div');
const orangeJuiceDiv = document.createElement('div');
const buttonsDiv = document.createElement('div');
const playPauseBtn = document.createElement('button');
const stopBtn = document.createElement('button');
const fwdBtn = document.createElement('button');
const muteBtn = document.createElement('button');
const volumeSliderInput = document.createElement('input');

logoDiv.classList.add('logo');
logoImg.width = 200;
logoImg.src = '/img/star-wars-logo.png';
logoImg.alt = 'Star-Wars';
logoDiv.appendChild(logoImg);

containerDiv.classList.add('container');

allVidDiv.classList.add('allVid');

videoEl.src = '/video/anakin.mp4';
videoEl.classList.add('video');
allVidDiv.appendChild(videoEl);

controlsDiv.classList.add('controls');

orangeBarDiv.classList.add('orange-bar');
orangeJuiceDiv.classList.add('orange-juice');
orangeBarDiv.appendChild(orangeJuiceDiv);
controlsDiv.appendChild(orangeBarDiv);

buttonsDiv.classList.add('buttons');

playPauseBtn.id = 'play-pause';
buttonsDiv.appendChild(playPauseBtn);

stopBtn.id = 'stop';
stopBtn.textContent = '';
buttonsDiv.appendChild(stopBtn);

fwdBtn.classList.add('fwd');
fwdBtn.textContent = '>>';
buttonsDiv.appendChild(fwdBtn);

muteBtn.id = 'mute';
muteBtn.textContent = 'Mute';
buttonsDiv.appendChild(muteBtn);

volumeSliderInput.type = 'range';
volumeSliderInput.id = 'volumeSlider';
volumeSliderInput.min = 0;
volumeSliderInput.max = 100;
volumeSliderInput.value = 50;
volumeSliderInput.step = 1;
buttonsDiv.appendChild(volumeSliderInput);

controlsDiv.appendChild(buttonsDiv);
allVidDiv.appendChild(controlsDiv);
containerDiv.appendChild(allVidDiv);

body.appendChild(logoDiv);
body.appendChild(containerDiv);

const scriptEl = document.createElement('script');
scriptEl.src = '/assets/Main.js';
body.appendChild(scriptEl);

function togglePlayPause() {
  if (videoEl.paused) {
    playPauseBtn.className = "pause";
    videoEl.play();
  } else {
    playPauseBtn.className = "play";
    videoEl.pause();
  }
}

playPauseBtn.onclick = function() {
  togglePlayPause();
};

videoEl.addEventListener('timeupdate', function() {
  let juicePos = videoEl.currentTime / videoEl.duration;
  orangeJuiceDiv.style.width = juicePos * 100 + '%';
  if (videoEl.ended) {
    playPauseBtn.className = "play";
  }
});

muteBtn.addEventListener('click', function() {
  if (videoEl.muted) {
    videoEl.muted = false;
    muteBtn.innerHTML = "Mute";
  } else {
    videoEl.muted = true;
    muteBtn.innerHTML = "Unmute";
  }
});

volumeSliderInput.addEventListener('change', function() {
  videoEl.volume = volumeSliderInput.value / 100;
});

orangeBarDiv.addEventListener('click', function(e) {
  let rect = orangeBarDiv.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let widthPercent = (x / rect.width) * 100;
  let currentTimeTrue = (widthPercent * videoEl.duration) / 100;
    
  // position en secondes
  videoEl.currentTime = currentTimeTrue;
});

stopBtn.onclick = function() {
  videoEl.pause();
  videoEl.currentTime = 0;
  playPauseBtn.className = "play";
};

fwdBtn.onclick = function() {
  videoEl.currentTime += 3;
};

videoEl.addEventListener('timeupdate', function() {
  let juicePos = videoEl.currentTime / videoEl.duration;
  orangeJuiceDiv.style.width = juicePos * 100 + '%';
  if (videoEl.ended) {
    playPauseBtn.className = "play";
  }
});

volumeSliderInput.addEventListener('input', function() {
  videoEl.volume = volumeSliderInput.value / 100;
  if (videoEl.volume == 0) {
    muteBtn.innerHTML = "Unmute";
  } else {
    muteBtn.innerHTML = "Mute";
  }
});

// Code slider video test

////const videoSources = [
  //  //'/video/anakin.mp4',
  //  '/video/batman.mp4',
  //];
  
  //const sliderDiv = document.createElement('div');
  //const sliderInput = document.createElement('input');
  //const sliderLabel = document.createElement('label');
  
  //sliderDiv.classList.add('slider');
  //sliderInput.type = 'range';
  //sliderInput.min = 0;
  //sliderInput.max = videoSources.length - 1;
  //sliderInput.value = 0;
  //sliderInput.step = 1;
  
  
  //sliderInput.addEventListener('input', function() {
    //const selectedVideoIndex = parseInt(sliderInput.value, 10);
    //videoEl.src = videoSources[selectedVideoIndex];
    //videoEl.currentTime = 0;
    //videoEl.play();
  //});
  
  //sliderDiv.appendChild(sliderLabel);
  //sliderDiv.appendChild(sliderInput);
  //containerDiv.appendChild(sliderDiv);