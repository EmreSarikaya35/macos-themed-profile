const CONFIG = window.SITE_CONFIG || {};

const languageList = CONFIG.language?.options || [
    ['tr', 'Türkçe'], ['en', 'English'], ['ar', 'العربية'], ['bn', 'বাংলা'], ['zh', '中文（简体）'],
    ['fr', 'Français'], ['hi', 'हिन्दी'], ['pt', 'Português'], ['ru', 'Русский'], ['es', 'Español']
];
const translations = {
    en: { profile:'Profile',social:'Social',appearance:'Appearance',light:'Light',dark:'Dark',about:'About Me',personalProfile:'PERSONAL PROFILE',connected:'Connected to Discord',welcome:'Welcome to my little corner.',location:CONFIG.location,loading:'Loading Discord status…',unavailable:'Discord connection unavailable',statusFailed:'Could not load Discord status',playing:'Playing',online:'Online on Discord',dnd:'Do Not Disturb',idle:'Idle',offline:'Offline on Discord',languageMenu:'Choose language',themeMenu:'Open appearance settings',mute:'Mute music',unmute:'Unmute music',volume:'Music volume',musicLater:'Volume controls for future background music',siteTitle:'Your Name — Personal Profile',profileLabel:"Your Name's profile",socialLinks:'Social links',discordStatus:'Discord status',avatarAlt:'Your Name profile photo' },
    zh: { profile:'个人资料',social:'社交',appearance:'外观',light:'浅色',dark:'深色',about:'关于我',personalProfile:'个人资料',connected:'已连接到 Discord',welcome:'欢迎来到我的小天地。',location:'Your city',loading:'正在加载 Discord 状态…',unavailable:'无法连接 Discord',statusFailed:'无法获取 Discord 状态',playing:'正在玩',online:'Discord 在线',dnd:'请勿打扰',idle:'离开',offline:'Discord 离线',languageMenu:'选择语言',themeMenu:'打开外观设置',mute:'静音',unmute:'取消静音',volume:'音乐音量',musicLater:'背景音乐音量设置',siteTitle:'Your Name — 个人资料',profileLabel:'Your Name 的个人资料',socialLinks:'社交链接',discordStatus:'Discord 状态',avatarAlt:'Your Name 头像' },
    hi: { profile:'प्रोफ़ाइल',social:'सोशल',appearance:'दिखावट',light:'हल्की',dark:'गहरी',about:'मेरे बारे में',personalProfile:'व्यक्तिगत प्रोफ़ाइल',connected:'Discord से जुड़ा है',welcome:'मेरी छोटी-सी दुनिया में आपका स्वागत है।',location:'Your city',loading:'Discord स्थिति लोड हो रही है…',unavailable:'Discord से कनेक्शन उपलब्ध नहीं है',statusFailed:'Discord स्थिति नहीं मिल सकी',playing:'खेल रहे हैं:',online:'Discord पर ऑनलाइन',dnd:'परेशान न करें',idle:'निष्क्रिय',offline:'Discord पर ऑफ़लाइन',languageMenu:'भाषा चुनें',themeMenu:'दिखावट की सेटिंग खोलें',mute:'संगीत म्यूट करें',unmute:'संगीत चालू करें',volume:'संगीत का वॉल्यूम',musicLater:'भविष्य के बैकग्राउंड संगीत का वॉल्यूम',siteTitle:'Your Name — व्यक्तिगत प्रोफ़ाइल',profileLabel:'Your Name की प्रोफ़ाइल',socialLinks:'सोशल लिंक',discordStatus:'Discord स्थिति',avatarAlt:'Your Name प्रोफ़ाइल फ़ोटो' },
    es: { profile:'Perfil',social:'Redes',appearance:'Apariencia',light:'Claro',dark:'Oscuro',about:'Sobre mí',personalProfile:'PERFIL PERSONAL',connected:'Conectado a Discord',welcome:'Bienvenido a mi pequeño rincón.',location:'Your city',loading:'Cargando estado de Discord…',unavailable:'Conexión con Discord no disponible',statusFailed:'No se pudo obtener el estado de Discord',playing:'Jugando a',online:'En línea en Discord',dnd:'No molestar',idle:'Ausente',offline:'Desconectado de Discord',languageMenu:'Elegir idioma',themeMenu:'Abrir ajustes de apariencia',mute:'Silenciar música',unmute:'Activar sonido',volume:'Volumen de música',musicLater:'Control del volumen de la música de fondo',siteTitle:'Your Name — Perfil personal',profileLabel:'Perfil de Your Name',socialLinks:'Enlaces sociales',discordStatus:'Estado de Discord',avatarAlt:'Foto de perfil de Your Name' },
    fr: { profile:'Profil',social:'Réseaux',appearance:'Apparence',light:'Clair',dark:'Sombre',about:'À propos',personalProfile:'PROFIL PERSONNEL',connected:'Connecté à Discord',welcome:'Bienvenue dans mon petit coin.',location:'Your city',loading:'Chargement du statut Discord…',unavailable:'Connexion à Discord indisponible',statusFailed:'Impossible de récupérer le statut Discord',playing:'Joue à',online:'En ligne sur Discord',dnd:'Ne pas déranger',idle:'Absent',offline:'Hors ligne sur Discord',languageMenu:'Choisir la langue',themeMenu:'Ouvrir les réglages d’apparence',mute:'Couper la musique',unmute:'Réactiver le son',volume:'Volume de la musique',musicLater:'Réglage du volume de la musique de fond',siteTitle:'Your Name — Profil personnel',profileLabel:'Profil de Your Name',socialLinks:'Liens sociaux',discordStatus:'Statut Discord',avatarAlt:'Photo de profil de Your Name' },
    ar: { profile:'الملف الشخصي',social:'التواصل',appearance:'المظهر',light:'فاتح',dark:'داكن',about:'نبذة عني',personalProfile:'الملف الشخصي',connected:'متصل بـ Discord',welcome:'مرحبًا بك في عالمي الصغير.',location:'Your city',loading:'جارٍ تحميل حالة Discord…',unavailable:'اتصال Discord غير متاح',statusFailed:'تعذّر تحميل حالة Discord',playing:'يلعب',online:'متصل على Discord',dnd:'عدم الإزعاج',idle:'خامل',offline:'غير متصل على Discord',languageMenu:'اختيار اللغة',themeMenu:'فتح إعدادات المظهر',mute:'كتم الموسيقى',unmute:'تشغيل الصوت',volume:'مستوى صوت الموسيقى',musicLater:'التحكم بمستوى صوت موسيقى الخلفية',siteTitle:'Your Name — الملف الشخصي',profileLabel:'الملف الشخصي لـ Your Name',socialLinks:'روابط التواصل',discordStatus:'حالة Discord',avatarAlt:'صورة الملف الشخصي لـ Your Name' },
    bn: { profile:'প্রোফাইল',social:'সামাজিক',appearance:'দর্শন',light:'হালকা',dark:'গাঢ়',about:'আমার সম্পর্কে',personalProfile:'ব্যক্তিগত প্রোফাইল',connected:'Discord-এর সঙ্গে সংযুক্ত',welcome:'আমার ছোট্ট জগতে স্বাগতম।',location:'Your city',loading:'Discord-এর অবস্থা লোড হচ্ছে…',unavailable:'Discord সংযোগ পাওয়া যাচ্ছে না',statusFailed:'Discord-এর অবস্থা পাওয়া যায়নি',playing:'খেলছেন:',online:'Discord-এ অনলাইন',dnd:'বিরক্ত করবেন না',idle:'নিষ্ক্রিয়',offline:'Discord-এ অফলাইন',languageMenu:'ভাষা নির্বাচন করুন',themeMenu:'দর্শন সেটিংস খুলুন',mute:'গান নীরব করুন',unmute:'গানের শব্দ চালু করুন',volume:'গানের শব্দের মাত্রা',musicLater:'ভবিষ্যতের ব্যাকগ্রাউন্ড গানের শব্দ নিয়ন্ত্রণ',siteTitle:'Your Name — ব্যক্তিগত প্রোফাইল',profileLabel:'Your Name-এর প্রোফাইল',socialLinks:'সামাজিক লিংক',discordStatus:'Discord-এর অবস্থা',avatarAlt:'Your Name-এর প্রোফাইল ছবি' },
    pt: { profile:'Perfil',social:'Redes',appearance:'Aparência',light:'Claro',dark:'Escuro',about:'Sobre mim',personalProfile:'PERFIL PESSOAL',connected:'Conectado ao Discord',welcome:'Boas-vindas ao meu cantinho.',location:'Your city',loading:'Carregando status do Discord…',unavailable:'Conexão com o Discord indisponível',statusFailed:'Não foi possível obter o status do Discord',playing:'Jogando',online:'Online no Discord',dnd:'Não perturbe',idle:'Ausente',offline:'Offline no Discord',languageMenu:'Escolher idioma',themeMenu:'Abrir configurações de aparência',mute:'Silenciar música',unmute:'Ativar som',volume:'Volume da música',musicLater:'Controle do volume da música de fundo',siteTitle:'Your Name — Perfil pessoal',profileLabel:'Perfil de Your Name',socialLinks:'Links sociais',discordStatus:'Status do Discord',avatarAlt:'Foto do perfil de Your Name' },
    ru: { profile:'Профиль',social:'Соцсети',appearance:'Внешний вид',light:'Светлая',dark:'Тёмная',about:'Обо мне',personalProfile:'ЛИЧНЫЙ ПРОФИЛЬ',connected:'Подключено к Discord',welcome:'Добро пожаловать в мой уголок.',location:'Your city',loading:'Загрузка статуса Discord…',unavailable:'Подключение к Discord недоступно',statusFailed:'Не удалось получить статус Discord',playing:'Играет:',online:'В сети в Discord',dnd:'Не беспокоить',idle:'Неактивен',offline:'Не в сети в Discord',languageMenu:'Выбрать язык',themeMenu:'Открыть настройки внешнего вида',mute:'Выключить музыку',unmute:'Включить звук',volume:'Громкость музыки',musicLater:'Настройка громкости фоновой музыки',siteTitle:'Your Name — Личный профиль',profileLabel:'Профиль Your Name',socialLinks:'Ссылки на соцсети',discordStatus:'Статус Discord',avatarAlt:'Фото профиля Your Name' },
    tr: { profile:'Profil',social:'Sosyal',appearance:'Görünüm',light:'Açık',dark:'Koyu',about:'Hakkımda',personalProfile:'KİŞİSEL PROFİL',connected:"Discord'a bağlı",welcome:'Köşeme hoş geldin.',location:'Your city',loading:'Discord durumu yükleniyor…',unavailable:'Discord bağlantısı kullanılamıyor',statusFailed:'Discord durumu alınamadı',playing:'Oynuyor:',online:"Discord'da çevrimiçi",dnd:'Rahatsız Etmeyin',idle:'Boşta',offline:"Discord'da çevrimdışı",languageMenu:'Dil seçimi',themeMenu:'Görünüm ayarlarını aç',mute:'Müziği sessize al',unmute:'Müziğin sesini aç',volume:'Müzik seviyesi',musicLater:'Gelecekte eklenecek fon müziğinin ses ayarı',siteTitle:'Your Name — Kişisel Profil',profileLabel:"Your Name'in profili",socialLinks:'Sosyal bağlantılar',discordStatus:'Discord durumu',avatarAlt:'Your Name profil fotoğrafı' }
};
const languageLocales = { en:'en-US', zh:'zh-CN', hi:'hi-IN', es:'es-ES', fr:'fr-FR', ar:'ar', bn:'bn-BD', pt:'pt-BR', ru:'ru-RU', tr:'tr-TR' };
const windowLabels = {
    en: {about:'About Me',close:'Close window',minimize:'Minimize to Dock',maximize:'Maximize window',restore:'Restore About Me'},
    zh: {about:'关于我',close:'关闭窗口',minimize:'最小化到程序坞',maximize:'最大化窗口',restore:'恢复个人资料'},
    hi: {about:'मेरे बारे में',close:'विंडो बंद करें',minimize:'डॉक में छोटा करें',maximize:'विंडो बड़ा करें',restore:'प्रोफ़ाइल फिर खोलें'},
    es: {about:'Sobre mí',close:'Cerrar ventana',minimize:'Minimizar al Dock',maximize:'Ampliar ventana',restore:'Volver a abrir el perfil'},
    fr: {about:'À propos',close:'Fermer la fenêtre',minimize:'Réduire dans le Dock',maximize:'Agrandir la fenêtre',restore:'Rouvrir le profil'},
    ar: {about:'نبذة عني',close:'إغلاق النافذة',minimize:'تصغير إلى Dock',maximize:'تكبير النافذة',restore:'إعادة فتح الملف الشخصي'},
    bn: {about:'আমার সম্পর্কে',close:'উইন্ডো বন্ধ করুন',minimize:'ডকে ছোট করুন',maximize:'উইন্ডো বড় করুন',restore:'প্রোফাইল আবার খুলুন'},
    pt: {about:'Sobre mim',close:'Fechar janela',minimize:'Minimizar para o Dock',maximize:'Ampliar janela',restore:'Reabrir perfil'},
    ru: {about:'Обо мне',close:'Закрыть окно',minimize:'Свернуть в Dock',maximize:'Развернуть окно',restore:'Открыть профиль снова'},
    tr: {about:'Hakkımda',close:'Pencereyi kapat',minimize:'Dock’a küçült',maximize:'Pencereyi büyüt',restore:'Hakkımda penceresini aç'}
};
const gameTexts = {
    en: {title:'Snake',eyebrow:'CLASSIC ARCADE',score:'Score',start:'Start',pause:'Pause',restart:'Restart',ready:'Press Start. Swipe on phones; use the arrow keys or WASD on computers.',playing:'Swipe across the board on phones, or use the arrow keys or WASD.',paused:'Game paused.',over:'Game over — score',instructions:'Swipe across the board to steer on phones. Use the arrow keys or WASD on computers.',shortcut:'Snake',up:'Up',down:'Down',left:'Left',right:'Right',board:'Snake game board'},
    zh: {title:'贪吃蛇',eyebrow:'经典街机游戏',score:'得分',start:'开始',pause:'暂停',restart:'重新开始',ready:'点击开始。手机上滑动棋盘，电脑上使用方向键或 WASD。',playing:'手机上滑动棋盘控制方向，电脑上使用方向键或 WASD。',paused:'游戏已暂停。',over:'游戏结束 — 得分',instructions:'手机上滑动棋盘控制方向；电脑上使用方向键或 WASD。',shortcut:'贪吃蛇',up:'上',down:'下',left:'左',right:'右',board:'贪吃蛇游戏区域'},
    hi: {title:'साँप',eyebrow:'क्लासिक आर्केड',score:'स्कोर',start:'शुरू करें',pause:'रोकें',restart:'फिर शुरू करें',ready:'शुरू करें दबाएँ। फ़ोन पर बोर्ड स्वाइप करें; कंप्यूटर पर ऐरो कुंजियाँ या WASD दबाएँ।',playing:'फ़ोन पर बोर्ड स्वाइप करें या कंप्यूटर पर ऐरो कुंजियाँ/WASD दबाएँ।',paused:'खेल रुका हुआ है।',over:'खेल समाप्त — स्कोर',instructions:'फ़ोन पर दिशा बदलने के लिए बोर्ड स्वाइप करें। कंप्यूटर पर ऐरो कुंजियाँ या WASD दबाएँ।',shortcut:'साँप',up:'ऊपर',down:'नीचे',left:'बाएँ',right:'दाएँ',board:'साँप गेम बोर्ड'},
    es: {title:'Snake',eyebrow:'ARCADE CLÁSICO',score:'Puntuación',start:'Empezar',pause:'Pausar',restart:'Reiniciar',ready:'Pulsa Empezar. Desliza en el móvil; usa las flechas o WASD en el ordenador.',playing:'Desliza por el tablero en el móvil o usa las flechas/WASD en el ordenador.',paused:'Juego en pausa.',over:'Fin del juego — puntuación',instructions:'Desliza por el tablero para girar en el móvil. En el ordenador, usa las flechas o WASD.',shortcut:'Snake',up:'Arriba',down:'Abajo',left:'Izquierda',right:'Derecha',board:'Tablero del juego Snake'},
    fr: {title:'Snake',eyebrow:'ARCADE CLASSIQUE',score:'Score',start:'Jouer',pause:'Pause',restart:'Recommencer',ready:'Appuyez sur Jouer. Balayez sur mobile ; utilisez les flèches ou WASD sur ordinateur.',playing:'Balayez le plateau sur mobile ou utilisez les flèches/WASD sur ordinateur.',paused:'Jeu en pause.',over:'Partie terminée — score',instructions:'Balayez le plateau pour diriger sur mobile. Sur ordinateur, utilisez les flèches ou WASD.',shortcut:'Snake',up:'Haut',down:'Bas',left:'Gauche',right:'Droite',board:'Plateau du jeu Snake'},
    ar: {title:'الثعبان',eyebrow:'لعبة أركيد كلاسيكية',score:'النقاط',start:'ابدأ',pause:'إيقاف مؤقت',restart:'إعادة اللعب',ready:'اضغط ابدأ. اسحب على الهاتف؛ واستخدم الأسهم أو WASD على الكمبيوتر.',playing:'اسحب على اللوحة للهاتف أو استخدم الأسهم وWASD على الكمبيوتر.',paused:'اللعبة متوقفة مؤقتًا.',over:'انتهت اللعبة — النقاط',instructions:'اسحب على اللوحة لتغيير الاتجاه على الهاتف. استخدم الأسهم أو WASD على الكمبيوتر.',shortcut:'الثعبان',up:'أعلى',down:'أسفل',left:'يسار',right:'يمين',board:'لوحة لعبة الثعبان'},
    bn: {title:'সাপ',eyebrow:'ক্লাসিক আর্কেড',score:'স্কোর',start:'শুরু',pause:'বিরতি',restart:'আবার শুরু',ready:'শুরু চাপুন। ফোনে বোর্ড সোয়াইপ করুন, কম্পিউটারে অ্যারো কী বা WASD ব্যবহার করুন।',playing:'ফোনে বোর্ড সোয়াইপ করুন অথবা কম্পিউটারে অ্যারো কী/WASD ব্যবহার করুন।',paused:'খেলা থামানো হয়েছে।',over:'খেলা শেষ — স্কোর',instructions:'ফোনে দিক বদলাতে বোর্ড সোয়াইপ করুন। কম্পিউটারে অ্যারো কী বা WASD ব্যবহার করুন।',shortcut:'সাপ',up:'উপরে',down:'নিচে',left:'বামে',right:'ডানে',board:'সাপ খেলার বোর্ড'},
    pt: {title:'Snake',eyebrow:'ARCADE CLÁSSICO',score:'Pontuação',start:'Iniciar',pause:'Pausar',restart:'Reiniciar',ready:'Toque em Iniciar. No celular, deslize; no computador, use as setas ou WASD.',playing:'Deslize pelo tabuleiro no celular ou use as setas/WASD no computador.',paused:'Jogo pausado.',over:'Fim de jogo — pontuação',instructions:'Deslize pelo tabuleiro para mudar de direção no celular. No computador, use as setas ou WASD.',shortcut:'Snake',up:'Cima',down:'Baixo',left:'Esquerda',right:'Direita',board:'Tabuleiro do jogo Snake'},
    ru: {title:'Змейка',eyebrow:'КЛАССИЧЕСКАЯ АРКАДА',score:'Счёт',start:'Начать',pause:'Пауза',restart:'Заново',ready:'Нажмите «Начать». На телефоне проведите по полю; на компьютере используйте стрелки или WASD.',playing:'Проведите по полю на телефоне или используйте стрелки/WASD на компьютере.',paused:'Игра на паузе.',over:'Игра окончена — счёт',instructions:'Чтобы повернуть на телефоне, проведите по полю. На компьютере используйте стрелки или WASD.',shortcut:'Змейка',up:'Вверх',down:'Вниз',left:'Влево',right:'Вправо',board:'Игровое поле «Змейка»'},
    tr: {title:'Yılan',eyebrow:'KLASİK ARCADE',score:'Skor',start:'Başla',pause:'Duraklat',restart:'Yeniden başlat',ready:'Başla’ya bas. Telefonda oyun alanında kaydır; bilgisayarda yön tuşlarını veya WASD’yi kullan.',playing:'Telefonda yön vermek için oyun alanında kaydır. Bilgisayarda yön tuşlarını veya WASD’yi kullan.',paused:'Oyun duraklatıldı.',over:'Oyun bitti — skor',instructions:'Telefonda yön vermek için oyun alanında kaydır. Bilgisayarda yön tuşlarını veya WASD’yi kullan.',shortcut:'Yılan',up:'Yukarı',down:'Aşağı',left:'Sol',right:'Sağ',board:'Yılan oyun alanı'}
};
const gameRestoreLabels = {en:'Restore Snake',zh:'恢复贪吃蛇',hi:'साँप फिर खोलें',es:'Reabrir Snake',fr:'Rouvrir Snake',ar:'إعادة فتح لعبة الثعبان',bn:'সাপের খেলা আবার খুলুন',pt:'Reabrir Snake',ru:'Открыть змейку снова',tr:'Yılan oyununu aç'};
const mineTexts = {
    en:{title:'Minesweeper',shortcut:'Minesweeper',ready:'Choose a square to begin.',playing:'Good luck! Find all the safe squares.',win:'You cleared the field!',over:'Boom! You hit a mine.',instructions:'Right-click to flag; press and hold a square on touchscreens.',flag:'Flag mode',flagOn:'Flagging',newGame:'New game',board:'Minesweeper board',restore:'Restore Minesweeper'},
    zh:{title:'扫雷',shortcut:'扫雷',ready:'选择一个方格开始。',playing:'祝你好运！找出所有安全方格。',win:'你排除了所有地雷！',over:'爆炸！你踩到了地雷。',instructions:'右键标记地雷；触屏设备请长按方格。',flag:'插旗模式',flagOn:'正在插旗',newGame:'新游戏',board:'扫雷棋盘',restore:'恢复扫雷'},
    hi:{title:'माइनस्वीपर',shortcut:'माइनस्वीपर',ready:'शुरू करने के लिए एक वर्ग चुनें।',playing:'शुभकामनाएँ! सभी सुरक्षित वर्ग खोजें।',win:'आपने मैदान साफ़ कर दिया!',over:'धमाका! आप बारूदी सुरंग पर आ गए।',instructions:'माइन पर झंडा लगाने के लिए राइट-क्लिक करें; टचस्क्रीन पर वर्ग को दबाकर रखें।',flag:'फ़्लैग मोड',flagOn:'फ़्लैग लगा रहे हैं',newGame:'नया खेल',board:'माइनस्वीपर बोर्ड',restore:'माइनस्वीपर खोलें'},
    es:{title:'Buscaminas',shortcut:'Buscaminas',ready:'Elige una casilla para empezar.',playing:'¡Buena suerte! Encuentra todas las casillas seguras.',win:'¡Has despejado el campo!',over:'¡Bum! Has encontrado una mina.',instructions:'Haz clic derecho para poner una bandera; en pantallas táctiles, mantén pulsada la casilla.',flag:'Modo bandera',flagOn:'Marcando',newGame:'Nueva partida',board:'Tablero de Buscaminas',restore:'Abrir Buscaminas'},
    fr:{title:'Démineur',shortcut:'Démineur',ready:'Choisissez une case pour commencer.',playing:'Bonne chance ! Trouvez toutes les cases sûres.',win:'Vous avez déminé le terrain !',over:'Boum ! Vous avez touché une mine.',instructions:'Clic droit pour poser un drapeau ; sur écran tactile, maintenez la case appuyée.',flag:'Mode drapeau',flagOn:'Marquage',newGame:'Nouvelle partie',board:'Grille du démineur',restore:'Rouvrir le démineur'},
    ar:{title:'كانسة الألغام',shortcut:'كانسة الألغام',ready:'اختر مربعًا للبدء.',playing:'حظًا موفقًا! اعثر على كل المربعات الآمنة.',win:'لقد أزلت الألغام كلها!',over:'انفجار! لقد لمست لغمًا.',instructions:'انقر بزر الفأرة الأيمن لوضع علم؛ على الشاشات اللمسية اضغط مطولًا على المربع.',flag:'وضع الأعلام',flagOn:'وضع العلامات',newGame:'لعبة جديدة',board:'لوحة كانسة الألغام',restore:'فتح كانسة الألغام'},
    bn:{title:'মাইনসুইপার',shortcut:'মাইনসুইপার',ready:'শুরু করতে একটি ঘর বেছে নিন।',playing:'শুভকামনা! সব নিরাপদ ঘর খুঁজে বের করুন।',win:'আপনি সব ঘর পরিষ্কার করেছেন!',over:'বুম! আপনি মাইনে পা দিয়েছেন।',instructions:'পতাকা দিতে রাইট-ক্লিক করুন; টাচস্ক্রিনে ঘরটি চেপে ধরে রাখুন।',flag:'ফ্ল্যাগ মোড',flagOn:'ফ্ল্যাগ দিচ্ছেন',newGame:'নতুন খেলা',board:'মাইনসুইপার বোর্ড',restore:'মাইনসুইপার খুলুন'},
    pt:{title:'Campo Minado',shortcut:'Campo Minado',ready:'Escolha uma casa para começar.',playing:'Boa sorte! Encontre todas as casas seguras.',win:'Você limpou o campo!',over:'Bum! Você encontrou uma mina.',instructions:'Clique com o botão direito para colocar uma bandeira; em telas sensíveis ao toque, mantenha a casa pressionada.',flag:'Modo bandeira',flagOn:'Marcando',newGame:'Novo jogo',board:'Tabuleiro do Campo Minado',restore:'Abrir Campo Minado'},
    ru:{title:'Сапёр',shortcut:'Сапёр',ready:'Выберите клетку, чтобы начать.',playing:'Удачи! Найдите все безопасные клетки.',win:'Поле очищено!',over:'Бум! Вы попали на мину.',instructions:'Щёлкните правой кнопкой, чтобы поставить флажок; на сенсорном экране нажмите и удерживайте клетку.',flag:'Режим флажков',flagOn:'Отметка мин',newGame:'Новая игра',board:'Поле игры «Сапёр»',restore:'Открыть «Сапёр»'},
    tr:{title:'Mayın Tarlası',shortcut:'Mayın Tarlası',ready:'Başlamak için bir kare seç.',playing:'Bol şans! Güvenli kareleri bul.',win:'Tarlayı temizledin!',over:'Bum! Mayına bastın.',instructions:'Bayrak koymak için sağ tıkla; dokunmatik ekranda kareye basılı tut.',flag:'Bayrak modu',flagOn:'İşaretleme açık',newGame:'Yeni oyun',board:'Mayın Tarlası oyun alanı',restore:'Mayın Tarlası’nı aç'}
};
const mineDifficultyTexts = {
    en:{label:'Difficulty',easy:'Easy',medium:'Medium',hard:'Hard'},
    zh:{label:'难度',easy:'简单',medium:'中等',hard:'困难'},
    hi:{label:'कठिनाई',easy:'आसान',medium:'मध्यम',hard:'कठिन'},
    es:{label:'Dificultad',easy:'Fácil',medium:'Medio',hard:'Difícil'},
    fr:{label:'Difficulté',easy:'Facile',medium:'Moyen',hard:'Difficile'},
    ar:{label:'الصعوبة',easy:'سهل',medium:'متوسط',hard:'صعب'},
    bn:{label:'কঠিনতা',easy:'সহজ',medium:'মাঝারি',hard:'কঠিন'},
    pt:{label:'Dificuldade',easy:'Fácil',medium:'Médio',hard:'Difícil'},
    ru:{label:'Сложность',easy:'Лёгкий',medium:'Средний',hard:'Сложный'},
    tr:{label:'Zorluk',easy:'Kolay',medium:'Orta',hard:'Zor'}
};
const socialWindowTexts = {
    en:{open:'Open in browser ↗',note:'This service prevents its page from opening inside another website.',caption:'Open it in your browser to sign in and use its features.',restore:'Web app'},
    zh:{open:'在浏览器中打开 ↗',note:'此服务禁止在其他网站中打开其页面。',caption:'请在浏览器中打开，以登录并使用其功能。',restore:'网页应用'},
    hi:{open:'ब्राउज़र में खोलें ↗',note:'यह सेवा अपने पेज को दूसरी वेबसाइट के भीतर खुलने से रोकती है।',caption:'साइन इन करके सुविधाएँ इस्तेमाल करने के लिए इसे ब्राउज़र में खोलें।',restore:'वेब ऐप'},
    es:{open:'Abrir en el navegador ↗',note:'Este servicio impide que su página se abra dentro de otro sitio web.',caption:'Ábrelo en el navegador para iniciar sesión y usar sus funciones.',restore:'Aplicación web'},
    fr:{open:'Ouvrir dans le navigateur ↗',note:'Ce service empêche l’ouverture de sa page dans un autre site.',caption:'Ouvrez-le dans le navigateur pour vous connecter et utiliser ses fonctionnalités.',restore:'Appli web'},
    ar:{open:'فتح في المتصفح ↗',note:'تمنع هذه الخدمة فتح صفحتها داخل موقع آخر.',caption:'افتحها في المتصفح لتسجيل الدخول واستخدام ميزاتها.',restore:'تطبيق ويب'},
    bn:{open:'ব্রাউজারে খুলুন ↗',note:'এই পরিষেবাটি অন্য ওয়েবসাইটের মধ্যে তার পৃষ্ঠা খুলতে বাধা দেয়।',caption:'সাইন ইন করে এর সুবিধাগুলো ব্যবহার করতে ব্রাউজারে খুলুন।',restore:'ওয়েব অ্যাপ'},
    pt:{open:'Abrir no navegador ↗',note:'Este serviço impede que a página seja aberta dentro de outro site.',caption:'Abra no navegador para entrar e usar os recursos.',restore:'App web'},
    ru:{open:'Открыть в браузере ↗',note:'Сервис запрещает открывать свою страницу внутри другого сайта.',caption:'Откройте её в браузере, чтобы войти и пользоваться всеми функциями.',restore:'Веб-приложение'},
    tr:{open:'Tarayıcıda aç ↗',note:'Bu hizmet, sayfasının başka bir web sitesi içinde açılmasını engelliyor.',caption:'Giriş yapmak ve özellikleri kullanmak için tarayıcıda aç.',restore:'Web uygulaması'}
};
const auxTexts = {
    en:{notes:'Notes',notesEye:'ON THIS DEVICE',notesHint:'Write a note…',saved:'Saved on this device',music:'Music',musicDescription:'Open Apple Music to browse and play your library.',openMusic:'Open Apple Music ↗',play:'Play',pause:'Pause',pong:'Pong',you:'YOU',cpu:'CPU',pongReady:'Press Start. Move with W/S or ↑/↓.',pongPlaying:'Move with W/S or ↑/↓. First to 5 wins.',pongWin:'You win! Press Start for another round.',pongLose:'CPU wins. Press Start to try again.',start:'Start',reset:'Reset',moveUp:'Move up',moveDown:'Move down',terminal:'Terminal',terminalWelcome:'Your Name Terminal · Type “help” to see available commands.',terminalPrompt:'yourname@desktop:~$',terminalHelp:'Available commands: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Snake · Minesweeper · Pong',terminalUnknown:'Command not found. Type “help” for available commands.',trash:'Trash',trashEmpty:'Trash is empty',trashDesc:'Nothing to see here. Your desktop is tidy.'},
    zh:{notes:'备忘录',notesEye:'保存在此设备',notesHint:'写点什么…',saved:'已保存在此设备',music:'音乐',musicDescription:'打开 Apple Music 浏览并播放你的音乐库。',openMusic:'打开 Apple Music ↗',play:'播放',pause:'暂停',pong:'乒乓球',you:'你',cpu:'电脑',pongReady:'点击开始。使用 W/S 或 ↑/↓ 移动。',pongPlaying:'使用 W/S 或 ↑/↓ 移动，先得 5 分者获胜。',pongWin:'你赢了！点击开始再来一局。',pongLose:'电脑获胜。点击开始再试一次。',start:'开始',reset:'重置',moveUp:'向上移动',moveDown:'向下移动',terminal:'终端',terminalWelcome:'Your Name 终端 · 输入“help”查看可用命令。',terminalPrompt:'yourname@桌面:~$',terminalHelp:'可用命令：help、whoami、date、games、clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'贪吃蛇 · 扫雷 · 乒乓球',terminalUnknown:'未找到命令。输入“help”查看可用命令。',trash:'废纸篓',trashEmpty:'废纸篓是空的',trashDesc:'这里什么也没有，桌面很整洁。'},
    hi:{notes:'नोट्स',notesEye:'इस डिवाइस पर',notesHint:'कुछ लिखें…',saved:'इस डिवाइस पर सहेजा गया',music:'संगीत',musicDescription:'अपनी लाइब्रेरी देखने और चलाने के लिए Apple Music खोलें।',openMusic:'Apple Music खोलें ↗',play:'चलाएँ',pause:'रोकें',pong:'पॉन्ग',you:'आप',cpu:'कंप्यूटर',pongReady:'शुरू दबाएँ। W/S या ↑/↓ से चलें।',pongPlaying:'W/S या ↑/↓ से चलें। 5 अंक पाने वाला पहले जीतेगा।',pongWin:'आप जीत गए! फिर खेलने के लिए शुरू दबाएँ।',pongLose:'कंप्यूटर जीत गया। फिर कोशिश करने के लिए शुरू दबाएँ।',start:'शुरू',reset:'रीसेट',moveUp:'ऊपर जाएँ',moveDown:'नीचे जाएँ',terminal:'टर्मिनल',terminalWelcome:'Your Name टर्मिनल · कमांड देखने के लिए “help” लिखें।',terminalPrompt:'yourname@desktop:~$',terminalHelp:'कमांड: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'साँप · माइनस्वीपर · पॉन्ग',terminalUnknown:'कमांड नहीं मिली। कमांड देखने के लिए “help” लिखें।',trash:'कचरा पात्र',trashEmpty:'कचरा पात्र खाली है',trashDesc:'यहाँ कुछ नहीं है। आपका डेस्कटॉप साफ़ है।'},
    es:{notes:'Notas',notesEye:'EN ESTE DISPOSITIVO',notesHint:'Escribe una nota…',saved:'Guardado en este dispositivo',music:'Música',musicDescription:'Abre Apple Music para explorar y reproducir tu biblioteca.',openMusic:'Abrir Apple Music ↗',play:'Reproducir',pause:'Pausar',pong:'Pong',you:'TÚ',cpu:'CPU',pongReady:'Pulsa Empezar. Muévete con W/S o ↑/↓.',pongPlaying:'Muévete con W/S o ↑/↓. Gana quien llegue a 5.',pongWin:'¡Has ganado! Pulsa Empezar para otra ronda.',pongLose:'Gana la CPU. Pulsa Empezar para intentarlo de nuevo.',start:'Empezar',reset:'Reiniciar',moveUp:'Mover arriba',moveDown:'Mover abajo',terminal:'Terminal',terminalWelcome:'Terminal de Your Name · Escribe “help” para ver los comandos.',terminalPrompt:'yourname@escritorio:~$',terminalHelp:'Comandos: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Snake · Buscaminas · Pong',terminalUnknown:'Comando no encontrado. Escribe “help” para ver los comandos.',trash:'Papelera',trashEmpty:'La papelera está vacía',trashDesc:'No hay nada aquí. Tu escritorio está ordenado.'},
    fr:{notes:'Notes',notesEye:'SUR CET APPAREIL',notesHint:'Écrivez une note…',saved:'Enregistré sur cet appareil',music:'Musique',musicDescription:'Ouvrez Apple Music pour parcourir et écouter votre bibliothèque.',openMusic:'Ouvrir Apple Music ↗',play:'Lire',pause:'Pause',pong:'Pong',you:'VOUS',cpu:'CPU',pongReady:'Appuyez sur Jouer. Déplacez-vous avec W/S ou ↑/↓.',pongPlaying:'Déplacez-vous avec W/S ou ↑/↓. Le premier à 5 gagne.',pongWin:'Vous avez gagné ! Appuyez sur Jouer pour recommencer.',pongLose:'Le CPU gagne. Appuyez sur Jouer pour réessayer.',start:'Jouer',reset:'Réinitialiser',moveUp:'Monter',moveDown:'Descendre',terminal:'Terminal',terminalWelcome:'Terminal Your Name · Tapez « help » pour voir les commandes.',terminalPrompt:'yourname@bureau:~$',terminalHelp:'Commandes : help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Snake · Démineur · Pong',terminalUnknown:'Commande introuvable. Tapez « help » pour voir les commandes.',trash:'Corbeille',trashEmpty:'La corbeille est vide',trashDesc:'Rien à voir ici. Votre bureau est bien rangé.'},
    ar:{notes:'الملاحظات',notesEye:'على هذا الجهاز',notesHint:'اكتب ملاحظة…',saved:'تم الحفظ على هذا الجهاز',music:'الموسيقى',musicDescription:'افتح Apple Music لتصفح مكتبتك والاستماع إليها.',openMusic:'فتح Apple Music ↗',play:'تشغيل',pause:'إيقاف مؤقت',pong:'بونغ',you:'أنت',cpu:'الحاسوب',pongReady:'اضغط ابدأ. تحرك باستخدام W/S أو ↑/↓.',pongPlaying:'تحرك باستخدام W/S أو ↑/↓. الفائز أول من يصل إلى 5.',pongWin:'فزت! اضغط ابدأ لجولة جديدة.',pongLose:'فاز الحاسوب. اضغط ابدأ للمحاولة مجددًا.',start:'ابدأ',reset:'إعادة ضبط',moveUp:'تحرك لأعلى',moveDown:'تحرك لأسفل',terminal:'الوحدة الطرفية',terminalWelcome:'وحدة Your Name · اكتب “help” لعرض الأوامر.',terminalPrompt:'yourname@desktop:~$',terminalHelp:'الأوامر: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'الثعبان · كانسة الألغام · بونغ',terminalUnknown:'الأمر غير موجود. اكتب “help” لعرض الأوامر.',trash:'سلة المهملات',trashEmpty:'سلة المهملات فارغة',trashDesc:'لا يوجد شيء هنا. سطح المكتب مرتب.'},
    bn:{notes:'নোট',notesEye:'এই ডিভাইসে',notesHint:'একটি নোট লিখুন…',saved:'এই ডিভাইসে সংরক্ষিত',music:'সঙ্গীত',musicDescription:'লাইব্রেরি দেখতে ও শুনতে Apple Music খুলুন।',openMusic:'Apple Music খুলুন ↗',play:'চালান',pause:'থামান',pong:'পং',you:'আপনি',cpu:'কম্পিউটার',pongReady:'শুরু চাপুন। W/S বা ↑/↓ দিয়ে সরুন।',pongPlaying:'W/S বা ↑/↓ দিয়ে সরুন। ৫ পয়েন্টে আগে পৌঁছালে জিতবেন।',pongWin:'আপনি জিতেছেন! আরেক রাউন্ডে শুরু চাপুন।',pongLose:'কম্পিউটার জিতেছে। আবার চেষ্টা করতে শুরু চাপুন।',start:'শুরু',reset:'রিসেট',moveUp:'উপরে যান',moveDown:'নিচে যান',terminal:'টার্মিনাল',terminalWelcome:'Your Name টার্মিনাল · কমান্ড দেখতে “help” লিখুন।',terminalPrompt:'yourname@desktop:~$',terminalHelp:'কমান্ড: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'সাপ · মাইনসুইপার · পং',terminalUnknown:'কমান্ড পাওয়া যায়নি। কমান্ড দেখতে “help” লিখুন।',trash:'ট্র্যাশ',trashEmpty:'ট্র্যাশ খালি',trashDesc:'এখানে কিছু নেই। আপনার ডেস্কটপ পরিপাটি।'},
    pt:{notes:'Notas',notesEye:'NESTE DISPOSITIVO',notesHint:'Escreva uma nota…',saved:'Salvo neste dispositivo',music:'Música',musicDescription:'Abra o Apple Music para explorar e reproduzir sua biblioteca.',openMusic:'Abrir Apple Music ↗',play:'Reproduzir',pause:'Pausar',pong:'Pong',you:'VOCÊ',cpu:'CPU',pongReady:'Pressione Iniciar. Mova com W/S ou ↑/↓.',pongPlaying:'Mova com W/S ou ↑/↓. Vence quem chegar primeiro a 5.',pongWin:'Você venceu! Pressione Iniciar para outra rodada.',pongLose:'A CPU venceu. Pressione Iniciar para tentar novamente.',start:'Iniciar',reset:'Reiniciar',moveUp:'Mover para cima',moveDown:'Mover para baixo',terminal:'Terminal',terminalWelcome:'Terminal Your Name · Digite “help” para ver os comandos.',terminalPrompt:'yourname@desktop:~$',terminalHelp:'Comandos: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Snake · Campo Minado · Pong',terminalUnknown:'Comando não encontrado. Digite “help” para ver os comandos.',trash:'Lixo',trashEmpty:'O lixo está vazio',trashDesc:'Nada por aqui. Sua mesa está organizada.'},
    ru:{notes:'Заметки',notesEye:'НА ЭТОМ УСТРОЙСТВЕ',notesHint:'Напишите заметку…',saved:'Сохранено на этом устройстве',music:'Музыка',musicDescription:'Откройте Apple Music, чтобы найти и включить музыку из медиатеки.',openMusic:'Открыть Apple Music ↗',play:'Воспроизвести',pause:'Пауза',pong:'Понг',you:'ВЫ',cpu:'ПК',pongReady:'Нажмите «Старт». Двигайтесь клавишами W/S или ↑/↓.',pongPlaying:'Двигайтесь клавишами W/S или ↑/↓. Побеждает первый до 5 очков.',pongWin:'Вы выиграли! Нажмите «Старт» для нового раунда.',pongLose:'Победил ПК. Нажмите «Старт», чтобы попробовать ещё раз.',start:'Старт',reset:'Сброс',moveUp:'Вверх',moveDown:'Вниз',terminal:'Терминал',terminalWelcome:'Терминал Your Name · Введите «help», чтобы увидеть команды.',terminalPrompt:'yourname@desktop:~$',terminalHelp:'Команды: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Змейка · Сапёр · Понг',terminalUnknown:'Команда не найдена. Введите «help», чтобы увидеть команды.',trash:'Корзина',trashEmpty:'Корзина пуста',trashDesc:'Здесь ничего нет. Рабочий стол в порядке.'},
    tr:{notes:'Notlar',notesEye:'BU CİHAZDA',notesHint:'Bir not yaz…',saved:'Bu cihaza kaydedildi',music:'Müzik',musicDescription:'Apple Music arşivini keşfetmek ve dinlemek için aç.',openMusic:'Apple Music’i aç ↗',play:'Çal',pause:'Duraklat',pong:'Pong',you:'SEN',cpu:'BİLGİSAYAR',pongReady:'Başla’ya bas. W/S veya ↑/↓ ile hareket et.',pongPlaying:'W/S veya ↑/↓ ile hareket et. 5 sayıya ilk ulaşan kazanır.',pongWin:'Kazandın! Yeni tur için Başla’ya bas.',pongLose:'Bilgisayar kazandı. Tekrar denemek için Başla’ya bas.',start:'Başla',reset:'Sıfırla',moveUp:'Yukarı hareket et',moveDown:'Aşağı hareket et',terminal:'Terminal',terminalWelcome:'Your Name Terminali · Komutları görmek için “help” yaz.',terminalPrompt:'yourname@masaüstü:~$',terminalHelp:'Komutlar: help, whoami, date, games, clear',terminalAbout:`${CONFIG.name} · ${CONFIG.location}`,terminalGames:'Yılan · Mayın Tarlası · Pong',terminalUnknown:'Komut bulunamadı. Komutları görmek için “help” yaz.',trash:'Çöp Sepeti',trashEmpty:'Çöp Sepeti boş',trashDesc:'Burada bir şey yok. Masaüstün tertemiz.'}
};
const controlTexts = {
    en:{title:'Control Center',network:'Network',online:'Connected',offline:'Offline',appearance:'Appearance',light:'Light',dark:'Dark',profile:'Profile',openProfile:'Open About Me',aria:'Open Control Center'},
    zh:{title:'控制中心',network:'网络',online:'已连接',offline:'离线',appearance:'外观',light:'浅色',dark:'深色',profile:'个人资料',openProfile:'打开关于我',aria:'打开控制中心'},
    hi:{title:'कंट्रोल सेंटर',network:'नेटवर्क',online:'जुड़ा हुआ',offline:'ऑफ़लाइन',appearance:'दिखावट',light:'हल्की',dark:'गहरी',profile:'प्रोफ़ाइल',openProfile:'मेरी प्रोफ़ाइल खोलें',aria:'कंट्रोल सेंटर खोलें'},
    es:{title:'Centro de control',network:'Red',online:'Conectado',offline:'Sin conexión',appearance:'Apariencia',light:'Claro',dark:'Oscuro',profile:'Perfil',openProfile:'Abrir Sobre mí',aria:'Abrir centro de control'},
    fr:{title:'Centre de contrôle',network:'Réseau',online:'Connecté',offline:'Hors ligne',appearance:'Apparence',light:'Clair',dark:'Sombre',profile:'Profil',openProfile:'Ouvrir À propos',aria:'Ouvrir le centre de contrôle'},
    ar:{title:'مركز التحكم',network:'الشبكة',online:'متصل',offline:'غير متصل',appearance:'المظهر',light:'فاتح',dark:'داكن',profile:'الملف الشخصي',openProfile:'فتح نبذة عني',aria:'فتح مركز التحكم'},
    bn:{title:'কন্ট্রোল সেন্টার',network:'নেটওয়ার্ক',online:'সংযুক্ত',offline:'অফলাইন',appearance:'দর্শন',light:'হালকা',dark:'গাঢ়',profile:'প্রোফাইল',openProfile:'আমার সম্পর্কে খুলুন',aria:'কন্ট্রোল সেন্টার খুলুন'},
    pt:{title:'Central de Controle',network:'Rede',online:'Conectado',offline:'Offline',appearance:'Aparência',light:'Claro',dark:'Escuro',profile:'Perfil',openProfile:'Abrir Sobre mim',aria:'Abrir Central de Controle'},
    ru:{title:'Пункт управления',network:'Сеть',online:'Подключено',offline:'Не в сети',appearance:'Внешний вид',light:'Светлая',dark:'Тёмная',profile:'Профиль',openProfile:'Открыть «Обо мне»',aria:'Открыть пункт управления'},
    tr:{title:'Denetim Merkezi',network:'Ağ bağlantısı',online:'Bağlı',offline:'Çevrimdışı',appearance:'Görünüm',light:'Açık',dark:'Koyu',profile:'Profil',openProfile:'Hakkımda’yı aç',aria:'Denetim Merkezi’ni aç'}
};
const xpWelcomeTexts = {
    en:'Welcome to the hidden theme: Windows XP',
    zh:'欢迎来到隐藏主题：Windows XP',
    hi:'छिपी हुई थीम में आपका स्वागत है: Windows XP',
    es:'Te damos la bienvenida al tema oculto: Windows XP',
    fr:'Bienvenue dans le thème secret : Windows XP',
    ar:'مرحبًا بك في المظهر المخفي: Windows XP',
    bn:'লুকানো থিমে স্বাগতম: Windows XP',
    pt:'Boas-vindas ao tema secreto: Windows XP',
    ru:'Добро пожаловать в скрытую тему: Windows XP',
    tr:'Gizli temaya hoş geldiniz: Windows XP'
};
const countryLanguages = {
    zh: ['CN'], hi: ['IN'],
    es: ['ES','MX','GT','CU','DO','HN','SV','NI','CR','PA','CO','VE','EC','PE','BO','PY','CL','UY','AR','GQ'],
    fr: ['FR','BE','CH','LU','MC','CI','SN','CD','CG','CM','MG','NE','BF','ML','TG','BJ','GA','GN','TD','CF','DJ','KM','HT'],
    ar: ['DZ','BH','KM','DJ','EG','IQ','JO','KW','LB','LY','MR','MA','OM','PS','QA','SA','SO','SD','SY','TN','AE','YE'],
    bn: ['BD'], pt: ['BR','PT','AO','MZ','CV','GW','ST','TL'], ru: ['RU','BY','KZ','KG'], tr: ['TR']
};
let currentLanguage = CONFIG.language?.default && CONFIG.language.default !== 'auto' && translations[CONFIG.language.default] ? CONFIG.language.default : (navigator.languages?.map((language) => language.toLowerCase().split('-')[0]).find((language) => translations[language]) || 'en');
let languageManuallySelected = false;
let latestDiscordData = null;
let audioControlsReady = false;
let latestWeatherData = null;
function normalizePhotoList(photoList) {
    return (Array.isArray(photoList) ? photoList : []).map((photo, index) => {
    const entry = typeof photo === 'string' ? { src:photo } : photo;
    if (!entry || typeof entry.src !== 'string') return null;
    const fileName = entry.src.split('/').pop() || `photo-${index + 1}`;
    return { id:`${index}-${entry.src}`, src:entry.src, name:entry.alt || fileName };
    }).filter(Boolean);
}
let photos = normalizePhotoList(CONFIG.photos);
let activePhotoIndex = 0;
const photoText = {
    tr:{title:'Fotoğraflar',empty:'Galeri boş',hint:'Fotoğrafları config.js içindeki photos listesine ekle.',open:'Tüm fotoğrafları aç',previous:'Önceki fotoğraf',next:'Sonraki fotoğraf',openGallery:'Galeriyi aç',photo:'fotoğraf',galleryEmpty:'Galeride henüz fotoğraf yok. Görselleri config.js içindeki photos listesine ekle.'},
    en:{title:'Photos',empty:'No photos yet',hint:'Add image paths to the photos list in config.js.',open:'Open all photos',previous:'Previous photo',next:'Next photo',openGallery:'Open gallery',photo:'photos',galleryEmpty:'No photos in the gallery yet. Add image paths to the photos list in config.js.'},
    zh:{title:'照片',empty:'相册为空',hint:'请将图片路径添加到 config.js 的 photos 列表。',open:'打开所有照片',previous:'上一张照片',next:'下一张照片',openGallery:'打开相册',photo:'张照片',galleryEmpty:'相册中还没有照片。请在 config.js 的 photos 列表中添加图片路径。'},
    hi:{title:'फ़ोटो',empty:'अभी फ़ोटो नहीं हैं',hint:'config.js की photos सूची में इमेज पाथ जोड़ें।',open:'सभी फ़ोटो खोलें',previous:'पिछली फ़ोटो',next:'अगली फ़ोटो',openGallery:'गैलरी खोलें',photo:'फ़ोटो',galleryEmpty:'गैलरी में अभी फ़ोटो नहीं हैं। config.js की photos सूची में इमेज पाथ जोड़ें।'},
    es:{title:'Fotos',empty:'Aún no hay fotos',hint:'Añade rutas de imágenes a la lista photos de config.js.',open:'Abrir todas las fotos',previous:'Foto anterior',next:'Foto siguiente',openGallery:'Abrir galería',photo:'fotos',galleryEmpty:'Aún no hay fotos. Añade sus rutas a photos en config.js.'},
    fr:{title:'Photos',empty:'Aucune photo',hint:'Ajoutez les chemins des images à photos dans config.js.',open:'Afficher toutes les photos',previous:'Photo précédente',next:'Photo suivante',openGallery:'Ouvrir la galerie',photo:'photos',galleryEmpty:'Aucune photo. Ajoutez leurs chemins à la liste photos de config.js.'},
    ar:{title:'الصور',empty:'لا توجد صور بعد',hint:'أضف مسارات الصور إلى قائمة photos في config.js.',open:'فتح كل الصور',previous:'الصورة السابقة',next:'الصورة التالية',openGallery:'فتح المعرض',photo:'صور',galleryEmpty:'لا توجد صور بعد. أضف مساراتها إلى قائمة photos في config.js.'},
    bn:{title:'ছবি',empty:'এখনও কোনো ছবি নেই',hint:'config.js-এর photos তালিকায় ছবির পাথ যোগ করুন।',open:'সব ছবি খুলুন',previous:'আগের ছবি',next:'পরের ছবি',openGallery:'গ্যালারি খুলুন',photo:'টি ছবি',galleryEmpty:'এখনও কোনো ছবি নেই। config.js-এর photos তালিকায় ছবির পাথ যোগ করুন।'},
    pt:{title:'Fotos',empty:'Ainda sem fotos',hint:'Adicione os caminhos das imagens à lista photos em config.js.',open:'Abrir todas as fotos',previous:'Foto anterior',next:'Próxima foto',openGallery:'Abrir galeria',photo:'fotos',galleryEmpty:'Ainda não há fotos. Adicione os caminhos à lista photos em config.js.'},
    ru:{title:'Фото',empty:'Пока нет фото',hint:'Добавьте пути к изображениям в список photos файла config.js.',open:'Открыть все фото',previous:'Предыдущее фото',next:'Следующее фото',openGallery:'Открыть галерею',photo:'фото',galleryEmpty:'Пока нет фото. Добавьте пути к изображениям в список photos файла config.js.'}
};
function renderPhotoInterface(refreshGallery = true) {
    const text = photoText[currentLanguage] || photoText.en;
    document.getElementById('photo-widget-title').textContent = text.title;
    document.getElementById('photo-widget').setAttribute('aria-label', text.title);
    document.getElementById('photos-window-title').textContent = text.title;
    document.getElementById('photos-window').setAttribute('aria-label', text.title);
    document.querySelectorAll('#photos-window [data-photos-action]').forEach((button) => {
        const label = windowLabels[currentLanguage][button.dataset.photosAction];
        button.setAttribute('aria-label', label);
        button.title = label;
    });
    document.getElementById('photo-empty-title').textContent = text.empty;
    document.getElementById('photo-empty-hint').textContent = text.hint;
    document.getElementById('photo-feature').setAttribute('aria-label', text.open);
    document.getElementById('photo-previous').setAttribute('aria-label', text.previous);
    document.getElementById('photo-next').setAttribute('aria-label', text.next);
    document.getElementById('photos-gallery-count').textContent = `${photos.length} ${text.photo}`;
    document.getElementById('photo-count').textContent = String(photos.length);
    document.getElementById('photos-message').textContent = photos.length ? '' : text.galleryEmpty;
    const featureImage = document.getElementById('photo-feature-image');
    const empty = document.getElementById('photo-empty');
    if (photos.length) {
        activePhotoIndex = ((activePhotoIndex % photos.length) + photos.length) % photos.length;
        const currentPhoto = photos[activePhotoIndex];
        featureImage.src = currentPhoto.src;
        featureImage.alt = currentPhoto.name;
        featureImage.hidden = false;
        empty.hidden = true;
        document.getElementById('photo-position').textContent = `${activePhotoIndex + 1} / ${photos.length}`;
    } else {
        featureImage.hidden = true;
        featureImage.removeAttribute('src');
        featureImage.alt = '';
        empty.hidden = false;
        document.getElementById('photo-position').textContent = text.openGallery;
    }
    if (!refreshGallery) return;
    const gallery = document.getElementById('photo-gallery-grid');
    gallery.replaceChildren();
    photos.forEach((photo, index) => {
        const item = document.createElement('button');
        item.className = 'photo-gallery-item';
        item.type = 'button';
        item.setAttribute('aria-label', photo.name);
        const image = document.createElement('img');
        image.src = photo.src;
        image.alt = photo.name;
        image.loading = 'lazy';
        const name = document.createElement('span');
        name.className = 'photo-gallery-name';
        name.textContent = photo.name;
        item.addEventListener('click', () => {
            activePhotoIndex = index;
            renderPhotoInterface(false);
            openPhotoLightbox(index);
        });
        item.append(image, name);
        gallery.append(item);
    });
}
const weatherText = {
    tr:{loading:'Hava durumu yükleniyor…',error:'Hava durumu alınamadı',fileHint:'Chrome’da yerel dosya kısıtlaması olabilir. Siteyi HTTPS adresinden açın.',feels:'Hissedilen',updated:'Güncellendi',refresh:'Hava durumunu yenile',high:'Y',low:'D',conditions:['Açık','Az bulutlu','Parçalı bulutlu','Kapalı','Sisli','Çisenti','Dondurucu yağış','Yağmurlu','Kar yağışlı','Sağanak','Gök gürültülü']},
    en:{loading:'Loading live weather…',error:'Weather unavailable',fileHint:'Chrome may restrict weather from a local file. Open the site over HTTPS.',feels:'Feels like',updated:'Updated',refresh:'Refresh weather',high:'H',low:'L',conditions:['Clear','Mostly clear','Partly cloudy','Overcast','Foggy','Drizzle','Freezing rain','Rain','Snow','Showers','Thunderstorm']},
    zh:{loading:'正在加载实时天气…',error:'天气暂不可用',feels:'体感',updated:'更新于',refresh:'刷新天气',conditions:['晴朗','大致晴朗','局部多云','阴天','有雾','毛毛雨','冻雨','下雨','下雪','阵雨','雷暴']},
    hi:{loading:'मौसम लोड हो रहा है…',error:'मौसम उपलब्ध नहीं',feels:'महसूस',updated:'अपडेट',refresh:'मौसम रीफ़्रेश करें',conditions:['साफ़','अधिकतर साफ़','आंशिक बादल','बादल छाए','कोहरा','बूंदाबांदी','ओले/जमी बारिश','बारिश','बर्फ़','बौछारें','तूफ़ान']},
    es:{loading:'Cargando el tiempo…',error:'Tiempo no disponible',feels:'Sensación',updated:'Actualizado',refresh:'Actualizar tiempo',conditions:['Despejado','Mayormente despejado','Parcialmente nublado','Cubierto','Niebla','Llovizna','Lluvia helada','Lluvia','Nieve','Chubascos','Tormenta']},
    fr:{loading:'Chargement météo…',error:'Météo indisponible',feels:'Ressenti',updated:'Mis à jour',refresh:'Actualiser la météo',conditions:['Dégagé','Plutôt dégagé','Partiellement nuageux','Couvert','Brouillard','Bruine','Pluie verglaçante','Pluie','Neige','Averses','Orage']},
    ar:{loading:'جارٍ تحميل الطقس…',error:'الطقس غير متاح',feels:'المحسوسة',updated:'تم التحديث',refresh:'تحديث الطقس',conditions:['صافٍ','صافٍ غالبًا','غائم جزئيًا','غائم','ضباب','رذاذ','مطر متجمد','مطر','ثلج','زخات','عاصفة رعدية']},
    bn:{loading:'আবহাওয়া লোড হচ্ছে…',error:'আবহাওয়া পাওয়া যাচ্ছে না',feels:'অনুভূত',updated:'আপডেট',refresh:'আবহাওয়া রিফ্রেশ',conditions:['পরিষ্কার','বেশিরভাগ পরিষ্কার','আংশিক মেঘলা','মেঘাচ্ছন্ন','কুয়াশা','গুঁড়ি বৃষ্টি','বরফবৃষ্টি','বৃষ্টি','তুষার','বৃষ্টির ঝাপটা','বজ্রঝড়']},
    pt:{loading:'Carregando clima…',error:'Clima indisponível',feels:'Sensação',updated:'Atualizado',refresh:'Atualizar clima',conditions:['Céu limpo','Pouco nublado','Parcialmente nublado','Encoberto','Nevoeiro','Garoa','Chuva congelante','Chuva','Neve','Pancadas','Trovoada']},
    ru:{loading:'Загрузка погоды…',error:'Погода недоступна',feels:'Ощущается',updated:'Обновлено',refresh:'Обновить погоду',conditions:['Ясно','Преимущественно ясно','Переменная облачность','Пасмурно','Туман','Морось','Ледяной дождь','Дождь','Снег','Ливни','Гроза']}
};
const weatherCodeGroups = [[0],[1],[2],[3],[45,48],[51,53,55,56,57],[66,67],[61,63,65],[71,73,75,77,85,86],[80,81,82],[95,96,99]];

function renderWeather() {
    const strings = weatherText[currentLanguage] || weatherText.en;
    document.getElementById('weather-feels-label').textContent = strings.feels;
    document.getElementById('weather-high-label').textContent = strings.high || 'H';
    document.getElementById('weather-low-label').textContent = strings.low || 'L';
    document.getElementById('weather-refresh').setAttribute('aria-label', strings.refresh);
    document.getElementById('weather-refresh').title = strings.refresh;
    if (!latestWeatherData) {
        document.getElementById('weather-condition').textContent = strings.loading;
        document.getElementById('weather-state').textContent = strings.loading;
        return;
    }
    const { current, daily, fetchedAt } = latestWeatherData;
    const codeIndex = weatherCodeGroups.findIndex((group) => group.includes(current.weather_code));
    const conditions = strings.conditions;
    document.getElementById('weather-city').textContent = CONFIG.weather?.city || 'Your City';
    document.getElementById('weather-temperature').textContent = `${Math.round(current.temperature_2m)}°`;
    document.getElementById('weather-feels').textContent = `${Math.round(current.apparent_temperature)}°`;
    document.getElementById('weather-high').textContent = `${Math.round(daily.temperature_2m_max[0])}°`;
    document.getElementById('weather-low').textContent = `${Math.round(daily.temperature_2m_min[0])}°`;
    document.getElementById('weather-condition').textContent = conditions[codeIndex] || conditions[0];
    const icon = document.getElementById('weather-icon');
    const iconClasses = ['fa-sun','fa-sun','fa-cloud-sun','fa-cloud','fa-smog','fa-cloud-rain','fa-cloud-rain','fa-cloud-rain','fa-snowflake','fa-cloud-showers-heavy','fa-cloud-bolt'];
    icon.className = `fa-solid ${iconClasses[codeIndex] || 'fa-cloud-sun'} weather-icon`;
    document.getElementById('weather-state').textContent = `${strings.updated} ${new Intl.DateTimeFormat(languageLocales[currentLanguage], { hour:'2-digit', minute:'2-digit', timeZone:CONFIG.weather?.timezone || 'Europe/Istanbul' }).format(fetchedAt)}`;
}

async function updateWeather() {
    const button = document.getElementById('weather-refresh');
    button.classList.add('is-loading');
    const weather = CONFIG.weather || {};
    const params = new URLSearchParams({ latitude:weather.latitude ?? 38.4237, longitude:weather.longitude ?? 27.1428, current:'temperature_2m,apparent_temperature,is_day,weather_code', daily:'temperature_2m_max,temperature_2m_min', timezone:weather.timezone || 'Europe/Istanbul', forecast_days:'1' });
    const url = `https://api.open-meteo.com/v1/forecast?${params}`;
    try {
        const response = await fetch(url, { cache:'no-store' });
        if (!response.ok) throw new Error('Weather request failed');
        const result = await response.json();
        if (!result.current || !result.daily?.temperature_2m_max?.length) throw new Error('Weather data incomplete');
        latestWeatherData = { current:result.current, daily:result.daily, fetchedAt:new Date() };
        renderWeather();
    } catch (error) {
        console.warn(`${CONFIG.weather?.city || 'Weather'} request failed:`, error);
        if (!latestWeatherData) {
            const strings = weatherText[currentLanguage] || weatherText.en;
            const message = location.protocol === 'file:' ? (strings.fileHint || weatherText.en.fileHint) : strings.error;
            document.getElementById('weather-condition').textContent = message;
            document.getElementById('weather-state').textContent = message;
        }
    } finally {
        button.classList.remove('is-loading');
    }
}

function applyLanguage(language) {
    currentLanguage = language;
    renderWeather();
    renderPhotoInterface();
    const strings = translations[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    const localeMeta = document.querySelector('meta[property="og:locale"]');
    if (localeMeta) {
        const locale = languageLocales[language] || 'en-US';
        localeMeta.content = locale.includes('-') ? locale.replace('-', '_') : `${locale}_${locale.toUpperCase()}`;
    }
    document.title = CONFIG.site?.title || strings.siteTitle;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = strings[element.dataset.i18n];
    });
    document.getElementById('language-code').textContent = language.toUpperCase();
    document.getElementById('language-menu-button').setAttribute('aria-label', strings.languageMenu);
    document.getElementById('language-menu').setAttribute('aria-label', strings.languageMenu);
    document.getElementById('theme-menu-button').setAttribute('aria-label', strings.themeMenu);
    document.querySelector('.profile-window').setAttribute('aria-label', strings.profileLabel);
    document.querySelector('.dock').setAttribute('aria-label', strings.socialLinks);
    document.querySelector('.status-indicator').setAttribute('aria-label', strings.discordStatus);
    document.querySelector('.avatar').setAttribute('alt', CONFIG.profile?.avatarAlt || strings.avatarAlt);
    document.getElementById('about-shortcut').setAttribute('aria-label', windowLabels[language].about);
    document.getElementById('about-shortcut-label').textContent = windowLabels[language].about;
    document.querySelectorAll('[data-window-action]').forEach((button) => {
        const action = button.dataset.windowAction;
        button.setAttribute('aria-label', windowLabels[language][action]);
        button.title = windowLabels[language][action];
    });
    document.getElementById('restore-profile-dock').setAttribute('aria-label', windowLabels[language].restore);
    document.getElementById('restore-profile-label').textContent = windowLabels[language].about;
    document.getElementById('snake-window-title').textContent = gameTexts[language].title;
    document.getElementById('snake-heading').textContent = gameTexts[language].title;
    document.getElementById('snake-eyebrow').textContent = gameTexts[language].eyebrow;
    document.getElementById('score-label').textContent = gameTexts[language].score;
    document.getElementById('snake-instructions').textContent = gameTexts[language].instructions;
    document.getElementById('snake-shortcut-label').textContent = gameTexts[language].shortcut;
    document.getElementById('snake-shortcut').setAttribute('aria-label', gameTexts[language].shortcut);
    document.getElementById('restore-snake-label').textContent = gameTexts[language].title;
    document.getElementById('restore-snake-dock').setAttribute('aria-label', gameRestoreLabels[language]);
    document.getElementById('snake-board').setAttribute('aria-label', gameTexts[language].board);
    document.getElementById('snake-window').setAttribute('aria-label', gameTexts[language].title);
    document.querySelector('.snake-touch-controls').setAttribute('aria-label', gameTexts[language].instructions);
    document.getElementById('mines-window-title').textContent = mineTexts[language].title;
    document.getElementById('mines-window').setAttribute('aria-label', mineTexts[language].title);
    document.getElementById('mines-shortcut-label').textContent = mineTexts[language].shortcut;
    document.getElementById('mines-shortcut').setAttribute('aria-label', mineTexts[language].title);
    document.getElementById('restore-mines-label').textContent = mineTexts[language].title;
    document.getElementById('restore-mines-dock').setAttribute('aria-label', mineTexts[language].restore);
    document.getElementById('mine-new-game').setAttribute('aria-label', mineTexts[language].newGame);
    document.getElementById('mines-board').setAttribute('aria-label', mineTexts[language].board);
    document.getElementById('mines-instructions').textContent = mineTexts[language].instructions;
    const mineDifficultyWords = mineDifficultyTexts[language];
    document.getElementById('mine-difficulty-label').textContent = mineDifficultyWords.label;
    document.getElementById('mine-difficulty').setAttribute('aria-label', mineDifficultyWords.label);
    ['easy', 'medium', 'hard'].forEach((difficulty) => {
        document.querySelector(`#mine-difficulty option[value="${difficulty}"]`).textContent = mineDifficultyWords[difficulty];
    });
    document.querySelectorAll('.mines-window [data-mines-action]').forEach((button) => {
        const action = button.dataset.minesAction;
        button.setAttribute('aria-label', windowLabels[language][action]);
        button.title = windowLabels[language][action];
    });
    document.querySelectorAll('.social-app-window [data-social-action]').forEach((button) => {
        const action = button.dataset.socialAction;
        button.setAttribute('aria-label', windowLabels[language][action]);
        button.title = windowLabels[language][action];
    });
    document.getElementById('social-frame-note').textContent = socialWindowTexts[language].note;
    document.getElementById('social-open-link').textContent = socialWindowTexts[language].open;
    document.getElementById('social-app-card-caption').textContent = socialWindowTexts[language].caption;
    document.getElementById('social-app-open-button').textContent = socialWindowTexts[language].open;
    document.getElementById('restore-social-app-label').textContent = socialWindowTexts[language].restore;
    document.getElementById('restore-social-app-dock').setAttribute('aria-label', socialWindowTexts[language].restore);
    const extra = auxTexts[language];
    document.getElementById('notes-window-title').textContent = extra.notes;
    document.getElementById('notes-window').setAttribute('aria-label', extra.notes);
    document.getElementById('notes-shortcut-label').textContent = extra.notes;
    document.getElementById('notes-shortcut').setAttribute('aria-label', extra.notes);
    document.getElementById('notes-eyebrow').textContent = extra.notesEye;
    document.getElementById('notes-textarea').placeholder = extra.notesHint;
    document.getElementById('notes-save-state').textContent = extra.saved;
    document.getElementById('restore-notes-label').textContent = extra.notes;
    document.getElementById('restore-notes-dock').setAttribute('aria-label', extra.notes);
    document.getElementById('music-window-title').textContent = extra.music;
    document.getElementById('music-window').setAttribute('aria-label', 'Apple Music');
    document.getElementById('music-shortcut-label').textContent = extra.music;
    document.getElementById('music-shortcut').setAttribute('aria-label', 'Apple Music');
    document.getElementById('music-description').textContent = extra.musicDescription;
    document.getElementById('apple-music-link').textContent = extra.openMusic;
    document.getElementById('apple-music-link').href = CONFIG.appleMusicUrl || 'https://music.apple.com/';
    document.getElementById('music-play-button').setAttribute('aria-label', document.getElementById('music-app-audio').paused ? extra.play : extra.pause);
    document.getElementById('music-app-volume').setAttribute('aria-label', extra.music);
    document.getElementById('restore-music-label').textContent = extra.music;
    document.getElementById('restore-music-dock').setAttribute('aria-label', extra.music);
    document.getElementById('pong-window-title').textContent = extra.pong;
    document.getElementById('pong-window').setAttribute('aria-label', extra.pong);
    document.getElementById('pong-shortcut-label').textContent = extra.pong;
    document.getElementById('pong-shortcut').setAttribute('aria-label', extra.pong);
    document.getElementById('restore-pong-label').textContent = extra.pong;
    document.getElementById('restore-pong-dock').setAttribute('aria-label', extra.pong);
    document.getElementById('pong-player-label').textContent = extra.you;
    document.getElementById('pong-computer-label').textContent = extra.cpu;
    document.getElementById('pong-start').textContent = pongRunning ? extra.pause : extra.start;
    document.getElementById('pong-reset').textContent = extra.reset;
    document.querySelector('[data-pong-move="up"]').setAttribute('aria-label', extra.moveUp);
    document.querySelector('[data-pong-move="down"]').setAttribute('aria-label', extra.moveDown);
    syncPongMessage();
    document.getElementById('terminal-window-title').textContent = extra.terminal;
    document.getElementById('terminal-window').setAttribute('aria-label', extra.terminal);
    document.getElementById('terminal-shortcut-label').textContent = extra.terminal;
    document.getElementById('terminal-shortcut').setAttribute('aria-label', extra.terminal);
    document.getElementById('terminal-welcome').textContent = extra.terminalWelcome;
    document.querySelector('#terminal-form label').textContent = extra.terminalPrompt;
    document.getElementById('restore-terminal-label').textContent = extra.terminal;
    document.getElementById('restore-terminal-dock').setAttribute('aria-label', extra.terminal);
    document.getElementById('trash-window-title').textContent = extra.trash;
    document.getElementById('trash-window').setAttribute('aria-label', extra.trash);
    document.getElementById('trash-shortcut-label').textContent = extra.trash;
    document.getElementById('trash-shortcut').setAttribute('aria-label', extra.trash);
    document.getElementById('trash-heading').textContent = extra.trashEmpty;
    document.getElementById('trash-description').textContent = extra.trashDesc;
    document.getElementById('restore-trash-label').textContent = extra.trash;
    document.getElementById('restore-trash-dock').setAttribute('aria-label', extra.trash);
    document.querySelectorAll('.aux-window [data-aux-action]').forEach((button) => {
        const action = button.dataset.auxAction;
        button.setAttribute('aria-label', windowLabels[language][action]);
        button.title = windowLabels[language][action];
    });
    document.getElementById('control-center-title').textContent = controlTexts[language].title;
    document.getElementById('control-center-panel').setAttribute('aria-label', controlTexts[language].title);
    document.getElementById('control-center-button').setAttribute('aria-label', controlTexts[language].aria);
    document.getElementById('control-center-button').title = controlTexts[language].title;
    document.getElementById('network-title').textContent = controlTexts[language].network;
    document.getElementById('appearance-title').textContent = controlTexts[language].appearance;
    document.getElementById('profile-action-title').textContent = controlTexts[language].profile;
    document.getElementById('open-profile-label').textContent = controlTexts[language].openProfile;
    syncControlCenter();
    document.querySelectorAll('.snake-touch-controls [data-direction]').forEach((button) => {
        button.setAttribute('aria-label', gameTexts[language][button.dataset.direction]);
    });
    syncSnakeText();
    syncMineText();
    document.getElementById('volume-control').setAttribute('title', strings.musicLater);
    document.getElementById('volume-slider').setAttribute('aria-label', strings.volume);
    document.getElementById('profile-location').textContent = CONFIG.location;
    if (!latestDiscordData) document.querySelector('.activity').textContent = strings.loading;
    document.querySelectorAll('[data-language-choice]').forEach((option) => option.setAttribute('aria-checked', String(option.dataset.languageChoice === language)));
    updateClock();
    if (latestDiscordData) renderDiscordStatus(latestDiscordData);
    if (audioControlsReady) syncAudioControls();
}

// Detect the visitor's country from their public IP. Only the two-letter country code is used.
const countryRequest = new AbortController();
const countryTimeout = setTimeout(() => countryRequest.abort(), 3500);
if (CONFIG.language?.detectByCountry !== false) fetch('https://ipapi.co/country/', { signal: countryRequest.signal, cache: 'no-store' })
    .then((response) => response.ok ? response.text() : Promise.reject(new Error('Country lookup unavailable')))
    .then((countryCode) => {
        const country = countryCode.trim().toUpperCase();
        const detectedLanguage = Object.keys(countryLanguages).find((language) => countryLanguages[language].includes(country)) || 'en';
        if (!languageManuallySelected && /^[A-Z]{2}$/.test(country)) applyLanguage(detectedLanguage);
    })
    .catch(() => {
        // Use the visitor's browser language when country lookup is unavailable.
    })
    .finally(() => clearTimeout(countryTimeout));

const languageButton = document.getElementById('language-menu-button');
const languageMenu = document.getElementById('language-menu');
languageList.forEach(([code, name]) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'language-option';
    option.dataset.languageChoice = code;
    option.setAttribute('role', 'menuitemradio');
    option.setAttribute('aria-checked', 'false');
    option.innerHTML = `<span class="language-native-name"></span><span>${code.toUpperCase()}</span>`;
    option.querySelector('.language-native-name').textContent = name;
    languageMenu.appendChild(option);
});
languageButton.addEventListener('click', () => {
    const open = languageMenu.hidden;
    languageMenu.hidden = !open;
    languageButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('[data-language-choice]').forEach((option) => option.addEventListener('click', () => {
    languageManuallySelected = true;
    applyLanguage(option.dataset.languageChoice);
    languageMenu.hidden = true;
    languageButton.setAttribute('aria-expanded', 'false');
}));

// Window controls: close, minimize into the Dock, and toggle a maximized view.
function showAppWindow(element) {
    element.hidden = false;
    element.classList.remove('window-closing', 'window-opening');
    void element.offsetWidth;
    element.classList.add('window-opening');
}

function toggleWindowMaximized(element) {
    element.classList.add('window-resizing');
    void element.offsetWidth;
    const maximized = element.classList.toggle('maximized');
    window.setTimeout(() => element.classList.remove('window-resizing'), 420);
    return maximized;
}

function hideAppWindow(element, afterClose) {
    element.classList.remove('window-opening');
    element.classList.add('window-closing');
    let finished = false;
    const finish = (event) => {
        if (event && event.target !== element) return;
        if (finished) return;
        finished = true;
        element.removeEventListener('animationend', finish);
        element.classList.remove('window-closing');
        element.hidden = true;
        if (afterClose) afterClose();
    };
    element.addEventListener('animationend', finish);
    window.setTimeout(finish, 260);
}

const profileWindow = document.querySelector('.profile-window');
const restoreProfileButton = document.getElementById('restore-profile-dock');
const maximizeButton = document.querySelector('[data-window-action="maximize"]');
function openProfileWindow() {
    showAppWindow(profileWindow);
    profileWindow.classList.remove('maximized');
    maximizeButton.setAttribute('aria-pressed', 'false');
    restoreProfileButton.hidden = true;
}
document.getElementById('about-shortcut').addEventListener('click', openProfileWindow);
document.getElementById('profile-menu-shortcut').addEventListener('click', openProfileWindow);
restoreProfileButton.addEventListener('click', openProfileWindow);
document.querySelectorAll('.profile-window [data-window-action]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.windowAction === 'close') {
        profileWindow.classList.remove('maximized');
        maximizeButton.setAttribute('aria-pressed', 'false');
        hideAppWindow(profileWindow, () => { restoreProfileButton.hidden = true; });
    } else if (button.dataset.windowAction === 'minimize') {
        profileWindow.classList.remove('maximized');
        maximizeButton.setAttribute('aria-pressed', 'false');
        hideAppWindow(profileWindow, () => { restoreProfileButton.hidden = false; });
    } else {
        const maximized = toggleWindowMaximized(profileWindow);
        if (maximized) {
            profileWindow.classList.remove('is-dragged');
            profileWindow.style.left = '';
            profileWindow.style.top = '';
        }
        maximizeButton.setAttribute('aria-pressed', String(maximized));
    }
}));

// Populate profile details from the central configuration.
document.getElementById('page-title').textContent = CONFIG.site?.title || `${CONFIG.name} — Kişisel Profil`;
document.title = CONFIG.site?.title || document.title;
const siteDescription = CONFIG.site?.description || document.querySelector('meta[name="description"]').content;
document.querySelector('meta[name="description"]').content = siteDescription;
document.querySelector('meta[name="author"]').content = CONFIG.site?.author || CONFIG.name;
document.querySelector('meta[name="theme-color"]').content = CONFIG.site?.themeColor || '#17253a';
const canonicalUrl = CONFIG.site?.canonicalUrl || location.href;
const siteTitle = CONFIG.site?.title || document.title;
document.querySelector('link[rel="canonical"]').href = canonicalUrl;
document.querySelector('meta[property="og:url"]').content = canonicalUrl;
document.querySelector('meta[property="og:site_name"]').content = CONFIG.name;
document.querySelector('meta[property="og:title"]').content = siteTitle;
document.querySelector('meta[property="og:description"]').content = siteDescription;
document.querySelector('meta[name="twitter:title"]').content = siteTitle;
document.querySelector('meta[name="twitter:description"]').content = siteDescription;
const structuredDataElement = document.getElementById('profile-structured-data');
if (structuredDataElement) {
    const sameAs = (CONFIG.socials || []).map((social) => social.url).filter((url) => {
        try {
            const parsedUrl = new URL(url);
            return ['http:', 'https:'].includes(parsedUrl.protocol) && parsedUrl.pathname.replaceAll('/', '').length > 0;
        } catch {
            return false;
        }
    });
    structuredDataElement.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: siteTitle,
        url: canonicalUrl,
        mainEntity: {
            '@type': 'Person',
            name: CONFIG.name,
            alternateName: CONFIG.username || undefined,
            url: canonicalUrl,
            sameAs
        }
    });
}
document.querySelector('.site-logo-button img').src = CONFIG.site?.logo || 'favicon.svg';
document.querySelector('link[rel="icon"]').href = CONFIG.site?.logo || 'favicon.svg';
document.querySelector('.site-logo-button img').alt = `${CONFIG.name} logo`;
document.querySelector('.avatar').src = CONFIG.avatar || CONFIG.site?.logo || 'favicon.svg';
document.querySelector('.version-label').textContent = CONFIG.site?.footerDomain || location.host;
document.querySelector('.menu-app').textContent = CONFIG.name;
if (CONFIG.site?.fontFamily) document.documentElement.style.setProperty('--site-font', CONFIG.site.fontFamily);
if (CONFIG.appearance?.wallpaperImage) {
    document.querySelector('.wallpaper').style.backgroundImage = `url("${CONFIG.appearance.wallpaperImage}")`;
}
document.getElementById('profile-name').textContent = CONFIG.name;
document.getElementById('profile-username').textContent = CONFIG.username;
    document.getElementById('profile-location').textContent = CONFIG.location;

const socialsContainer = document.getElementById('social-links-container');
function renderSocialLinks() {
    socialsContainer.querySelectorAll('.site-social-link').forEach((link) => link.remove());
    if (CONFIG.features?.socialLinks === false) return;
    (CONFIG.socials || []).forEach((social) => {
    const link = document.createElement('a');
    link.href = social.url;
    link.className = 'dock-item site-social-link';
    link.setAttribute('aria-label', social.label);
    link.title = social.label;
    const iconWrap = document.createElement('span');
    iconWrap.className = 'dock-icon';
    const icon = document.createElement('i');
    icon.className = `fa-brands ${social.icon}`;
    icon.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span');
    label.className = 'dock-label';
    label.textContent = social.label;
    iconWrap.append(icon);
    link.append(iconWrap, label);
    link.addEventListener('click', (event) => {
        event.preventDefault();
        openSocialApp(social);
    });
    socialsContainer.appendChild(link);
    });
}
renderSocialLinks();

// The Lanyard integration remains active and refreshes Discord presence every 15 seconds.
async function fetchDiscordStatus() {
    if (!CONFIG.discordId || CONFIG.features?.discordStatus === false) return;
    const activityEl = document.querySelector('.activity');
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${CONFIG.discordId}?_t=${Date.now()}`, { cache: 'no-store' });
        const { success, data, error } = await response.json();
        if (!success) {
            console.error('Lanyard Error:', error?.message);
            activityEl.textContent = translations[currentLanguage].unavailable;
            return;
        }
        latestDiscordData = data;
        renderDiscordStatus(data);
    } catch (error) {
        console.error('Failed to fetch Discord status', error);
        activityEl.textContent = translations[currentLanguage].statusFailed;
    }
}

function renderDiscordStatus(data) {
    const status = data.discord_status || 'offline';
    document.querySelector('.status-indicator').className = `status-indicator ${status}`;
    if (data.discord_user?.avatar) {
        const extension = data.discord_user.avatar.startsWith('a_') ? 'gif' : 'png';
        document.querySelector('.avatar').src = `https://cdn.discordapp.com/avatars/${CONFIG.discordId}/${data.discord_user.avatar}.${extension}?size=256`;
    }
    const game = data.activities?.find((item) => item.type === 0);
    const activity = data.activities?.find((item) => item.type !== 4);
    const words = translations[currentLanguage];
    const activityEl = document.querySelector('.activity');
    if (game) activityEl.textContent = `${words.playing} ${game.name}`;
    else if (activity) activityEl.textContent = activity.name;
    else activityEl.textContent = words[status] || words.offline;
}
if (CONFIG.features?.discordStatus !== false && CONFIG.discordId) {
    fetchDiscordStatus();
    setInterval(fetchDiscordStatus, CONFIG.discordRefreshIntervalMs || 15000);
} else {
    document.querySelector('.status-row').hidden = true;
    document.querySelector('.status-indicator').hidden = true;
}

// Appearance menu: remember the visitor's choice on this device.
const themeMenuButton = document.getElementById('theme-menu-button');
const themeMenu = document.getElementById('theme-menu');
const controlCenterButton = document.getElementById('control-center-button');
const controlCenterPanel = document.getElementById('control-center-panel');
const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
const xpWelcomeToast = document.getElementById('xp-welcome-toast');
let xpWelcomeToastTimer;
let xpWelcomeToastHideTimer;
let savedTheme = null;
try {
    savedTheme = localStorage.getItem('yourname-theme');
} catch {
    // Storage can be unavailable when this page is opened as a local file.
}
let regularTheme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (CONFIG.appearance?.defaultTheme === 'dark' ? 'dark' : 'light');
function setTheme(theme) {
    document.body.dataset.theme = theme;
    if (theme !== 'xp') {
        regularTheme = theme;
        try {
            localStorage.setItem('yourname-theme', theme);
        } catch {
            // The selected theme still works for this page view without storage.
        }
        hideXpWelcomeToast();
        clearTimeout(xpWelcomeToastTimer);
    }
    const selectedTheme = theme === 'xp' ? regularTheme : theme;
    themeChoices.forEach((choice) => choice.setAttribute('aria-checked', String(choice.dataset.themeChoice === selectedTheme)));
    syncControlCenter();
    requestAnimationFrame(() => {
        drawPongGame();
        drawSnakeGame();
    });
}
function showXpWelcomeToast(message) {
    clearTimeout(xpWelcomeToastTimer);
    clearTimeout(xpWelcomeToastHideTimer);
    xpWelcomeToast.textContent = message;
    xpWelcomeToast.classList.remove('is-leaving');
    xpWelcomeToast.hidden = false;
    xpWelcomeToastTimer = setTimeout(hideXpWelcomeToast, 4500);
}
function hideXpWelcomeToast() {
    clearTimeout(xpWelcomeToastHideTimer);
    if (xpWelcomeToast.hidden) return;
    xpWelcomeToast.classList.add('is-leaving');
    xpWelcomeToastHideTimer = setTimeout(() => {
        xpWelcomeToast.hidden = true;
        xpWelcomeToast.classList.remove('is-leaving');
    }, 380);
}
function syncControlCenter() {
    const labels = controlTexts[currentLanguage];
    const online = navigator.onLine;
    document.getElementById('network-status').textContent = online ? labels.online : labels.offline;
    document.getElementById('network-icon').className = `fa-solid ${online ? 'fa-wifi' : 'fa-wifi-slash'}`;
    const theme = document.body.dataset.theme;
    document.getElementById('theme-current-label').textContent = theme === 'xp' ? 'Windows XP' : labels[theme === 'dark' ? 'dark' : 'light'];
    document.getElementById('theme-toggle-icon').className = theme === 'xp' ? 'fa-brands fa-windows' : `fa-regular ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`;
}
setTheme(savedTheme === 'dark' ? 'dark' : regularTheme);
controlCenterButton.addEventListener('click', () => {
    const open = controlCenterPanel.hidden;
    controlCenterPanel.hidden = !open;
    controlCenterButton.setAttribute('aria-expanded', String(open));
    if (open) syncControlCenter();
});
document.getElementById('theme-toggle-action').addEventListener('click', () => {
    setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
});
document.getElementById('open-profile-action').addEventListener('click', () => {
    openProfileWindow();
    controlCenterPanel.hidden = true;
    controlCenterButton.setAttribute('aria-expanded', 'false');
});
window.addEventListener('online', syncControlCenter);
window.addEventListener('offline', syncControlCenter);
let logoClickStreak = 0;
let lastLogoClickAt = 0;
themeMenuButton.addEventListener('click', () => {
    if (CONFIG.features?.xpEasterEgg === false) {
        const menuOpen = !themeMenu.hidden;
        themeMenu.hidden = menuOpen;
        themeMenuButton.setAttribute('aria-expanded', String(!menuOpen));
        return;
    }
    const now = Date.now();
    logoClickStreak = now - lastLogoClickAt <= (CONFIG.appearance?.xpClickIntervalMs || 1100) ? logoClickStreak + 1 : 1;
    lastLogoClickAt = now;
    if (logoClickStreak >= (CONFIG.appearance?.xpLogoClickCount || 10)) {
        logoClickStreak = 0;
        const isXpTheme = document.body.dataset.theme === 'xp';
        if (isXpTheme) {
            setTheme(regularTheme);
        } else {
            setTheme('xp');
            showXpWelcomeToast(xpWelcomeTexts[currentLanguage]);
        }
        themeMenu.hidden = true;
        themeMenuButton.setAttribute('aria-expanded', 'false');
        controlCenterPanel.hidden = true;
        controlCenterButton.setAttribute('aria-expanded', 'false');
        return;
    }
    const isOpen = !themeMenu.hidden;
    themeMenu.hidden = isOpen;
    themeMenuButton.setAttribute('aria-expanded', String(!isOpen));
});
themeChoices.forEach((choice) => choice.addEventListener('click', () => {
    const selectedTheme = choice.dataset.themeChoice;
    if (document.body.dataset.theme === 'xp') {
        regularTheme = selectedTheme;
        try {
            localStorage.setItem('yourname-theme', selectedTheme);
        } catch {
            // The selected theme remains available for this page view.
        }
        themeChoices.forEach((item) => item.setAttribute('aria-checked', String(item.dataset.themeChoice === selectedTheme)));
    } else {
        setTheme(selectedTheme);
    }
    themeMenu.hidden = true;
    themeMenuButton.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('click', (event) => {
    if (!event.target.closest('.control-center-wrap')) {
        controlCenterPanel.hidden = true;
        controlCenterButton.setAttribute('aria-expanded', 'false');
    }
    if (!event.target.closest('.theme-menu-wrap')) {
        themeMenu.hidden = true;
        themeMenuButton.setAttribute('aria-expanded', 'false');
    }
    if (!event.target.closest('.language-menu-wrap')) {
        languageMenu.hidden = true;
        languageButton.setAttribute('aria-expanded', 'false');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        controlCenterPanel.hidden = true;
        controlCenterButton.setAttribute('aria-expanded', 'false');
        themeMenu.hidden = true;
        themeMenuButton.setAttribute('aria-expanded', 'false');
        languageMenu.hidden = true;
        languageButton.setAttribute('aria-expanded', 'false');
    }
});

// Audio controls target a dedicated music element so background music can be added later.
const music = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');
let lastVolume = Number(CONFIG.defaultVolume ?? 0.1);
volumeSlider.value = String(lastVolume);
music.volume = lastVolume;

if (CONFIG.musicUrl && CONFIG.features?.backgroundMusic !== false) {
    music.src = CONFIG.musicUrl;
    music.volume = lastVolume;
    music.play().catch(() => {
        // Browsers may require a user gesture before starting audio.
    });
} else {
    document.querySelector('.sound-button').title = translations[currentLanguage].musicLater;
}

function syncAudioControls() {
    const muted = music.muted || music.volume === 0;
    volumeIcon.className = `fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`;
    document.getElementById('volume-control').setAttribute('aria-label', translations[currentLanguage][muted ? 'unmute' : 'mute']);
}
audioControlsReady = true;

document.getElementById('volume-control').addEventListener('click', () => {
    if (music.muted || music.volume === 0) {
        music.muted = false;
        music.volume = lastVolume || 0.1;
        volumeSlider.value = music.volume;
        if (CONFIG.musicUrl && music.paused) music.play().catch(() => {});
    } else {
        lastVolume = music.volume;
        music.muted = true;
    }
    syncAudioControls();
});

volumeSlider.addEventListener('input', () => {
    music.volume = Number(volumeSlider.value);
    music.muted = music.volume === 0;
    if (music.volume > 0) lastVolume = music.volume;
    if (CONFIG.musicUrl && music.paused && music.volume > 0) music.play().catch(() => {});
    syncAudioControls();
});
syncAudioControls();

// A compact grid-based Snake game with keyboard and touch controls.
const snakeWindow = document.getElementById('snake-window');
const restoreSnakeButton = document.getElementById('restore-snake-dock');
const snakeCanvas = document.getElementById('snake-board');
const snakeContext = snakeCanvas.getContext('2d');
const snakeScore = document.getElementById('snake-score');
const snakeMessage = document.getElementById('snake-message');
const snakeStartButton = document.getElementById('snake-start');
const snakeCells = CONFIG.games?.snake?.gridSize || 20;
const snakeCellSize = CONFIG.games?.snake?.cellSize || 20;
const snakeCanvasScale = Math.min(window.devicePixelRatio || 1, 2);
snakeCanvas.width = snakeCells * snakeCellSize * snakeCanvasScale;
snakeCanvas.height = snakeCells * snakeCellSize * snakeCanvasScale;
snakeContext.scale(snakeCanvasScale, snakeCanvasScale);
let snakeBody = [];
let snakeDirection = { x: 1, y: 0 };
let queuedDirection = { x: 1, y: 0 };
let directionChangedThisTick = false;
let snakeFood = { x: 14, y: 10 };
let snakePoints = 0;
let snakeTimer = null;
let gameRunning = false;
let gameOver = false;
let snakeMessageKey = 'ready';

function makeWindowDraggable(windowElement) {
    const titlebar = windowElement.querySelector('.window-titlebar');
    let dragState = null;
    titlebar.addEventListener('pointerdown', (event) => {
        if (event.target.closest('button, a') || windowElement.classList.contains('maximized')) return;
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        const rect = windowElement.getBoundingClientRect();
        windowElement.classList.add('is-dragged');
        windowElement.style.left = `${rect.left}px`;
        windowElement.style.top = `${rect.top}px`;
        if (windowElement === snakeWindow && window.matchMedia('(max-width: 600px)').matches) windowElement.style.bottom = 'auto';
        dragState = { pointerId: event.pointerId, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top };
        titlebar.setPointerCapture(event.pointerId);
        event.preventDefault();
    });
    titlebar.addEventListener('pointermove', (event) => {
        if (!dragState || dragState.pointerId !== event.pointerId) return;
        const rect = windowElement.getBoundingClientRect();
        const maxLeft = Math.max(8, window.innerWidth - rect.width - 8);
        const maxTop = Math.max(40, window.innerHeight - rect.height - 82);
        const left = Math.min(maxLeft, Math.max(8, event.clientX - dragState.offsetX));
        const top = Math.min(maxTop, Math.max(40, event.clientY - dragState.offsetY));
        windowElement.style.left = `${left}px`;
        windowElement.style.top = `${top}px`;
    });
    const stopDragging = (event) => {
        if (!dragState || dragState.pointerId !== event.pointerId) return;
        dragState = null;
        if (titlebar.hasPointerCapture(event.pointerId)) titlebar.releasePointerCapture(event.pointerId);
    };
    titlebar.addEventListener('pointerup', stopDragging);
    titlebar.addEventListener('pointercancel', stopDragging);
}
makeWindowDraggable(profileWindow);
makeWindowDraggable(snakeWindow);
makeWindowDraggable(document.getElementById('mines-window'));
makeWindowDraggable(document.getElementById('social-app-window'));

function syncSnakeText() {
    const text = gameTexts[currentLanguage];
    if (snakeScore) snakeScore.textContent = String(snakePoints);
    if (snakeStartButton) snakeStartButton.textContent = gameRunning ? text.pause : text.start;
    if (!snakeMessage) return;
    snakeMessage.textContent = snakeMessageKey === 'over' ? `${text.over}: ${snakePoints}` : text[snakeMessageKey];
}

function makeSnakeFood() {
    do {
        snakeFood = { x: Math.floor(Math.random() * snakeCells), y: Math.floor(Math.random() * snakeCells) };
    } while (snakeBody.some((part) => part.x === snakeFood.x && part.y === snakeFood.y));
}

function drawSnakeGame() {
    const size = snakeCellSize;
    const dark = document.body.dataset.theme === 'dark';
    const xpTheme = document.body.dataset.theme === 'xp';
    snakeContext.clearRect(0, 0, snakeCells * size, snakeCells * size);
    snakeContext.fillStyle = dark ? '#172130' : xpTheme ? '#f7f7f7' : '#edf2f7';
    snakeContext.fillRect(0, 0, snakeCells * size, snakeCells * size);
    snakeContext.strokeStyle = dark ? 'rgba(255,255,255,.035)' : xpTheme ? 'rgba(40,55,70,.12)' : 'rgba(48,70,96,.045)';
    snakeContext.lineWidth = 1;
    for (let n = 1; n < snakeCells; n++) {
        snakeContext.beginPath();
        snakeContext.moveTo(n * size + .5, 0);
        snakeContext.lineTo(n * size + .5, snakeCells * size);
        snakeContext.moveTo(0, n * size + .5);
        snakeContext.lineTo(snakeCells * size, n * size + .5);
        snakeContext.stroke();
    }

    snakeContext.fillStyle = '#f16b67';
    snakeContext.beginPath();
    snakeContext.arc(snakeFood.x * size + size / 2, snakeFood.y * size + size / 2, size * .34, 0, Math.PI * 2);
    snakeContext.fill();
    snakeContext.strokeStyle = '#c95350';
    snakeContext.lineWidth = 2;
    snakeContext.beginPath();
    snakeContext.moveTo(snakeFood.x * size + size / 2, snakeFood.y * size + 4);
    snakeContext.lineTo(snakeFood.x * size + size / 2 + 3, snakeFood.y * size + 1);
    snakeContext.stroke();

    snakeBody.forEach((part, index) => {
        const inset = 2;
        snakeContext.fillStyle = xpTheme ? (index === 0 ? '#287b1c' : '#55a83d') : (index === 0 ? '#278e5b' : '#52b97c');
        snakeContext.beginPath();
        if (snakeContext.roundRect) snakeContext.roundRect(part.x * size + inset, part.y * size + inset, size - inset * 2, size - inset * 2, 6);
        else snakeContext.rect(part.x * size + inset, part.y * size + inset, size - inset * 2, size - inset * 2);
        snakeContext.fill();
    });

    if (snakeBody.length) {
        const head = snakeBody[0];
        const eyeColor = '#f7fff9';
        const eyeBaseX = head.x * size + size / 2;
        const eyeBaseY = head.y * size + size / 2;
        const perp = { x: -snakeDirection.y, y: snakeDirection.x };
        snakeContext.fillStyle = eyeColor;
        [-1, 1].forEach((side) => {
            snakeContext.beginPath();
            snakeContext.arc(eyeBaseX + snakeDirection.x * 4 + perp.x * 4 * side, eyeBaseY + snakeDirection.y * 4 + perp.y * 4 * side, 1.8, 0, Math.PI * 2);
            snakeContext.fill();
        });
    }
}

function resetSnakeGame() {
    clearInterval(snakeTimer);
    snakeTimer = null;
    gameRunning = false;
    gameOver = false;
    snakeBody = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    snakeDirection = { x: 1, y: 0 };
    queuedDirection = { x: 1, y: 0 };
    directionChangedThisTick = false;
    snakePoints = 0;
    snakeMessageKey = 'ready';
    makeSnakeFood();
    drawSnakeGame();
    syncSnakeText();
}

function moveSnake() {
    snakeDirection = queuedDirection;
    directionChangedThisTick = false;
    const head = { x: snakeBody[0].x + snakeDirection.x, y: snakeBody[0].y + snakeDirection.y };
    const eating = head.x === snakeFood.x && head.y === snakeFood.y;
    const bodyToCheck = eating ? snakeBody : snakeBody.slice(0, -1);
    const hitBody = bodyToCheck.some((part) => part.x === head.x && part.y === head.y);
    if (head.x < 0 || head.x >= snakeCells || head.y < 0 || head.y >= snakeCells || hitBody) {
        clearInterval(snakeTimer);
        snakeTimer = null;
        gameRunning = false;
        gameOver = true;
        snakeMessageKey = 'over';
        syncSnakeText();
        drawSnakeGame();
        return;
    }
    snakeBody.unshift(head);
    if (eating) {
        snakePoints += 1;
        makeSnakeFood();
    } else {
        snakeBody.pop();
    }
    drawSnakeGame();
    syncSnakeText();
}

function startOrPauseSnake() {
    if (gameRunning) {
        clearInterval(snakeTimer);
        snakeTimer = null;
        gameRunning = false;
        snakeMessageKey = 'paused';
        syncSnakeText();
        return;
    }
    if (gameOver) resetSnakeGame();
    gameRunning = true;
    snakeMessageKey = 'playing';
    snakeTimer = setInterval(moveSnake, CONFIG.games?.snake?.tickIntervalMs || 190);
    syncSnakeText();
}

function directSnake(direction) {
    if (!gameRunning || directionChangedThisTick) return;
    const next = ({
        up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 }
    })[direction];
    if (!next || (next.x === -snakeDirection.x && next.y === -snakeDirection.y)) return;
    queuedDirection = next;
    directionChangedThisTick = true;
}

let snakeSwipeStart = null;
snakeCanvas.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'touch') return;
    snakeSwipeStart = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    snakeCanvas.setPointerCapture(event.pointerId);
});
snakeCanvas.addEventListener('pointerup', (event) => {
    if (!snakeSwipeStart || event.pointerId !== snakeSwipeStart.pointerId) return;
    const deltaX = event.clientX - snakeSwipeStart.x;
    const deltaY = event.clientY - snakeSwipeStart.y;
    snakeSwipeStart = null;
    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 24) return;
    directSnake(Math.abs(deltaX) > Math.abs(deltaY)
        ? (deltaX > 0 ? 'right' : 'left')
        : (deltaY > 0 ? 'down' : 'up'));
});
snakeCanvas.addEventListener('pointercancel', () => { snakeSwipeStart = null; });

snakeStartButton.addEventListener('click', startOrPauseSnake);
document.getElementById('snake-reset').addEventListener('click', resetSnakeGame);
document.querySelectorAll('.snake-touch-controls [data-direction]').forEach((button) => {
    button.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        directSnake(button.dataset.direction);
    });
});
document.addEventListener('keydown', (event) => {
    if (snakeWindow.hidden || !pongWindow.hidden || event.target.matches('input, textarea')) return;
    const directions = { ArrowUp:'up', w:'up', W:'up', ArrowDown:'down', s:'down', S:'down', ArrowLeft:'left', a:'left', A:'left', ArrowRight:'right', d:'right', D:'right' };
    const direction = directions[event.key];
    if (direction) {
        event.preventDefault();
        directSnake(direction);
    } else if (event.code === 'Space' && !event.repeat) {
        event.preventDefault();
        startOrPauseSnake();
    }
});

function openSnakeWindow(reset = true) {
    showAppWindow(snakeWindow);
    snakeWindow.classList.remove('maximized');
    if (reset) {
        snakeWindow.classList.remove('is-dragged');
        snakeWindow.style.left = '';
        snakeWindow.style.top = '';
        snakeWindow.style.bottom = '';
    }
    document.querySelector('#snake-window [data-window-action="maximize"]').setAttribute('aria-pressed', 'false');
    restoreSnakeButton.hidden = true;
    if (reset) resetSnakeGame();
}
document.getElementById('snake-shortcut').addEventListener('click', () => openSnakeWindow(true));
restoreSnakeButton.addEventListener('click', () => openSnakeWindow(false));
document.querySelectorAll('#snake-window [data-window-action]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.windowAction;
    if (action === 'close' || action === 'minimize') {
        clearInterval(snakeTimer);
        snakeTimer = null;
        gameRunning = false;
        snakeMessageKey = 'paused';
        syncSnakeText();
        snakeWindow.classList.remove('maximized');
        document.querySelector('#snake-window [data-window-action="maximize"]').setAttribute('aria-pressed', 'false');
        hideAppWindow(snakeWindow, () => { restoreSnakeButton.hidden = action === 'close'; });
    } else {
        const maximized = toggleWindowMaximized(snakeWindow);
        snakeWindow.classList.remove('is-dragged');
        snakeWindow.style.left = '';
        snakeWindow.style.top = '';
        snakeWindow.style.bottom = '';
        button.setAttribute('aria-pressed', String(maximized));
    }
}));
resetSnakeGame();

// A compact 9 × 9 Minesweeper game with first-click safety, flags and touch mode.
const minesWindow = document.getElementById('mines-window');
const restoreMinesButton = document.getElementById('restore-mines-dock');
const minesBoard = document.getElementById('mines-board');
const mineCounter = document.getElementById('mine-counter');
const mineTimerDisplay = document.getElementById('mine-timer');
const mineStatus = document.getElementById('mine-status');
const mineNewGameButton = document.getElementById('mine-new-game');
const mineDifficultySelect = document.getElementById('mine-difficulty');
const mineDifficultySpecs = CONFIG.games?.minesweeper?.difficulties || {
    easy: { rows: 9, columns: 9, mines: 10, windowWidth: '382px', boardWidth: '330px' },
    medium: { rows: 16, columns: 16, mines: 40, windowWidth: '482px', boardWidth: '430px' },
    hard: { rows: 16, columns: 30, mines: 99, windowWidth: '620px', boardWidth: '568px' }
};
let mineRows = 9;
let mineColumns = 9;
let mineTotal = 10;
let mineBombs = new Set();
let mineRevealed = new Set();
let mineFlags = new Set();
let mineFirstMove = true;
let mineGameOver = false;
let mineElapsedSeconds = 0;
let mineTimerInterval = null;
let mineStartedAt = 0;
let mineStatusKey = 'ready';

function applyMineDifficulty(difficulty) {
    const spec = mineDifficultySpecs[difficulty] || mineDifficultySpecs.easy;
    mineRows = spec.rows;
    mineColumns = spec.columns;
    mineTotal = spec.mines;
    minesWindow.dataset.difficulty = difficulty in mineDifficultySpecs ? difficulty : 'easy';
    const dimensions = {
        easy: { windowWidth:'382px', boardWidth:'330px' },
        medium: { windowWidth:'482px', boardWidth:'430px' },
        hard: { windowWidth:'620px', boardWidth:'568px' }
    }[difficulty] || { windowWidth:'482px', boardWidth:`${Math.max(260, mineColumns * 28)}px` };
    minesWindow.style.setProperty('--mine-window-width', spec.windowWidth || dimensions.windowWidth);
    minesWindow.style.setProperty('--mine-board-width', spec.boardWidth || dimensions.boardWidth);
    minesBoard.style.setProperty('--mine-columns', String(mineColumns));
}

function mineNeighbors(index) {
    const row = Math.floor(index / mineColumns);
    const column = index % mineColumns;
    const neighbors = [];
    for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
            if (!dx && !dy) continue;
            const nextRow = row + dy;
            const nextColumn = column + dx;
            if (nextRow >= 0 && nextRow < mineRows && nextColumn >= 0 && nextColumn < mineColumns) {
                neighbors.push(nextRow * mineColumns + nextColumn);
            }
        }
    }
    return neighbors;
}

function syncMineText() {
    const words = mineTexts[currentLanguage];
    mineStatus.textContent = words[mineStatusKey];
    mineNewGameButton.setAttribute('aria-label', words.newGame);
    document.getElementById('mines-window-title').textContent = words.title;
    document.getElementById('mines-shortcut-label').textContent = words.shortcut;
    document.getElementById('restore-mines-label').textContent = words.title;
}

function renderMineBoard() {
    mineCounter.textContent = String(mineTotal - mineFlags.size).padStart(3, '0');
    mineTimerDisplay.textContent = String(Math.min(mineElapsedSeconds, 999)).padStart(3, '0');
    minesBoard.replaceChildren();
    for (let index = 0; index < mineRows * mineColumns; index += 1) {
        const cell = document.createElement('button');
        const revealed = mineRevealed.has(index);
        const flagged = mineFlags.has(index);
        cell.type = 'button';
        cell.className = `mine-cell${revealed ? ' revealed' : ''}${flagged ? ' flagged' : ''}`;
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-label', `${Math.floor(index / mineColumns) + 1}, ${index % mineColumns + 1}`);
        if (flagged && !revealed) {
            cell.innerHTML = '<i class="fa-solid fa-flag" aria-hidden="true"></i>';
        } else if (revealed && mineBombs.has(index)) {
            cell.innerHTML = '<i class="fa-solid fa-bomb" aria-hidden="true"></i>';
            if (mineGameOver) cell.classList.add('mine-hit');
        } else if (revealed) {
            const count = mineNeighbors(index).filter((neighbor) => mineBombs.has(neighbor)).length;
            if (count) {
                cell.textContent = String(count);
                cell.dataset.number = String(count);
            }
        }
        let longPressTimer = null;
        let longPressFlagged = false;
        const clearLongPress = () => {
            if (longPressTimer !== null) window.clearTimeout(longPressTimer);
            longPressTimer = null;
        };
        cell.addEventListener('pointerdown', (event) => {
            if (event.pointerType !== 'touch') return;
            longPressFlagged = false;
            longPressTimer = window.setTimeout(() => {
                longPressFlagged = true;
                toggleMineFlag(index);
            }, 500);
        });
        cell.addEventListener('pointerup', clearLongPress);
        cell.addEventListener('pointercancel', () => { clearLongPress(); longPressFlagged = false; });
        cell.addEventListener('pointerleave', clearLongPress);
        cell.addEventListener('click', () => {
            if (longPressFlagged) { longPressFlagged = false; return; }
            handleMineCell(index);
        });
        cell.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            clearLongPress();
            longPressFlagged = true;
            toggleMineFlag(index);
        });
        minesBoard.appendChild(cell);
    }
}

function startMineTimer() {
    if (mineTimerInterval || mineGameOver) return;
    mineStartedAt = Date.now() - mineElapsedSeconds * 1000;
    mineTimerInterval = setInterval(() => {
        mineElapsedSeconds = Math.floor((Date.now() - mineStartedAt) / 1000);
        mineTimerDisplay.textContent = String(Math.min(mineElapsedSeconds, 999)).padStart(3, '0');
    }, 1000);
}

function stopMineTimer() {
    clearInterval(mineTimerInterval);
    mineTimerInterval = null;
}

function placeMineBombs(firstIndex) {
    const protectedCells = new Set([firstIndex, ...mineNeighbors(firstIndex)]);
    const candidates = Array.from({ length: mineRows * mineColumns }, (_, index) => index).filter((index) => !protectedCells.has(index));
    for (let index = candidates.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [candidates[index], candidates[swapIndex]] = [candidates[swapIndex], candidates[index]];
    }
    mineBombs = new Set(candidates.slice(0, mineTotal));
}

function revealMineCell(index) {
    if (mineRevealed.has(index) || mineFlags.has(index) || mineGameOver) return;
    mineRevealed.add(index);
    if (mineBombs.has(index)) {
        mineGameOver = true;
        mineStatusKey = 'over';
        mineBombs.forEach((bomb) => mineRevealed.add(bomb));
        mineNewGameButton.innerHTML = '<i class="fa-solid fa-face-dizzy" aria-hidden="true"></i>';
        stopMineTimer();
        return;
    }
    const count = mineNeighbors(index).filter((neighbor) => mineBombs.has(neighbor)).length;
    if (!count) mineNeighbors(index).forEach(revealMineCell);
    if (mineRevealed.size === mineRows * mineColumns - mineTotal) {
        mineGameOver = true;
        mineStatusKey = 'win';
        mineNewGameButton.innerHTML = '<i class="fa-solid fa-face-laugh-beam" aria-hidden="true"></i>';
        stopMineTimer();
    }
}

function handleMineCell(index) {
    if (mineGameOver) return;
    if (mineFlags.has(index)) return;
    if (mineFirstMove) {
        placeMineBombs(index);
        mineFirstMove = false;
        mineStatusKey = 'playing';
        startMineTimer();
    }
    revealMineCell(index);
    renderMineBoard();
    syncMineText();
}

function toggleMineFlag(index) {
    if (mineGameOver || mineRevealed.has(index)) return;
    if (mineFlags.has(index)) mineFlags.delete(index);
    else if (mineFlags.size < mineTotal) mineFlags.add(index);
    renderMineBoard();
}

function resetMinesGame() {
    stopMineTimer();
    mineBombs = new Set();
    mineRevealed = new Set();
    mineFlags = new Set();
    mineFirstMove = true;
    mineGameOver = false;
    mineElapsedSeconds = 0;
    mineStatusKey = 'ready';
    mineNewGameButton.innerHTML = '<i class="fa-solid fa-face-smile" aria-hidden="true"></i>';
    renderMineBoard();
    syncMineText();
}

function openMinesWindow(reset = true) {
    showAppWindow(minesWindow);
    minesWindow.classList.remove('maximized');
    if (reset) {
        minesWindow.classList.remove('is-dragged');
        minesWindow.style.left = '';
        minesWindow.style.top = '';
    }
    minesWindow.style.bottom = '';
    document.querySelector('#mines-window [data-mines-action="maximize"]').setAttribute('aria-pressed', 'false');
    restoreMinesButton.hidden = true;
    if (reset) resetMinesGame();
}

document.getElementById('mines-shortcut').addEventListener('click', () => openMinesWindow(true));
restoreMinesButton.addEventListener('click', () => openMinesWindow(false));
mineNewGameButton.addEventListener('click', resetMinesGame);
mineDifficultySelect.addEventListener('change', () => {
    applyMineDifficulty(mineDifficultySelect.value);
    resetMinesGame();
});
document.querySelectorAll('#mines-window [data-mines-action]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.minesAction;
    if (action === 'close' || action === 'minimize') {
        minesWindow.classList.remove('maximized');
        minesWindow.classList.remove('is-dragged');
        minesWindow.style.left = '';
        minesWindow.style.top = '';
        document.querySelector('#mines-window [data-mines-action="maximize"]').setAttribute('aria-pressed', 'false');
        hideAppWindow(minesWindow, () => { restoreMinesButton.hidden = action === 'close'; });
    } else {
        const maximized = toggleWindowMaximized(minesWindow);
        minesWindow.classList.remove('is-dragged');
        minesWindow.style.left = '';
        minesWindow.style.top = '';
        minesWindow.style.bottom = '';
        button.setAttribute('aria-pressed', String(maximized));
    }
}));
mineDifficultySelect.value = mineDifficultySpecs[CONFIG.games?.minesweeper?.defaultDifficulty] ? CONFIG.games.minesweeper.defaultDifficulty : (mineDifficultySpecs.easy ? 'easy' : Object.keys(mineDifficultySpecs)[0]);
applyMineDifficulty(mineDifficultySelect.value);
resetMinesGame();

// Dock links attempt to load inside a desktop window; each one keeps an external fallback.
const socialAppWindow = document.getElementById('social-app-window');
const socialAppTitle = document.getElementById('social-app-title');
const socialAppCardTitle = document.getElementById('social-app-card-title');
const socialAppMark = document.getElementById('social-app-mark');
const socialOpenLink = document.getElementById('social-open-link');
const socialOpenButton = document.getElementById('social-app-open-button');
const restoreSocialAppButton = document.getElementById('restore-social-app-dock');
let activeSocialApp = null;
function openSocialApp(social) {
    activeSocialApp = social;
    socialAppTitle.textContent = social.label;
    socialAppCardTitle.textContent = social.label;
    socialAppWindow.setAttribute('aria-label', social.label);
    socialAppWindow.dataset.social = social.label.toLowerCase();
    socialOpenLink.href = social.url;
    socialOpenButton.href = social.url;
    socialAppMark.querySelector('i').className = `fa-brands ${social.icon}`;
    showAppWindow(socialAppWindow);
    socialAppWindow.classList.remove('maximized', 'is-dragged');
    socialAppWindow.style.left = '';
    socialAppWindow.style.top = '';
    restoreSocialAppButton.hidden = true;
    document.querySelector('#social-app-window [data-social-action="maximize"]').setAttribute('aria-pressed', 'false');
}
restoreSocialAppButton.addEventListener('click', () => {
    if (activeSocialApp) openSocialApp(activeSocialApp);
});
document.querySelectorAll('#social-app-window [data-social-action]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.socialAction;
    if (action === 'close' || action === 'minimize') {
        socialAppWindow.classList.remove('maximized');
        document.querySelector('#social-app-window [data-social-action="maximize"]').setAttribute('aria-pressed', 'false');
        if (action === 'close') {
            socialAppWindow.classList.remove('is-dragged');
            socialAppWindow.style.left = '';
            socialAppWindow.style.top = '';
        }
        hideAppWindow(socialAppWindow, () => { restoreSocialAppButton.hidden = action === 'close'; });
    } else {
        const maximized = toggleWindowMaximized(socialAppWindow);
        socialAppWindow.classList.remove('is-dragged');
        socialAppWindow.style.left = '';
        socialAppWindow.style.top = '';
        button.setAttribute('aria-pressed', String(maximized));
    }
}));

// Notes, Apple Music launcher/player, Pong, simulated Terminal and Trash windows.
const auxiliaryAppNames = ['notes', 'music', 'pong', 'terminal', 'trash'];
const auxiliaryWindows = Object.fromEntries(auxiliaryAppNames.map((name) => [name, document.getElementById(`${name}-window`)]));
const auxiliaryRestores = Object.fromEntries(auxiliaryAppNames.map((name) => [name, document.getElementById(`restore-${name}-dock`)]));
auxiliaryAppNames.forEach((name) => {
    makeWindowDraggable(auxiliaryWindows[name]);
    document.getElementById(`${name}-shortcut`).addEventListener('click', () => openAuxiliaryApp(name));
    auxiliaryRestores[name].addEventListener('click', () => openAuxiliaryApp(name));
});

function openAuxiliaryApp(name) {
    const appWindow = auxiliaryWindows[name];
    showAppWindow(appWindow);
    appWindow.classList.remove('maximized', 'is-dragged');
    appWindow.style.left = '';
    appWindow.style.top = '';
    auxiliaryRestores[name].hidden = true;
    appWindow.querySelector('[data-aux-action="maximize"]').setAttribute('aria-pressed', 'false');
    if (name === 'pong') drawPongGame();
}

document.querySelectorAll('.aux-window [data-aux-action]').forEach((button) => button.addEventListener('click', () => {
    const name = button.dataset.auxWindow;
    const action = button.dataset.auxAction;
    const appWindow = auxiliaryWindows[name];
    if (action === 'close' || action === 'minimize') {
        appWindow.classList.remove('maximized', 'is-dragged');
        appWindow.style.left = '';
        appWindow.style.top = '';
        appWindow.querySelector('[data-aux-action="maximize"]').setAttribute('aria-pressed', 'false');
        hideAppWindow(appWindow, () => { auxiliaryRestores[name].hidden = action === 'close'; });
        if (name === 'pong') {
            stopPongGame();
            const targetScore = CONFIG.games?.pong?.targetScore || 5;
            if (pongPlayerScore < targetScore && pongComputerScore < targetScore) {
                pongMessageKey = 'pongReady';
                syncPongMessage();
            }
        }
        if (name === 'music') musicAppAudio.pause();
    } else {
        const maximized = toggleWindowMaximized(appWindow);
        appWindow.classList.remove('is-dragged');
        appWindow.style.left = '';
        appWindow.style.top = '';
        button.setAttribute('aria-pressed', String(maximized));
    }
}));

const photosWindow = document.getElementById('photos-window');
const photoLightbox = document.getElementById('photo-lightbox');
function openPhotoLightbox(index = activePhotoIndex) {
    if (!photos.length) return;
    activePhotoIndex = ((index % photos.length) + photos.length) % photos.length;
    const photo = photos[activePhotoIndex];
    document.getElementById('lightbox-image').src = photo.src;
    document.getElementById('lightbox-image').alt = photo.name;
    document.getElementById('lightbox-caption').textContent = `${photo.name} · ${activePhotoIndex + 1} / ${photos.length}`;
    if (!photoLightbox.open) photoLightbox.showModal();
}
function moveLightboxPhoto(direction) {
    if (!photos.length) return;
    openPhotoLightbox(activePhotoIndex + direction);
}
document.getElementById('lightbox-close').addEventListener('click', () => photoLightbox.close());
document.getElementById('lightbox-previous').addEventListener('click', () => moveLightboxPhoto(-1));
document.getElementById('lightbox-next').addEventListener('click', () => moveLightboxPhoto(1));
photoLightbox.addEventListener('click', (event) => { if (event.target === photoLightbox) photoLightbox.close(); });
photoLightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveLightboxPhoto(-1); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); moveLightboxPhoto(1); }
});
function openPhotoGallery() {
    showAppWindow(photosWindow);
    photosWindow.classList.remove('maximized', 'is-dragged');
    photosWindow.style.left = '';
    photosWindow.style.top = '';
    photosWindow.querySelector('[data-photos-action="maximize"]').setAttribute('aria-pressed', 'false');
    renderPhotoInterface();
}
document.getElementById('photo-feature').addEventListener('click', openPhotoGallery);
document.getElementById('photo-previous').addEventListener('click', () => {
    if (!photos.length) return openPhotoGallery();
    activePhotoIndex = (activePhotoIndex - 1 + photos.length) % photos.length;
    renderPhotoInterface(false);
});
document.getElementById('photo-next').addEventListener('click', () => {
    if (!photos.length) return openPhotoGallery();
    activePhotoIndex = (activePhotoIndex + 1) % photos.length;
    renderPhotoInterface(false);
});
photosWindow.querySelectorAll('[data-photos-action]').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.photosAction === 'maximize') {
        const maximized = toggleWindowMaximized(photosWindow);
        photosWindow.classList.remove('is-dragged');
        photosWindow.style.left = '';
        photosWindow.style.top = '';
        button.setAttribute('aria-pressed', String(maximized));
        return;
    }
    photosWindow.classList.remove('maximized', 'is-dragged');
    photosWindow.style.left = '';
    photosWindow.style.top = '';
    hideAppWindow(photosWindow);
}));
makeWindowDraggable(photosWindow);
setInterval(() => {
    if (photos.length > 1) {
        activePhotoIndex = (activePhotoIndex + 1) % photos.length;
        renderPhotoInterface(false);
    }
}, 5000);

const notesTextarea = document.getElementById('notes-textarea');
try {
    notesTextarea.value = localStorage.getItem('yourname-notes') || '';
} catch {
    // Notes remain editable for this page view if storage is unavailable.
}
notesTextarea.addEventListener('input', () => {
    try {
        localStorage.setItem('yourname-notes', notesTextarea.value);
    } catch {
        // Keep the text in the open window even if it cannot be saved.
    }
});

const musicAppAudio = document.getElementById('music-app-audio');
const musicPlayerControls = document.getElementById('music-player-controls');
const musicPlayButton = document.getElementById('music-play-button');
const musicAppVolume = document.getElementById('music-app-volume');
if (CONFIG.musicUrl && CONFIG.features?.appleMusic !== false) {
    musicAppAudio.src = CONFIG.musicUrl;
    musicAppAudio.loop = true;
    musicAppAudio.volume = Number(musicAppVolume.value);
    musicPlayerControls.hidden = false;
}
musicPlayButton.addEventListener('click', () => {
    if (musicAppAudio.paused) musicAppAudio.play().catch(() => {});
    else musicAppAudio.pause();
    syncMusicAppPlayer();
});
musicAppAudio.addEventListener('play', syncMusicAppPlayer);
musicAppAudio.addEventListener('pause', syncMusicAppPlayer);
musicAppVolume.addEventListener('input', () => { musicAppAudio.volume = Number(musicAppVolume.value); });
function syncMusicAppPlayer() {
    const words = auxTexts[currentLanguage];
    musicPlayButton.textContent = musicAppAudio.paused ? '▶' : 'Ⅱ';
    musicPlayButton.setAttribute('aria-label', musicAppAudio.paused ? words.play : words.pause);
    musicPlayButton.title = musicAppAudio.paused ? words.play : words.pause;
}

const pongCanvas = document.getElementById('pong-board');
const pongContext = pongCanvas.getContext('2d');
const pongPlayerScoreLabel = document.getElementById('pong-player-score');
const pongComputerScoreLabel = document.getElementById('pong-computer-score');
const pongStartButton = document.getElementById('pong-start');
const pongMessage = document.getElementById('pong-message');
const pongWindow = auxiliaryWindows.pong;
const pongWidth = pongCanvas.width;
const pongHeight = pongCanvas.height;
let pongPlayerY = pongHeight / 2;
let pongComputerY = pongHeight / 2;
let pongBall = { x: pongWidth / 2, y: pongHeight / 2, vx: CONFIG.games?.pong?.ballSpeedX || 4, vy: CONFIG.games?.pong?.ballSpeedY || 2.5 };
let pongPlayerScore = 0;
let pongComputerScore = 0;
let pongRunning = false;
let pongLoop = null;
let pongMessageKey = 'pongReady';
const pongKeys = new Set();
let pongTouchDirection = 0;

function syncPongMessage() {
    pongMessage.textContent = auxTexts[currentLanguage][pongMessageKey];
}
function drawPongGame() {
    const theme = document.body.dataset.theme;
    const darkTheme = theme === 'dark';
    const xpTheme = theme === 'xp';
    pongContext.fillStyle = darkTheme ? '#131e2e' : xpTheme ? '#e8f0fb' : '#edf2f7';
    pongContext.fillRect(0, 0, pongWidth, pongHeight);
    pongContext.fillStyle = darkTheme ? 'rgba(220,232,247,.35)' : xpTheme ? 'rgba(35,82,151,.35)' : 'rgba(62,86,116,.3)';
    for (let y = 10; y < pongHeight; y += 20) pongContext.fillRect(pongWidth / 2 - 1, y, 2, 9);
    pongContext.fillStyle = darkTheme ? '#f3f7ff' : xpTheme ? '#1e5bb8' : '#405a78';
    pongContext.fillRect(18, pongPlayerY - 35, 9, 70);
    pongContext.fillRect(pongWidth - 27, pongComputerY - 35, 9, 70);
    pongContext.fillStyle = darkTheme ? '#8dd7a0' : xpTheme ? '#4b9b30' : '#3478d4';
    pongContext.fillRect(pongBall.x - 7, pongBall.y - 7, 14, 14);
    pongPlayerScoreLabel.textContent = String(pongPlayerScore);
    pongComputerScoreLabel.textContent = String(pongComputerScore);
}
function resetPongBall(direction = Math.random() < .5 ? -1 : 1) {
    pongBall = { x: pongWidth / 2, y: pongHeight / 2, vx: direction * (CONFIG.games?.pong?.ballSpeedX || 4), vy: (Math.random() - .5) * ((CONFIG.games?.pong?.ballSpeedY || 2.5) * 2) || 2 };
}
function updatePongGame() {
    if (pongKeys.has('ArrowUp') || pongKeys.has('w') || pongTouchDirection < 0) pongPlayerY -= CONFIG.games?.pong?.playerSpeed || 6;
    if (pongKeys.has('ArrowDown') || pongKeys.has('s') || pongTouchDirection > 0) pongPlayerY += CONFIG.games?.pong?.playerSpeed || 6;
    pongPlayerY = Math.max(40, Math.min(pongHeight - 40, pongPlayerY));
    pongComputerY += Math.sign(pongBall.y - pongComputerY) * Math.min(CONFIG.games?.pong?.computerTrackingSpeed || 1.7, Math.abs(pongBall.y - pongComputerY));
    pongBall.x += pongBall.vx;
    pongBall.y += pongBall.vy;
    if (pongBall.y < 8 || pongBall.y > pongHeight - 8) pongBall.vy *= -1;
    if (pongBall.vx < 0 && pongBall.x < 34 && Math.abs(pongBall.y - pongPlayerY) < 44) {
        pongBall.vx = Math.abs(pongBall.vx) * 1.04;
        pongBall.vy += (pongBall.y - pongPlayerY) * .07;
    }
    if (pongBall.vx > 0 && pongBall.x > pongWidth - 34 && Math.abs(pongBall.y - pongComputerY) < 44) {
        pongBall.vx = -Math.abs(pongBall.vx) * 1.04;
        pongBall.vy += (pongBall.y - pongComputerY) * .07;
    }
    if (pongBall.x < 0) {
        pongPlayerScore += 1;
        resetPongBall(1);
    } else if (pongBall.x > pongWidth) {
        pongComputerScore += 1;
        resetPongBall(-1);
    }
    const targetScore = CONFIG.games?.pong?.targetScore || 5;
    if (pongPlayerScore >= targetScore || pongComputerScore >= targetScore) {
        pongMessageKey = pongPlayerScore >= targetScore ? 'pongWin' : 'pongLose';
        stopPongGame();
        syncPongMessage();
    }
    drawPongGame();
}
function stopPongGame() {
    pongRunning = false;
    clearInterval(pongLoop);
    pongLoop = null;
    pongStartButton.textContent = auxTexts[currentLanguage].start;
}
function resetPongGame() {
    stopPongGame();
    pongPlayerScore = 0;
    pongComputerScore = 0;
    pongPlayerY = pongHeight / 2;
    pongComputerY = pongHeight / 2;
    pongMessageKey = 'pongReady';
    resetPongBall();
    syncPongMessage();
    drawPongGame();
}
pongStartButton.addEventListener('click', () => {
    if (pongRunning) {
        stopPongGame();
        pongMessageKey = 'pongReady';
    } else {
        if (pongPlayerScore >= (CONFIG.games?.pong?.targetScore || 5) || pongComputerScore >= (CONFIG.games?.pong?.targetScore || 5)) resetPongGame();
        pongRunning = true;
        pongMessageKey = 'pongPlaying';
        pongLoop = setInterval(updatePongGame, 16);
        pongStartButton.textContent = auxTexts[currentLanguage].pause;
    }
    syncPongMessage();
});
document.getElementById('pong-reset').addEventListener('click', resetPongGame);
window.addEventListener('keydown', (event) => {
    if (pongWindow.hidden || !snakeWindow.hidden || event.target.matches('input, textarea')) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(key)) {
        pongKeys.add(key);
        if (key.startsWith('Arrow')) event.preventDefault();
    }
});
window.addEventListener('keyup', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    pongKeys.delete(key);
});
document.querySelectorAll('[data-pong-move]').forEach((button) => {
    const direction = button.dataset.pongMove === 'up' ? -1 : 1;
    button.addEventListener('pointerdown', (event) => { event.preventDefault(); pongTouchDirection = direction; });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((name) => button.addEventListener(name, () => { pongTouchDirection = 0; }));
});
resetPongGame();

const terminalForm = document.getElementById('terminal-form');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
terminalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const command = terminalInput.value.trim();
    if (!command) return;
    const words = auxTexts[currentLanguage];
    const commandLine = document.createElement('p');
    commandLine.textContent = `${words.terminalPrompt} ${command}`;
    terminalOutput.appendChild(commandLine);
    const result = document.createElement('p');
    const normalized = command.toLowerCase();
    if (normalized === 'clear') {
        terminalOutput.replaceChildren(document.getElementById('terminal-welcome'));
    } else if (normalized === 'help') result.textContent = words.terminalHelp;
    else if (normalized === 'whoami') result.textContent = CONFIG.username;
    else if (normalized === 'date') result.textContent = new Intl.DateTimeFormat(languageLocales[currentLanguage], { dateStyle: 'full', timeStyle: 'short' }).format(new Date());
    else if (normalized === 'games') result.textContent = words.terminalGames;
    else if (normalized === 'about') result.textContent = words.terminalAbout;
    else result.textContent = words.terminalUnknown;
    if (normalized !== 'clear') terminalOutput.appendChild(result);
    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

// Keep a compact macOS-style menu bar clock in the visitor's local time.
const clock = document.getElementById('menu-clock');
function updateClock() {
    const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    clock.textContent = new Intl.DateTimeFormat(languageLocales[currentLanguage], { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: visitorTimeZone }).format(new Date());
}
updateClock();
setInterval(updateClock, 10000);

document.getElementById('weather-refresh').addEventListener('click', updateWeather);
if (CONFIG.features?.weather !== false) {
    updateWeather();
    setInterval(updateWeather, CONFIG.weather?.refreshIntervalMs || 10 * 60 * 1000);
} else {
    document.getElementById('weather-widget').hidden = true;
}

function applyConfigFeatureVisibility() {
    const features = CONFIG.features || {};
    const selectorsByFeature = {
        weather: ['#weather-widget'], photoGallery: ['#photo-widget', '#photos-window'],
        discordStatus: ['.status-row'], languageMenu: ['.language-menu-wrap'],
        themeMenu: ['.theme-menu-wrap'], controlCenter: ['.control-center-wrap'],
        clock: ['#menu-clock'],
        backgroundMusic: ['#volume-control', '#volume-slider'], about: ['#about-shortcut', '#profile-menu-shortcut', '#open-profile-action', '#restore-profile-dock', '.profile-window'],
        snake: ['#snake-shortcut', '#snake-window', '#restore-snake-dock'],
        minesweeper: ['#mines-shortcut', '#mines-window', '#restore-mines-dock'],
        notes: ['#notes-shortcut', '#notes-window', '#restore-notes-dock'],
        appleMusic: ['#music-shortcut', '#music-window', '#restore-music-dock'],
        pong: ['#pong-shortcut', '#pong-window', '#restore-pong-dock'],
        terminal: ['#terminal-shortcut', '#terminal-window', '#restore-terminal-dock'],
        trash: ['#trash-shortcut', '#trash-window', '#restore-trash-dock']
    };
    Object.entries(selectorsByFeature).forEach(([feature, selectors]) => {
        if (features[feature] !== false) return;
        selectors.forEach((selector) => document.querySelectorAll(selector).forEach((element) => { element.hidden = true; }));
    });
}

function applyConfigTextOverrides() {
    const dictionaries = { translations, windowLabels, gameTexts, gameRestoreLabels, mineTexts, mineDifficultyTexts, socialWindowTexts, auxTexts, controlTexts, xpWelcomeTexts, photoText, weatherText };
    Object.entries(CONFIG.textOverrides || {}).forEach(([dictionaryName, localeOverrides]) => {
        const dictionary = dictionaries[dictionaryName];
        if (!dictionary || !localeOverrides || typeof localeOverrides !== 'object') return;
        Object.entries(localeOverrides).forEach(([locale, values]) => {
            if (!Object.hasOwn(dictionary, locale)) return;
            dictionary[locale] = values && typeof values === 'object' && !Array.isArray(values)
                ? { ...dictionary[locale], ...values }
                : values;
        });
    });
}

applyConfigTextOverrides();
applyConfigFeatureVisibility();

applyLanguage(currentLanguage);
