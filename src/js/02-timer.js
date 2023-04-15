import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]')
const daysOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondsOutput = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let settedDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const startTime = Date.now();
        if (selectedDates[0].getTime() > startTime) {
            startBtn.disabled = false;
            settedDate = selectedDates[0].getTime();
        } else {
            startBtn.disabled = true;
            Notify.failure("Please choose a date in the future");
        }
    },
};

flatpickr(dateInput, options);

startBtn.addEventListener('click', start)
let differenceMs;
function start() {
    dateInput.disabled = true;
    startBtn.disabled = true;
    const timerId = setInterval(() => {
        differenceMs = settedDate - Date.now();
        const { days, hours, minutes, seconds } = convertMs(differenceMs);
        daysOutput.innerHTML = days;
        hoursOutput.innerHTML = hours;
        minutesOutput.innerHTML = minutes;
        secondsOutput.innerHTML = seconds;
        if (differenceMs <= 0) {
            clearInterval(timerId); dateInput.disabled = false;
            daysOutput.innerHTML = '00';
            hoursOutput.innerHTML = '00';
            minutesOutput.innerHTML = '00';
            secondsOutput.innerHTML = '00';
        };
    }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}

