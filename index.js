const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

const containers = document.querySelectorAll(".containers");

containers.forEach((container) => {
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const step = (x - startX) * 0.6;
    container.scrollLeft = scrollLeft - step;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const rotatingImage = document.getElementById("rotatingImage");
const songName = document.querySelector(".music-player h2");
const artistName = document.querySelector(".music-player p");

let rotating = false;
let currentRotation = 0;
let rotationInterval;

const songs = [
  {
    title: "Krishna ki Chetavani",
    name: "Agam Aggrwal",
    source:
      "kkc.mp3",
    cover:
      "kr.jpg",
  },
  {
    title: "Jaako Raakhe Saiyaan",
    name: "Vikram M",
    source:
      "jago.mp3",
    cover:
      "kill.jpg",
  },
  {
    title: "Ae Dil Zara",
    name: "Manoj M",
    source:
      "Ae.mp3",
    cover:
      "aed.jpg",
  },
  {
    title: "Na Door Hai Na Pass Hai",
    name: "Darshan Raval",
    source:
      "nad.mp3",
    cover:
      "na.jpg",
  },
  {
    title: "Teri Galliyan",
    name: "Ankit Tiwari",
    source:
      "terigalliyan.mp3",
    cover:
      "ekv.jpg",
  },
  {
    title: "Satrangaa",
    name: "Arijit singh",
    source:
      "satr.mp3",
    cover:
      "sat.jpg",
  },
  {
    title: "Raghunanadan",
    name: "Saicharan Bhaskaruri",
    source:
      "Raghunandan.mp3",
    cover:
      "rag.jpg",
  },
  {
    title: "Tere Hawale",
    name: "Arijit singh",
    source:
      "th.mp3",
    cover:
      "tha.jpg",
  },
  {
    title: "Bairiya",
    name: "Arijit singh",
    source:
      "bariya.mp3",
    cover:
      "bariy.jpg",
  },
  {
    title: "Lo Maan Liiya",
    name: "Arijit singh",
    source:
      "loman.mp3",
    cover:
      "loma.jpg",
  },
  {
    title: "Lo Aayi Barsaat",
    name: "Darshan Raval",
    source:
      "loaaye.mp3",
    cover:
      "loaaye.jpg",
  },
  {
    title: "Piya Re",
    name: "Darshan Raval",
    source:
      "piyare.mp3",
    cover:
      "piyare.jpg",
  },
  {
    title: "Fakira",
    name: "Sanam Puri",
    source:
      "faki.mp3",
    cover:
      "faki.jpg",
  },
  {
    title: "Hawa Banke",
    name: "Darshan Raval",
    source:
      "hawaban.mp3",
    cover:
      "hawab.jpg",
  },
  {
    title: "Raat Ke Khayal",
    name: "Zen Rival",
    source:
      "raat.mp3",
    cover:
      "raat.jpg",
  },
  {
    title: "Bulleya",
    name: "Arijit singh",
    source:
      "bulley.mp3",
    cover:
      "bule.jpg",
  },
  {
    title: "Ae Dil Hai Muskil",
    name: "Arijit singh",
    source:
      "aedi.mp3",
    cover:
      "aedi.jpg",
  },
  {
    title: "Aasan Nahi Yahan",
    name: "Arijit singh",
    source:
      "asannahi.mp3",
    cover:
      "asannhi.jpg",
  },
  {
    title: "Baarishon Mein",
    name: "Darshan Raval",
    source:
      "barishonme.mp3",
    cover:
      "barison.jpg",
  },
  {
    title: "Bhool Jaa",
    name: "Arijit singh",
    source:
      "bhoolja.mp3",
    cover:
      "bhool.jpg",
  },
  {
    title: "Bhula Diya",
    name: "Darshan Raval",
    source:
      "bhuladi.mp3",
    cover:
      "bhula.jpg",
  },
  {
    title: "Aur Iss Dil Mein",
    name: "Sanam Puri",
    source:
      "auriss.mp3",
    cover:
      "auriss.jpg",
  },
  {
    title: "Kya Hua Tera Wada",
    name: "Sanam Puri",
    source:
      "kyahua.mp3",
    cover:
      "kyahua.jpg",
  },
  {
    title: "Kya Hua Tera Wada",
    name: "Sanam Puri",
    source:
      "Satranga x channa meerey.mp3",
    cover:
      "kyahua.jpg",
  },
];

let currentSongIndex = 0;

function startRotation() {
  if (!rotating) {
    rotating = true;
    rotationInterval = setInterval(rotateImage, 50);
  }
}

function pauseRotation() {
  clearInterval(rotationInterval);
  rotating = false;
}

function rotateImage() {
  currentRotation += 1;
  rotatingImage.style.transform = 'rotate(${currentRotation}deg)';
}

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  rotatingImage.src = songs[currentSongIndex].cover;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

function playPause() {
  if (song.paused) {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
    startRotation();
  } else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
    pauseRotation();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
  startRotation();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 120,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
   on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
