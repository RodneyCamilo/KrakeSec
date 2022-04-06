
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Pop Up

const button = document.querySelector('#btn-flag')
const pop = document.querySelector('.pop-wrapper')
const closeButton = document.querySelector('.pop-close')

button.addEventListener('click', () => {
  pop.style.display = 'block'
})

pop.addEventListener('click', events  => {
  const classNameOfClickedElement = events.target.classList[0]
  const classNames = ['pop-close', 'pop-wrapper']
  const shouldClosePopUp = classNames.some(className =>
    className === classNameOfClickedElement)

  if (shouldClosePopUp) {
    pop.style.display = 'none'
  }

  })
