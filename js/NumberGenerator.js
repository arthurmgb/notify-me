const lucky_number = document.querySelector("#lucky-number");
let random_number = Math.floor(Math.random() * 101);
lucky_number.innerHTML = random_number;