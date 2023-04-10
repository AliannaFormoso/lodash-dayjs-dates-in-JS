// TODO: npm init -y
// TODO: npm install dayjs
// TODO: type: module in package.json
// TODO: Import dayjs
// TODO: To get outputs in Spanish : await import("dayjs/locale/es-us.js") 

import dayjs from "dayjs"

const today = dayjs();
console.log('--today dayjs', today.format())
//or
console.log('--or', dayjs().format("YYYY-MMMM-DD"))

const birthDate = dayjs('1990-05-10');
console.log('--birthday dayjs', birthDate.format());

const formatStr = "DD/MM/YYYY HH:mm:ss"
today.format(formatStr);
console.log('---Formatstr', today.format(formatStr))

const formyearStr = "YYYY-MMM-DD";
today.format(formyearStr);
console.log('---FORM YEAR', today.format(formyearStr))


// Adding days

const fiveDaysLater = today.add(5, "days").format("DD-MMM-YYYY")
console.log('--fivedayslater:', fiveDaysLater)

// relative time
import relativeTime from "dayjs/plugin/relativeTime.js"
dayjs.extend(relativeTime)

let since19999 = dayjs("1999-01-1").fromNow()
console.log('---since19999', since19999)

// with UTC
import utc from "dayjs/plugin/utc.js"
dayjs.extend(utc)
console.log('---utc birthdate', birthDate.utc().format())

// subtract hours

console.log(' - 3 hours', today.subtract(3, 'hours').format('MM/DD HH:mm:ss'))


// Assignments
// Get difference between two dates
const firstDate = dayjs('2015-03-21');
const secondDate = dayjs('2020-09-01');
const diffDates = firstDate.diff(secondDate);
console.log('--Datediff', diffDates) // -172022400000 default milliseconds

// To get the difference in another unit of measure, pass that measurement as the second argument
console.log('-- diff in months', secondDate.diff(firstDate, 'month'))
console.log('-- diff in days', secondDate.diff("2011-01-01", 'day'))
console.log('-- diff in years', firstDate.diff(secondDate, 'year'))


// get weekday from a date
import weekday from "dayjs/plugin/weekday.js"
dayjs.extend(weekday)

console.log('--Weekday', dayjs().weekday(-7))


// Round a date to the beginning of the day



// Create a function that allows us to make dates more readable to humans
function readableDates(date) {

    const formattedDate = dayjs(date)
    const timeDiff = Math.abs(formattedDate.diff(Date.now(), 'months'))

    if (timeDiff <= 1) {
        console.log('It was', formattedDate.fromNow())

    } else if (timeDiff > 1 && timeDiff < 13) {
        console.log('It was on', formattedDate.format("MMMM DD"), 'this year.')

    } else {
        console.log('It was on ', formattedDate.format("MMMM DD, YYYY"), formattedDate.fromNow())
    }
}

readableDates("2023-04-01");

// Guille's solution

function humanize(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if (!isCurrentYear) {
        return wrappedDate.format('MMMM DD, YYYY')
    } else if (daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD")
    }
}
console.log('-----')
console.log(humanize(Date.now()));
console.log(humanize(dayjs().subtract(5, 'days')));
console.log(humanize(dayjs().subtract(60, 'days')));
console.log(humanize(dayjs().subtract(500, 'days')));
console.log(humanize(dayjs().add(5, 'days')));