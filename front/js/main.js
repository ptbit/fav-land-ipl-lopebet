(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

window.addEventListener("orientationchange", () => {
    location.reload(true)
});

// color padding-top
document.addEventListener("DOMContentLoaded", function() {
    function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function isMacOS() {
        return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
    }

    let bannerDate = document.querySelector('.banner__date');
    let bannerTime = document.querySelector('.banner__time');
    let bannerTeam = document.querySelector('.banner__team');
    let bannerBonusL = document.querySelector('.banner__bonus-left');
    let bannerBonusR = document.querySelector('.banner__bonus-right');

    if (!isIOS() && !isMacOS() && bannerDate && bannerTime && bannerBonusL && bannerBonusR && bannerTeam) {
        bannerDate.classList.add('noios-padding');
        bannerTime.classList.add('noios-padding');
        bannerBonusL.classList.add('noios-padding');
        bannerBonusR.classList.add('noios-padding');
        bannerTeam.classList.add('noios-padding');
    }
});