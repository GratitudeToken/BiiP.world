import { $ } from '/js/selectors.js'

export let theme = () => {



    let currentTheme = $('.themeCSS')
    let themeSwitch = $('#themeSwitch')
    let localTheme = localStorage.getItem('theme')
    let navigatorTheme
    let theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
        navigatorTheme = 'dark'
    } else { navigatorTheme = 'light' }

    localTheme ? theme = localTheme : theme = navigatorTheme

    let sound

    const lightSound = new Audio('/sounds/lucianape3/light.mp3');
    const darkSound = new Audio('/sounds/lucianape3/dark.mp3');

    const addCSS = (url, theme) => {
        const head = document.getElementsByTagName('head')[0]
        const link = document.createElement('link')
        link.id = theme
        link.class = 'themeCSS'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = url
        link.media = 'all'
        currentTheme.remove()
        head.appendChild(link)
    }

    themeSwitch.addEventListener("change", (e) => {

        if (themeSwitch.checked) {
            localStorage.setItem('theme', 'dark')
            addCSS('/css/dark-theme.css', 'dark')
            darkSound.currentTime = 0
            darkSound.play()
        } else {
            localStorage.setItem('theme', 'light')
            addCSS('/css/default-theme.css', 'light')
            lightSound.currentTime = 0
            lightSound.play()
        }
    })

    if (theme === 'dark') {
        themeSwitch.checked = true
        addCSS('/css/dark-theme.css', 'dark')
    } else {
        addCSS('/css/default-theme.css', 'light')
    }
}

theme()