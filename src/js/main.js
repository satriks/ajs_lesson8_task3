export default class Settings {
    constructor(){
        this.setting = new Map()
        this.setting.set('theme', 'dark') //'light', 'gray'
        this.setting.set('music', 'trance') // 'pop', 'rock', 'chillout', 'off'
        this.setting.set('difficulty', 'easy') //'normal', 'hard', 'nightmare'
    }

    changeSetting (param){
        const [setParam, data] = [...param]
        if (setParam == 'theme')
            if (['dark','light', 'gray' ].includes(data)){
                this.setting.set(setParam, data)
            } else{
                throw new Error('Нет такой настройки')
            }
        if (setParam == 'music')
            if (['trance','pop', 'rock', 'chillout', 'off' ].includes(data)){
                this.setting.set(setParam, data)
            } else{
                throw new Error('Нет такой настройки')
            }
        if (setParam == 'difficulty')
            if (['easy','normal', 'hard', 'nightmare' ].includes(data)){
                this.setting.set(setParam, data)
            } else{
                throw new Error('Нет такой настройки')
            }
    }
    get getSettings(){
        return this.setting
    }
    
}
