import { $, $$ } from '/js/selectors.js';
import { defaultSounds } from '/js/sounds-preloading.js';

const postBTN = $('#post-btn')

export const posting = () => {
    postBTN.addEventListener('click', e => {

        // IDEA -  don't forget to set expiration date on static cached files of user content, for example 24H should be

        // $('#posting').innerHTML = `
        // <h2>GIGI</h2>
        // <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        // <form id="posting-form">
        //     <textarea placeholder="Post what now? ..."></textarea>
        //     <button id="cancel-posting">CANCEL</button>
        //     <input id="post-now" type="submit">POST</button>
        // </form>
        // `
        $('#posting').style.display = 'block'
        let sounds = defaultSounds('lucianape3', null, null)
        sounds[1].play()
    })

    $('#posting-form') ? $('#posting-form').addEventListener('submit', e => {
        e.preventDefault()
    }) : null;

    $('#cancel-posting') ? $('#cancel-posting').addEventListener('click', e => {
        $('#posting').style.display = 'none'
    }) : null
}