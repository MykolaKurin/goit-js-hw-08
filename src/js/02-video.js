import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
function setTime() {
  const time = localStorage.getItem(LOCALSTORAGE_KEY);
  if (time) {
    iframePlayer.setCurrentTime(time);
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

window.addEventListener('DOMContentLoaded', setTime);
