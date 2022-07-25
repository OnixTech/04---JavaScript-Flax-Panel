const boxes = document.querySelectorAll('.box');

function toggleOpen(){
  console.log("Hello");
  this.classList.toggle('open');
}

function toggleActive(e){
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

boxes.forEach(box => box.addEventListener('click', toggleOpen));
boxes.forEach(box => box.addEventListener('transitionend', toggleActive));
