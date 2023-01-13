import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    timeDay: document.querySelector("span[data-days]"),
    timeHours: document.querySelector("span[data-hours]"),
    timeMinutes: document.querySelector("span[data-minutes]"),
    timeSeconds: document.querySelector("span[data-seconds]"),
}

refs.startBtn.addEventListener('click', onClick);

refs.startBtn.setAttribute("disabled", "disabled");

let selectedDate = 0;

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
     
const fp = flatpickr(refs.input, options); 


function onClick() {
    setInterval(() => {
        const currentTime = options.defaultDate = new Date();
        const difference = selectedDate - currentTime;
        refs.timeDay.textContent = days;
        refs.timeHours.textContent = hours;
        refs.timeMinutes.textContent = minutes;
        refs.timeSeconds.textContent = seconds;
        }, 1000);
}

// function changeTextContetInSpan(data) {
        // refs.timeDay.textContent = data.difference.days;
        // refs.timeHours.textContent = data.difference.hours;
        // refs.timeMinutes.textContent = data.difference.minutes;
        // refs.timeSeconds.textContent = data.difference.seconds;
// }

//  function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
     const days = Math.floor(ms / day);
    //  console.log(days)
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
     const minutes = Math.floor(((ms % day) % hour) / minute);
    //  console.log(minutes)
  // Remaining seconds
     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    //  console.log(seconds)

//   return { days, hours, minutes, seconds };
// }