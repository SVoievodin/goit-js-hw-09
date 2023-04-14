import { Notify } from 'notiflix/build/notiflix-notify-aio';


const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let delayEl = e.currentTarget[0].valueAsNumber;
  const stepEl = e.currentTarget[1].valueAsNumber;
  const amountEl = e.currentTarget[2].valueAsNumber;

  for (let position = 1; position <= amountEl; position += 1) {
    createPromise(position, delayEl);
    delayEl += stepEl;
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};






// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

