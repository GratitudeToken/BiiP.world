import { $, $$ } from '/js/selectors.js';
import { pop_it } from '/js/shortMessage.js';
import { defaultSounds } from '/js/sounds-preloading.js';
import { posting } from '/js/posting.js';
import { smallRandom } from '/js/random.js';

posting()

let sounds = defaultSounds('lucianape3', null, null)

$('#filters') ? $('#filters').addEventListener('change', e => {
    $('.content_type').innerHTML = $('#filters input[name="filters"]:checked + label').getAttribute('title')
}) : null;

$$('.messages').forEach(el => {
    el.addEventListener('click', e => {
        $('#messages-container').classList.add('showMessages');
        $('body').style.overflow = 'hidden';
        $('#dm .discussion').scrollTo(0, document.body.scrollHeight);
        sounds = defaultSounds('lucianape3', null, null)
        sounds ? sounds[2].play() : null; // 'message.mp3';
    })
})


$('#user-menu .avatar-container') ? $('#user-menu .avatar-container').addEventListener('click', e => {
    $('#notifications').classList.remove('showNotifications')
    sounds = defaultSounds('lucianape3', null, null)
    sounds ? sounds[4].play() : null; // 'inspect.mp3'
}) : null;

$('#notifications') ? $('#notifications').addEventListener('click', e => {
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds) {
        sounds[5].currentTime = 0;
        sounds[5].play(); // 'bell.mp3'
    }

    $('#notifications').classList.toggle('showNotifications')
}) : null;



$('.messages_header header').addEventListener('click', e => {
    $('.messages_from').style = 'left: 0'
})

$('#dm').addEventListener('click', e => {
    $('.messages_from').style = ''
})

$('#messages-container .close').addEventListener('click', e => {
    $('#messages-container').classList.remove('showMessages');
    $('body').style.overflow = ''
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds) {
        sounds[3].play(); // 'message-reverse.mp3'
    }

})

$('#timeline').addEventListener('click', e => { window.location = "/timeline.html"; })

$('#search-btn').addEventListener('click', e => {
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds) {
        sounds[4].play(); // 'inspect.mp3'
    }
    $('body').classList.toggle('showSearch')
})


$$('.share2earn').forEach(el => {
    const text = [`You earned ${smallRandom(0.01, 5)} GRAT.`];
    pop_it(el, null, null, ['/svgs/share.svg'], '#3e8fdb', text, ['share'], 'lucianape3', false)
})

$$('.like2give').forEach(el => {
    const text = [`You shared ${smallRandom(0.01, 5)} GRAT.`];
    pop_it(el, null, null, ['/svgs/like.svg'], '#db463e', text, ['like'], 'lucianape3', false)
})

$('#profile') ? $('#profile').addEventListener('click', e => { window.location = "/profile.html"; }) : null;


$('#index') ? $('#index').addEventListener('click', e => { window.location = "/" }) : null;

$$('.comments').forEach(el => {
    el.addEventListener('click', e => {
        window.location = "/post.html";
    })
});
