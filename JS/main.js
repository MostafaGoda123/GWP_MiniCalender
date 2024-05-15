let date = document.getElementById("date") ;
let day = document.getElementById("day") ;
let month = document.getElementById("month") ;
let year = document.getElementById("year") ;

let toDay = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

date.innerHTML = (toDay.getDate()<10?"0":"") + toDay.getDate()
day.innerHTML = days[toDay.getDay()]
month.innerHTML = months[toDay.getMonth()]
year.innerHTML = toDay.getFullYear()

