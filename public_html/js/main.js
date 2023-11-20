import { $, $$ } from '/js/selectors.js';
import { pop_it } from '/js/shortMessage.js';
import { soundsPush } from '/js/sounds-preloading.js';
import { posting } from '/js/posting.js';
posting()

let sounds = soundsPush('lucianape3', ['click.mp3', 'send.mp3', 'message.mp3', 'message-reverse.mp3', 'inspect.mp3', 'bell.mp3'])

$('.dots') ? $$('.dots').forEach(el => { el.addEventListener('click', e => { sounds[4].play() }) }) : null;

$$('.messages').forEach(el => {
    el.addEventListener('click', e => {
        $('#messages-container').classList.add('showMessages')
        $('body').style.overflow = 'hidden';
        $('#dm .discussion').scrollTo(0, document.body.scrollHeight);
        sounds[2].play();
    })
})


$('#user-menu .avatar-container') ? $('#user-menu .avatar-container').addEventListener('click', e => {
    $('#notifications').classList.remove('showNotifications')
    sounds[4].play();
}) : null;

$('#notifications') ? $('#notifications').addEventListener('click', e => {
    sounds[5].currentTime = 0;
    sounds[5].play();
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
    sounds[3].play();
})

$('#biip-btn').addEventListener('click', e => { window.location = "/"; })

$('#search-btn').addEventListener('click', e => {
    sounds[1].play()
    alert('Search feature is free to take. Branch name should be "/feature-search".')
})


$$('.share2earn').forEach(el => {
    pop_it(el, null, null, ['/svgs/share.svg'], '#3e8fdb', ['You gained 1 GRAT'], ['share'], 'lucianape3', true)
})

$$('.like2give').forEach(el => {
    pop_it(el, null, null, ['/svgs/like.svg'], '#db463e', ['You distributed 1 GRAT'], ['like'], 'lucianape3', true)
})

$('#profile') ? $('#profile').addEventListener('click', e => { window.location = "/profile.html"; }) : null;


$('#world') ? $('#world').addEventListener('click', e => { window.location = "/status.html" }) : null;

$$('.conversation').forEach(el => {
    el.addEventListener('click', e => {
        window.location = "/post.html";
    })
});
