console.log(window.Telegram.WebApp.initDataUnsafe);

function setThemeClass() {
  document.documentElement.className = Telegram.WebApp.colorScheme;
}

Telegram.WebApp.onEvent("themeChanged", setThemeClass);
setThemeClass();
let tg = window.Telegram.WebApp;
