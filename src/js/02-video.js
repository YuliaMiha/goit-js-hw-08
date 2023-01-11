import Player from '@video/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const seconds = localStorage.getItem('videoplayer-current-time');
if (seconds !== undefined) {
  player.setCurrentTime(JSON.parse(seconds));
}

const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));
