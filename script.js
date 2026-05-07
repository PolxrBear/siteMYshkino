// ============================================================================
// ДАННЫЕ КОМАНДЫ
// ============================================================================

const teamData = {
    name: "МЫшкино",  // Название команды (отображается в заголовке)
    theme: "Кто мы такие, и причём тут матмех",  // Слоган или тема команды
    members: [  // Массив участников команды (5 человек)
        // ========== УЧАСТНИК 1: Елисеев Павел ==========
        {
            id: "pavel",                           // Уникальный идентификатор (для ссылок)
            name: "Елисеев Павел",                 // Полное имя участника
            photoUrl: "avatarsSite/pavel.jpg",     // Путь к файлу фото (если есть)
            photoInitials: "ПЕ",                   // Инициалы (если фото отсутствует)
            contacts: "<img src='icons/telegram.jpg' style='width:16px;height:16px;vertical-align:middle;'> @polxrknight | 📱 +7 (922) 132-51-75 | 📧 eliseev.p25175@gmail.com",  // Контакты в HTML
            gallery: [  // Массив случайных фото для галереи
                "stories/pavel/random1.jpg",
                "stories/pavel/random2.jpg",
                "stories/pavel/random3.jpg",
                "stories/pavel/random4.jpg"
            ],
            categories: {  // Категории контента (разделы на странице студента)
                general: {  // Категория "О себе"
                    title: "📖 О себе",  // Название с эмодзи
                    media: [  // Массив медиа-файлов (фото и видео)
                        { type: "image", url: "stories/pavel/general1.jpg" },  // Фото
                        { type: "image", url: "stories/pavel/general2.jpg" },  // Фото
                        { type: "video", url: "stories/pavel/general1.mp4" }    // Видео
                    ]
                },
                study: {  // Категория "Учёба"
                    title: "📚 Учёба",
                    media: [
                        { type: "image", url: "stories/pavel/study1.jpg" },
                        { type: "video", url: "stories/pavel/study1.mp4" }
                    ]
                },
                sport: {  // Категория "Спорт"
                    title: "⚽ Спорт",
                    media: [
                        { type: "image", url: "stories/pavel/sport1.jpg" },
                        { type: "image", url: "stories/pavel/sport2.jpg" }
                    ]
                },
                hobby: {  // Категория "Хобби"
                    title: "🎨 Хобби",
                    media: [
                        { type: "image", url: "stories/pavel/hobby1.jpg" },
                        { type: "image", url: "stories/pavel/hobby2.jpg" },
                        { type: "video", url: "stories/pavel/hobby1.mp4" },
                        { type: "image", url: "stories/pavel/hobby3.jpg" }
                    ]
                },
                music: {  // Категория "Музыка" (содержит треки вместо медиа)
                    title: "🎧 Музыка",
                    tracks: [  // Массив аудиотреков
                        { name: "Joey Valence & Brae - HOOLIGANG", url: "music/pavel/HOOLIGANG.mp3", cover: "covers/pavel/HOOLIGANG.jpg" },
                        { name: "Scorpions - Rock You Like a Hurricane", url: "music/pavel/hurricane.mp3", cover: "covers/pavel/hurricane.jpg" },
                        { name: "Serge Devant, Hadley - Addicted", url: "music/pavel/Addicted.mp3", cover: "covers/pavel/Addicted.jpg" },
                        { name: "2hollis - two bad", url: "music/pavel/two_bad.mp3", cover: "covers/pavel/two_bad.jpg" },
                        { name: "Kendrick Lamar, LEFTY GUNPLAY - tv off", url: "music/pavel/tv_off.mp3", cover: "covers/pavel/tv_off.jpg" }
                    ]
                }
            }
        },
        // ========== УЧАСТНИК 2: Комлев Кирилл ==========
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
                general: { title: "📖 О себе", media: [] },  // Пустые массивы = нет контента
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
        // ========== УЧАСТНИК 3: Байтуллин Илья ==========
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
        // ========== УЧАСТНИК 4: Ковкова Полина ==========
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
        // ========== УЧАСТНИК 5: Грибовская Ксения ==========
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

// ============================================================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================================================

let currentStudentId = null;        // ID текущего открытого студента (null = главная)
let currentMediaModal = null;        // Ссылка на текущее открытое медиа-модальное окно
let currentMediaList = [];            // Массив текущих медиа-файлов (фото/видео)
let currentMediaIndex = 0;            // Индекс текущего отображаемого медиа-файла
let mediaTimer = null;                // ID таймера для автоматического переключения слайдов

// ГЛОБАЛЬНЫЙ ПЛЕЕР - единый для всего сайта
let globalAudio = null;               // Глобальный объект Audio (один на весь сайт)
let currentTrackListGlobal = [];      // Текущий плейлист в глобальном плеере
let currentTrackIndexGlobal = 0;      // Индекс текущего трека в глобальном плеере
let isGlobalPlayerInitialized = false;// Флаг: инициализирован ли плеер
let wasAudioPlayingBeforeMedia = false;// Флаг: играла ли музыка до открытия медиа

const app = document.getElementById("app");  // Главный контейнер приложения

// ============================================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================================

// Находит объект студента по его ID (используем find для поиска в массиве)
function getStudentById(id) {
    return teamData.members.find(m => m.id === id);
}

// Экранирует HTML-символы для безопасной вставки (защита от XSS-атак)
function escapeHtml(str) {
    if (!str) return '';  // Если строка пустая - возвращаем пустую строку
    // Заменяем опасные символы на HTML-сущности
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';   // Амперсанд -> &amp;
        if (m === '<') return '&lt;';    // Знак "меньше" -> &lt;
        if (m === '>') return '&gt;';    // Знак "больше" -> &gt;
        return m;
    });
}

// Извлекает название трека из строки "Исполнитель - Название"
function getTrackName(fullName) {
    const dashIndex = fullName.indexOf(' - ');  // Ищем позицию " - "
    if (dashIndex === -1) return fullName;      // Если нет - возвращаем всю строку
    return fullName.substring(dashIndex + 3);   // Возвращаем часть после " - " (название)
}

// Извлекает имя исполнителя из строки "Исполнитель - Название"
function getArtistName(fullName) {
    const dashIndex = fullName.indexOf(' - ');  // Ищем позицию " - "
    if (dashIndex === -1) return "МатМех";      // Если нет - возвращаем "МатМех"
    return fullName.substring(0, dashIndex);    // Возвращаем часть до " - " (исполнитель)
}

// Сравнивает два плейлиста по URL треков (а не по ссылке на массив)
function arePlaylistsEqual(playlist1, playlist2) {
    if (!playlist1 || !playlist2) return false;  // Если один из них null/undefined - не равны
    if (playlist1.length !== playlist2.length) return false;  // Разная длина - не равны
    for (let i = 0; i < playlist1.length; i++) {  // Проходим по всем трекам
        if (playlist1[i].url !== playlist2[i].url) return false;  // Сравниваем URL
    }
    return true;  // Все URL совпадают - плейлисты равны
}

// ============================================================================
// СОХРАНЕНИЕ СОСТОЯНИЯ
// ============================================================================

// Сохраняет всё текущее состояние приложения в localStorage
function saveFullState() {
    try {
        // Определяем, какой плейлист сейчас открыт (по ID студента)
        let openPlaylistStudentId = null;
        if (window.currentPlaylistTracks && window.currentPlaylistTracks.length > 0) {
            // Перебираем всех участников команды
            for (const member of teamData.members) {
                // Сравниваем открытый плейлист с плейлистом участника
                if (arePlaylistsEqual(member.categories.music.tracks, window.currentPlaylistTracks)) {
                    openPlaylistStudentId = member.id;  // Нашли - запоминаем ID
                    break;
                }
            }
        }
        
        // Формируем объект состояния
        const state = {
            currentTrackIndex: currentTrackIndexGlobal,           // Индекс текущего трека
            currentTime: globalAudio ? globalAudio.currentTime : 0, // Текущее время воспроизведения
            tracks: currentTrackListGlobal,                        // Весь плейлист
            currentStudentId: currentStudentId,                    // ID открытого студента
            openPlaylistStudentId: openPlaylistStudentId,          // ID студента с открытым плейлистом
            timestamp: Date.now()                                   // Время сохранения (для отладки)
        };
        localStorage.setItem('musicPlayerState', JSON.stringify(state));  // Сохраняем как JSON
    } catch(e) {
        console.log('Ошибка сохранения:', e);  // Логируем ошибку
    }
}

// Загружает сохранённое состояние из localStorage
function loadFullState() {
    try {
        const saved = localStorage.getItem('musicPlayerState');  // Читаем из localStorage
        if (!saved) return false;  // Если ничего нет - выходим
        
        const state = JSON.parse(saved);  // Парсим JSON обратно в объект
        if (!state.tracks || state.tracks.length === 0) return false;  // Нет треков - выходим
        
        // Восстанавливаем данные
        currentStudentId = state.currentStudentId;                    // ID студента
        currentTrackListGlobal = state.tracks;                        // Плейлист
        currentTrackIndexGlobal = state.currentTrackIndex;            // Индекс трека
        
        // Если плеер ещё не создан - создаём
        if (!globalAudio) {
            globalAudio = new Audio();            // Создаём объект Audio
            setupAudioEvents();                  // Навешиваем обработчики
            isGlobalPlayerInitialized = true;     // Отмечаем, что плеер инициализирован
        }
        
        // Устанавливаем источник аудио и время воспроизведения
        globalAudio.src = state.tracks[state.currentTrackIndex].url;
        globalAudio.currentTime = state.currentTime || 0;
        globalAudio.pause();  // Ставим на паузу (браузеры блокируют авто-воспроизведение)
        
        render();  // Рендерим страницу
        
        // После рендера (через 200 мс) восстанавливаем мини-плеер и плейлист
        setTimeout(() => {
            updateAllPlayerDisplays();      // Обновляем информацию в мини-плеере
            updatePlayButtons();            // Обновляем кнопку Play/Pause
            if (currentTrackListGlobal.length) {
                ensureMiniPlayerVisible();   // Показываем мини-плеер
            }
            
            // Если был открыт плейлист - восстанавливаем его
            if (state.openPlaylistStudentId) {
                const student = getStudentById(state.openPlaylistStudentId);
                if (student && student.categories.music.tracks.length) {
                    const oldModal = document.querySelector('.playlist-modal');  // Ищем старый
                    if (oldModal) oldModal.remove();  // Закрываем старый, если есть
                    setTimeout(() => {
                        restorePlaylistModal(student.categories.music.tracks, student.name);  // Открываем заново
                    }, 100);
                }
            }
        }, 200);
        
        return true;  // Успешно загрузили
    } catch(e) {
        console.log('Ошибка загрузки:', e);
        return false;  // Ошибка загрузки
    }
}

// ============================================================================
// ВОССТАНОВЛЕНИЕ ПЛЕЙЛИСТА ПОСЛЕ ОБНОВЛЕНИЯ
// ============================================================================

// Специальная функция для восстановления открытого плейлиста после перезагрузки
function restorePlaylistModal(tracks, studentName) {
    if (!tracks || tracks.length === 0) return;  // Если нет треков - выходим
    
    window.currentPlaylistTracks = tracks;  // Запоминаем открытый плейлист
    const isSamePlaylist = arePlaylistsEqual(currentTrackListGlobal, tracks);  // Тот же ли плейлист?
    
    // Создаём модальное окно
    const modal = document.createElement('div');
    modal.className = 'playlist-modal';  // CSS-класс для стилизации
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(10px);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Генерируем HTML-содержимое модального окна
    modal.innerHTML = `
        <div style="
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            background: linear-gradient(135deg, #1e1e3a, #15152a);
            border-radius: 2rem;
            padding: 1.5rem;
            border: 1px solid rgba(64,224,208,0.4);
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: white; margin: 0;">🎵 Плейлист ${escapeHtml(studentName)}</h3>
                <button id="closePlaylistBtn" style="
                    background: rgba(64,224,208,0.2);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                ">✕</button>
            </div>
            <div id="trackList">
                ${tracks.map((track, index) => `
                    <div class="playlist-track" data-track-index="${index}" style="
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        padding: 0.75rem;
                        background: ${(isSamePlaylist && index === currentTrackIndexGlobal) ? 
                            (globalAudio && !globalAudio.paused ? 'rgba(64,224,208,0.25)' : 'rgba(64,224,208,0.2)') : 
                            'rgba(255,255,255,0.05)'};
                        border-radius: 1rem;
                        cursor: pointer;
                        margin-bottom: 0.5rem;
                        ${(isSamePlaylist && index === currentTrackIndexGlobal) ? 'border-left: 3px solid #40e0d0;' : ''}
                    ">
                        <div style="width: 50px; height: 50px; border-radius: 0.5rem; overflow: hidden;">
                            <img src="${track.cover}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="flex: 1;">
                            <div style="color: white; font-weight: 500;">${escapeHtml(getTrackName(track.name))}</div>
                            <div style="color: #8b9dc3; font-size: 0.85rem;">${escapeHtml(getArtistName(track.name))}</div>
                        </div>
                        ${(isSamePlaylist && index === currentTrackIndexGlobal) ? `
                            <div class="playing-icon" style="width: 20px; height: 20px;">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M8 5v14l11-7z" fill="#40e0d0"/>
                                </svg>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}  
            </div>
        </div>
    `;
                  //  ^
            // Объединяем все треки в одну строку

    document.body.appendChild(modal);  // Добавляем модальное окно на страницу
    
    // Через 50 мс добавляем класс подсветки для активного трека
    setTimeout(() => {
        if (isSamePlaylist && currentTrackIndexGlobal < tracks.length) {
            const trackToHighlight = document.querySelector(`.playlist-track[data-track-index="${currentTrackIndexGlobal}"]`);
            if (trackToHighlight) {
                if (globalAudio && !globalAudio.paused) {
                    trackToHighlight.classList.add('playing');   // Если играет - класс playing
                } else {
                    trackToHighlight.classList.add('active');     // Если на паузе - класс active
                }
            }
        }
    }, 50);
    
    // Обработчик закрытия по кнопке "✕"
    document.getElementById('closePlaylistBtn').onclick = () => {
        modal.remove();                       // Удаляем модальное окно
        window.currentPlaylistTracks = null; // Сбрасываем открытый плейлист
        saveFullState();                     // Сохраняем состояние
    };
    
    // Обработчик закрытия по клику на фон (вне модального окна)
    modal.onclick = (e) => {
        if (e.target === modal) {            // Если кликнули именно на фон
            modal.remove();
            window.currentPlaylistTracks = null;
            saveFullState();
        }
    };
    
    // Обработчики клика по каждому треку в плейлисте
    document.querySelectorAll('.playlist-track').forEach(el => {
        el.onclick = (e) => {
            e.stopPropagation();  // Останавливаем всплытие (чтобы не закрылось окно)
            const index = parseInt(el.getAttribute('data-track-index'));  // Получаем индекс
            if (isNaN(index)) return;  // Если не число - выходим
            
            if (isSamePlaylist && index === currentTrackIndexGlobal) {
                // Если кликнули на ТЕКУЩИЙ трек - переключаем паузу/воспроизведение
                if (globalAudio.paused) {
                    globalAudio.play().catch(e => console.log(e));  // Воспроизводим
                } else {
                    globalAudio.pause();  // Ставим на паузу
                }
            } else {
                // Если кликнули на ДРУГОЙ трек - переключаем на него
                currentTrackListGlobal = tracks;                      // Меняем глобальный плейлист

                // СКРЫВАЕМ СООБЩЕНИЕ "трек из другого плейлиста", если оно есть
                const otherPlaylistMsg = modal.querySelector('.other-playlist-msg');
                if (otherPlaylistMsg) {
                    otherPlaylistMsg.style.display = 'none';
                }

                currentTrackIndexGlobal = index;                      // Меняем индекс
                globalAudio.src = tracks[index].url;                  // Загружаем новый трек
                globalAudio.play().catch(e => console.log(e));        // Начинаем воспроизведение
                updateAllPlayerDisplays();  // Обновляем мини-плеер
                updatePlayButtons();        // Обновляем кнопки
                updateMiniProgress();       // Обновляем прогресс-бар
                
                // Обновляем подсветку всех треков в плейлисте
                document.querySelectorAll('.playlist-track').forEach((track, i) => {
                    const icon = track.querySelector('.playing-icon');
                    if (icon) icon.remove();          // Удаляем старую иконку
                    track.style.background = 'rgba(255,255,255,0.05)';  // Сбрасываем фон
                    track.style.borderLeft = '';      // Сбрасываем border
                    track.classList.remove('active', 'playing');  // Удаляем классы
                    
                    if (i === index) {  // Подсвечиваем выбранный трек
                        track.style.background = 'rgba(64,224,208,0.25)';
                        track.style.borderLeft = '3px solid #40e0d0';
                        track.classList.add('playing');  // Добавляем класс playing
                        const newIcon = document.createElement('div');
                        newIcon.className = 'playing-icon';
                        newIcon.style.cssText = 'width:20px;height:20px;margin-left:auto;';
                        newIcon.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="#40e0d0"/></svg>';
                        track.appendChild(newIcon);  // Добавляем иконку
                    }
                });
            }
            saveFullState();  // Сохраняем состояние после каждого действия
        };
    });
}

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ ПЛЕЕРА (НАСТРОЙКА СОБЫТИЙ)
// ============================================================================

// Навешивает обработчики событий на глобальный аудиоплеер
function setupAudioEvents() {
    if (!globalAudio) return;  // Если плеера нет - выходим
    
    // Удаляем старые обработчики (чтобы не было дублей при повторных вызовах)
    globalAudio.removeEventListener('play', handleAudioPlay);
    globalAudio.removeEventListener('pause', handleAudioPause);
    globalAudio.removeEventListener('timeupdate', handleAudioTimeUpdate);
    globalAudio.removeEventListener('ended', handleAudioEnded);
    globalAudio.removeEventListener('loadedmetadata', handleAudioLoadedMetadata);
    
    // Добавляем новые обработчики
    globalAudio.addEventListener('play', handleAudioPlay);              // Начало воспроизведения
    globalAudio.addEventListener('pause', handleAudioPause);            // Пауза
    globalAudio.addEventListener('timeupdate', handleAudioTimeUpdate);  // Обновление времени
    globalAudio.addEventListener('ended', handleAudioEnded);            // Конец трека
    globalAudio.addEventListener('loadedmetadata', handleAudioLoadedMetadata); // Загружены метаданные
}

// Обработчик: загружены метаданные (длительность трека)
function handleAudioLoadedMetadata() {
    updateMiniProgress();  // Обновляем прогресс-бар (теперь известна длительность)
    saveFullState();       // Сохраняем состояние
}

// Обработчик: началось воспроизведение
function handleAudioPlay() {
    updatePlayButtons();
    ensureMiniPlayerVisible();
    updatePlaylistHighlight();  // Обновляем подсветку (active -> playing)
    saveFullState();
}

// Обработчик: поставили на паузу
function handleAudioPause() {
    updatePlayButtons();
    updatePlaylistHighlight();  // Обновляем подсветку (playing -> active)
    saveFullState();
}


// Обработчик: обновилось время
function handleAudioTimeUpdate() {
    updateMiniProgress();
    saveFullState();
}

// Обработчик: трек закончился
function handleAudioEnded() {
    if (currentTrackListGlobal.length) {
        const nextIndex = (currentTrackIndexGlobal + 1) % currentTrackListGlobal.length;
        switchTrack(nextIndex, true);
    }
}

// ============================================================================
// ОБНОВЛЕНИЕ ОТОБРАЖЕНИЯ ПЛЕЕРА
// ============================================================================

// Обновляет информацию в мини-плеере (обложка, название, исполнитель)
function updateAllPlayerDisplays() {
    if (!currentTrackListGlobal.length || currentTrackIndexGlobal >= currentTrackListGlobal.length) return;
    const track = currentTrackListGlobal[currentTrackIndexGlobal];  // Текущий трек
    
    const miniCover = document.getElementById('miniPlayerCover');
    const miniTitle = document.getElementById('miniPlayerTitle');
    const miniArtist = document.getElementById('miniPlayerArtist');
    
    if (miniCover) miniCover.src = track.cover;                     // Устанавливаем обложку
    if (miniTitle) miniTitle.textContent = getTrackName(track.name); // Устанавливаем название
    if (miniArtist) miniArtist.textContent = getArtistName(track.name); // Устанавливаем исполнителя
}

// Обновляет прогресс-бар в мини-плеере
function updateMiniProgress() {
    const miniProgressFill = document.querySelector('.mini-player-progress-fill');
    const miniProgressThumb = document.querySelector('.mini-player-progress-thumb');
    
    if (miniProgressFill && globalAudio && globalAudio.duration && globalAudio.duration > 0) {
        // Вычисляем процент прошедшего времени
        const percent = (globalAudio.currentTime / globalAudio.duration) * 100;
        miniProgressFill.style.width = percent + '%';          // Устанавливаем ширину заливки
        if (miniProgressThumb) miniProgressThumb.style.left = percent + '%';  // Перемещаем ползунок
    }
}

// Обновляет кнопку Play/Pause в мини-плеере (меняет иконку)
function updatePlayButtons() {
    const isPaused = !globalAudio || globalAudio.paused;  // Проверяем, на паузе ли
    
    const miniPlayBtn = document.getElementById('miniPlayerPlay');
    if (miniPlayBtn) {
        const svg = miniPlayBtn.querySelector('svg');
        if (svg) {
            // Меняем иконку в зависимости от состояния
            svg.innerHTML = isPaused 
                ? '<path d="M8 5v14l11-7z" fill="#40e0d0"/>'      // Иконка Play (треугольник)
                : '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#40e0d0"/>'; // Иконка Pause (две палочки)
        }
    }
}


// ============================================================================
// ФУНКЦИЯ ОБНОВЛЕНИЯ ПОДСВЕТКИ ПЛЕЙЛИСТА
// ============================================================================

// Обновляет подсветку в открытом плейлисте
function updatePlaylistHighlight() {
    const trackElements = document.querySelectorAll('.playlist-track');
    if (trackElements.length === 0) return;  // Нет открытого плейлиста - выходим
    
    // Проверяем, совпадает ли открытый плейлист с текущим
    const isCurrentPlaylist = arePlaylistsEqual(window.currentPlaylistTracks, currentTrackListGlobal);
    const isPlaying = globalAudio && !globalAudio.paused;
    
    // Проходим по всем трекам в плейлисте
    trackElements.forEach((el, i) => {
        // Удаляем старые классы
        el.classList.remove('active', 'playing');
        
        // Удаляем старую иконку
        const oldIcon = el.querySelector('.playing-icon');
        if (oldIcon) oldIcon.remove();
        
        // Если это текущий трек и плейлист совпадает
        if (isCurrentPlaylist && i === currentTrackIndexGlobal) {
            // Добавляем правильный класс
            if (isPlaying) {
                el.classList.add('playing');   // Играет - класс playing (с пульсацией)
                el.style.background = 'rgba(64,224,208,0.25)';
            } else {
                el.classList.add('active');     // На паузе - класс active (просто подсветка)
                el.style.background = 'rgba(64,224,208,0.2)';
            }
            el.style.borderLeft = '3px solid #40e0d0';
            
            // Добавляем иконку play
            const iconDiv = document.createElement('div');
            iconDiv.className = 'playing-icon';
            iconDiv.style.cssText = 'width:20px;height:20px;margin-left:auto;';
            iconDiv.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="#40e0d0"/></svg>';
            el.appendChild(iconDiv);
        } else {
            // Сбрасываем стили для неактивных треков
            el.style.background = 'rgba(255,255,255,0.05)';
            el.style.borderLeft = '';
        }
    });
}




// Переключает на указанный трек
// Переключает на указанный трек
function switchTrack(newIndex, keepPlaying) {
    if (!currentTrackListGlobal.length) return;
    
    const wasPlaying = keepPlaying && globalAudio && !globalAudio.paused;
    
    currentTrackIndexGlobal = newIndex;
    globalAudio.src = currentTrackListGlobal[newIndex].url;
    
    if (wasPlaying) {
        const playPromise = globalAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.log('Ошибка:', e));
        }
    }
    
    // Обновляем интерфейс
    updateAllPlayerDisplays();
    updatePlayButtons();
    updateMiniProgress();
    
    // КРИТИЧЕСКИ ВАЖНО: обновляем подсветку в открытом плейлисте
    updatePlaylistHighlight();
    
    saveFullState();
}

// ============================================================================
// МИНИ-ПЛЕЕР (СОЗДАНИЕ И ОБРАБОТЧИКИ)
// ============================================================================

// Создаёт HTML-элемент мини-плеера и добавляет его на страницу
function createMiniPlayerElement() {
    const miniPlayer = document.createElement('div');
    miniPlayer.className = 'mini-player';  // CSS-класс для стилизации
    
    // HTML-структура мини-плеера
    miniPlayer.innerHTML = `
        <div class="mini-player-progress-container">
            <div class="mini-player-progress-bar">
                <div class="mini-player-progress-fill"></div>
                <div class="mini-player-progress-thumb"></div>
            </div>
        </div>
        <div class="mini-player-cover">
            <img id="miniPlayerCover" src="" alt="Обложка">
        </div>
        <div class="mini-player-info">
            <div class="mini-player-title" id="miniPlayerTitle">-</div>
            <div class="mini-player-artist" id="miniPlayerArtist">-</div>
        </div>
        <div class="mini-player-controls">
            <button class="mini-player-btn" id="miniPlayerPrev">
                <svg viewBox="0 0 24 24" width="24" height="24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="#cbd5e1"/></svg>
            </button>
            <button class="mini-player-btn mini-player-play" id="miniPlayerPlay">
                <svg viewBox="0 0 24 24" width="32" height="32"><path d="M8 5v14l11-7z" fill="#40e0d0"/></svg>
            </button>
            <button class="mini-player-btn" id="miniPlayerNext">
                <svg viewBox="0 0 24 24" width="24" height="24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="#cbd5e1"/></svg>
            </button>
        </div>
        <button class="mini-player-close" id="miniPlayerClose">✕</button>
    `;
    
    document.body.appendChild(miniPlayer);  // Добавляем в DOM
    attachMiniPlayerEvents();               // Навешиваем обработчики
    return miniPlayer;
}

// Навешивает обработчики событий на элементы мини-плеера
function attachMiniPlayerEvents() {
    // Обработчик клика по прогресс-бару (перемотка)
    const container = document.querySelector('.mini-player-progress-container');
    if (container) {
        container.onclick = (e) => {
            if (!globalAudio || !globalAudio.duration) return;  // Нет аудио или длительности
            const rect = container.getBoundingClientRect();     // Получаем координаты элемента
            // Вычисляем процент клика относительно ширины
            const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            globalAudio.currentTime = percent * globalAudio.duration;  // Устанавливаем время
            saveFullState();  // Сохраняем состояние
        };
    }
    
    // Обработчик кнопки Play/Pause
    const playBtn = document.getElementById('miniPlayerPlay');
    if (playBtn) {
        playBtn.onclick = (e) => {
            e.stopPropagation();  // Останавливаем всплытие события
            if (!globalAudio) return;
            if (globalAudio.paused) {
                if (currentTrackListGlobal.length) {
                    globalAudio.play().catch(err => console.log(err));  // Воспроизводим
                }
            } else {
                globalAudio.pause();  // Ставим на паузу
            }
            saveFullState();
        };
    }
    
    // Обработчик кнопки "Предыдущий трек"
    const prevBtn = document.getElementById('miniPlayerPrev');
    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            if (currentTrackListGlobal.length) {
                // Вычисляем индекс предыдущего трека (с зацикливанием)
                const newIndex = (currentTrackIndexGlobal - 1 + currentTrackListGlobal.length) % currentTrackListGlobal.length;
                switchTrack(newIndex, true);  // true = продолжать воспроизведение
            }
        };
    }
    
    // Обработчик кнопки "Следующий трек"
    const nextBtn = document.getElementById('miniPlayerNext');
    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            if (currentTrackListGlobal.length) {
                // Вычисляем индекс следующего трека (с зацикливанием)
                const newIndex = (currentTrackIndexGlobal + 1) % currentTrackListGlobal.length;
                switchTrack(newIndex, true);
            }
        };
    }
    
    // Обработчик кнопки закрытия мини-плеера
    const closeBtn = document.getElementById('miniPlayerClose');
    if (closeBtn) {
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            closeMiniPlayer();  // Закрываем плеер
        };
    }
}

// Закрывает мини-плеер и полностью очищает состояние
function closeMiniPlayer() {
    const miniPlayer = document.querySelector('.mini-player');
    if (miniPlayer) miniPlayer.style.display = 'none';  // Скрываем плеер
    
    if (globalAudio) {
        globalAudio.pause();           // Останавливаем воспроизведение
        currentTrackListGlobal = [];   // Очищаем плейлист
        currentTrackIndexGlobal = 0;   // Сбрасываем индекс
        globalAudio.src = '';           // Очищаем источник аудио
    }
    
    localStorage.removeItem('musicPlayerState');  // Удаляем сохранённое состояние
    saveFullState();  // Сохраняем пустое состояние
}

// Убеждается, что мини-плеер виден (создаёт, если нужно)
function ensureMiniPlayerVisible() {
    if (!globalAudio) return;
    if (!currentTrackListGlobal.length) return;  // Нет треков - не показываем
    
    let miniPlayer = document.querySelector('.mini-player');
    if (!miniPlayer) {
        miniPlayer = createMiniPlayerElement();   // Создаём, если нет
    }
    if (miniPlayer.style.display !== 'flex') {
        miniPlayer.style.display = 'flex';        // Показываем
        updateAllPlayerDisplays();  // Обновляем информацию
        updatePlayButtons();        // Обновляем кнопки
        updateMiniProgress();       // Обновляем прогресс
    }
}

// ============================================================================
// ОТКРЫТИЕ ПЛЕЙЛИСТА (ОБЫЧНОЕ)
// ============================================================================

window.currentPlaylistTracks = null;  // Глобальная переменная для хранения текущего открытого плейлиста

// Открывает модальное окно с плейлистом (при клике на иконку музыки)
function openPlaylistModal(tracks, studentName) {
    if (!tracks || tracks.length === 0) return;  // Нет треков - выходим
    
    window.currentPlaylistTracks = tracks;  // Запоминаем открытый плейлист
    const isSamePlaylist = arePlaylistsEqual(currentTrackListGlobal, tracks);  // Тот же ли плейлист?
    
    // Создаём модальное окно
    const modal = document.createElement('div');
    modal.className = 'playlist-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(10px);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Генерируем HTML-содержимое
    modal.innerHTML = `
        <div style="
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            background: linear-gradient(135deg, #1e1e3a, #15152a);
            border-radius: 2rem;
            padding: 1.5rem;
            border: 1px solid rgba(64,224,208,0.4);
            overflow-y: auto;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: white; margin: 0;">🎵 Плейлист ${escapeHtml(studentName)}</h3>
                <button id="closePlaylistBtn" style="
                    background: rgba(64,224,208,0.2);
                    border: none;
                    color: white;
                    font-size: 24px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                ">✕</button>
            </div>
            <div id="trackList">
                ${tracks.map((track, index) => `
                    <div class="playlist-track" data-track-index="${index}" style="
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        padding: 0.75rem;
                        background: ${(isSamePlaylist && index === currentTrackIndexGlobal) ? 
                            (globalAudio && !globalAudio.paused ? 'rgba(64,224,208,0.25)' : 'rgba(64,224,208,0.2)') : 
                            'rgba(255,255,255,0.05)'};
                        border-radius: 1rem;
                        cursor: pointer;
                        margin-bottom: 0.5rem;
                        ${(isSamePlaylist && index === currentTrackIndexGlobal) ? 'border-left: 3px solid #40e0d0;' : ''}
                    ">
                        <div style="width: 50px; height: 50px; border-radius: 0.5rem; overflow: hidden;">
                            <img src="${track.cover}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="flex: 1;">
                            <div style="color: white; font-weight: 500;">${escapeHtml(getTrackName(track.name))}</div>
                            <div style="color: #8b9dc3; font-size: 0.85rem;">${escapeHtml(getArtistName(track.name))}</div>
                        </div>
                        ${(isSamePlaylist && index === currentTrackIndexGlobal) ? `
                            <div class="playing-icon" style="width: 20px; height: 20px;">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M8 5v14l11-7z" fill="#40e0d0"/>
                                </svg>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            <div class="other-playlist-msg" style="margin-top: 1rem; padding: 0.75rem; background: rgba(64,224,208,0.2); border-radius: 1rem; text-align: center; color: #40e0d0; font-size: 0.85rem; ${(!isSamePlaylist && globalAudio && !globalAudio.paused && currentTrackListGlobal.length) ? '' : 'display: none;'}">
                🎵 Сейчас играет трек из другого плейлиста
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);  // Добавляем на страницу
    
    // Обработчик закрытия по кнопке
    document.getElementById('closePlaylistBtn').onclick = () => {
        modal.remove();
        window.currentPlaylistTracks = null;
        saveFullState();
    };
    
    // Обработчик закрытия по клику на фон
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
            window.currentPlaylistTracks = null;
            saveFullState();
        }
    };
    
    // Обработчики клика по трекам
    document.querySelectorAll('.playlist-track').forEach(el => {
        el.onclick = (e) => {
            e.stopPropagation();
            const index = parseInt(el.getAttribute('data-track-index'));
            if (isNaN(index)) return;
            
            if (isSamePlaylist && index === currentTrackIndexGlobal) {
                // Тот же трек - пауза/плей
                if (globalAudio.paused) {
                    globalAudio.play().catch(e => console.log(e));
                } else {
                    globalAudio.pause();
                }
            } else {
                // Новый трек - переключаем
                currentTrackListGlobal = tracks;
                currentTrackIndexGlobal = index;
                globalAudio.src = tracks[index].url;
                globalAudio.play().catch(e => console.log(e));
                updateAllPlayerDisplays();
                updatePlayButtons();
                updateMiniProgress();
                
                // Обновляем подсветку всех треков
                document.querySelectorAll('.playlist-track').forEach((track, i) => {
                    const icon = track.querySelector('.playing-icon');
                    if (icon) icon.remove();
                    track.style.background = 'rgba(255,255,255,0.05)';
                    track.style.borderLeft = '';
                    track.classList.remove('active', 'playing');
                    
                    if (i === index) {
                        track.style.background = 'rgba(64,224,208,0.25)';
                        track.style.borderLeft = '3px solid #40e0d0';
                        track.classList.add('playing');
                        const newIcon = document.createElement('div');
                        newIcon.className = 'playing-icon';
                        newIcon.style.cssText = 'width:20px;height:20px;margin-left:auto;';
                        newIcon.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="#40e0d0"/></svg>';
                        track.appendChild(newIcon);
                    }
                });
                
                // СКРЫВАЕМ СООБЩЕНИЕ "трек из другого плейлиста", потому что теперь трек из ЭТОГО плейлиста
                const otherPlaylistMsg = modal.querySelector('.other-playlist-msg');
                if (otherPlaylistMsg) {
                    otherPlaylistMsg.style.display = 'none';
                }
            }
            saveFullState();
        };
    });

    updatePlaylistHighlight(); // Обновляем подсветку после переключения
    saveFullState();  // Сохраняем состояние
}

// ============================================================================
// МЕДИА-ПРОСМОТРЩИК (ФОТО И ВИДЕО)
// ============================================================================

// Открывает модальное окно для просмотра фото/видео
function openMediaModal(mediaList, startIndex = 0) {
    if (!mediaList || mediaList.length === 0) return;
    
    const firstMedia = mediaList[startIndex];
    const isVideo = firstMedia && firstMedia.type === 'video';
    
    // Если открываем видео и музыка играла - ставим музыку на паузу
    if (isVideo && globalAudio && !globalAudio.paused) {
        wasAudioPlayingBeforeMedia = true;
        globalAudio.pause();
    } else {
        wasAudioPlayingBeforeMedia = false;
    }
    
    currentMediaList = mediaList;
    currentMediaIndex = startIndex;
    
    // Создаём модальное окно
    const modal = document.createElement('div');
    modal.className = 'media-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:10000;';
    
    modal.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%;">
            <div style="position: absolute; top: 20px; left: 20px; right: 20px; display: flex; gap: 4px; z-index: 20;">
                ${mediaList.map((_, i) => `<div class="media-progress-bar" data-index="${i}" style="flex:1;height:2px;background:rgba(255,255,255,0.3);border-radius:2px;overflow:hidden;">
                    <div class="media-progress-fill" style="width:${i < startIndex ? '100%' : '0%'};height:100%;background:white;"></div>
                </div>`).join('')}
            </div>
            <div id="mediaContent" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:auto;"></div>
            <div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;">
                <div id="mediaPrev" style="flex:1;cursor:pointer;"></div>
                <div id="mediaNext" style="flex:1;cursor:pointer;"></div>
            </div>
            <button id="mediaClose" style="position:absolute;top:20px;right:20px;background:rgba(0,0,0,0.6);border:none;color:white;font-size:24px;width:40px;height:40px;border-radius:50%;cursor:pointer;z-index:20;">✕</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentMediaModal = modal;
    
    // Обработчики
    document.getElementById('mediaClose').addEventListener('click', closeMediaModal);
    document.getElementById('mediaPrev').addEventListener('click', () => navigateMedia(-1));
    document.getElementById('mediaNext').addEventListener('click', () => navigateMedia(1));
    
    // Поддержка свайпов на мобильных устройствах
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

// Показывает конкретный медиа-файл по индексу
function showMediaContent(index) {
    const contentDiv = document.getElementById('mediaContent');
    const media = currentMediaList[index];
    const isVideo = media.type === 'video';
    
    contentDiv.innerHTML = '';
    
    // Обновляем прогресс-бары
    const bars = document.querySelectorAll('.media-progress-bar');
    bars.forEach((bar, i) => {
        const fill = bar.querySelector('.media-progress-fill');
        if (i < index) {
            fill.style.width = '100%';   // Просмотренные
        } else if (i === index) {
            fill.style.width = '0%';     // Текущий (сбросим таймером)
        } else {
            fill.style.width = '0%';     // Будущие
        }
    });
    
    if (isVideo) {
        // Для видео
        if (globalAudio && !globalAudio.paused) {
            wasAudioPlayingBeforeMedia = true;
            globalAudio.pause();
        }
        
        const video = document.createElement('video');
        video.src = media.url;
        video.autoplay = true;
        video.playsInline = true;
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '100%';
        video.style.objectFit = 'contain';
        video.addEventListener('ended', () => navigateMedia(1));  // По окончании - следующий
        
        contentDiv.appendChild(video);
        video.play().catch(e => console.log(e));
    } else {
        // Для фото
        if (wasAudioPlayingBeforeMedia && globalAudio && globalAudio.paused) {
            const playPromise = globalAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log(e));
            }
            wasAudioPlayingBeforeMedia = false;
        }
        
        const img = document.createElement('img');
        img.src = media.url;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'contain';
        img.style.cursor = 'zoom-in';
        
        // Логика зума и панорамирования
        let scale = 1;
        let translateX = 0;
        let translateY = 0;
        let isZoomed = false;
        
        const updateTransform = () => {
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        };
        
        const resetZoom = () => {
            scale = 1;
            translateX = 0;
            translateY = 0;
            isZoomed = false;
            img.style.cursor = 'zoom-in';
            updateTransform();
        };
        
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isZoomed) {
                scale = 2.5;
                isZoomed = true;
                img.style.cursor = 'zoom-out';
                updateTransform();
            } else {
                resetZoom();
            }
        });
        
        let isDragging = false;
        let startX, startY;
        
        const onMouseMove = (e) => {
            if (isDragging && isZoomed) {
                translateX = e.clientX - startX;
                translateY = e.clientY - startY;
                updateTransform();
            }
        };
        
        const onMouseUp = () => {
            isDragging = false;
            if (isZoomed) img.style.cursor = 'zoom-out';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        
        img.addEventListener('mousedown', (e) => {
            if (isZoomed) {
                isDragging = true;
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
                img.style.cursor = 'grabbing';
                e.preventDefault();
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            }
        });
        
        contentDiv.appendChild(img);
    }
}

// Запускает таймер для автоматического переключения слайдов (20 секунд на слайд)
function startMediaTimer() {
    if (mediaTimer) {
        clearInterval(mediaTimer);
        mediaTimer = null;
    }
    
    const duration = 20000;  // 20 секунд
    const activeBar = document.querySelector(`.media-progress-bar[data-index="${currentMediaIndex}"]`);
    if (!activeBar) return;
    
    const fill = activeBar.querySelector('.media-progress-fill');
    let startPercent = parseFloat(fill.style.width) || 0;
    let startTime = Date.now();
    
    mediaTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        let percent = startPercent + (elapsed / duration) * 100;
        
        if (percent >= 100) {
            fill.style.width = '100%';
            clearInterval(mediaTimer);
            mediaTimer = null;
            navigateMedia(1);  // Переключаем на следующий
        } else {
            fill.style.width = percent + '%';
        }
    }, 50);
}

// Переключает на следующий/предыдущий медиа-файл
function navigateMedia(direction) {
    if (mediaTimer) clearInterval(mediaTimer);
    
    const newIndex = currentMediaIndex + direction;
    if (newIndex < 0 || newIndex >= currentMediaList.length) {
        closeMediaModal();  // Если вышли за пределы - закрываем
        return;
    }
    
    const nextMedia = currentMediaList[newIndex];
    const isNextVideo = nextMedia && nextMedia.type === 'video';
    
    if (isNextVideo && globalAudio && !globalAudio.paused) {
        wasAudioPlayingBeforeMedia = true;
        globalAudio.pause();
    }
    else if (!isNextVideo && wasAudioPlayingBeforeMedia && globalAudio && globalAudio.paused) {
        const playPromise = globalAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.log(e));
        }
        wasAudioPlayingBeforeMedia = false;
    }
    
    currentMediaIndex = newIndex;
    showMediaContent(currentMediaIndex);
    startMediaTimer();
}

// Закрывает медиа-просмотрщик
function closeMediaModal() {
    if (mediaTimer) {
        clearInterval(mediaTimer);
        mediaTimer = null;
    }
    
    if (currentMediaModal) {
        currentMediaModal.remove();
        currentMediaModal = null;
    }
    document.removeEventListener('keydown', handleKeydown);
    
    // Восстанавливаем воспроизведение музыки, если оно было
    if (wasAudioPlayingBeforeMedia && globalAudio && globalAudio.paused) {
        const playPromise = globalAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.log('Не удалось восстановить воспроизведение'));
        }
        wasAudioPlayingBeforeMedia = false;
    }
}

// Обрабатывает нажатия клавиш (стрелки, Esc) для навигации
function handleKeydown(e) {
    if (!currentMediaModal && !document.querySelector('.playlist-modal')) return;
    if (currentMediaModal) {
        if (e.key === 'ArrowLeft') navigateMedia(-1);
        if (e.key === 'ArrowRight') navigateMedia(1);
        if (e.key === 'Escape') closeMediaModal();
    }
}

// ============================================================================
// РЕНДЕР СТРАНИЦ
// ============================================================================

// Рендерит главную страницу со списком всех участников
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
                                `<div style="font-size:2rem;font-weight:bold;">${member.photoInitials}</div>`
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

// Рендерит страницу выбранного студента
function renderStudentPage() {
    const student = getStudentById(currentStudentId);
    if (!student) return renderMainPage();  // Если студент не найден - возвращаем главную
    
    const categoryKeys = ['general', 'study', 'sport', 'hobby', 'music'];  // Порядок категорий
    const gallery = student.gallery || [];  // Галерея фото
    const icons = { general: '📖', study: '📚', sport: '⚽', hobby: '🎨', music: '🎧' };
    
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
                        `<div style="font-size:2rem;font-weight:bold;">${student.photoInitials}</div>`
                    }
                </div>
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <div class="contacts">${student.contacts || ''}</div>
                </div>
            </div>
            
            <div class="categories-circle-grid">
                ${categoryKeys.map(key => {
                    const cat = student.categories[key];
                    const hasContent = key === 'music' ? 
                        (cat.tracks && cat.tracks.length > 0) : 
                        (cat.media && cat.media.length > 0);
                    return `
                        <div class="category-circle" data-category="${key}" ${!hasContent ? 'style="opacity:0.5;"' : ''}>
                            <div class="category-circle-ring">
                                <div class="category-circle-inner">${icons[key]}</div>
                            </div>
                            <span class="category-circle-title">${cat.title}</span>
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

// Навешивает обработчики событий после рендера страницы
function attachEventListeners() {
    // Обработчики для карточек участников (переход на страницу студента)
    document.querySelectorAll('.card[data-student-id]').forEach(card => {
        card.addEventListener('click', () => {
            currentStudentId = card.getAttribute('data-student-id');  // Запоминаем ID
            render();                    // Перерисовываем страницу
            saveFullState();             // Сохраняем состояние
        });
    });
    
    // Обработчики для кнопки "На главную"
    document.querySelectorAll('[data-nav="main"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();          // Отменяем стандартное поведение ссылки
            currentStudentId = null;     // Сбрасываем ID (возврат на главную)
            render();                    // Перерисовываем
            saveFullState();             // Сохраняем состояние
        });
    });
    
    // Обработчики для кружков категорий (открытие медиа или плейлиста)
    document.querySelectorAll('.category-circle').forEach(circle => {
        circle.addEventListener('click', () => {
            const categoryKey = circle.getAttribute('data-category');  // Категория
            const student = getStudentById(currentStudentId);
            
            if (categoryKey === 'music') {
                // Для музыки - открываем плейлист
                const tracks = student.categories.music.tracks;
                if (tracks && tracks.length > 0) {
                    const oldModal = document.querySelector('.playlist-modal');
                    if (oldModal) oldModal.remove();  // Закрываем старый плейлист
                    openPlaylistModal(tracks, student.name);
                }
            } else {
                // Для остальных категорий - открываем медиа-просмотрщик
                const mediaList = student.categories[categoryKey]?.media;
                if (mediaList && mediaList.length > 0) {
                    openMediaModal(mediaList, 0);
                }
            }
        });
    });
    
    // Обработчики для элементов галереи (открытие фото в медиа-просмотрщике)
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const photoUrl = item.getAttribute('data-photo');
            openMediaModal([{ type: 'image', url: photoUrl }], 0);  // Массив с одним фото
        });
    });
}

// Главная функция рендера - выбирает, какую страницу показывать
function render() {
    if (currentStudentId === null) {
        app.innerHTML = renderMainPage();       // Показываем главную страницу
    } else {
        app.innerHTML = renderStudentPage();    // Показываем страницу студента
    }
    attachEventListeners();  // Навешиваем обработчики
    
    // После рендера обновляем плеер (через 50 мс для стабильности)
    setTimeout(() => {
        updateAllPlayerDisplays();
        updatePlayButtons();
        if (currentTrackListGlobal.length) {
            ensureMiniPlayerVisible();  // Показываем мини-плеер, если есть треки
        }
        updatePlaylistHighlight();  // Обновляем подсветку после рендера
        saveFullState();  // Сохраняем состояние
    }, 50);
}

// ============================================================================
// ЗАПУСК ПРИЛОЖЕНИЯ
// ============================================================================

// Инициализирует глобальный плеер и загружает сохранённое состояние
function initGlobalPlayer() {
    if (isGlobalPlayerInitialized) return;  // Уже инициализирован - выходим
    
    globalAudio = new Audio();          // Создаём объект Audio
    setupAudioEvents();                // Навешиваем обработчики
    isGlobalPlayerInitialized = true;   // Отмечаем, что инициализация завершена
    
    const loaded = loadFullState();     // Пытаемся загрузить сохранённое состояние
    if (!loaded) {
        render();                       // Если ничего не загрузилось - просто рендерим
    }
}

// Запускаем всё после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initGlobalPlayer();
});

// Каждые 100 миллисекунд обновляем прогресс-бар (для плавной анимации)
setInterval(() => {
    updateMiniProgress();
}, 100);

// Перед закрытием страницы сохраняем состояние
window.addEventListener('beforeunload', () => {
    saveFullState();
});
