const formData = {
  email: '',
  message: '',
};

const refs = {
  formMessage: document.querySelector('.feedback-form'),
};

refs.formMessage.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('load', initPage);

refs.formMessage.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    refs.formMessage.reset();
    formData.email = '';
    formData.message = '';
  }
});

function initPage() {
  try {
    const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storageData) {
      formData.email = storageData.email;
      formData.message = storageData.message;
      refs.formMessage.email.value = formData.email;
      refs.formMessage.message.value = formData.message;
    }
  } catch (err) {
    console.log(err);
  }
}
