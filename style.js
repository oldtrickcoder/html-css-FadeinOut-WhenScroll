function scrollAppear(){
    var introtext = document.querySelector('.intro-text');
    var introPosition = introtext.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introtext.classList.add('intro-appear');
    }else{
        introtext.classList.remove('intro-appear');
    }

}

window.addEventListener('scroll',scrollAppear);