
const form = document.querySelector('.form');

form.addEventListener('submit', onClick);

let counterPosition = 0;
let stepCounter = 0;
function onClick(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount }
  } = evt.currentTarget;
  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value);
  // for(let i = 0; i < amount.value; i +=1 ){
  //   counterPosition += 1
    // stepCounter = delay.value + step.value;
    createPromise(step.value, delay.value).then(({ step, delay }) => {
    console.log(`✅ Fulfilled promise ${step} in ${delay}ms`);
  })
  .catch(({ step, delay }) => {
    console.log(`❌ Rejected promise ${step} in ${delay}ms`);
  });
  // }
}

function createPromise(position, delay) {
  const promise = new Promise((resoleve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
    resoleve(console.log(position, delay))
  } else {
    reject(console.log(position, delay))
  }
  }, delay)
   });
   console.log(promise)
   return promise;
}

