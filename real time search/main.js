const menu = document.querySelector('#myMenu').children;



function myFunction(event) {
    const search = document.querySelector('#mySearch')
    for (let el of menu) {
        el.innerText.toLowerCase().includes(search.value.toLowerCase()) ? el.style.display = 'block' : el.style.display = 'none';
    }


}