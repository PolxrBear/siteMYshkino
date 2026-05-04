// Данные команды
const teamData = {
    name: "МЫшкино",
    theme: "Кто мы такие, и причём тут матмех",
    members: [
        {
            id: "pavel",
            name: "Елисеев Павел",
            role: "программист",
            photoUrl: "avatarsSite/pavel.jpg",
            photoInitials: "ПЕ",
            contacts: "<img src='icons/telegram.jpg' style='width:16px;height:16px;vertical-align:middle;'> @polxrknight | 📱 +7 (922) 132-51-75 | 📧 eliseev.p25175@gmail.com",
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
                        { type: "video", url: "stories/pavel/hobby1.mp4" },
                        { type: "image", url: "stories/pavel/hobby1.jpg" }
                    ]
                },
                music: {
                    title: "🎧 Музыка",
                    tracks: [
                        { name: "Joey Valence & Brae - HOOLIGANG", url: "music/pavel/HOOLIGANG.mp3", cover: "covers/pavel/HOOLIGANG.jpg" },
                        { name: "Scorpions - Rock You Like a Hurricane", url: "music/pavel/hurricane.mp3", cover: "covers/pavel/hurricane.jpg" },
                        { name: "Serge Devant, Hadley - Addicted", url: "music/pavel/Addicted.mp3", cover: "covers/pavel/Addicted.jpg" },
                    ]
                }
            }
        },
        {
            id: "kirill",
            name: "Комлев Кирилл",
            role: "программист",
            photoUrl: "avatarsSite/kirill.jpg",
            photoInitials: "КК",
            contacts: "",
            categories: {
                general: {
                    title: "📖 О себе",
                    media: []
                },
                study: {
                    title: "📚 Учёба",
                    media: []
                },
                sport: {
                    title: "⚽ Спорт",
                    media: []
                },
                hobby: {
                    title: "🎨 Хобби",
                    media: []
                },
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
            role: "докладчик",
            photoUrl: "avatarsSite/ilya.jpg",
            photoInitials: "ИБ",
            contacts: "",
            categories: {
                general: {
                    title: "📖 О себе",
                    media: []
                },
                study: {
                    title: "📚 Учёба",
                    media: []
                },
                sport: {
                    title: "⚽ Спорт",
                    media: []
                },
                hobby: {
                    title: "🎨 Хобби",
                    media: []
                },
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
            role: "менеджер по отчётности",
            photoUrl: "avatarsSite/polina.jpg",
            photoInitials: "ПК",
            contacts: "",
            categories: {
                general: {
                    title: "📖 О себе",
                    media: []
                },
                study: {
                    title: "📚 Учёба",
                    media: []
                },
                sport: {
                    title: "⚽ Спорт",
                    media: []
                },
                hobby: {
                    title: "🎨 Хобби",
                    media: []
                },
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
            role: "контент-менеджер",
            photoUrl: "avatarsSite/kseniya.jpg",
            photoInitials: "КГ",
            contacts: "",
            categories: {
                general: {
                    title: "📖 О себе",
                    media: []
                },
                study: {
                    title: "📚 Учёба",
                    media: []
                },
                sport: {
                    title: "⚽ Спорт",
                    media: []
                },
                hobby: {
                    title: "🎨 Хобби",
                    media: []
                },
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

// Состояние
let currentStudentId = null;
let currentMediaModal = null;
let currentMediaList = [];
let currentMediaIndex = 0;
let currentCategoryKey = null;

const app = document.getElementById("app");

function getStudentById(id) {
    return teamData.members.find(m => m.id === id);
}

// Открытие медиа-просмотрщика (фото/видео на весь экран)
function openMediaModal(mediaList, startIndex = 0) {
    if (!mediaList || mediaList.length === 0) return;
    
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
                <div class="media-area media-left" id="mediaPrev"></div>
                <div class="media-area media-right" id="mediaNext"></div>
            </div>
            <button class="media-close">✕</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentMediaModal = modal;
    
    // Обработчики
    modal.querySelector('.media-close').addEventListener('click', closeMediaModal);
    modal.querySelector('#mediaPrev').addEventListener('click', () => navigateMedia(-1));
    modal.querySelector('#mediaNext').addEventListener('click', () => navigateMedia(1));
    
    // Свайпы для мобильных
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) navigateMedia(-1);
            else navigateMedia(1);
        }
    });
    
    // Клавиатура
    document.addEventListener('keydown', handleKeydown);
    
    showMediaContent(currentMediaIndex);
    startMediaTimer();
}

function showMediaContent(index) {
    const contentDiv = currentMediaModal.querySelector('#mediaContent');
    const media = currentMediaList[index];
    
    // Останавливаем текущее видео
    const currentVideo = contentDiv.querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
    }
    
    contentDiv.innerHTML = '';
    
    if (media.type === 'video') {
        const video = document.createElement('video');
        video.src = media.url;
        video.autoplay = true;
        video.muted = false;
        video.playsInline = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'contain';
        video.addEventListener('ended', () => {
            navigateMedia(1);
        });
        contentDiv.appendChild(video);
        video.play().catch(e => console.log('Автовоспроизведение заблокировано:', e));
    } else {
        const img = document.createElement('img');
        img.src = media.url;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        contentDiv.appendChild(img);
    }
    
    // Обновляем прогресс-бары
    const bars = currentMediaModal.querySelectorAll('.media-progress-bar');
    bars.forEach((bar, i) => {
        if (i < index) {
            bar.classList.add('completed');
            bar.classList.remove('active');
            const fill = bar.querySelector('.media-progress-fill');
            fill.style.width = '100%';
        } else if (i === index) {
            bar.classList.add('active');
            bar.classList.remove('completed');
            const fill = bar.querySelector('.media-progress-fill');
            fill.style.width = '0%';
        } else {
            bar.classList.remove('active', 'completed');
            const fill = bar.querySelector('.media-progress-fill');
            fill.style.width = '0%';
        }
    });
}

let mediaTimer = null;

function startMediaTimer() {
    if (mediaTimer) clearInterval(mediaTimer);
    
    const duration = 30000; // 5 секунд
    const startTime = Date.now();
    const activeBar = currentMediaModal.querySelector('.media-progress-bar.active');
    if (!activeBar) return;
    
    const fill = activeBar.querySelector('.media-progress-fill');
    
    mediaTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const percent = Math.min((elapsed / duration) * 100, 100);
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
        return;
    }
    
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
    if (e.key === 'Escape') closeMediaModal();
}

// Рендер главной страницы
function renderMainPage() {
    const members = teamData.members;
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
                ${members.map(member => `
                    <div class="card" data-student-id="${member.id}">
                        <div class="card-img">
                            ${member.photoUrl ? 
                                `<img src="${member.photoUrl}" alt="${member.name}" style="width:100%; height:100%; object-fit:cover;">` : 
                                member.photoInitials
                            }
                        </div>
                        <div class="card-content">
                            <span class="role-badge">${member.role}</span>
                            <h3>${member.name}</h3>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        <div class="footer">
            МатМех | Команда «МЫшкино» | 2026
        </div>
    `;
}

// Рендер страницы студента (большие круглые кнопки категорий)
function renderStudentPage() {
    const student = getStudentById(currentStudentId);
    if (!student) return renderMainPage();
    
    // Категории для отображения (все, кроме music — её показываем отдельно)
    const categoryKeys = ['general', 'study', 'sport', 'hobby'];
    
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
            <button class="back-btn" data-back-main>🏠 Вернуться к команде</button>
            <div class="student-header">
                <div class="student-avatar">
                    ${student.photoUrl ? 
                        `<img src="${student.photoUrl}" alt="${student.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">` : 
                        student.photoInitials
                    }
                </div>
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <div class="student-role">${student.role}</div>
                    <div class="contacts">${student.contacts}</div>
                </div>
            </div>
            
            <div class="categories-circle-grid">
                ${categoryKeys.map(key => {
                    const cat = student.categories[key];
                    const hasMedia = cat.media && cat.media.length > 0;
                    return `
                        <div class="category-circle" data-category="${key}" ${hasMedia ? '' : 'style="opacity:0.5;"'}>
                            <div class="category-circle-ring">
                                <div class="category-circle-inner">
                                    ${key === 'general' ? '📖' : key === 'study' ? '📚' : key === 'sport' ? '⚽' : '🎨'}
                                </div>
                            </div>
                            <span class="category-circle-title">${cat.title}</span>
                            ${!hasMedia ? '<span class="category-empty">(нет фото)</span>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="music-section-full">
                <h3>🎧 Музыкальный плейлист</h3>
                <div class="tracks-list-modern">
                    ${student.categories.music.tracks.map((track, i) => `
                        <div class="track-card-modern" data-track-index="${i}">
                            <div class="track-cover-wrapper" data-track-index="${i}">
                                <img class="track-cover" src="${track.cover}" alt="Обложка">
                                <div class="track-play-overlay">
                                    <span class="overlay-icon">▶</span>
                                </div>
                            </div>
                            <div class="track-info-modern">
                                <div class="track-name-modern">${i+1}. ${track.name}</div>
                                <audio controls preload="none" data-track-index="${i}">
                                    <source src="${track.url}" type="audio/mpeg">
                                </audio>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="footer">
            МатМех | Команда «МЫшкино» | 2026
        </div>
    `;
}

// Обработка кликов
function attachEventListeners() {
    // Карточки студентов
    document.querySelectorAll('.card[data-student-id]').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-student-id');
            if (id) {
                currentStudentId = id;
                render();
            }
        });
    });
    
    // Навигация
    document.querySelectorAll('[data-nav="main"], [data-back-main]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentStudentId = null;
            render();
        });
    });
    
    // Большие круглые кнопки категорий
    document.querySelectorAll('.category-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const categoryKey = circle.getAttribute('data-category');
            const student = getStudentById(currentStudentId);
            const mediaList = student.categories[categoryKey]?.media;
            
            if (mediaList && mediaList.length > 0) {
                openMediaModal(mediaList, 0);
            } else {
                // Можно показать уведомление, что контента нет
                console.log('Нет медиа для этой категории');
            }
        });
    });
    
    // Музыкальные треки
    document.querySelectorAll('.track-card-modern').forEach(card => {
        const audio = card.querySelector('audio');
        const wrapper = card.querySelector('.track-cover-wrapper');
        const icon = card.querySelector('.overlay-icon');
        
        if (audio && wrapper) {
            wrapper.addEventListener('click', () => {
                if (audio.paused) {
                    document.querySelectorAll('audio').forEach(a => {
                        if (a !== audio && !a.paused) {
                            a.pause();
                            a.currentTime = 0;
                            const otherCard = a.closest('.track-card-modern');
                            if (otherCard) {
                                const otherIcon = otherCard.querySelector('.overlay-icon');
                                if (otherIcon) otherIcon.textContent = '▶';
                            }
                        }
                    });
                    audio.play();
                    if (icon) icon.textContent = '⏸';
                } else {
                    audio.pause();
                    if (icon) icon.textContent = '▶';
                }
            });
            
            audio.addEventListener('play', () => {
                if (icon) icon.textContent = '⏸';
            });
            
            audio.addEventListener('pause', () => {
                if (icon) icon.textContent = '▶';
            });
            
            audio.addEventListener('ended', () => {
                if (icon) icon.textContent = '▶';
            });
        }
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

render();
