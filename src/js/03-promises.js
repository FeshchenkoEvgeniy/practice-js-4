
const form = document.querySelector('.form');

form.addEventListener('submit', onClick);


function onClick(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount }
  } = evt.currentTarget;
  // createPromise(step.value, delay.value)
  // console.log(delay.value, step.value, amount.value);
}

function createPromise(position, delay) {
  return new Promise((resoleve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  // console.log(shouldResolve)
  if (shouldResolve) {
    resoleve("true")
  } else {
    reject("false")
  }
   });
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(position)
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
