const themeDD = () => {
    const asker = document.getElementById('themeDD');
    const cont = document.getElementById('__changeThemeContainer');

    asker.addEventListener('click',() => {
        asker.style.display = 'none';
        cont.classList.replace('none','__changeThemeContainer')
    })
};
document.addEventListener('DOMContentLoaded',()=>{
    themeDD()
})