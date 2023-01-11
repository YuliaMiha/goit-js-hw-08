import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('#vimeo-player');


    const player = new Player(iframe);
    const onPlay = function(time) {
       // console.log(time);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(time.seconds));
    };
    
   
const data = localStorage.getItem("videoplayer-current-time");
        console.log(data);
        const result = JSON.parse(data);
                 

    player.setCurrentTime(result).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(onPlay));