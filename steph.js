window.onload = displayClock();
function displayClock() {
    let display = new Date().toLocaleTimeString();
    document.body.innerHTML = display;
     setTimeout(displayClock, 6000);
}