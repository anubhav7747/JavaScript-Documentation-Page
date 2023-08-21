// for displaying time

// const displayTime = () => {
//     let now = new Date();
//     document.getElementById('time').innerHTML = now;
// }

// setInterval(displayTime, 1000);

// const displayGreet = () => {
//     alert('Thank you for visiting.');
// }

// setTimeout(displayGreet, 10000);

setInterval(()=>{
    let date = new Date();
    let options = {
      weekday: 'short', year: 'numeric', month: 'short',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
  
    let d = date.toLocaleTimeString('en-us', options);
    time.innerHTML = d;
}, 1000);


// link to open in new tab
// document.getElementById('linkOpenNewTab').addEventListener('click', function () {
//   window.location = 'https://replit.com/@AnubhavTiwari7/24ScriptTag#index.html';
// });