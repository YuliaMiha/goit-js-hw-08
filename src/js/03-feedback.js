import throttle from 'lodash.throttle';
const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

refs.feedbackForm.addEventListener('input', throttle(saveFeedBack, 500));
refs.feedbackForm.addEventListener('submit', sendFeedBack);

function saveFeedBack(e) {
  const valueFromLS =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  valueFromLS[e.target.name] = e.target.value;
  const feedbackForLocalStorage = JSON.stringify(valueFromLS);

  localStorage.setItem('feedback-form-state', feedbackForLocalStorage);
}
const valueFromLS =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
refs.feedbackForm.elements.email.value = valueFromLS.email || '';
refs.feedbackForm.elements.message.value = valueFromLS.message || '';

function sendFeedBack(e) {
  e.preventDefault();
  if (
    refs.feedbackForm.elements.message.value === '' ||
    refs.feedbackForm.elements.email.value === ''
  ) {
    alert('Error! Enter all fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.clear();
}
