
function navbg(){
    let navbar = document.getElementById('navbar')
    let scrollValue = window.scrollY;

    if(scrollValue > 100){
        navbar.classList.add('navbarbg')

    }
    else{
        navbar.classList.remove('navbarbg')
    }
    
    
}

window.addEventListener('scroll', navbg)

