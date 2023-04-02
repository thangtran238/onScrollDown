var animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimation(element) {
  var rect = element.getClientRects()[0]
  var heightScreen = window.innerHeight

  //check xem co phai ben trong khong
  if(!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add('start')
  } else {
    element.classList.remove('start')
  }

}


function checkAnimation() {
  animationElements.forEach(el => {
    toggleAnimation(el)
  })
}


window.onscroll = checkAnimation