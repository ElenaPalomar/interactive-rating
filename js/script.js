/* VARIABLES/CONSTANTS */
const buttons = document.querySelectorAll('.js_btn');
const submit = document.querySelector('.js_submit');
const landingContainer = document.querySelector('.js_landing');
const thanksContainer = document.querySelector('.js_thanks');
const rating = document.querySelector('.js_rating');


/* HANDLE FUNCTIONS */
const handleButton = (event, item) => {
  event.preventDefault();
  rating.innerHTML = event.target.value;
  submit.removeAttribute('disabled');
}

const handleSubmit = (event) => {
  event.preventDefault();
  landingContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
}


/* LISTENERS */
const buttonsListeners = (array) => {
  for (const item of array) {
    item.addEventListener('click', handleButton);
  }
}
buttonsListeners(buttons);

submit.addEventListener('click', handleSubmit)