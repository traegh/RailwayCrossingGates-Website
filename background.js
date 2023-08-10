function changeBackground() {
    const now = new Date();
    const hour = now.getHours();
    const backgroundElement = document.querySelector('.background');
    
    if (hour >= 6 && hour < 12) {
        backgroundElement.style.backgroundImage = 'linear-gradient(to right, #cc02d6, #f5a207)';
    } else if (hour >= 12 && hour < 18) {
        backgroundElement.style.backgroundImage = 'linear-gradient(to right, #f5a207, #96f507)';
    } else if (hour >= 18 && hour < 22) {
        backgroundElement.style.backgroundImage = 'linear-gradient(to right, #6130ff, #fac446)';
    } else if (hour >= 22 && hour < 3){ 
        backgroundElement.style.backgroundImage = 'linear-gradient(to right, #080124, #1000f7)';
    } else {
        backgroundElement.style.backgroundImage = 'linear-gradient(to right, #0731eb, #cc02d6)';
    }
}
changeBackground();
setInterval(changeBackground, 60000); // Co minutę