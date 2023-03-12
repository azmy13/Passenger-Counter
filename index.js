let saveEl = document.getElementById("save-el")
let numbers = document.getElementById("count")
let count = 0
function increment() {
    count += 1
    numbers.textContent = count
}


function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    numbers.textContent = 0
    count = 0 
}

