
let main = document.querySelector("main")
let day = document.querySelector(".days span")
let hourse = document.querySelector(".hourse span")
let minutes = document.querySelector(".minutes span")
let seconds = document.querySelector(".seconds span")
let modalPage = document.querySelector(".modal__page")
let input = document.querySelector("input")
let btn = document.querySelector("button")
let deadlineTime = document.querySelector("h3")
let deadline = "2023-07-14"
deadlineTime.innerText = deadline

function dataTimer(dl){
  let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
      days = Math.floor(t / ( 1000 * 60 * 60 * 24 )),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minute = Math.floor((t / 1000 / 60 ) % 60),
      second = Math.floor((t / 1000) % 60)
  if(t < 0){
		t = 0
		days = 0
		hours = 0
		minute = 0
		second = 0
	}

	return {
		t, days, hours, minute, second
	}
}
function startTimer(dl){
	let timerId = setInterval(updateTimer, 1000)
  // if(day.innerText == 0 && hourse.innerText == 0 && minutes.innerText == 0 && seconds.innerText == 0){
  //   main.style.display = "none"
  // }
	function updateTimer(){
		let timer = dataTimer(dl)

    day.innerText = addZero(timer.days)
    hourse.innerText = addZero(timer.hours)
    minutes.innerText = addZero(timer.minute)
    seconds.innerText = addZero(timer.second)

    if(timer.t < 0){
      clearInterval(timerId)
    }
	}
	updateTimer()
}
startTimer(deadline)

function addZero(num){
	if(num >= 0 && num < 10){
		return `0${num}`
	}else{
		return num
	}
}
