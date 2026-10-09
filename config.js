window.SITE_CONFIG = {
    // ── Site identity and SEO ──
    site: {
        title: "Your Name | Personal Profile and Browser Games",
        description: "A personal desktop-style profile featuring Discord presence, social links, a photo gallery, and browser games.",
        canonicalUrl: "https://example.com/",
        logo: "favicon.svg",
        author: "Your Name",
        themeColor: "#17253a",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        footerDomain: "example.com"
    },

    // ── Profile details ──
    name: "Your Name",
    username: "yourname",
    location: "Your city",
    avatar: "favicon.svg",

    // ── Features ──
    // Set a feature to false to hide it from the desktop.
    features: {
        weather: true,
        photoGallery: true,
        discordStatus: true,
        socialLinks: true,
        languageMenu: true,
        themeMenu: true,
        controlCenter: true,
        clock: true,
        backgroundMusic: true,
        about: true,
        snake: true,
        minesweeper: true,
        notes: true,
        appleMusic: true,
        pong: true,
        terminal: true,
        trash: true,
        xpEasterEgg: true
    },

    // The default language is used if browser or country detection fails.
    language: {
        default: "auto", detectByCountry: true,
        options: [
            ["tr", "Türkçe"], ["en", "English"], ["ar", "العربية"], ["bn", "বাংলা"], ["zh", "中文（简体）"],
            ["fr", "Français"], ["hi", "हिन्दी"], ["pt", "Português"], ["ru", "Русский"], ["es", "Español"]
        ]
    },
    appearance: { defaultTheme: "light", wallpaperImage: "", xpLogoClickCount: 10, xpClickIntervalMs: 1100 },

    // ── Weather ──
    weather: {
        city: "London",
        latitude: 51.5072,
        longitude: -0.1276,
        timezone: "Europe/London",
        refreshIntervalMs: 600000
    },

    // Game settings: Snake tick intervals are measured in milliseconds.
    games: {
        snake: { gridSize: 20, cellSize: 20, tickIntervalMs: 190 },
        minesweeper: {
            defaultDifficulty: "easy",
            difficulties: {
                easy: { rows: 9, columns: 9, mines: 10, windowWidth: "382px", boardWidth: "330px" },
                medium: { rows: 16, columns: 16, mines: 40, windowWidth: "482px", boardWidth: "430px" },
                hard: { rows: 16, columns: 30, mines: 99, windowWidth: "620px", boardWidth: "568px" }
            }
        },
        pong: { computerTrackingSpeed: 1.7, playerSpeed: 6, ballSpeedX: 4, ballSpeedY: 2.5, targetScore: 5 }
    },

    // Optionally override interface text for each language here.
    // Example: textOverrides: { translations: { en: { welcome: "Hello!" } } }
    textOverrides: {},

    // Add an audio file URL here to enable background music.
    musicUrl: "",
    appleMusicUrl: "https://music.apple.com/",
    defaultVolume: 0.1,

    // Add images to the photos/ folder, then list them here.
    // Example: { src: "photos/example.jpg", alt: "A short caption" }
    photos: [],

    // ── Integrations ──
    discordId: "", // Add your public Discord user ID to enable Lanyard status.
    discordRefreshIntervalMs: 15000,

    // ── Social links ──
    // The list order determines the app order in the Dock.
    socials: [
        {
            icon: "fa-steam",
            url: "https://steamcommunity.com/",
            label: "Steam"
        },
        {
            icon: "fa-discord",
            url: "https://discord.com/",
            label: "Discord"
        },
        {
            icon: "fa-github",
            url: "https://github.com/yourname",
            label: "GitHub" // Replace the URL with your profile address.
        },
        {
            icon: "fa-xbox",
            url: "https://www.xbox.com/",
            label: "Xbox"
        }
    ]
};
