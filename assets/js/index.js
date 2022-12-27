window.addEventListener('scroll', () => { 
  const mainImg = document.querySelectorAll('.main-img')
  console.log(window.scrollY);
  console.log(window.innerHeight);

  if (window.scrollY > window.innerHeight * 0.3) {
    mainImg[0].classList.remove('v-hidden')
    mainImg[0].classList.remove('animate__fadeOutLeft')
    mainImg[0].classList.add('animate__fadeInLeft')
  }
  else {
    mainImg[0].classList.add('animate__fadeOutLeft')
    mainImg[0].classList.remove('animate__fadeInLeft')
    // mainImg[0].classList.add('v-hidden')
  }
  if( window.innerWidth > 992) {
    if (window.scrollY > window.innerHeight * 2) {
        mainImg[1].classList.remove('v-hidden')
        mainImg[1].classList.remove('animate__fadeOutRight')
        mainImg[1].classList.add('animate__fadeInRight')
    }
    else {
        mainImg[1].classList.add('animate__fadeOutRight')
        mainImg[1].classList.remove('animate__fadeInRight')
        // mainImg[1].classList.add('v-hidden')
    }
  }
  else {
        if (window.scrollY > window.innerHeight * 0.7) {
        mainImg[1].classList.remove('v-hidden')
        mainImg[1].classList.remove('animate__fadeOutRight')
        mainImg[1].classList.add('animate__fadeInRight')
    }
    else {
        mainImg[1].classList.add('animate__fadeOutRight')
        mainImg[1].classList.remove('animate__fadeInRight')
        // mainImg[1].classList.add('v-hidden')
    }
  }
});