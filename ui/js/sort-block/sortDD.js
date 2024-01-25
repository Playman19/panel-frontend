const sortDD = () => {
    const setSortDD = document.getElementById('setSortDD')
    const sortDD = document.getElementById('sortDD')

    setSortDD.addEventListener('click', (ev) => {
        ev.preventDefault();
        sortDD.classList.remove('none')
    })

    sortDD.addEventListener('click', (ev) => {
        ev.preventDefault()
        if(ev.target.tagName === 'BUTTON') {
            setSortDD.textContent = ev.target.textContent;
            sortDD.classList.add('none')
        }
    })
};
document.addEventListener('DOMContentLoaded',()=>{
    sortDD()
})