import defaultTheme from './defaultTheme';

class Theme {
  constructor() {
    this.theme = defaultTheme;
  }
  setTheme(theme) {
    this.theme = { ...this.theme, ...theme };
    return this.theme;
  }
  getTheme() {
    return this.theme;
  }
}
const themeInstance = new Theme();

export default themeInstance;
