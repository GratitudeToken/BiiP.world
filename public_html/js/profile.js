import { $ } from '/js/selectors.js';
import { pop_it } from '/js/shortMessage.js';
import { soundsPush } from '/js/sounds-preloading.js';

let sounds = soundsPush('lucianape3', ['like.mp3'])
const follow = $('#follow')
const block = $('#block')
const username = $('.username')

$('.profile_pic') ? $('.profile_pic').addEventListener('mousedown', e => {
    sounds[0].play();
}) : null;

if (follow) {
    pop_it(follow, ['following', 'unfollow'], ['Following', 'Follow'], ['/avatars/dyablohunter.webp', '/avatars/dyablohunter.webp'], '#000', ['Following', 'Unfollowed'], ['biip', 'biip-reverse'], 'lucianape3', false)
}

if (block) {
    pop_it(block, ['blocked'], ['Unblock', 'Block'], ['/img/banned.png', '/svgs/check.svg'], '#000', ['Blocked', 'Unblocked'], ['oops', 'oops-reverse'], 'lucianape3', true)
}

if (username) {
    pop_it(username, null, null, ['/avatars/dyablohunter.webp'], '#000', ['Username copied to clipboard'], ['copy3'], 'lucianape3', true)
}