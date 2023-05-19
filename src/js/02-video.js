import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const timeLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;
const onPlay = (data) => {
    const { seconds } = data;
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
if(timeLocalStorage !== null){
    player.setCurrentTime(timeLocalStorage)
    .catch(function(error) {
    switch (error.name) {
    default:
        console.log('Some error occurred.');
    break;
    }
});}
