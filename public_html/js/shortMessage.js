import { $ } from '/js/selectors.js';

// most of these parameters are supposed to be arrays so we can play around with different values for on and off or other states of buttons clicked and other things like blurring the main element so the popups are more visible
export const pop_it = (el, toggle, title, src, color, msg, sound, username, blur) => {

    let audio = []

    if (sound) {
        sound.forEach((el, i) => {
            audio.push(new Audio(`/sounds/${username}/${sound[i]}.mp3`));
        })
    }

    el.addEventListener('click', e => {

        if (title) {
            el.classList.contains(toggle[0]) ? el.title = title[1] : el.title = title[0];
        }

        if (toggle) {

            if (toggle.length > 1) {
                if (el.classList.contains(toggle[0])) {
                    el.className = ''
                    el.classList.add(toggle[1])
                } else {
                    el.className = ''
                    el.classList.add(toggle[0])
                }
            }

            if (toggle.length === 1) {
                el.classList.toggle(toggle[0])
            }

            if (el.classList.contains(toggle[0])) {
                $('.shortMessage img').src = src[0];
                $('.shortMessage p').textContent = msg[0];
                audio[0].currentTime = 0;
                audio[0].play();
            } else {
                $('.shortMessage img').src = src[1];
                $('.shortMessage p').textContent = msg[1];
                audio[1].currentTime = 0;
                audio[1].play();
            }

        } else {
            $('.shortMessage img').src = src[0];
            $('.shortMessage p').textContent = msg[0];
            audio[0].currentTime = 0;
            audio[0].play();
        }

        $('.shortMessage p').style.color = color;


        $('.shortMessage').classList.remove('showMessage')

        if (blur) {
            $('main').style = 'filter: blur(2px)';
            setTimeout(function () {
                $('main').style = ''
            }, 2690);
        }

        setTimeout(() => {
            $('.shortMessage').classList.add('showMessage');
        }, "100");
    })
}