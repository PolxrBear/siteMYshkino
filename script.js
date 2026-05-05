// ========== ДАННЫЕ ==========
const teamData = {
    name: "МЫшкино",
    theme: "Кто мы такие, и причём тут матмех",
    members: [
        {
            id: "pavel",
            name: "Елисеев Павел",
            photoUrl: "avatarsSite/pavel.jpg",
            photoInitials: "ПЕ",
            contacts: "<img src='icons/telegram.jpg' style='width:16px;height:16px;vertical-align:middle;'> @polxrknight | 📱 +7 (922) 132-51-75 | 📧 eliseev.p25175@gmail.com",
            gallery: [
                "stories/pavel/random1.jpg",
                "stories/pavel/random2.jpg",
                "stories/pavel/random3.jpg",
                "stories/pavel/random4.jpg"
            ],
            categories: {
                general: {
                    title: "📖 О себе",
                    media: [
                        { type: "image", url: "stories/pavel/general1.jpg" },
                        { type: "image", url: "stories/pavel/general2.jpg" },
                        { type: "video", url: "stories/pavel/general1.mp4" }
                    ]
                },
                study: {
                    title: "📚 Учёба",
                    media: [
                        { type: "image", url: "stories/pavel/study1.jpg" },
                        { type: "video", url: "stories/pavel/study1.mp4" }
                    ]
                },
                sport: {
                    title: "⚽ Спорт",
                    media: [
                        { type: "image", url: "stories/pavel/sport1.jpg" },
                        { type: "image", url: "stories/pavel/sport2.jpg" }
                    ]
                },
                hobby: {
                    title: "🎨 Хобби",
                    media: [
                        { type: "image", url: "stories/pavel/hobby1.jpg" },
                        { type: "image", url: "stories/pavel/hobby2.jpg" },
                        { type: "video", url: "stories/pavel/hobby1.mp4" },
                        { type: "image", url: "stories/pavel/hobby3.jpg" },
                    ]
                },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "Joey Valence & Brae - HOOLIGANG", url: "music/pavel/HOOLIGANG.mp3", cover: "covers/pavel/HOOLIGANG.jpg" },
                        { name: "Scorpions - Rock You Like a Hurricane", url: "music/pavel/hurricane.mp3", cover: "covers/pavel/hurricane.jpg" },
                        { name: "Serge Devant, Hadley - Addicted", url: "music/pavel/Addicted.mp3", cover: "covers/pavel/Addicted.jpg" },
                        { name: "2hollis - two bad", url: "music/pavel/two_bad.mp3", cover: "covers/pavel/two_bad.jpg" },
                        { name: "Kendrick Lamar, LEFTY GUNPLAY - tv off", url: "music/pavel/tv_off.mp3", cover: "covers/pavel/tv_off.jpg" }
                    ]
                }
            }
        },
        {
            id: "kirill",
            name: "Комлев Кирилл",
            photoUrl: "avatarsSite/kirill.jpg",
            photoInitials: "КК",
            contacts: "",
            gallery: [
                "stories/kirill/random1.jpg",
                "stories/kirill/random2.jpg",
                "stories/kirill/random3.jpg"
            ],
            categories: {
                general: { title: "📖 О себе", media: [] },
                study: { title: "📚 Учёба", media: [] },
                sport: { title: "⚽ Спорт", media: [] },
                hobby: { title: "🎨 Хобби", media: [] },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "bleood - mikU", url: "music/kirill/miku.mp3", cover: "covers/kirill/miku.jpg" },
                        { name: "Yuke - Anxious", url: "music/kirill/anxious.mp3", cover: "covers/kirill/anxious.jpg" },
                        { name: "jaydes - poison", url: "music/kirill/poison.mp3", cover: "covers/kirill/poison.jpg" },
                        { name: "zatru - You", url: "music/kirill/you.mp3", cover: "covers/kirill/you.jpg" },
                        { name: "Nettspend - Funuhyuh", url: "music/kirill/funuhyuh.mp3", cover: "covers/kirill/funuhyuh.jpg" }
                    ]
                }
            }
        },
        {
            id: "ilya",
            name: "Байтуллин Илья",
            photoUrl: "avatarsSite/ilya.jpg",
            photoInitials: "ИБ",
            contacts: "",
            gallery: [
                "stories/ilya/random1.jpg",
                "stories/ilya/random2.jpg"
            ],
            categories: {
                general: { title: "📖 О себе", media: [] },
                study: { title: "📚 Учёба", media: [] },
                sport: { title: "⚽ Спорт", media: [] },
                hobby: { title: "🎨 Хобби", media: [] },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "FRENDLY THUG 52 NGG - 2 Goyard", url: "music/ilya/2_Goyard.mp3", cover: "covers/ilya/2_Goyard.jpg" },
                        { name: "BUSHIDO ZHO - Heaven", url: "music/ilya/Heaven.mp3", cover: "covers/ilya/Heaven.jpg" },
                        { name: "Big Baby Tape, Aarne - HOODAK MP3", url: "music/ilya/HOODAK.mp3", cover: "covers/ilya/HOODAK.jpg" },
                        { name: "ALBLAK 52 - On The Line", url: "music/ilya/On_The_Line.mp3", cover: "covers/ilya/On_The_Line.jpg" },
                        { name: "Полка - Знаю", url: "music/ilya/znayu.mp3", cover: "covers/ilya/znayu.jpg" }
                    ]
                }
            }
        },
        {
            id: "polina",
            name: "Ковкова Полина",
            photoUrl: "avatarsSite/polina.jpg",
            photoInitials: "ПК",
            contacts: "",
            gallery: [
                "stories/polina/random1.jpg",
                "stories/polina/random2.jpg",
                "stories/polina/random3.jpg"
            ],
            categories: {
                general: { title: "📖 О себе", media: [] },
                study: { title: "📚 Учёба", media: [] },
                sport: { title: "⚽ Спорт", media: [] },
                hobby: { title: "🎨 Хобби", media: [] },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "Cherish, Nephu - He Said, She Said", url: "music/polina/hsss.mp3", cover: "covers/polina/hsss.jpg" },
                        { name: "GBAN, MAYOT - Мегаполис", url: "music/polina/megapolis.mp3", cover: "covers/polina/megapolis.jpg" },
                        { name: "Eminem - Castle", url: "music/polina/castle.mp3", cover: "covers/polina/castle.jpg" },
                        { name: "GUF - Было давно", url: "music/polina/bylo_davno.mp3", cover: "covers/polina/bylo_davno.jpg" },
                        { name: "M'Dee - нужна", url: "music/polina/nuzhna.mp3", cover: "covers/polina/nuzhna.jpg" }
                    ]
                }
            }
        },
        {
            id: "kseniya",
            name: "Грибовская Ксения",
            photoUrl: "avatarsSite/kseniya.jpg",
            photoInitials: "КГ",
            contacts: "",
            gallery: [
                "stories/kseniya/random1.jpg",
                "stories/kseniya/random2.jpg"
            ],
            categories: {
                general: { title: "📖 О себе", media: [] },
                study: { title: "📚 Учёба", media: [] },
                sport: { title: "⚽ Спорт", media: [] },
                hobby: { title: "🎨 Хобби", media: [] },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "Kai Angel - Limousine Music", url: "music/kseniya/Limousine_Music.mp3", cover: "covers/kseniya/Limousine_Music.jpg" },
                        { name: "Heronwater - ВЕЧНО МОЛОДОЙ", url: "music/kseniya/VECHNO_MOLODOY.mp3", cover: "covers/kseniya/VECHNO_MOLODOY.jpg" },
                        { name: "Kai Angel - basement", url: "music/kseniya/basement.mp3", cover: "covers/kseniya/basement.jpg" },
                        { name: "2hollis - 2 u", url: "music/kseniya/2_u.mp3", cover: "covers/kseniya/2_u.jpg" },
                        { name: "9mice - ALASKA", url: "music/kseniya/ALASKA.mp3", cover: "covers/kseniya/ALASKA.jpg" }
                    ]
                }
            }
        }
    ]
};

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentStudentId = null;
let currentMediaModal = null;
let currentMediaList = [];
let currentMediaIndex = 0;
let mediaTimer = null;
let globalAudio = null;
let currentTrackListGlobal = [];
let currentTrackIndexGlobal = 0;

const app = document.getElementById("app");

function getStudentById(id) {
    return teamData.members.find(m => m.id === id);
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function getTrackName(fullName) {
    const dashIndex = fullName.indexOf(' - ');
    if (dashIndex === -1) return fullName;
    return fullName.substring(dashIndex + 3);
}

function getArtistName(fullName) {
    const dashIndex = fullName.indexOf(' - ');
    if (dashIndex === -1) return "МатМех";
    return fullName.substring(0, dashIndex);
}

// ========== МЕДИА-ПРОСМОТРЩИК ==========
function openMediaModal(mediaList, startIndex = 0) {
    if (!mediaList || mediaList.length === 0) return;
    
    // Проверяем, есть ли видео в списке
    const hasVideo = mediaList.some(media => media.type === 'video');
    // НЕ останавливаем музыку при открытии, только если текущий элемент - видео
    
    currentMediaList = mediaList;
    currentMediaIndex = startIndex;
    
    const modal = document.createElement('div');
    modal.className = 'media-modal';
    modal.innerHTML = `
        <div class="media-container">
            <div class="media-progress-bars">
                ${mediaList.map((_, i) => `<div class="media-progress-bar ${i === startIndex ? 'active' : ''}" data-index="${i}">
                    <div class="media-progress-fill" style="width: ${i < startIndex ? '100%' : '0%'}"></div>
                </div>`).join('')}
            </div>
            <div class="media-content" id="mediaContent"></div>
            <div class="media-controls">
                <div class="media-left" id="mediaPrev"></div>
                <div class="media-right" id="mediaNext"></div>
            </div>
            <button class="media-close">✕</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentMediaModal = modal;
    
    modal.querySelector('.media-close').addEventListener('click', () => {
        closeMediaModal();
        // Возобновляем музыку если она была на паузе и не было видео
        if (globalAudio && globalAudio.paused && globalAudio.src && !currentMediaList.some(m => m.type === 'video')) {
            globalAudio.play().catch(e => console.log(e));
        } else if (globalAudio && globalAudio.paused && globalAudio.src) {
            // Если были видео, тоже возобновляем
            globalAudio.play().catch(e => console.log(e));
        }
    });
    modal.querySelector('#mediaPrev').addEventListener('click', () => navigateMedia(-1));
    modal.querySelector('#mediaNext').addEventListener('click', () => navigateMedia(1));
    
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    modal.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 50) navigateMedia(diff > 0 ? -1 : 1);
    });
    
    document.addEventListener('keydown', handleKeydown);
    showMediaContent(currentMediaIndex);
    startMediaTimer();
}

function showMediaContent(index) {
    const contentDiv = currentMediaModal.querySelector('#mediaContent');
    const media = currentMediaList[index];
    
    const currentVideo = contentDiv.querySelector('video');
    if (currentVideo) currentVideo.pause();
    
    contentDiv.innerHTML = '';
    
    if (media.type === 'video') {
        // ТОЛЬКО здесь останавливаем музыку, если она играет
        if (globalAudio && !globalAudio.paused) {
            globalAudio.pause();
        }
        
        const video = document.createElement('video');
        video.src = media.url;
        video.autoplay = true;
        video.playsInline = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'contain';
        video.addEventListener('ended', () => navigateMedia(1));
        contentDiv.appendChild(video);
        video.play().catch(e => console.log(e));
    } else {
        // Фото - возобновляем музыку, если она была на паузе (но не если это видео было)
        if (globalAudio && globalAudio.paused && globalAudio.src) {
            // Проверяем, было ли видео в этом списке и не находится ли сейчас на видео
            const hasVideoInList = currentMediaList.some(m => m.type === 'video');
            const isCurrentVideo = media.type === 'video';
            
            // Если в списке нет видео или мы уже прошли видео, возобновляем
            if (!hasVideoInList || !isCurrentVideo) {
                globalAudio.play().catch(e => console.log(e));
            }
        }
        
        const img = document.createElement('img');
        img.src = media.url;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        contentDiv.appendChild(img);
    }
    
    const bars = currentMediaModal.querySelectorAll('.media-progress-bar');
    bars.forEach((bar, i) => {
        if (i < index) {
            bar.classList.add('completed');
            bar.classList.remove('active');
            bar.querySelector('.media-progress-fill').style.width = '100%';
        } else if (i === index) {
            bar.classList.add('active');
            bar.classList.remove('completed');
            bar.querySelector('.media-progress-fill').style.width = '0%';
        } else {
            bar.classList.remove('active', 'completed');
            bar.querySelector('.media-progress-fill').style.width = '0%';
        }
    });
}

function startMediaTimer() {
    if (mediaTimer) clearInterval(mediaTimer);
    
    const duration = 30000;
    const startTime = Date.now();
    const activeBar = currentMediaModal.querySelector('.media-progress-bar.active');
    if (!activeBar) return;
    
    const fill = activeBar.querySelector('.media-progress-fill');
    
    mediaTimer = setInterval(() => {
        const percent = Math.min(((Date.now() - startTime) / duration) * 100, 100);
        fill.style.width = percent + '%';
        if (percent >= 100) {
            clearInterval(mediaTimer);
            navigateMedia(1);
        }
    }, 50);
}

function navigateMedia(direction) {
    if (mediaTimer) clearInterval(mediaTimer);
    
    const newIndex = currentMediaIndex + direction;
    if (newIndex < 0 || newIndex >= currentMediaList.length) {
        closeMediaModal();
        if (globalAudio && globalAudio.paused && globalAudio.src) {
            globalAudio.play().catch(e => console.log(e));
        }
        return;
    }
    
    const contentDiv = currentMediaModal.querySelector('#mediaContent');
    const video = contentDiv.querySelector('video');
    if (video) video.pause();
    
    currentMediaIndex = newIndex;
    showMediaContent(currentMediaIndex);
    startMediaTimer();
}

function closeMediaModal() {
    if (mediaTimer) clearInterval(mediaTimer);
    if (currentMediaModal) {
        const video = currentMediaModal.querySelector('video');
        if (video) video.pause();
        currentMediaModal.remove();
        currentMediaModal = null;
    }
    document.removeEventListener('keydown', handleKeydown);
}

function handleKeydown(e) {
    if (!currentMediaModal) return;
    if (e.key === 'ArrowLeft') navigateMedia(-1);
    if (e.key === 'ArrowRight') navigateMedia(1);
    if (e.key === 'Escape') {
        closeMediaModal();
        if (globalAudio && globalAudio.paused && globalAudio.src) {
            globalAudio.play().catch(e => console.log(e));
        }
    }
}

// ========== МИНИ-ПЛЕЕР ==========
function showMiniPlayer() {
    // Не показываем мини-плеер, если открыт большой плеер
    const bigPlayer = document.querySelector('.player-modal');
    if (bigPlayer) return;
    
    let miniPlayer = document.querySelector('.mini-player');
    
    if (!miniPlayer) {
        miniPlayer = document.createElement('div');
        miniPlayer.className = 'mini-player';
        miniPlayer.innerHTML = `
            <div class="mini-player-cover">
                <img id="miniPlayerCover" src="" alt="Обложка">
            </div>
            <div class="mini-player-info">
                <div class="mini-player-title" id="miniPlayerTitle">-</div>
                <div class="mini-player-artist" id="miniPlayerArtist">-</div>
            </div>
            <div class="mini-player-controls">
                <button class="mini-player-btn" id="miniPlayerPrev">
                    <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                </button>
                <button class="mini-player-btn mini-player-play" id="miniPlayerPlay">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <button class="mini-player-btn" id="miniPlayerNext">
                    <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                </button>
            </div>
            <button class="mini-player-close" id="miniPlayerClose">✕</button>
        `;
        document.body.appendChild(miniPlayer);
    }
    
    miniPlayer.classList.add('show');
    
    const track = currentTrackListGlobal[currentTrackIndexGlobal];
    if (track) {
        const coverImg = document.getElementById('miniPlayerCover');
        const titleEl = document.getElementById('miniPlayerTitle');
        const artistEl = document.getElementById('miniPlayerArtist');
        if (coverImg) coverImg.src = track.cover;
        if (titleEl) titleEl.textContent = getTrackName(track.name);
        if (artistEl) artistEl.textContent = getArtistName(track.name);
    }
    
    // Функция обновления иконки play/pause в мини-плеере
    function updateMiniPlayButton() {
        const playBtn = document.getElementById('miniPlayerPlay');
        if (!playBtn) return;
        const svg = playBtn.querySelector('svg');
        if (!globalAudio || globalAudio.paused) {
            svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
        } else {
            svg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        }
    }
    
    // Обработчик для кнопки play/pause
    const playBtn = document.getElementById('miniPlayerPlay');
    if (playBtn) {
        const newPlayBtn = playBtn.cloneNode(true);
        playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
        
        newPlayBtn.addEventListener('click', () => {
            if (globalAudio.paused) {
                globalAudio.play();
            } else {
                globalAudio.pause();
            }
            updateMiniPlayButton();
        });
    }
    
    // Обработчик для кнопки prev
    const prevBtn = document.getElementById('miniPlayerPrev');
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        
        newPrevBtn.addEventListener('click', () => {
            currentTrackIndexGlobal = (currentTrackIndexGlobal - 1 + currentTrackListGlobal.length) % currentTrackListGlobal.length;
            const track = currentTrackListGlobal[currentTrackIndexGlobal];
            
            const coverImg = document.getElementById('miniPlayerCover');
            const titleEl = document.getElementById('miniPlayerTitle');
            const artistEl = document.getElementById('miniPlayerArtist');
            if (coverImg) coverImg.src = track.cover;
            if (titleEl) titleEl.textContent = getTrackName(track.name);
            if (artistEl) artistEl.textContent = getArtistName(track.name);
            
            const wasPlaying = !globalAudio.paused;
            if (globalAudio) globalAudio.pause();
            globalAudio = new Audio(track.url);
            if (wasPlaying) globalAudio.play().catch(e => console.log(e));
            
            const playerModal = document.querySelector('.player-modal');
            if (playerModal) {
                const cover = playerModal.querySelector('#playerCover');
                const trackName = playerModal.querySelector('#playerTrackName');
                const artist = playerModal.querySelector('#playerArtist');
                if (cover) cover.src = track.cover;
                if (trackName) trackName.textContent = getTrackName(track.name);
                if (artist) artist.textContent = getArtistName(track.name);
            }
            
            updateMiniPlayButton();
        });
    }
    
    // Обработчик для кнопки next
    const nextBtn = document.getElementById('miniPlayerNext');
    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        
        newNextBtn.addEventListener('click', () => {
            currentTrackIndexGlobal = (currentTrackIndexGlobal + 1) % currentTrackListGlobal.length;
            const track = currentTrackListGlobal[currentTrackIndexGlobal];
            
            const coverImg = document.getElementById('miniPlayerCover');
            const titleEl = document.getElementById('miniPlayerTitle');
            const artistEl = document.getElementById('miniPlayerArtist');
            if (coverImg) coverImg.src = track.cover;
            if (titleEl) titleEl.textContent = getTrackName(track.name);
            if (artistEl) artistEl.textContent = getArtistName(track.name);
            
            const wasPlaying = !globalAudio.paused;
            if (globalAudio) globalAudio.pause();
            globalAudio = new Audio(track.url);
            if (wasPlaying) globalAudio.play().catch(e => console.log(e));
            
            const playerModal = document.querySelector('.player-modal');
            if (playerModal) {
                const cover = playerModal.querySelector('#playerCover');
                const trackName = playerModal.querySelector('#playerTrackName');
                const artist = playerModal.querySelector('#playerArtist');
                if (cover) cover.src = track.cover;
                if (trackName) trackName.textContent = getTrackName(track.name);
                if (artist) artist.textContent = getArtistName(track.name);
            }
            
            updateMiniPlayButton();
        });
    }
    
    const closeBtn = document.getElementById('miniPlayerClose');
    if (closeBtn) {
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', () => {
            if (globalAudio) {
                globalAudio.pause();
                globalAudio = null;
            }
            miniPlayer.classList.remove('show');
        });
    }
    
    if (globalAudio) {
        globalAudio.addEventListener('play', updateMiniPlayButton);
        globalAudio.addEventListener('pause', updateMiniPlayButton);
        updateMiniPlayButton();
    }
}

function hideMiniPlayer() {
    const miniPlayer = document.querySelector('.mini-player');
    if (miniPlayer && (!globalAudio || globalAudio.paused)) {
        miniPlayer.classList.remove('show');
    }
}

// ========== АУДИОПЛЕЕР ==========
function openMusicPlayer(tracks, startIndex = 0) {
    if (!tracks || tracks.length === 0) return;
    
    // Проверяем, тот же ли это плейлист и тот же ли трек
    const isSamePlaylist = currentTrackListGlobal === tracks;
    const isSameTrack = isSamePlaylist && currentTrackIndexGlobal === startIndex;
    const wasPlaying = globalAudio && !globalAudio.paused;
    
    // Сохраняем текущее время, если это тот же трек
    let savedTime = 0;
    if (isSameTrack && globalAudio) {
        savedTime = globalAudio.currentTime;
    }
    
    currentTrackListGlobal = tracks;
    currentTrackIndexGlobal = startIndex;
    
    // Закрываем мини-плеер, если он открыт
    const miniPlayer = document.querySelector('.mini-player');
    if (miniPlayer) {
        miniPlayer.classList.remove('show');
    }
    
    // Проверяем, открыт ли уже плеер
    const existingModal = document.querySelector('.player-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'player-modal';
    modal.innerHTML = `
        <div class="player-container">
            <button class="player-close">✕</button>
            <div class="player-cover">
                <img id="playerCover" src="${tracks[startIndex].cover}" alt="Обложка">
            </div>
            <div class="player-track-name" id="playerTrackName">${escapeHtml(getTrackName(tracks[startIndex].name))}</div>
            <div class="player-artist" id="playerArtist">${escapeHtml(getArtistName(tracks[startIndex].name))}</div>
            
            <div class="player-progress-container">
                <div class="player-progress-bar" id="playerProgressBar">
                    <div class="player-progress-fill" id="playerProgressFill"></div>
                </div>
                <div class="player-time">
                    <span id="playerCurrentTime">0:00</span>
                    <span id="playerDuration">0:00</span>
                </div>
            </div>
            
            <div class="player-controls">
                <button class="player-btn" id="playerPrev">
                    <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                </button>
                <button class="player-btn player-play" id="playerPlay">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <button class="player-btn" id="playerNext">
                    <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Если тот же плейлист и тот же трек, используем существующий globalAudio
    if (isSameTrack && globalAudio) {
        globalAudio.currentTime = savedTime;
        if (wasPlaying) {
            globalAudio.play().catch(e => console.log(e));
        }
    } else {
        // Если новый плейлист или другой трек, создаём новый аудио
        if (globalAudio) {
            globalAudio.pause();
        }
        globalAudio = new Audio(tracks[startIndex].url);
        globalAudio.currentTime = 0;
        if (wasPlaying) {
            globalAudio.play().catch(e => console.log(e));
        }
    }
    
    const cover = modal.querySelector('#playerCover');
    const trackNameEl = modal.querySelector('#playerTrackName');
    const artistEl = modal.querySelector('#playerArtist');
    const playBtn = modal.querySelector('#playerPlay');
    const prevBtn = modal.querySelector('#playerPrev');
    const nextBtn = modal.querySelector('#playerNext');
    const progressBar = modal.querySelector('#playerProgressBar');
    const progressFill = modal.querySelector('#playerProgressFill');
    const currentTimeSpan = modal.querySelector('#playerCurrentTime');
    const durationSpan = modal.querySelector('#playerDuration');
    
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    function updateTrackDisplay() {
        const track = currentTrackListGlobal[currentTrackIndexGlobal];
        if (cover) cover.src = track.cover;
        if (trackNameEl) trackNameEl.textContent = getTrackName(track.name);
        if (artistEl) artistEl.textContent = getArtistName(track.name);
    }
    
    function updatePlayButton() {
        if (!playBtn) return;
        const svg = playBtn.querySelector('svg');
        if (!globalAudio || globalAudio.paused) {
            svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
        } else {
            svg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        }
    }
    
    function togglePlay() {
        if (globalAudio.paused) {
            globalAudio.play();
        } else {
            globalAudio.pause();
        }
        updatePlayButton();
    }
    
    function changeTrack(newIndex) {
        currentTrackIndexGlobal = newIndex;
        const track = currentTrackListGlobal[currentTrackIndexGlobal];
        
        if (cover) cover.src = track.cover;
        if (trackNameEl) trackNameEl.textContent = getTrackName(track.name);
        if (artistEl) artistEl.textContent = getArtistName(track.name);
        
        const wasPlaying = !globalAudio.paused;
        
        // Создаём новый аудио без щелчка
        const newAudio = new Audio(track.url);
        newAudio.currentTime = 0;
        
        // Плавно переключаемся
        const oldAudio = globalAudio;
        globalAudio = newAudio;
        
        if (oldAudio) {
            oldAudio.pause();
            oldAudio.src = '';
        }
        
        if (wasPlaying) {
            globalAudio.play().catch(e => console.log(e));
        }
        
        // Добавляем обработчики
        globalAudio.addEventListener('timeupdate', updateProgress);
        globalAudio.addEventListener('loadedmetadata', updateProgress);
        globalAudio.addEventListener('ended', () => {
            changeTrack((currentTrackIndexGlobal + 1) % currentTrackListGlobal.length);
        });
        globalAudio.addEventListener('play', updatePlayButton);
        globalAudio.addEventListener('pause', updatePlayButton);
        
        updatePlayButton();
        updateProgress();
        
        // Обновляем мини-плеер
        const miniPlayerEl = document.querySelector('.mini-player');
        if (miniPlayerEl && miniPlayerEl.classList.contains('show')) {
            const miniCover = document.getElementById('miniPlayerCover');
            const miniTitle = document.getElementById('miniPlayerTitle');
            const miniArtist = document.getElementById('miniPlayerArtist');
            if (miniCover) miniCover.src = track.cover;
            if (miniTitle) miniTitle.textContent = getTrackName(track.name);
            if (miniArtist) miniArtist.textContent = getArtistName(track.name);
        }
    }
    
    function nextTrack() {
        const newIndex = (currentTrackIndexGlobal + 1) % currentTrackListGlobal.length;
        changeTrack(newIndex);
    }
    
    function prevTrack() {
        const newIndex = (currentTrackIndexGlobal - 1 + currentTrackListGlobal.length) % currentTrackListGlobal.length;
        changeTrack(newIndex);
    }
    
    function updateProgress() {
        if (globalAudio && globalAudio.duration && !isNaN(globalAudio.duration)) {
            const percent = (globalAudio.currentTime / globalAudio.duration) * 100;
            if (progressFill) progressFill.style.width = percent + '%';
            if (currentTimeSpan) currentTimeSpan.textContent = formatTime(globalAudio.currentTime);
            if (durationSpan) durationSpan.textContent = formatTime(globalAudio.duration);
        }
    }
    
    function seek(e) {
        if (!globalAudio) return;
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        globalAudio.currentTime = percent * globalAudio.duration;
    }
    
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', prevTrack);
    if (nextBtn) nextBtn.addEventListener('click', nextTrack);
    if (progressBar) progressBar.addEventListener('click', seek);
    
    globalAudio.addEventListener('timeupdate', updateProgress);
    globalAudio.addEventListener('loadedmetadata', updateProgress);
    globalAudio.addEventListener('ended', nextTrack);
    globalAudio.addEventListener('play', updatePlayButton);
    globalAudio.addEventListener('pause', updatePlayButton);
    
    const closeBtn = modal.querySelector('.player-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.remove();
            if (globalAudio && !globalAudio.paused) {
                showMiniPlayer();
            }
        });
    }
    
    updateTrackDisplay();
    updatePlayButton();
    updateProgress();
    
    // Не начинаем заново, если тот же трек играл
    if (!isSameTrack || !globalAudio.src.includes(tracks[startIndex].url)) {
        globalAudio.play().catch(e => console.log('Автовоспроизведение заблокировано:', e));
    } else if (wasPlaying && isSameTrack) {
        globalAudio.play().catch(e => console.log(e));
    }
}

// ========== РЕНДЕР ==========
function renderMainPage() {
    return `
        <div class="site-header">
            <div class="logo">
                <h1>🐭 ${teamData.name}</h1>
                <p>${teamData.theme}</p>
            </div>
            <div class="nav-links">
                <a href="#" data-nav="main">Главная</a>
            </div>
        </div>
        <section>
            <h2 style="font-size: 1.9rem; margin-bottom: 0.5rem;">Наша команда</h2>
            <p style="color: #3e5a6b; margin-bottom: 1rem;">Познакомьтесь с участниками — студентами матмеха</p>
            <div class="team-grid">
                ${teamData.members.map(member => `
                    <div class="card" data-student-id="${member.id}">
                        <div class="card-img">
                            ${member.photoUrl ? 
                                `<img src="${member.photoUrl}" alt="${member.name}">` : 
                                member.photoInitials
                            }
                        </div>
                        <div class="card-content">
                            <div class="name-badge">${member.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        <div class="footer">МатМех | Команда «МЫшкино» | 2026</div>
    `;
}

function renderStudentPage() {
    const student = getStudentById(currentStudentId);
    if (!student) return renderMainPage();
    
    const categoryKeys = ['general', 'study', 'sport', 'hobby', 'music'];
    const gallery = student.gallery || [];
    
    return `
        <div class="site-header">
            <div class="logo">
                <h1>🐭 ${teamData.name}</h1>
                <p>${teamData.theme}</p>
            </div>
            <div class="nav-links">
                <a href="#" data-nav="main">← На главную</a>
            </div>
        </div>
        <div class="student-page">
            <div class="student-header">
                <div class="student-avatar">
                    ${student.photoUrl ? 
                        `<img src="${student.photoUrl}" alt="${student.name}">` : 
                        student.photoInitials
                    }
                </div>
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <div class="contacts">${student.contacts}</div>
                </div>
            </div>
            
            <div class="categories-circle-grid">
                ${categoryKeys.map(key => {
                    const cat = student.categories[key];
                    const hasContent = key === 'music' ? 
                        (cat.tracks && cat.tracks.length > 0) : 
                        (cat.media && cat.media.length > 0);
                    const icon = key === 'general' ? '📖' : key === 'study' ? '📚' : key === 'sport' ? '⚽' : key === 'hobby' ? '🎨' : '🎧';
                    return `
                        <div class="category-circle" data-category="${key}" ${hasContent ? '' : 'style="opacity:0.5;"'}>
                            <div class="category-circle-ring">
                                <div class="category-circle-inner">${icon}</div>
                            </div>
                            <span class="category-circle-title">${cat.title}</span>
                            ${!hasContent ? '<span class="category-empty">(нет контента)</span>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="random-gallery">
                <h3>Галерея</h3>
                <div class="gallery-grid">
                    ${gallery.map(photo => `
                        <div class="gallery-item" data-photo="${photo}">
                            <img src="${photo}" alt="Фото">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="footer">МатМех | Команда «МЫшкино» | 2026</div>
    `;
}

// ========== ОБРАБОТЧИКИ ==========
function attachEventListeners() {
    document.querySelectorAll('.card[data-student-id]').forEach(card => {
        card.addEventListener('click', () => {
            currentStudentId = card.getAttribute('data-student-id');
            render();
        });
    });
    
    document.querySelectorAll('[data-nav="main"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentStudentId = null;
            render();
        });
    });
    
    document.querySelectorAll('.category-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const categoryKey = circle.getAttribute('data-category');
            const student = getStudentById(currentStudentId);
            
            if (categoryKey === 'music') {
                const tracks = student.categories.music.tracks;
                if (tracks && tracks.length > 0) {
                    openMusicPlayer(tracks, 0);
                }
            } else {
                const mediaList = student.categories[categoryKey]?.media;
                if (mediaList && mediaList.length > 0) {
                    openMediaModal(mediaList, 0);
                }
            }
        });
    });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const photoUrl = item.getAttribute('data-photo');
            openMediaModal([{ type: 'image', url: photoUrl }], 0);
        });
    });
}

function render() {
    if (currentStudentId === null) {
        app.innerHTML = renderMainPage();
    } else {
        app.innerHTML = renderStudentPage();
    }
    attachEventListeners();
}

// ========== ЗАПУСК ==========
render();
