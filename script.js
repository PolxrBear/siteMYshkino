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
                general: "...",
                study: "...",
                sport: "...",
                hobby: "...",
                tracks: [
                    { name: "FRENDLY THUG 52 NGG - 2 Goyard", url: "music/ilya/2_Goyard.mp3", cover: "covers/ilya/2_Goyard.jpg" },
                    { name: "BUSHIDO ZHO - Heaven", url: "music/ilya/Heaven.mp3", cover: "covers/ilya/Heaven.jpg" },
                    { name: "Big Baby Tape, Aarne - HOODAK MP3", url: "music/ilya/HOODAK.mp3", cover: "covers/ilya/HOODAK.jpg" },
                    { name: "ALBLAK 52 - On The Line", url: "music/ilya/On_The_Line.mp3", cover: "covers/ilya/On_The_Line.jpg" },
                    { name: "Полка - Знаю", url: "music/ilya/znayu.mp3", cover: "covers/ilya/znayu.jpg" }
                ]
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
                general: "...",
                study: "...",
                sport: "...",
                hobby: "...",
                tracks: [
                    { name: "FRENDLY THUG 52 NGG - 2 Goyard", url: "music/ilya/2_Goyard.mp3", cover: "covers/ilya/2_Goyard.jpg" },
                    { name: "BUSHIDO ZHO - Heaven", url: "music/ilya/Heaven.mp3", cover: "covers/ilya/Heaven.jpg" },
                    { name: "Big Baby Tape, Aarne - HOODAK MP3", url: "music/ilya/HOODAK.mp3", cover: "covers/ilya/HOODAK.jpg" },
                    { name: "ALBLAK 52 - On The Line", url: "music/ilya/On_The_Line.mp3", cover: "covers/ilya/On_The_Line.jpg" },
                    { name: "Полка - Знаю", url: "music/ilya/znayu.mp3", cover: "covers/ilya/znayu.jpg" }
                ]
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
                general: "...",
                study: "...",
                sport: "...",
                hobby: "...",
                tracks: [
                    { name: "FRENDLY THUG 52 NGG - 2 Goyard", url: "music/ilya/2_Goyard.mp3", cover: "covers/ilya/2_Goyard.jpg" },
                    { name: "BUSHIDO ZHO - Heaven", url: "music/ilya/Heaven.mp3", cover: "covers/ilya/Heaven.jpg" },
                    { name: "Big Baby Tape, Aarne - HOODAK MP3", url: "music/ilya/HOODAK.mp3", cover: "covers/ilya/HOODAK.jpg" },
                    { name: "ALBLAK 52 - On The Line", url: "music/ilya/On_The_Line.mp3", cover: "covers/ilya/On_The_Line.jpg" },
                    { name: "Полка - Знаю", url: "music/ilya/znayu.mp3", cover: "covers/ilya/znayu.jpg" }
                ]
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
                general: "...",
                study: "...",
                sport: "...",
                hobby: "...",
                tracks: [
                    { name: "Cherish, Nephu - He Said, She Said", url: "music/polina/hsss.mp3", cover: "covers/polina/hsss.jpg" },
                    { name: "GBAN, MAYOT - Мегаполис", url: "music/polina/megapolis.mp3", cover: "covers/polina/megapolis.jpg" },
                    { name: "Eminem - Castle", url: "music/polina/castle.mp3", cover: "covers/polina/castle.jpg" },
                    { name: "GUF - Было давно", url: "music/polina/bylo_davno.mp3", cover: "covers/polina/bylo_davno.jpg" },
                    { name: "M'Dee - нужна", url: "music/polina/nuzhna.mp3", cover: "covers/polina/nuzhna.jpg" }
                ]
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
                general: "...",
                study: "...",
                sport: "...",
                hobby: "...",
                tracks: [
                    { name: "Kai Angel - Limousine Music", url: "music/kseniya/Limousine_Music.mp3", cover: "covers/kseniya/Limousine_Music.jpg" },
                    { name: "Heronwater - ВЕЧНО МОЛОДОЙ", url: "music/kseniya/VECHNO_MOLODOY.mp3", cover: "covers/kseniya/VECHNO_MOLODOY.jpg" },
                    { name: "Kai Angel - basement", url: "music/kseniya/basement.mp3", cover: "covers/kseniya/basement.jpg" },
                    { name: "2hollis - 2 u", url: "music/kseniya/2_u.mp3", cover: "covers/kseniya/2_u.jpg" },
                    { name: "9mice - ALASKA", url: "music/kseniya/ALASKA.mp3", cover: "covers/kseniya/ALASKA.jpg" }
                ]
            }
        }
    ]
};

const categoryColors = {
    general: "#2b5f8a",
    study: "#2d8c6c",
    sport: "#e53e3e",
    hobby: "#d69e2e",
    music: "#805ad5"
};

// --------------------------------------------------------------
// Храним, какой студент сейчас выбран (если null, значит главная)
let currentStudentId = null;
let activeCategory = "general";

const app = document.getElementById("app");

function getStudentById(id) {
    return teamData.members.find(m => m.id === id);
}

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
                            <p>${member.categories.general.substring(0, 80)}${member.categories.general.length > 80 ? '…' : ''}</p>
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

// Применить цвет активной кнопки
function setActiveButtonColor() {
    const color = categoryColors[activeCategory] || "#2b5f8a";
    document.querySelectorAll('.cat-btn.active').forEach(btn => {
        btn.style.backgroundColor = color;
    });
    const title = document.querySelector('.category-content h3');
    if (title) title.style.borderLeftColor = color;
}


function renderStudentPage() {
    const student = getStudentById(currentStudentId);
    if (!student) return renderMainPage();

    let content = "";
    let title = "";
    
    if (activeCategory === "general") {
        title = "📖 Общее описание";
        content = `<p>${student.categories.general}</p>`;
    } else if (activeCategory === "study") {
        title = "📚 Учёба";
        content = `<p>${student.categories.study}</p>`;
    } else if (activeCategory === "sport") {
        title = "⚽ Спорт";
        content = `<p>${student.categories.sport}</p>`;
    } else if (activeCategory === "hobby") {
        title = "🎨 Хобби";
        content = `<p>${student.categories.hobby}</p>`;
    } else if (activeCategory === "music") {
        title = "🎧 Музыка";
        
        let tracksHtml = '';
        
        for (let i = 0; i < student.categories.tracks.length; i++) {
            let track = student.categories.tracks[i];
            let coverUrl = track.cover;
            let uniqueId = `audio-${Date.now()}-${i}`;  // уникальный ID для каждого аудио
            
            tracksHtml += `
                <div class="track-card-modern" data-audio-id="${uniqueId}">
                    <div class="track-cover-wrapper" data-audio-id="${uniqueId}">
                        <img class="track-cover" src="${coverUrl}" alt="Обложка" data-audio-id="${uniqueId}">
                        <div class="track-play-overlay" data-audio-id="${uniqueId}">
                            <span class="overlay-icon" data-audio-id="${uniqueId}">▶</span>
                        </div>
                    </div>
                    <div class="track-info-modern">
                        <div class="track-name-modern">${i+1}. ${track.name}</div>
                        <audio id="${uniqueId}" controls onplay="
                            document.querySelectorAll('audio').forEach(a => {
                                if(a.id !== this.id) {
                                    a.pause();
                                    a.currentTime = 0;
                                    const card = a.closest('.track-card-modern');
                                    if(card) {
                                        const icon = card.querySelector('.overlay-icon');
                                        if(icon) icon.textContent = '▶';
                                    }
                                }
                            });
                            const card = this.closest('.track-card-modern');
                            if(card) {
                                const icon = card.querySelector('.overlay-icon');
                                if(icon) icon.textContent = '⏸';
                            }
                        " onpause="
                            const card = this.closest('.track-card-modern');
                            if(card) {
                                const icon = card.querySelector('.overlay-icon');
                                if(icon) icon.textContent = '▶';
                            }
                        ">
                            <source src="${track.url}" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
            `;
        }
        content = tracksHtml;
    } else {
        title = "Описание";
        content = "<p>Информация временно отсутствует</p>";
    }
    
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
            <div class="category-menu">
                <button class="cat-btn ${activeCategory === 'general' ? 'active' : ''}" data-category="general">📖 Общее описание</button>
                <button class="cat-btn ${activeCategory === 'study' ? 'active' : ''}" data-category="study">📚 Учёба</button>
                <button class="cat-btn ${activeCategory === 'sport' ? 'active' : ''}" data-category="sport">⚽ Спорт</button>
                <button class="cat-btn ${activeCategory === 'hobby' ? 'active' : ''}" data-category="hobby">🎨 Хобби</button>
                <button class="cat-btn ${activeCategory === 'music' ? 'active' : ''}" data-category="music">🎧 Музыка</button>
            </div>
            <div class="category-content">
                <h3>${title}</h3>
                <div class="category-text">${content}</div>
            </div>
        </div>
        <div class="footer">
            МатМех | Команда «МЫшкино» | 2026
        </div>
    `;
}


// Обработчик кликов по обложкам (делегирование)
document.addEventListener('click', function(e) {
    // Находим ближайший элемент с data-audio-id (обложка или оверлей)
    const target = e.target.closest('[data-audio-id]');
    if (!target) return;
    
    const audioId = target.getAttribute('data-audio-id');
    const audioElement = document.getElementById(audioId);
    const card = target.closest('.track-card-modern');
    const icon = card ? card.querySelector('.overlay-icon') : null;
    
    if (!audioElement) return;
    
    // Останавливаем другие треки
    document.querySelectorAll('audio').forEach(audio => {
        if (audio.id !== audioId && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
            const otherCard = audio.closest('.track-card-modern');
            if (otherCard) {
                const otherIcon = otherCard.querySelector('.overlay-icon');
                if (otherIcon) otherIcon.textContent = '▶';
            }
        }
    });
    
    // Воспроизводим или ставим на паузу текущий
    if (audioElement.paused) {
        audioElement.play();
        if (icon) icon.textContent = '⏸';
    } else {
        audioElement.pause();
        if (icon) icon.textContent = '▶';
    }
});



// Общий рендер
function render() {
    if (currentStudentId === null) {
        app.innerHTML = renderMainPage();
    } else {
        app.innerHTML = renderStudentPage();
    }
    attachEventListeners();
    setActiveButtonColor();
}

// Привязка событий
function attachEventListeners() {
    // Карточки студентов
    document.querySelectorAll('.card[data-student-id]').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-student-id');
            if (id) {
                currentStudentId = id;
                activeCategory = "general";
                render();
            }
        });
    });
    
    // Кнопки навигации
    document.querySelectorAll('[data-nav="main"], [data-back-main]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentStudentId = null;
            activeCategory = "general";
            render();
        });
    });
    
    // Кнопки категорий
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-category');
            if (cat && currentStudentId) {
                activeCategory = cat;
                render();
            }
        });
    });
}

render();
