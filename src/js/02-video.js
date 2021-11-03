import Player from '@vimeo/player';

const iFrame = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on('play', function () {
    console.log('played the video');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

