import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
console.log(123)
const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    timeDay: document.querySelector("span[data-days]"),
    timeHours: document.querySelector("span[data-hours]"),
    timeMinutes: document.querySelector("span[data-minutes]"),
    timeSeconds: document.querySelector("span[data-seconds]"),
}

let timerId = null;
let selectedDate = 0;
let difference = 0;

refs.startBtn.addEventListener('click', startIntervalOnClick);

refs.startBtn.setAttribute("disabled", "disabled");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];

        if (selectedDate <= options.defaultDate) {
           Notiflix.Notify.failure("Please choose a date in the future")
           refs.startBtn.setAttribute("disabled", "disabled");
        } else {
            Notiflix.Notify.success("Successfully")
            refs.startBtn.removeAttribute("disabled");
        }
  },
};
     
const flatpickr = flatpickr(refs.input, options);

function startIntervalOnClick() {
  timerId = setInterval(() => {
      refs.startBtn.setAttribute("disabled", "disabled");
      const currentTime = options.defaultDate = new Date();
      difference = selectedDate - currentTime;
      const date = convertMs(difference);
    changeTextContent(date);
    removeInterval();
        }, 1000);
}

function removeInterval() {
  if (difference < 1000) {
    Notiflix.Report.success(
  'The timer has expired',
  'If you want to start a new countdown, select a new date in the future and click the "start" button',
  'Confirm',
  {
    width: '360px',
    svgSize: '120px',
  },
);
    clearInterval(timerId);
  } 
}

function changeTextContent(date) {
  refs.timeDay.textContent = date.days.toString().padStart(2,"0");
  refs.timeHours.textContent = date.hours.toString().padStart(2,"0");
  refs.timeMinutes.textContent = date.minutes.toString().padStart(2,"0");
  refs.timeSeconds.textContent = date.seconds.toString().padStart(2,"0");
}

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
   const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
   const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
