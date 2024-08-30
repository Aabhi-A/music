console.log("welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Aa.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar =  document.getElementById('myprogressbar');

let songs = [
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
    {songName: "Satrangaa", filePath: "song/Aa.mp3", coverPath: "cover/Arij.jpg"},
]

//audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused  ||  audioElement.currentTime<=0){
        audioElement.play
    }
})
// Listen to events
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // Update  Seekbar
})
