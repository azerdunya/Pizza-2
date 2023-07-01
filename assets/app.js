document.querySelector('.opensidebar').addEventListener('click', () =>{
    document.querySelector('.sidebar').classList.add('active')
    document.querySelector('.opensidebar').style.visibility = 'hidden';
    document.body.style.overflow = 'hidden';
})

document.querySelector('.bar_icon').addEventListener('click',() =>{
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.opensidebar').style.visibility = 'visible';
    document.body.style.overflow = 'auto';
})

