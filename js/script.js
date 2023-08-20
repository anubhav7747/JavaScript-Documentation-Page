const displayTime = () => {
    let now = new Date();
    document.getElementById('time').innerHTML = now;
}

setInterval(displayTime, 1000);