import { $, $$ } from '/js/selectors.js';
import { pop_it } from '/js/shortMessage.js';
import { defaultSounds } from '/js/sounds-preloading.js';
import { posting } from '/js/posting.js';
import { smallRandom } from '/js/random.js';
import { debounce } from '/js/debouncer.js';

posting()

let sounds = defaultSounds('lucianape3', null, null)


$$('.messages').forEach(el => {
    el.addEventListener('click', e => {
        $('#messages-container').classList.add('showMessages');
        $('body').style.overflow = 'hidden';
        $('#dm .discussion').scrollTo(0, document.body.scrollHeight);
        sounds = defaultSounds('lucianape3', null, null)
        sounds ? sounds[3].play() : null;
    })
})

// avatar click
$('#user-menu .avatar-container') ? $('#user-menu .avatar-container').addEventListener('click', e => {
    $('#user-menu').classList.toggle('show');
    $('#notifications').classList.remove('showNotifications')
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds && $('#user-menu').classList.contains('show')) {
        sounds[0].play()
    }
}) : null;


// NOTIFICATIONS
$('#notifications') ? $('#notifications').addEventListener('click', e => {
    $('#user-menu').classList.remove('show')
    $('#notifications').classList.toggle('showNotifications')
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds) {
        sounds[6].currentTime = 0;
        sounds[6].play();
    }
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
        sounds[4].play();
    }

})

$('#timeline').addEventListener('click', e => { window.location = "/timeline.html"; })


// SEARCH FEATURE
$('#search-btn').addEventListener('click', e => {
    sounds = defaultSounds('lucianape3', null, null)
    if (sounds && !$('.showSearch')) {
        sounds[18].play();
    } else {
        sounds[20].play();
    }
    $('body').classList.toggle('showSearch')
})


$$('.share2earn').forEach(el => {
    const text = [`You earned ${smallRandom(0.01, 5)} GRAT`];
    pop_it(el, null, null, ['/svgs/share.svg'], '#3e8fdb', text, ['share'], 'lucianape3', false)
})

$$('.like2give').forEach(el => {
    const text = [`You shared ${smallRandom(0.01, 5)} GRAT`];
    pop_it(el, null, null, ['/svgs/like.svg'], '#db463e', text, ['like'], 'lucianape3', false)
})

$('#profile') ? $('#profile').addEventListener('click', e => { window.location = "/profile.html"; }) : null;


$('#index') ? $('#index').addEventListener('click', e => { window.location = "/" }) : null;

$$('.comments').forEach(el => {
    el.addEventListener('click', e => {
        window.location = "/post.html";
    })
});



let mybutton = $("#scrollToTopBtn");

window.addEventListener("scroll", debounce(() => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.classList.add('showTopBtn')
    } else {
        mybutton.classList.remove('showTopBtn')
    }
}, 100));

mybutton.addEventListener('click', e => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
})