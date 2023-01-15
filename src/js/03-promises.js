import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onClick);

let counterPosition = 0;

function onClick(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount }
  } = evt.currentTarget;

  const firstDelay = Number(delay.value);
  const stepDelay = Number(step.value);
  const amountValue = Number(amount.value)
  for (let i = 0; i <= amountValue; i += 1){
    counterPosition += 1;
    const delayStepCounter = firstDelay + stepDelay * (counterPosition - 1);
    createPromise(counterPosition, delayStepCounter).then(onSuccess).catch(onError)
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (shouldResolve) {
      res({ position, delay })
  } else {
      rej({ position, delay })
  }
  }, delay)
   });
   return promise;
}

function onSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
 Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
