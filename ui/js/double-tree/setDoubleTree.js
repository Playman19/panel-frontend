const setDoubleTree = () => {
    const parents = document.getElementsByClassName('dt-parent-btn');
    const childs = document.getElementsByClassName('dt-children-list');

    const PARENT_OPENED = '__dt-parent-btn-opened' 
    const PARENT_CLOSED = '__dt-parent-btn-closed'
    const CHILD_OPENED = '__dt-children-list-opened'
    const CHILD_CLOSED = '__dt-children-list-closed'


    for(let i = 0; i < parents.length; i++) {
        parents[i].addEventListener('click', () => {
            if((parents[i].classList.contains(PARENT_CLOSED)) && (childs[i].classList.contains(CHILD_CLOSED))) {
                parents[i].classList.replace(PARENT_CLOSED,PARENT_OPENED);
                childs[i].classList.replace(CHILD_CLOSED,CHILD_OPENED);
            }
            else if ((parents[i].classList.contains(PARENT_OPENED)) && (childs[i].classList.contains(CHILD_OPENED))) {
                parents[i].classList.replace(PARENT_OPENED,PARENT_CLOSED);
                childs[i].classList.replace(CHILD_OPENED,CHILD_CLOSED);
            }
        })
    }
};
document.addEventListener('DOMContentLoaded',()=>{
    setDoubleTree()
})