function loadFile() {
    fetch('czas.txt') // Change 'czas.txt' to the appropriate filename
    .then(response => response.text())
    .then(data => {
        const fileContentElement = document.getElementById('latestTime');
        fileContentElement.textContent = data;

        // Get the current system time
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

        const [fileHour, fileMinute] = data.split(':').map(Number);
        const timeDifference = (currentHour - fileHour) * 60 + (currentMinute - fileMinute);

        // applying css
        const container = document.querySelector('.center');
        const caption = document.getElementById('event_caption');
        const currenttime = document.getElementById('current-time');

        if (timeDifference === 0) { // Exact time - closed
            container.style.borderColor = 'darkcyan';
            container.style.backgroundColor = '#fb3116  ';
            caption.textContent = 'ZAMKNIĘTE';
            caption.style.color = 'red';
            caption.style.background = 'linear-gradient(to bottom, red, rgb(255, 0, 0))';
            caption.style.webkitBackgroundClip = 'text';
            currenttime.style.color='darkcyan';
            currenttime.style.backgroundColor='black';
        } 
        else if (timeDifference === -1) { // One minute before - possibly closed
            container.style.borderColor = 'red';
            container.style.backgroundColor = '#fbc216';
            caption.textContent = 'PRAWDOPODOBNIE ZAMKNIĘTE';
            caption.style.fontSize = '70px';
            caption.style.color = 'orange';
            caption.style.background = 'linear-gradient(to bottom, orange, rgb(255, 165, 0))';
            caption.style.webkitBackgroundClip = 'text';
            currenttime.style.color='red';
            currenttime.style.backgroundColor=null;
        } 
        else if (timeDifference === 1) { // Within 1 minute after the time - awaiting data
            container.style.borderColor = 'lime';
            container.style.backgroundColor = 'darkcyan';
            caption.textContent = 'ODŚWIEŻANIE';
            caption.style.color = 'lime';
            caption.style.background = 'linear-gradient(to bottom, lime, rgb(255, 255, 255))';
            caption.style.webkitBackgroundClip = 'text';
            currenttime.style.color='lime';
            currenttime.style.backgroundColor=null;
        } 
        else { // Otherwise - opened
            container.style.borderColor = 'gold';
            container.style.backgroundColor = '#009f3a';
            caption.textContent = 'OTWARTE';
            caption.style.color = 'lime';
            caption.style.background = 'linear-gradient(to bottom, lime, rgb(0, 255, 0))';
            caption.style.webkitBackgroundClip = 'text';
            currenttime.style.color='orange';
            currenttime.style.backgroundColor=null;
        }
    }).catch(error => console.error('Błąd wczytywania pliku:', error));
}
setInterval(loadFile, 500);