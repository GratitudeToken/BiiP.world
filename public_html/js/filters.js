import { $, $$ } from '/js/selectors.js';
import { defaultSounds } from '/js/sounds-preloading.js';


export const filters = () => {
    let sounds = defaultSounds('lucianape3', null, null)
    // main media filters
    let checkedID = localStorage.getItem('mediaFilter') || 'mixed';
    // if we don't have the #market_location filter we assume we are not on the markets page, so we set to default, this has to be detected in a better and faster way maybe
    !$('#market_location') ? checkedID = 'mixed' : null;

    const filterContent = (type) => {
        $('.content_type').innerHTML = checkedID
        $$('.posts article').forEach(el => {
            if (type === 'mixed') {
                el.style.display = 'block'
            } else {
                if (type === el.dataset.type) {
                    el.style.display = 'block'
                } else {
                    el.style.display = 'none'
                }
            }
        })
    }

    if (checkedID) {
        $(`#${checkedID}`).checked = true;
        filterContent(checkedID);
    }

    $('#filters').addEventListener('change', e => {
        sounds = defaultSounds('lucianape3', null, null)

        checkedID = $('#filters input[name="filters"]:checked').id;
        localStorage.setItem('mediaFilter', checkedID)
        $('.content_type').innerHTML = checkedID
        filterContent(checkedID);
        sounds[19].currentTime = 0;
        sounds[19].play();
    });

    // MARKETS CLICK
    $('#filters #markets+label').addEventListener('click', e => {
        window.location = '/markets.html'
    })
}