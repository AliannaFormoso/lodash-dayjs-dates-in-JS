// New Date

const today = new Date();
console.log('--Today:', today);

const birthDay = new Date('1990-05-10T08:30:00')
console.log('--Birthday: ', birthDay)


// Date functions (Gets)
year = today.getFullYear();
month = today.getMonth();
day = today.getDay();
hours = today.getHours();
minutes = today.getMinutes();
secs = today.getSeconds();
times = today.getTime();

console.log('\n', 'Year: ', year, '\n', 'Month: ', month, '\n', 'Day: ', day, '\n', 'Hours: ', hours, '\n', 'Minutes: ', minutes, '\n', 'Seconds: ', secs, '\n', 'Times: ', times)

// Setters
// setFullYear()
// setMonth()
// setDate()
// setHours()
// setMinutes()
// setSeconds()

// Adding two dates

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000
const twoDaysLater = new Date(today.getTime() + 2 * ONE_DAY_IN_MS)
const tomorrow = new Date(times + ONE_DAY_IN_MS)

console.log('--Tomorrow will be: ', tomorrow, ' and Two days later: ', twoDaysLater)


// subtracting two dates

const specificDate = new Date('2023-03-23')

const diffInMs = today.getTime() - specificDate.getTime()

const diffInDays = Math.floor(diffInMs / ONE_DAY_IN_MS)
console.log('----diffInDays', diffInDays)

// Yesterday and the day before yesterday

yesterday = new Date(times - ONE_DAY_IN_MS)
dayBeforeYesterday = new Date(times - 2 * ONE_DAY_IN_MS)

console.log('---Yesterday was: ', yesterday, 'and the day before yesterday was: ', dayBeforeYesterday)