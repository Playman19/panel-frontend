// При добавлении новых тем добавлять только название id Кнопки ( оно же и название файла ) в массив themeList

const themeConnector = () => {
    const themeList = ['green-theme','blue-theme'];
    const asker = document.getElementById('themeDD');
    const changeThemeContainer = document.getElementById('__changeThemeContainer')

    const changer = (filename) => {
        const link = `<link rel="stylesheet" href="ui/colorpacks/${filename}.css" id="color-theme">`
        const elem = document.getElementById('color-theme')
        if(elem) {
            elem.outerHTML = link;
        }
        else {
            document.head.innerHTML += link
        }
    }
    if(localStorage.getItem('colorTheme') === null) {
        localStorage.setItem('colorTheme',themeList[0])
    }
    changer(localStorage.getItem('colorTheme'))

    changeThemeContainer.addEventListener('click', (ev) => {
        if(ev.target.tagName === 'BUTTON') {
            ev.preventDefault()
            localStorage.colorTheme = ev.target.id
            changer(ev.target.id);
            changeThemeContainer.classList.replace('__changeThemeContainer','none');
            asker.style.display = 'block'
        }
    })

};
document.addEventListener('DOMContentLoaded',()=>{
    themeConnector()
})