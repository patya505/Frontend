let btn = document.querySelector('#btn');
let fill = document.querySelector('#fill');
let percent = document.querySelector('#percent');
let speed = document.querySelector('#speed');
let status = document.querySelector('#status');

let value = 0;
let interval;

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.style.opacity = 0.4;
    status.innerHTML = "Downloading...";

    interval = setInterval(() => {
        let spd = (Math.random() * 6 + 1).toFixed(2);
        speed.innerHTML = spd + " MB/s";

        value += Math.floor(Math.random() * 2) + 1;

        if (value >= 100) {
            value = 100;
        }

        fill.style.width = value + "%";
        percent.innerHTML = value + "%";

        if (value === 100) {
            clearInterval(interval);
            status.innerHTML = "Download Complete ✔";
            speed.innerHTML = "0 MB/s";

            fill.style.boxShadow = "0 0 35px #00ff6a";
        }

    }, 120);
});
