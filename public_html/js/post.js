import { $ } from '/js/selectors.js';
import { defaultSounds } from '/js/sounds-preloading.js';
import { random } from '/js/random.js';
import { debounce } from '/js/debouncer.js';

let sounds = defaultSounds('lucianape3', null, null)

$('#postsNavigator').addEventListener('click', e => {
    sounds = defaultSounds('lucianape3', null, null)
    $('#previous_posts').classList.toggle('posts_nav');
    if ($('.posts_nav') && sounds) {
        sounds[7].play()
    } else {
        sounds ? sounds[8].play() : null;
    }
})

$('#previous_posts').addEventListener("scroll", debounce(() => {
    let rnd = random(9, 12)
    sounds ? sounds[rnd].play() : null
}, 100));



$('.send_message input').addEventListener('click', e => {
    e.preventDefault()
    sounds = defaultSounds('lucianape3', null, null)
    sounds ? sounds[1].play() : null
})



// Make the #postsNavigator element draggable on mobile:
// let dotz = $("#postsNavigator")
// window.onload = function () {
//     dotz.addEventListener('touchmove', function (e) {
//         var touchLocation = e.targetTouches[0];
//         dotz.style.top = touchLocation.pageY + 'px';
//     })
//     dotz.addEventListener('touchend', function (e) {
//         var y = parseInt(dotz.style.top);
//     })
// }