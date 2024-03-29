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

let mobileElement = document.querySelector(".mobile");
let menuBtn = document.querySelector("#menu");
let horizontalElement = document.querySelector(".horizontal");
let navElement = document.querySelector(".nav");
let mainDocElement = document.querySelector("#main-doc");


menuOptions = () => {
    // console.log('clicked');
    // menuBtn.removeAttribute = 'menu';
    // menuBtn.classList.remove("menu");
    // menuBtn.classList.add("undoChanges");
    // let img = document.createElement('img');
    // img.src = '/images/close.png';
    // img.width = 20;
    // menuBtn.appendChild(img);
    menuBtn.style.display = 'none';
    horizontalElement.style.display = "block";
    mainDocElement.style.marginTop = "7px";
    mobileElement.style.border = "none";
    navElement.style.display = "block";
}


// let undoChangesElement = document.querySelector(".undoChanges");

// undoCha = () => {
//   // console.log("undoChange");
//   undoChangesElement.innerHTML = '';
//   undoChangesElement.classList.add("menu");
//   undoChangesElement.classList.remove("undoChanges");
//   let hrElement = document.createElement('hr');
//   undoChangesElement.appendChild(hrElement);
//   undoChangesElement.appendChild(hrElement);
//   undoChangesElement.appendChild(hrElement);
//   mobileElement.style.border = "block";
//   navElement.style.display = 'none';
// }

menuBtn.addEventListener("click", menuOptions);

horizontalElement.addEventListener("click", function() {
  menuBtn.style.display = "block";
  horizontalElement.style.display = "none";
  mobileElement.style.border = "block";
  navElement.style.display = "none";
  mainDocElement.style.marginTop = "75px";
  mobileElement.style.borderBottom = "2px solid #8b0b8b";
});


// undoChangesElement.addEventListener("click", undoCha);

// link to open in new tab
// document.getElementById('linkOpenNewTab').addEventListener('click', function () {
//   window.location = 'https://replit.com/@AnubhavTiwari7/24ScriptTag#index.html';
// });