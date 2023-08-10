function getCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = timeString;
}
setInterval(getCurrentTime, 1000);
getCurrentTime();