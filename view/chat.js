const input = document.getElementById('input');
const header = document.getElementById('chat-header');

function send(text){

}

header.onclick = ()=>{
    document.getElementById("chat").classList.toggle("chat--active");
}
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        send(input.value);
    }
};

//SPEECH RECOGNITION
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new window.SpeechRecognition();

recognition.continuous = true;
recognition.lang = "cs-CZ";
recognition.interimResults = true;
recognition.maxAlternatives = 1;

var finalTranscripts = '';

recognition.onresult = function (event) {
    var interimTranscripts = '';
    for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        
        if (event.results[i].isFinal) {
            finalTranscripts += transcript;
        } else {
            interimTranscripts += transcript;
        }
    }
    if (finalTranscripts.includes('Hej Ester')) {
        console.log("Keyword");
    }
};

recognition.onerror = function (event) {
    console.warn(event);
};

recognition.start();

//SPEECH SYNTCH DONE USING RESPONSIVE VOICE
//SPEECH SYNTH
// var synth = window.speechSynthesis;

// voices = synth.getVoices();

// console.log(voices);
// function speek(text){
//     var utterThis = new SpeechSynthesisUtterance(text);
//     utterThis.voice = voices[0];
//     utterThis.pitch = pitch.value;
//     utterThis.rate = rate.value;
//     synth.speak(utterThis);
// }