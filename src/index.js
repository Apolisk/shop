


let tg = window.Telegram.WebApp;
tg.expand();
let user = document.getElementById("user");
let p = document.createElement("p");

p.innerText=`${tg.initDataUnsafe.first_name}`;

user.appendChild(p);