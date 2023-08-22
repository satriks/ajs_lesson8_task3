export default class Settings {
  constructor() {
    this.setting = new Map();
    this.setting.set('theme', 'dark'); // 'light', 'gray'
    this.setting.set('music', 'trance'); // 'pop', 'rock', 'chillout', 'off'
    this.setting.set('difficulty', 'easy'); // 'normal', 'hard', 'nightmare'
    this.userSetting = new Map();
  }

  changeSetting(param) {
    const [setParam, data] = [...param];
    if (setParam === 'theme') {
      if (['dark', 'light', 'gray'].includes(data)) {
        this.userSetting.set(setParam, data);
      } else {
        throw new Error('Нет такой настройки');
      }
    }
    if (setParam === 'music') {
      if (['trance', 'pop', 'rock', 'chillout', 'off'].includes(data)) {
        this.userSetting.set(setParam, data);
      } else {
        throw new Error('Нет такой настройки');
      }
    }
    if (setParam === 'difficulty') {
      if (['easy', 'normal', 'hard', 'nightmare'].includes(data)) {
        this.userSetting.set(setParam, data);
      } else {
        throw new Error('Нет такой настройки');
      }
    }
  }

  get getSettings() {
    const rez = new Map(this.setting);
    for (const i of this.userSetting) {
      rez.set(i[0], i[1]);
    }
    return rez;
  }
}
