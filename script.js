const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.givaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format');

let tempDate =  new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = document.querySelectorAll('.deadline-format h4')
let tempDay = tempDate.getDate();
//months are zero index based;
const futureDate = new Date(tempYear, tempMonth,tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month =  futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours} ${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
}

// 1s = 1000ms
// 1m = 60s
// 1hr = 60m
// 1day = 24hr
// Value in Miliseconds

const oneDay = 24 * 60 * 60 * 1000;
const oneHour =  60 * 60 * 1000;
const oneMinute = 60 * 1000;
// calculate all values

let days = t / oneDay;
days = Math.floor(days)
let hours = Math.floor((t % oneDay) / oneHour)