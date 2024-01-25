async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products')
    const repo = await res.json()
    // Pass data to the page via props
    return await repo
}
const getLoremExcel = () => {
    getServerSideProps().then(function(result) {
        const xls = document.getElementById('xls');
        const products = result.products
        console.log(result.products)
        const keys = Object.keys(products[0])
        xls.innerHTML = 
        `<div class="xls-head">
            <div class="xls1">№</div>
            <div class="xls1">${keys[0]}</div>
            <div class="xls1">${keys[1]}</div>
            <div class="xls1">${keys[2]}</div>
            <div class="xls1">${keys[3]}</div>
            <div class="xls1">${keys[4]}</div>
            <div class="xls1">${keys[7]}</div>
            <div class="xls1">${keys[8]}</div>
        </div>`

        for(let i = 0; i < products.length; i++) {
            var values = Object.values(products[i]);

            var line = 
            `<div class="xls-body">
                 <div class="xls1">${i+1}</div>
                 <div class="xls1">${values[0]}</div>
                 <div class="xls1">${values[1]}</div>
                 <div class="xls1">${values[2]}</div>
                 <div class="xls1">${values[3]}</div>
                 <div class="xls1">${values[4]}</div>
                 <div class="xls1">${values[7]}</div>
                 <div class="xls1">${values[8]}</div>
            </div>`
            xls.innerHTML += line
        }
        
        const hd = document.getElementsByClassName('xls-head')[0];
        const bodyCollection = document.getElementsByClassName('xls-body')
        bodyCollection[0].children[0].classList.add('xls-active')
        const xlsClasses = ['xls0','xls1','xls2','xls3','xls4','xls5'];
        const xlsEdit = document.getElementById('xls-edit');
        for(let i = 0; i < bodyCollection.length; i++) {
            bodyCollection[i].addEventListener('click', (ev) => {
                if(!ev.target.classList.contains('xls-body')) {
                    let last = document.getElementsByClassName('xls-active')[0];
                    last.classList.remove('xls-active');
                    ev.target.classList.add('xls-active');
                    xlsEdit.value = ev.target.textContent
                }
            })
        }


        hd.addEventListener('click', (ev) => {
            if(!ev.target.classList.contains('xls-head')) {
                
                const getIndex = (clas) => {
                    for(let i = 0; i < xlsClasses.length; i++) {
                        if(clas == xlsClasses[i]) {
                            return i
                        }
                    }
                }
                
                function getChildElementIndex(node) {
                    return Array.prototype.indexOf.call(node.parentNode.children, node);
                }
                
                const indexCol = getChildElementIndex(ev.target);
                const columnReplacer = (last,ne) => {
                    hd.children[indexCol].classList.replace(last,ne)
                    for(let i = 0; i < bodyCollection.length; i++) {
                        bodyCollection[i].children[indexCol].classList.replace(last,ne);
                    }
                }

                if(bodyCollection[0].children[indexCol].textContent.length < 4) {
                    switch (bodyCollection[0].children[indexCol].classList[0]) {
                        case xlsClasses[1]:
                            columnReplacer(xlsClasses[1],xlsClasses[0])
                            break;
                        case xlsClasses[0]:
                            columnReplacer(xlsClasses[0],xlsClasses[1])
                            break;
                        default:
                            break;
                    }
                    
                }
                else if(bodyCollection[0].children[indexCol].classList[0] != xlsClasses[5]) {
                    console.log('kek')
                    columnReplacer(bodyCollection[0].children[indexCol].classList[0], xlsClasses[getIndex(bodyCollection[0].children[indexCol].classList[0]) + 1] )
                }
            }
        })

    })

};
document.addEventListener('DOMContentLoaded',()=>{
    getLoremExcel()
})