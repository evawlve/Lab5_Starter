// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const hornImage = document.querySelector('img'); // Assuming it's the only image element in the section
  const volumeIcon = document.querySelector('#volume-controls img');
  const audioPlayer = document.querySelector('audio');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    updateHorn(hornSelect.value, hornImage, audioPlayer);
  });

  volumeSlider.addEventListener('input', function() {
    updateVolume(volumeSlider.value, volumeIcon, audioPlayer);
  });

  playButton.addEventListener('click', function() {
    playSound(audioPlayer);
  });
}

document.addEventListener('DOMContentLoaded', init);

function updateHorn(selectedHorn, hornImage, audioPlayer) {
  const hornMap = {
    'air-horn': {
      img: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      img: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      img: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3'
    }
  };
  
  if (hornMap[selectedHorn]) {
    hornImage.src = hornMap[selectedHorn].img;
    audioPlayer.src = hornMap[selectedHorn].sound;
  }
}

function updateVolume(volume, volumeIcon, audioPlayer) {
  let volumeLevel;
  if (volume == 0) {
    volumeLevel = 'volume-level-0';
  } else if (volume < 33) {
    volumeLevel = 'volume-level-1';
  } else if (volume < 67) {
    volumeLevel = 'volume-level-2';
  } else {
    volumeLevel = 'volume-level-3';
  }
  volumeIcon.src = `assets/icons/${volumeLevel}.svg`;
  audioPlayer.volume = volume / 100;
}

function playSound(audioPlayer) {
  if (audioPlayer.src.includes('party-horn') && audioPlayer.volume > 0) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  audioPlayer.play();
}