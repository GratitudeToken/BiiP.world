import { $ } from '/js/selectors.js';
import { soundsPush } from '/js/sounds-preloading.js';
import { random } from '/js/random.js';
import { debounce } from '/js/debouncer.js';

let sounds = soundsPush('lucianape3', ['click.mp3', 'send.mp3', 'drawer.mp3', 'drawer-reverse.mp3', 'swing.mp3', 'sword-swing.mp3', 'whoosh.mp3', 'bamboo-swing.mp3'])

$('#postsNavigator').addEventListener('click', e => {
    $('#previous_posts').classList.toggle('posts_nav');
    $('.posts_nav') ? sounds[2].play() : sounds[3].play();
})

$('#previous_posts').addEventListener("scroll", debounce(() => {
    let rnd = random(4, 7)
    sounds[rnd].play()
}, 100));



$('.send_message input').addEventListener('click', e => {
    e.preventDefault()
    sounds[1].play()
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