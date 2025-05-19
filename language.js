// Language switcher functionality
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("language") || "nl";
    this.translations = translations;
    this.init();
  }

  init() {
    // Add language selector to navigation
    const nav = document.querySelector("nav ul");
    const langSelector = document.createElement("li");
    langSelector.innerHTML = `
      <select id="language-select" class="language-select">
        <option value="nl" ${
          this.currentLang === "nl" ? "selected" : ""
        }>NL</option>
        <option value="en" ${
          this.currentLang === "en" ? "selected" : ""
        }>EN</option>
      </select>
    `;
    nav.appendChild(langSelector);

    // Add event listener for language change
    document
      .getElementById("language-select")
      .addEventListener("change", (e) => {
        this.setLanguage(e.target.value);
      });

    // Initial translation
    this.updateContent();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("language", lang);
    this.updateContent();
  }

  updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const keys = key.split(".");
      let translation = this.translations[this.currentLang];

      for (const k of keys) {
        if (translation && translation[k]) {
          translation = translation[k];
        } else {
          translation = key;
          break;
        }
      }

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else {
        element.innerHTML = translation;
      }
    });
  }

  getText(key) {
    const keys = key.split(".");
    let translation = this.translations[this.currentLang];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    return translation;
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.languageManager = new LanguageManager();
});
