# Personal Desktop Site Starter

This project is a customizable, macOS-inspired desktop profile website. It includes a starter configuration with sample profile details, generic social links, an empty Discord ID, and an empty gallery so you can quickly set up your own version.

This project is released under the MIT License. See [LICENSE](LICENSE) for the terms.

## Technology

The site is built with HTML, CSS, and browser JavaScript. It requires no build step or server-side application. `index.html` loads settings from `config.js` before behavior from `main.js`. `styles.css` defines the themes and desktop, window, and mobile layouts.

There is no admin server or online management panel. Edit `config.js` and upload the updated files to change the published site.

## Features

- Profile card and optional Discord presence from Lanyard.
- Light and dark themes, plus a temporary Windows XP Easter egg.
- Starting language based on country and browser language; Turkish, English, Arabic, Bengali, Simplified Chinese, French, Hindi, Portuguese, Russian, and Spanish are available.
- Menu clock using the visitor's local time.
- Live weather from Open-Meteo.
- Photo widget, gallery window, and enlarged photo preview.
- Configurable social-link dock.
- About Me, Snake, Minesweeper, Notes, Apple Music, Pong, Terminal, and Trash app windows.
- Window open, close, minimize, restore, drag, and maximize interactions.
- Snake swipe controls on phones, Pong touch controls, and easy, medium, and hard Minesweeper levels.
- Notes stored in the current browser. Optional background music and volume settings.

## Files

```text
index.html       Page structure and app windows
styles.css       Themes, visual layouts, and mobile design
main.js          App behavior, translations, games, and API integrations
config.js        Profile, feature, appearance, game, and integration settings
favicon.svg      Example site icon and profile image
photos/          Public images for the gallery
robots.txt       Crawler instructions and sitemap location
sitemap.xml      Sitemap
LICENSE          MIT License
```

## Local setup

You can open `index.html` directly in a browser. Some browsers restrict country detection and API requests from `file://` pages. To preview through a local server, open a terminal in this folder, run `python3 -m http.server 8000`, then visit `http://localhost:8000`. Use HTTPS hosting for reliable access to external services.

## Configure `config.js`

Edit the `window.SITE_CONFIG` object at the top of the file. Preserve JavaScript object syntax: put text values in quotes and separate properties with commas.

- `site`: page title, description, canonical URL, logo, theme color, font, and footer label.
- `name`, `username`, `location`, `avatar`: profile details. Replace the placeholders with your own information.
- `features`: turn features off by setting their value to `false`. Keys include `weather`, `photoGallery`, `discordStatus`, `socialLinks`, `languageMenu`, `themeMenu`, `controlCenter`, `clock`, `backgroundMusic`, `about`, `snake`, `minesweeper`, `notes`, `appleMusic`, `pong`, `terminal`, `trash`, and `xpEasterEgg`.
- `language.default`: set `"auto"` for automatic selection or a code such as `"en"` for a fixed language. `detectByCountry` controls country lookup; `options` controls the language menu.
- `appearance`: default theme, optional wallpaper, and XP theme click count and interval.
- `weather`: city, coordinates, time zone, and refresh interval. The template defaults to London.
- `games.snake`: board and speed. A higher `tickIntervalMs` slows Snake down.
- `games.minesweeper`: default difficulty and row, column, mine, window, and board sizes for each level.
- `games.pong`: computer tracking speed, player speed, ball speed, and target score.
- `photos`: ordered image paths and optional captions.
- `socials`: dock order, Font Awesome icon class, destination URL, and label.
- `discordId` and `discordRefreshIntervalMs`: public Discord user ID and refresh interval. Leave the ID empty to disable live presence.
- `musicUrl`, `appleMusicUrl`, and `defaultVolume`: background music file, Apple Music destination, and initial volume.
- `textOverrides`: optional interface text replacements by language.

When customizing the title, description, or canonical URL, also update the matching tags and JSON-LD block in the `<head>` of `index.html`. Some search and link-preview crawlers read the original HTML without running JavaScript.

Add gallery images to `photos/` and list their paths in `config.js`:

```js
photos: [
    { src: "photos/example.jpg", alt: "A short caption" }
]
```

Configure dock links in `socials`:

```js
socials: [
    { icon: "fa-github", url: "https://github.com/username", label: "GitHub" }
]
```

## Publish with GitHub Pages

1. Upload the contents of this folder to the root of a new GitHub repository.
2. In the repository, open **Settings > Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
3. Set the published URL in `site.canonicalUrl` in `config.js`. If you use a custom domain, update `robots.txt` and `sitemap.xml` too. Remove the `noindex,nofollow` robots meta tag in `index.html` after replacing the example data so search engines can index your finished site.

## Privacy and external services

This site has no server-side admin account or private settings store. Profile data, `config.js`, social links, Discord ID, and every image in `photos/` are public when hosted in a public repository. Do not add passwords, private API keys, or access tokens.

Discord presence comes from Lanyard, weather from Open-Meteo, and country-based language detection from ipapi.co. Fonts and icons load from Google Fonts and the Font Awesome CDN. If an external service is unavailable, its feature may not load; the local site interface remains available.
