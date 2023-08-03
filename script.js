function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  }

function getLatestTime() {
    $.get('czas.txt')
      .done(function(data) {
        const time = getCurrentTime();
        $('#latestTime').text('latest record: ' + data);
      })
      .fail(function() {
        $('#latestTime').text('['+getCurrentTime()+']'+' an error occured :C ');
      });
  }
  // Pobierz dane początkowe
  getLatestTime();
  
  // Odświeżanie co 30 sekund
  setInterval(getLatestTime, 1000);