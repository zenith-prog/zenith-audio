document.addEventListener('DOMContentLoaded', () => {
    // --- DATEN ---
    const digitalDetoxCourse = [
        { day: 1, title: "Der erste Griff am Morgen", task: "Warte morgen früh bewusst 5 Minuten nach dem Aufwachen, bevor du auf einen Bildschirm schaust.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 2, title: "Der Phantom-Griff", task: "Lege dein Handy heute bei der Arbeit oder zu Hause mit dem Bildschirm nach unten.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 3, title: "Die Scroll-Hypnose", task: "Bevor du heute eine Social-Media-App öffnest, halte kurz inne und frage dich: 'Was will ich hier eigentlich gerade?'", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 4, title: "Die Benachrichtigungs-Falle", task: "Schalte für eine Stunde alle Benachrichtigungen aus, außer Anrufe.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 5, title: "Emotionale Trigger", task: "Notiere dir heute (auf Papier!), in welcher emotionalen Verfassung du warst, als du ziellos zum Handy gegriffen hast.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 6, title: "Der Vergleichs-Effekt", task: "Entfolge heute einem Account, bei dem du dich nach dem Ansehen seiner Inhalte regelmäßig schlechter fühlst.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 7, title: "Wochenreflexion", task: "Schreibe drei Dinge auf, die dich in dieser Woche am meisten an deinem Nutzungsverhalten überrascht haben.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 8, title: "Das schlafende Handy", task: "Lade dein Handy heute Nacht außerhalb deines Schlafzimmers. Benutze einen klassischen Wecker.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 9, title: "Bildschirmfreie Mahlzeiten", task: "Iss heute mindestens eine Mahlzeit komplett ohne Bildschirm.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 10, title: "Die 5-Minuten-Regel", task: "Wende die 5-Minuten-Regel heute mindestens einmal an, bevor du eine Social-Media- oder News-App öffnest.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 11, title: "Entrümpel deinen Startbildschirm", task: "Reduziere deinen Startbildschirm auf die absolut notwendigen Werkzeug-Apps.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 12, title: "Der bewusste Spaziergang", task: "Mache heute einen 15-minütigen Spaziergang und lasse dein Handy bewusst in der Tasche.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 13, title: "'Bitte nicht stören' als Superkraft", task: "Nutze heute für eine 45-minütige Arbeits- oder Lernphase aktiv den 'Nicht stören'-Modus.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 14, title: "Wochenreflexion", task: "Welche der Regeln dieser Woche fiel dir am leichtesten, welche am schwersten? Überlege, warum.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 15, title: "Die Langeweile neu entdecken", task: "Setze dich heute für 5 Minuten an einen Ort ohne jegliche Ablenkung und tu nichts.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 16, title: "Ein altes Hobby wiederbeleben", task: "Verbringe heute 20 Minuten mit einem Hobby, das nichts mit einem Bildschirm zu tun hat.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 17, title: "Echte Gespräche", task: "Rufe heute einen Freund oder ein Familienmitglied an, anstatt eine Nachricht zu schreiben.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 18, title: "Lesen auf Papier", task: "Lies heute 15 Seiten in einem physischen Buch oder Artikel.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 19, title: "Natur als Gegenmittel", task: "Verbringe 20 Minuten bewusst in der Natur.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 20, title: "Kreativität ohne Bildschirm", task: "Koche ein neues Rezept, schreibe einen Tagebucheintrag oder zeichne etwas – Hauptsache, es ist analog.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 21, title: "Wochenreflexion", task: "Was hat dir diese Woche am meisten Freude bereitet? Plane diese Aktivität auch in der nächsten Woche fest ein.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 22, title: "Der digitale Werkzeugkasten", task: "Gehe durch deine Apps und frage dich bei jeder: 'Welchen positiven Zweck erfüllt diese App?'", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 23, title: "Plane deine Online-Zeit", task: "Definiere für morgen zwei feste 'Online-Fenster' und versuche, dich daran zu halten.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 24, title: "Der wöchentliche Mini-Detox", task: "Plane für das kommende Wochenende einen Zeitraum von 3-4 Stunden, in dem du dein Handy komplett ausschaltest.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 25, title: "Sei ein Vorbild", task: "Achte beim nächsten Treffen mit anderen Menschen bewusst darauf, präsent zu sein.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 26, title: "Umgang mit Rückfällen", task: "Entwickle einen kleinen 'Notfallplan' für deine größte Herausforderung.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 27, title: "Die Freude am Verpassen (JOMO)", task: "Sage heute bewusst 'Nein' zu einer digitalen Ablenkung und genieße das Gefühl der Ruhe.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 28, title: "Integration Tag 1", task: "Wähle die für dich wirkungsvollste Übung aus Woche 1 und wiederhole sie heute.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 29, title: "Integration Tag 2", task: "Wähle die für dich wirkungsvollste Übung aus Woche 2 und wiederhole sie heute.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 30, title: "Dein neuer Weg", task: "Wähle die für dich wirkungsvollste Übung aus Woche 3 und mache sie zu einem festen Bestandteil deines Lebens.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" }
    ];
    const pragmaticCourse = [
        { day: 1, title: "Fokus vor dem Meeting", duration: 300, task: "Schließe für 3 Minuten die Augen und konzentriere dich nur auf deinen Atem. Bereite dich mental auf das Gespräch vor.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/11/22/audio_2c4a896470.mp3", voiceGender: "male" },
        { day: 2, title: "Stressabbau am Schreibtisch", duration: 180, task: "Mache eine 3-minütige Pause. Steh auf, strecke dich und atme fünfmal tief ein und aus.", audioUrl: "https://cdn.pixabay.com/download/audio/2022/08/03/audio_504a2353a2.mp3", voiceGender: "male" },
        { day: 3, title: "Klarer Kopf für den Feierabend", duration: 420, task: "Beende deinen Arbeitstag bewusst. Schließe alle Tabs, schreibe eine kurze To-Do-Liste für morgen und nimm dir dann 5 Minuten Zeit, um an etwas völlig anderes zu denken.", audioUrl: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_3e6a4a5747.mp3", voiceGender: "male" },
    ];
    const durationOptions = [ { duration: 60, label: '1 Min' }, { duration: 300, label: '5 Min' }, { duration: 600, label: '10 Min' }, { duration: 900, label: '15 Min' }, ];
    const ambientSounds = [ { id: 'rain', name: 'Regen', icon: '🌧️', url: 'https://cdn.pixabay.com/download/audio/2022/03/24/audio_1e3f2f6a3f.mp3' }, { id: 'forest', name: 'Wald', icon: '🌲', url: 'https://cdn.pixabay.com/download/audio/2022/02/04/audio_4c0d0f6b3a.mp3' }, { id: 'ocean', name: 'Ozean', icon: '🌊', url: 'https://cdn.pixabay.com/download/audio/2021/09/22/audio_1a9f0f3e4f.mp3' }, ];

    // --- ZUSTAND & DOM ---
    const appState = {
        currentDuration: 60, timeRemaining: 60, isRunning: false, selectedSoundId: 'rain',
        totalSessions: 0, totalMinutes: 0, currentStreak: 0, longestStreak: 0,
        lastSessionDate: null, sessionHistory: [], timerInterval: null,
        breathingInterval: null, currentAudio: new Audio(), courseProgress: {}, pragmaticProgress: {},
        selectedVoiceGender: 'male', // Standard: männliche Stimme
    };
    const dom = {};

    // --- NAVIGATION & UI ---
    function navigateTo(pageId) {
        Object.values(dom.pages).forEach(p => p.classList.remove('active'));
        dom.pages[pageId].classList.add('active');
        if (['home-page', 'discover-page', 'profile-page'].includes(pageId)) {
            if (pageId === 'discover-page') showDiscoverMenu();
            dom.navButtons.forEach(b => b.classList.toggle('active', b.dataset.page === pageId));
        }
    }
    function showDiscoverMenu() {
        dom.discoverMenu.style.display = 'flex';
        dom.digitalDetoxContainer.style.display = 'none';
        dom.pragmaticCourseContainer.style.display = 'none';
        dom.freePracticeContainer.style.display = 'none';
    }
    function showDetoxCourse() {
        dom.discoverMenu.style.display = 'none';
        dom.digitalDetoxContainer.style.display = 'block';
        renderDigitalDetoxCourse();
        updateVoiceButtons('detox');
    }
    function showPragmaticCourse() {
        dom.discoverMenu.style.display = 'none';
        dom.pragmaticCourseContainer.style.display = 'block';
        renderPragmaticCourse();
        updateVoiceButtons('pragmatic');
    }
    function showFreePracticeSetup() {
        dom.discoverMenu.style.display = 'none';
        dom.freePracticeContainer.style.display = 'block';
        renderDurationOptions();
        renderSoundOptions();
    }
    // Funktion zum Aktualisieren der Stimmenauswahl-Buttons
    function updateVoiceButtons(courseType) {
        const isMale = appState.selectedVoiceGender === 'male';
        if (courseType === 'detox') {
            dom.detoxVoiceMale.classList.toggle('active', isMale);
            dom.detoxVoiceFemale.classList.toggle('active', !isMale);
        } else if (courseType === 'pragmatic') {
            dom.pragmaticVoiceMale.classList.toggle('active', isMale);
            dom.pragmaticVoiceFemale.classList.toggle('active', !isMale);
        }
    }
    function setDarkMode(isDark) {
        dom.appWrapper.classList.toggle('dark-mode', isDark);
        dom.themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('zenith_theme', isDark ? 'dark' : 'light');
    }

    // --- RENDER-FUNKTIONEN ---
    function renderAll() {
        renderHomePage();
        renderDigitalDetoxCourse();
        renderPragmaticCourse();
        updateStats();
    }
    function renderHomePage() {
        dom.sessionTitle.textContent = "Freie Meditation";
        dom.sessionSubtitle.textContent = "Dauer & Klang frei wählen";
        dom.timeDisplay.textContent = formatTime(appState.timeRemaining);
    }
    function renderDigitalDetoxCourse() {
        dom.detoxCourseList.innerHTML = '';
        digitalDetoxCourse.forEach(day => {
            const isCompleted = appState.courseProgress[day.day] || false;
            const item = document.createElement('div');
            item.className = 'course-day-item';
            if (isCompleted) item.classList.add('completed');
            item.innerHTML = `<div class="course-day-number">${day.day}</div><div class="course-day-title">${day.title}</div>${isCompleted ? '<div class="course-day-check">✓</div>' : ''}`;
            item.onclick = () => openCourseDay(day, 'detox');
            dom.detoxCourseList.appendChild(item);
        });
    }
    function renderPragmaticCourse() {
        dom.pragmaticCourseList.innerHTML = '';
        pragmaticCourse.forEach(day => {
            const isCompleted = appState.pragmaticProgress[day.day] || false;
            const item = document.createElement('div');
            item.className = 'course-day-item';
            if (isCompleted) item.classList.add('completed');
            item.innerHTML = `<div class="course-day-number">💼</div><div class="course-day-title">${day.title}</div>${isCompleted ? '<div class="course-day-check">✓</div>' : ''}`;
            item.onclick = () => openCourseDay(day, 'pragmatic');
            dom.pragmaticCourseList.appendChild(item);
        });
    }
    function renderDurationOptions() {
        dom.durationGrid.innerHTML = '';
        durationOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'duration-btn';
            if (opt.duration === appState.currentDuration) btn.classList.add('active');
            btn.textContent = opt.label;
            btn.onclick = () => { appState.currentDuration = opt.duration; renderDurationOptions(); };
            dom.durationGrid.appendChild(btn);
        });
    }
    function renderSoundOptions() {
        dom.soundGrid.innerHTML = '';
        ambientSounds.forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'sound-btn';
            if (s.id === appState.selectedSoundId) btn.classList.add('active');
            btn.innerHTML = `${s.icon} ${s.name}`;
            btn.onclick = () => { appState.selectedSoundId = s.id; renderSoundOptions(); };
            dom.soundGrid.appendChild(btn);
        });
    }
    function renderCalendarHeatmap() {
        const grid = dom.calendarContainer.querySelector('.calendar-grid');
        const header = dom.calendarContainer.querySelector('.calendar-header');
        grid.innerHTML = '';
        header.innerHTML = '<div>So</div><div>Mo</div><div>Di</div><div>Mi</div><div>Do</div><div>Fr</div><div>Sa</div>';
        const today = new Date();
        const year = today.getFullYear(); const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startDayOfWeek = new Date(year, month, 1).getDay();
        for (let i = 0; i < startDayOfWeek; i++) { grid.insertAdjacentHTML('beforeend', '<div class="calendar-day"></div>'); }
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isCompleted = appState.sessionHistory.includes(dateStr);
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            if (isCompleted) dayDiv.classList.add('completed');
            grid.appendChild(dayDiv);
        }
    }

    // --- KURS-LOGIK ---
    // Funktion zum Ändern der Audio-URL basierend auf Stimmenauswahl und Kurs
    function getAudioUrlForVoice(dayData, courseType, voiceGender) {
        let fileName = '';
        if (courseType === 'detox') {
            fileName = voiceGender === 'female'
                ? `F_Tag${dayData.day}.mp3`
                : `Tag${dayData.day}.mp3`;
            return BASE_AUDIO_URL + 'detox/' + fileName;
        } else if (courseType === 'pragmatic') {
            fileName = (voiceGender === 'female' ? 'F_' : 'M_') + dayData.title + '.mp3';
            fileName = fileName.replace(/ /g, '%20');
            return BASE_AUDIO_URL + 'pragmatic/' + fileName;
        }
        return '';
    }
    function openCourseDay(dayData, courseType) {
        dom.courseDayTitle.textContent = dayData.title;
        dom.courseDayTask.textContent = dayData.task;
        const audioUrl = getAudioUrlForVoice(dayData, courseType, appState.selectedVoiceGender);
        appState.currentAudio.src = audioUrl;
        dom.coursePlayBtn.textContent = '▶';
        dom.coursePlayBtn.onclick = () => playCourseAudio();
        const progress = courseType === 'detox' ? appState.courseProgress : appState.pragmaticProgress;
        const isCompleted = progress[dayData.day] || false;
        dom.markAsDoneBtn.textContent = isCompleted ? 'Erledigt' : 'Als erledigt markieren';
        dom.markAsDoneBtn.disabled = isCompleted;
        dom.markAsDoneBtn.onclick = () => {
            if (!isCompleted) markCourseDayAsDone(dayData, courseType);
            navigateTo('discover-page');
        };
        navigateTo('course-day-page');
    }
    function playCourseAudio() {
        if (appState.currentAudio.paused) {
            appState.currentAudio.play();
            dom.coursePlayBtn.textContent = '❚❚';
        } else {
            appState.currentAudio.pause();
            dom.coursePlayBtn.textContent = '▶';
        }
    }
    function markCourseDayAsDone(dayData, courseType) {
        if (courseType === 'detox') {
            appState.courseProgress[dayData.day] = true;
            saveData('zenith_course_progress', appState.courseProgress);
        } else {
            appState.pragmaticProgress[dayData.day] = true;
            saveData('zenith_pragmatic_progress', appState.pragmaticProgress);
        }
        recordSession(dayData.duration || 300);
        renderAll();
    }

    // --- SPEICHERN & LADEN ---
    // --- FIREBASE INITIALISIERUNG ---
    const firebaseConfig = {
        apiKey: "AIzaSyAVlzhvBx7MFMwWeQrWp5V3dFmCTpkM8Yw",
        authDomain: "zenith-meditation-app-v2.firebaseapp.com",
        projectId: "zenith-meditation-app-v2",
        storageBucket: "zenith-meditation-app-v2.firebasestorage.app",
        messagingSenderId: "727206549065",
        appId: "1:727206549065:web:e042071f68508a43a31198",
        measurementId: "G-XYWEQ5ZCZ4"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // --- AUTHENTIFIZIERUNG ---
    let userId = null;
    function showAuthModal(show = true) {
        document.getElementById('authModal').classList.toggle('show', show);
    }
    function setAuthError(msg) {
        document.getElementById('authError').textContent = msg || '';
    }
    function setupAuthHandlers() {
        const emailInput = document.getElementById('authEmail');
        const pwInput = document.getElementById('authPassword');
        document.getElementById('loginBtn').onclick = async () => {
            setAuthError('');
            try {
                const userCred = await firebase.auth().signInWithEmailAndPassword(emailInput.value, pwInput.value);
                userId = userCred.user.uid;
                showAuthModal(false);
                await afterAuth();
            } catch (e) {
                setAuthError('Login fehlgeschlagen: ' + (e.message || e.code));
            }
        };
        document.getElementById('registerBtn').onclick = async () => {
            setAuthError('');
            try {
                const userCred = await firebase.auth().createUserWithEmailAndPassword(emailInput.value, pwInput.value);
                userId = userCred.user.uid;
                showAuthModal(false);
                await afterAuth();
            } catch (e) {
                setAuthError('Registrierung fehlgeschlagen: ' + (e.message || e.code));
            }
        };
        // Logout-Button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.onclick = async () => {
                await firebase.auth().signOut();
                userId = null;
                document.querySelector('.app-wrapper').style.display = 'none';
                showAuthModal(true);
            };
        }
        // Passwort vergessen
        const forgotPwLink = document.getElementById('forgotPwLink');
        if (forgotPwLink) {
            forgotPwLink.onclick = async (e) => {
                e.preventDefault();
                setAuthError('');
                const email = emailInput.value;
                if (!email) {
                    setAuthError('Bitte gib deine E-Mail-Adresse ein.');
                    return;
                }
                try {
                    await firebase.auth().sendPasswordResetEmail(email);
                    setAuthError('E-Mail zum Zurücksetzen wurde gesendet.');
                } catch (err) {
                    setAuthError('Fehler beim Senden: ' + (err.message || err.code));
                }
            };
        }
        // Google Login
        const googleBtn = document.getElementById('googleLoginBtn');
        if (googleBtn) {
            googleBtn.onclick = async () => {
                setAuthError('');
                const provider = new firebase.auth.GoogleAuthProvider();
                try {
                    const userCred = await firebase.auth().signInWithPopup(provider);
                    userId = userCred.user.uid;
                    showAuthModal(false);
                    await afterAuth();
                } catch (e) {
                    setAuthError('Google Login fehlgeschlagen: ' + (e.message || e.code));
                }
            };
        }
        // Apple Login
        const appleBtn = document.getElementById('appleLoginBtn');
        if (appleBtn) {
            appleBtn.onclick = async () => {
                setAuthError('');
                const provider = new firebase.auth.OAuthProvider('apple.com');
                try {
                    const userCred = await firebase.auth().signInWithPopup(provider);
                    userId = userCred.user.uid;
                    showAuthModal(false);
                    await afterAuth();
                } catch (e) {
                    setAuthError('Apple Login fehlgeschlagen: ' + (e.message || e.code));
                }
            };
        }
    }
    // Nach erfolgreichem Login: Daten laden und App initialisieren
    async function afterAuth() {
        await init();
        document.querySelector('.app-wrapper').style.display = '';
    }

    // Statistiken in Firestore speichern
    function saveStatsToFirestore(stats) {
        return db.collection('users').doc(userId).set({ stats }, { merge: true });
    }
    // Statistiken aus Firestore laden
    async function loadStatsFromFirestore() {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists && doc.data().stats) {
            return doc.data().stats;
        }
        return null;
    }
    // Kursfortschritt in Firestore speichern
    function saveProgressToFirestore(progressKey, progressData) {
        return db.collection('users').doc(userId).set({ [progressKey]: progressData }, { merge: true });
    }
    // Kursfortschritt aus Firestore laden
    async function loadProgressFromFirestore(progressKey) {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists && doc.data()[progressKey]) {
            return doc.data()[progressKey];
        }
        return null;
    }
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        if (key === 'zenith_stats') {
            saveStatsToFirestore(data);
        }
        if (key === 'zenith_course_progress') {
            saveProgressToFirestore('courseProgress', data);
        }
        if (key === 'zenith_pragmatic_progress') {
            saveProgressToFirestore('pragmaticProgress', data);
        }
    }
    function loadData(key, defaultValue) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    }

    // --- TIMER-LOGIK ---
    function startTimer() {
        if (appState.isRunning || appState.timeRemaining <= 0) return;
        vibrate();
        appState.isRunning = true;
        dom.startBtn.textContent = 'Pause';
        dom.sessionType.textContent = 'Läuft';
        startBreathingGuide();
        const sound = ambientSounds.find(s => s.id === appState.selectedSoundId);
        if (sound) { appState.currentAudio.src = sound.url; appState.currentAudio.loop = true; appState.currentAudio.play(); }
        appState.timerInterval = setInterval(() => {
            appState.timeRemaining--;
            renderHomePage();
            updateProgress();
            if (appState.timeRemaining <= 0) handleSessionCompletion();
        }, 1000);
    }
    function pauseTimer() {
        if (!appState.isRunning) return;
        vibrate();
        appState.isRunning = false;
        clearInterval(appState.timerInterval);
        stopBreathingGuide();
        appState.currentAudio.pause();
        dom.startBtn.textContent = 'Fortsetzen';
        dom.sessionType.textContent = 'Pausiert';
    }
    function resetTimer() {
        clearInterval(appState.timerInterval);
        stopBreathingGuide();
        appState.isRunning = false;
        appState.timeRemaining = appState.currentDuration;
        appState.currentAudio.pause();
        appState.currentAudio.currentTime = 0;
        dom.startBtn.textContent = 'Start';
        dom.sessionType.textContent = 'Bereit';
        renderHomePage();
        updateProgress();
    }
    function startBreathingGuide() {
        stopBreathingGuide();
        let isInhaling = true;
        dom.breathingGuide.style.opacity = 1;
        dom.breathingGuide.textContent = 'Einatmen...';
        dom.timerCircle.classList.add('inhale');
        appState.breathingInterval = setInterval(() => {
            isInhaling = !isInhaling;
            dom.breathingGuide.textContent = isInhaling ? 'Einatmen...' : 'Ausatmen...';
            dom.timerCircle.classList.toggle('inhale', isInhaling);
            dom.timerCircle.classList.toggle('exhale', !isInhaling);
        }, 4000);
    }
    function stopBreathingGuide() {
        clearInterval(appState.breathingInterval);
        dom.breathingGuide.style.opacity = 0;
        dom.timerCircle.classList.remove('inhale', 'exhale');
    }
    function updateProgress() {
        const p = appState.timeRemaining > 0 ? (appState.currentDuration - appState.timeRemaining) / appState.currentDuration : 0;
        dom.progressCircle.style.strokeDashoffset = 879.2 * (1 - p);
    }
    function handleSessionCompletion() {
        const duration = appState.currentDuration;
        recordSession(duration);
        resetTimer();
        dom.sessionType.textContent = 'Fertig!';
        setTimeout(() => dom.sessionType.textContent = 'Bereit', 2000);
    }

    // --- FORTSCHRITT & STATISTIK-LOGIK ---
    function vibrate() {
        if (navigator.vibrate) navigator.vibrate(50);
    }
    function recordSession(durationInSeconds) {
        appState.totalSessions++;
        appState.totalMinutes += Math.round(durationInSeconds / 60);
        const today = new Date().toISOString().slice(0, 10);
        if (!appState.sessionHistory.includes(today)) appState.sessionHistory.push(today);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (appState.lastSessionDate !== today) {
            if (appState.lastSessionDate === yesterday) appState.currentStreak++;
            else appState.currentStreak = 1;
        }
        if (appState.currentStreak > appState.longestStreak) appState.longestStreak = appState.currentStreak;
        appState.lastSessionDate = today;
        saveData('zenith_stats', {
            totalSessions: appState.totalSessions, totalMinutes: appState.totalMinutes,
            currentStreak: appState.currentStreak, longestStreak: appState.longestStreak,
            lastSessionDate: appState.lastSessionDate, sessionHistory: appState.sessionHistory,
        });
        updateStats();
    }
    function updateStats() {
        dom.profileSessions.textContent = appState.totalSessions;
        dom.profileMinutes.textContent = appState.totalMinutes;
        dom.profileStreak.textContent = appState.currentStreak;
        dom.profileLongestStreak.textContent = appState.longestStreak;
    }
    function formatTime(s) {
        const m = Math.floor(s / 60);
        const r = s % 60;
        return `${m}:${String(r).padStart(2, '0')}`;
    }

    // --- INITIALISIERUNG ---
    async function init() {
        // DOM-Elemente einmalig zuweisen
        const ids = [
            'appWrapper', 'themeToggleBtn', 'timeDisplay', 'sessionType', 'sessionTitle',
            'sessionSubtitle', 'startBtn', 'resetBtn', 'timerCircle', 'progressCircle',
            'breathingGuide', 'calendarToggleBtn', 'calendarContainer', 'reminderBtn',
            'discoverMenu', 'choiceDetox', 'choicePragmatic', 'choiceFree',
            'digitalDetoxContainer', 'pragmaticCourseContainer', 'freePracticeContainer',
            'detoxCourseList', 'pragmaticCourseList', 'durationGrid', 'soundGrid',
            'startFreePracticeBtn', 'backToDiscoverBtn', 'courseDayTitle',
            'courseDayTask', 'coursePlayBtn', 'markAsDoneBtn', 'profileSessions',
            'profileMinutes', 'profileStreak', 'profileLongestStreak', 'closeOnboardingBtn',
            'detoxVoiceMale', 'detoxVoiceFemale', 'pragmaticVoiceMale', 'pragmaticVoiceFemale'
        ];
        ids.forEach(id => dom[id] = document.getElementById(id));
        dom.pages = {
            'home-page': document.getElementById('home-page'),
            'discover-page': document.getElementById('discover-page'),
            'course-day-page': document.getElementById('course-day-page'),
            'profile-page': document.getElementById('profile-page'),
        };
        dom.navButtons = document.querySelectorAll('.nav-btn');
        dom.backToMenuBtns = document.querySelectorAll('.back-to-menu-btn');

        // Event-Listener zuweisen
        dom.navButtons.forEach(btn => btn.addEventListener('click', () => navigateTo(btn.dataset.page)));
        dom.backToMenuBtns.forEach(btn => btn.addEventListener('click', showDiscoverMenu));
        dom.backToDiscoverBtn.addEventListener('click', () => navigateTo('discover-page'));
        dom.choiceDetox.addEventListener('click', showDetoxCourse);
        dom.choicePragmatic.addEventListener('click', showPragmaticCourse);
        dom.choiceFree.addEventListener('click', showFreePracticeSetup);
        dom.startFreePracticeBtn.addEventListener('click', () => {
            appState.timeRemaining = appState.currentDuration;
            renderHomePage();
            navigateTo('home-page');
            startTimer();
        });
        dom.startBtn.addEventListener('click', () => appState.isRunning ? pauseTimer() : startTimer());
        dom.resetBtn.addEventListener('click', () => resetTimer());
        dom.themeToggleBtn.addEventListener('click', () => setDarkMode(!dom.appWrapper.classList.contains('dark-mode')));
        dom.calendarToggleBtn.addEventListener('click', () => {
            vibrate();
            const container = dom.calendarContainer;
            container.style.display = container.style.display === 'block' ? 'none' : 'block';
            if (container.style.display === 'block') renderCalendarHeatmap();
        });
        dom.reminderBtn.addEventListener('click', () => { vibrate(); alert('🔔 Tägliche Erinnerungen sind bald verfügbar!'); });
        dom.closeOnboardingBtn.addEventListener('click', () => {
            document.getElementById('onboardingModal').classList.remove('show');
            localStorage.setItem('zenith_visited', 'true');
        });

        // Stimmenauswahl-Buttons
        const voiceButtons = {
            'detoxVoiceMale': () => { appState.selectedVoiceGender = 'male'; updateVoiceButtons('detox'); renderAudioPreview(); },
            'detoxVoiceFemale': () => { appState.selectedVoiceGender = 'female'; updateVoiceButtons('detox'); renderAudioPreview(); },
            'pragmaticVoiceMale': () => { appState.selectedVoiceGender = 'male'; updateVoiceButtons('pragmatic'); renderAudioPreview(); },
            'pragmaticVoiceFemale': () => { appState.selectedVoiceGender = 'female'; updateVoiceButtons('pragmatic'); renderAudioPreview(); }
        };
        Object.entries(voiceButtons).forEach(([id, handler]) => {
            if (dom[id]) dom[id].onclick = handler;
        });

        // Daten laden
        setDarkMode(loadData('zenith_theme', 'light') === 'dark');
        let courseProgress = loadData('zenith_course_progress', {});
        let pragmaticProgress = loadData('zenith_pragmatic_progress', {});
        let stats = loadData('zenith_stats', {});
        // Versuche, aus Firestore zu laden
        const [cloudStats, cloudCourse, cloudPragmatic] = await Promise.all([
            loadStatsFromFirestore(),
            loadProgressFromFirestore('courseProgress'),
            loadProgressFromFirestore('pragmaticProgress')
        ]);
        if (cloudStats) {
            stats = cloudStats;
            saveData('zenith_stats', stats); // synchronisiere lokal
        }
        if (cloudCourse) {
            courseProgress = cloudCourse;
            saveData('zenith_course_progress', courseProgress);
        }
        if (cloudPragmatic) {
            pragmaticProgress = cloudPragmatic;
            saveData('zenith_pragmatic_progress', pragmaticProgress);
        }
        appState.courseProgress = courseProgress;
        appState.pragmaticProgress = pragmaticProgress;
        Object.assign(appState, stats);
        
        if (!localStorage.getItem('zenith_visited')) {
            document.getElementById('onboardingModal').classList.add('show');
        }
        
        // UI initial rendern
        renderAll();
    }

    // Vorschau-Funktion für alle Audiodateien
    function renderAudioPreview() {
        const previewList = document.getElementById('audioPreviewList');
        if (!previewList) return;
        const gender = appState.selectedVoiceGender;
        let html = `<h3>Detox (${gender === 'male' ? 'männlich' : 'weiblich'})</h3>`;
        for (let i = 1; i <= 30; i++) {
            const url = getAudioUrlForVoice({day: i}, 'detox', gender);
            html += `<div><b>${gender === 'male' ? 'Tag' : 'F_Tag'}${i}:</b> <audio controls src="${url}"></audio> <a href="${url}" target="_blank">Link</a></div>`;
        }
        html += `<h3>Pragmatic (${gender === 'male' ? 'männlich' : 'weiblich'})</h3>`;
        const pragmaticTitles = [
            'Fokus vor dem Meeting',
            'Stressabbau am Schreibtisch',
            'Feierabend'
        ];
        for (const title of pragmaticTitles) {
            const url = getAudioUrlForVoice({title}, 'pragmatic', gender);
            html += `<div><b>${gender === 'male' ? 'M_' : 'F_'}${title}:</b> <audio controls src="${url}"></audio> <a href="${url}" target="_blank">Link</a></div>`;
        }
        previewList.innerHTML = html;
    }

    // User-ID dynamisch aus Auth
    // const userId = 'demo-user'; // ENTFERNT

    // In der Initialisierung: Auth prüfen und ggf. Modal anzeigen
    window.addEventListener('DOMContentLoaded', async () => {
        setupAuthHandlers();
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                userId = user.uid;
                showAuthModal(false);
                await afterAuth();
            } else {
                document.querySelector('.app-wrapper').style.display = 'none';
                showAuthModal(true);
            }
        });
        renderAudioPreview();
    });
});
