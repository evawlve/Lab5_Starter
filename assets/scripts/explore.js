// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('img'); // Assuming the face image is the only img element
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = ''; 
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
    console.log('Voices loaded:', voices); 
  }

  // Ensure voices are loaded 
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  } else {
    populateVoiceList(); 
  }

  talkButton.addEventListener('click', function() {
    let selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    speak(textArea.value, selectedVoiceName);
  });

  function speak(text, voiceName) {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (text !== '') {
      let utterance = new SpeechSynthesisUtterance(text);
      let selectedVoice = voices.find(v => v.name === voiceName);
      utterance.voice = selectedVoice;
      
      console.log('Using voice:', selectedVoice); // Log the  voice

      utterance.onend = function(event) {
        console.log('SpeechSynthesisUtterance.onend');
        faceImage.src = 'assets/images/smiling.png'; // Reset to smiling face
      }
      utterance.onerror = function(event) {
        console.error('SpeechSynthesisUtterance.onerror');
        faceImage.src = 'assets/images/smiling.png'; // Reset to smiling face
      }

      faceImage.src = 'assets/images/smiling-open.png'; // Open mouthed image
      synth.speak(utterance);
    }
  }
}
