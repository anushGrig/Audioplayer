let audio = document.querySelector('#audio');
let songTime = document.querySelector('.song-time');
let songRange = document.querySelector('.song-range');
let songDuration = document.querySelector('.song-duration');
let namePerson = document.querySelector('.namePerson');
let nameSong = document.querySelector('.nameSong');
let nameCategory = document.querySelector('.nameCategory');
let forImg = document.querySelector('.for-img img');
let undoSecond = document.querySelector('.undoSecond');
let undoFirst = document.querySelector('.undoFirst');
let playPause = document.querySelectorAll('.play-pause');
let prev = document.querySelectorAll('.prev');
let next = document.querySelectorAll('.next');
let startRepeat = document.querySelector('.startRepeat');
let endRepeat = document.querySelector('.endRepeat');
let offRepeat = document.querySelector('.offRepeat');
let speeds = document.querySelectorAll('.speeds button');
let audioVolume = document.querySelector('.audio-volume');
let audioPlayer = document.querySelector('.audioPlayer');
let songPlaying = false;
let volumeUp = document.querySelector('.volumeUp');

// list song

let songList = [
    {
        songImg: 'img/miyagi1.jpg',
        songPerson: 'Miyagi',
        songName: 'Hajime',
        category: 'Rap',
        song: 'audio/miagi hajime.mp3',
    },
    {
        songImg: 'img/miyagi2.jpg',
        songPerson: 'Miyagi',
        songName: 'Captain',
        category: 'Rap',
        song: 'audio/miagi captain.mp3',
    },
    {
        songImg: 'img/miyagi3.jpg',
        songPerson: 'Miyagi',
        songName: 'Kolibri',
        category: 'Rap',
        song: 'audio/miagi kolibri.mp3',
    },
    {
        songImg: 'img/miyagi4.jpg',
        songPerson: 'Miyagi',
        songName: 'Rapapam',
        category: 'Rap',
        song: 'audio/miagi rapapam.mp3',
    },
    {
        songImg: 'img/the weeknd.jpeg',
        songPerson: 'The Weeknd',
        songName: 'Weeknd Music 1',
        category: 'Pop',
        song: 'audio/weeknd1.mp3',
    },
    {
        songImg: 'img/the weeknd.jpeg',
        songPerson: 'The Weeknd',
        songName: 'Weeknd Music 2',
        category: 'Pop',
        song: 'audio/weeknd2.mp3',
    },
    {
        songImg: 'img/the weeknd.jpeg',
        songPerson: 'The Weeknd',
        songName: 'Weeknd Music 3',
        category: 'Pop',
        song: 'audio/weeknd3.mp3',
    },
    {
        songImg: 'img/xcho.png',
        songPerson: 'Xcho',
        songName: 'Memories',
        category: 'Rap',
        song: 'audio/xcho memories.mp3',
    },
    {
        songImg: 'img/xcho.png',
        songPerson: 'Xcho',
        songName: 'Ti i Ya',
        category: 'Rap',
        song: 'audio/xcho ti i ya.mp3',
    },
    {
        songImg: 'img/xcho.png',
        songPerson: 'Xcho',
        songName: 'Yanvar',
        category: 'Rap',
        song: 'audio/xcho yanvar.mp3',
    },
    {
        songImg: 'img/Am.jpg',
        songPerson: 'Artic Monkeys',
        songName: '505',
        category: 'Rock',
        song: 'audio/artic1.mp3',
    },
    {
        songImg: 'img/Am.jpg',
        songPerson: 'Artic Monkeys',
        songName: '505',
        category: 'Rock',
        song: 'audio/artic2.mp3',
    },
    {
        songImg: 'img/Am.jpg',
        songPerson: 'Artic Monkeys',
        songName: '505',
        category: 'Rock',
        song: 'audio/artic3.mp3',
    },
    {
        songImg: 'img/indila.jpg',
        songPerson: 'Indila',
        songName: 'Tourner Dans Le Vide',
        category: 'France',
        song: 'audio/indila.mp3',
    }
]

// audioplayer 

function audioPlay() {
    songPlaying = true;
    audio.play();
}

function audioPause() {
    songPlaying = false;
    audio.pause();
}


songRange.addEventListener('input', function () {
    audio.currentTime = audio.duration * this.value / 100;
})

audioVolume.addEventListener('input', function () {
    audio.volume = this.value / 100;
})

undoFirst.onclick = () => {
    audio.currentTime = audio.currentTime + 10;
}

undoSecond.onclick = () => {
    audio.currentTime = audio.currentTime - 10;
}

audio.addEventListener('timeupdate', () => {
    songRange.value = audio.currentTime * 100 / audio.duration;
    let curmins = Math.floor(audio.currentTime / 60);
    let cursec = Math.floor(audio.currentTime - curmins * 60);
    let durmins = Math.floor(audio.duration / 60);
    let dursec = Math.floor(audio.duration - durmins * 60);
    if (curmins < 10) {
        curmins = '0' + curmins
    }
    if (cursec < 10) {
        cursec = '0' + cursec
    }
    if (durmins < 10) {
        durmins = '0' + durmins
    }
    if (dursec < 10) {
        dursec = '0' + dursec
    }
    if (audio.currentTime > 0.001) {
        songTime.innerHTML = curmins + ':' + cursec;
        songDuration.innerHTML = durmins + ':' + dursec
    }
})

function loadSong(songList) {
    namePerson.textContent = songList.songPerson;
    nameCategory.textContent = songList.category;
    nameSong.textContent = songList.songName;
    audio.src = songList.song;
    forImg.src = songList.songImg;
    audioPlayer.setAttribute('style', `background: url(${songList.songImg}); background-size: cover; background-position: center;`);
}

let i = 0;
loadSong(songList[i]);

function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1
    }
    loadSong(songList[i]);
    audioPlay()
}

for (let p = 0; p < prev.length; p++) {
    prev[p].addEventListener('click', prevSong)
}

function nextSong() {
    i++;
    if (i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    audioPlay();
}

for (let n = 0; n < next.length; n++) {
    next[n].addEventListener('click', nextSong)
}

for (let i = 0; i < playPause.length; i++) {
    playPause[i].onclick = function () {
        if (songPlaying == false) {
            audioPlay();
            playPause[i].className = 'fa fa-pause'
        }
        else {
            audioPause();
            playPause[i].className = 'fa fa-play'
        }
    }
}

let volumeBool = false

volumeUp.onclick = () => {
    if (volumeBool == false) {
        audio.volume = 0;
        volumeUp.className = 'fa fa-volume-off';
        volumeBool = true
        audioVolume.value = 0
    }
    else {
        audio.volume = 1;
        volumeUp.className = 'fa fa-volume-up'
        volumeBool = false
        audioVolume.value = 50
    }
}

// start repeating


let arrTime = [];

startRepeat.onclick = function () {
    let a = audio.currentTime;
    arrTime.push(a);
}

endRepeat.onclick = function () {
    let b = audio.currentTime;
    arrTime.push(b);
    repeatAudio();
}

let setSong;

function repeatAudio() {
    setSong = setInterval(() => {
        if (audio.currentTime >= arrTime[1]) {
            audio.currentTime = arrTime[0]
        }
    }, 1000)
}

repeatAudio()

offRepeat.onclick = () => {
    clearInterval(setSong);
    arrTime = [];
}



// spped audio

speeds.forEach(speed => {
    speed.onclick = function () {
        audio.playbackRate = this.innerText
    }
})



// playList 


let itemCategory = document.querySelectorAll('.itemCategory');
let songsContainer = document.querySelector('.songsContainer');

let fil;
itemCategory.forEach(item => {
    item.onclick = () => {
        if (item.getAttribute('data') == 1) {
            songsContainer.innerHTML = '';
            fil = songList.filter(el => {
                return el.category == 'Rap'
            });
            fil.forEach(f => {
                songsContainer.innerHTML += `
                    <div class="songPlay">
                        <img src="${f.songImg}">
                        <h2>${f.songPerson}</h2>
                        <h3>${f.songName}</h3>
                    </div>
                `
            })
        }
        else if (item.getAttribute('data') == 2) {
            songsContainer.innerHTML = '';
            fil = songList.filter(el => {
                return el.category == 'France'
            });
            fil.forEach(f => {
                songsContainer.innerHTML += `
                    <div class="songPlay">
                        <img src="${f.songImg}">
                        <h2>${f.songPerson}</h2>
                        <h3>${f.songName}</h3>
                    </div>
                `
            })
        }

        else if (item.getAttribute('data') == 3) {
            songsContainer.innerHTML = '';
            fil = songList.filter(el => {
                return el.category == 'Pop'
            });
            fil.forEach(f => {
                songsContainer.innerHTML += `
                    <div class="songPlay">
                        <img src="${f.songImg}">
                        <h2>${f.songPerson}</h2>
                        <h3>${f.songName}</h3>
                    </div>
                `
            })
        }

        else if (item.getAttribute('data') == 4) {
            songsContainer.innerHTML = '';
            fil = songList.filter(el => {
                return el.category == 'Rock'
            });
            fil.forEach(f => {
                songsContainer.innerHTML += `
                    <div class="songPlay">
                        <img src="${f.songImg}">
                        <h2>${f.songPerson}</h2>
                        <h3>${f.songName}</h3>
                    </div>
                `
            })
        }
        let songPlay = document.querySelectorAll('.songPlay');
        songPlay.forEach(($, _) => {
            $.onclick = function () {
                if ($.children[2].innerHTML == fil[_].songName) {
                    loadSong(fil[_]);
                    audioPlay()
                }
                playPause.forEach(pl => {
                    pl.className = 'fa fa-pause'
                })
            }
        })
    }
})


