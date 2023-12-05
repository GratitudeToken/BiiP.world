import { $, $$ } from '/js/selectors.js';
import { pop_it } from '/js/shortMessage.js';
import { defaultSounds } from '/js/sounds-preloading.js';
import { posting } from '/js/posting.js';

const nftSchemaURL = '/schemas/nft_markets.json';
const regularSchemaURL = '/schemas/regular_markets.json';

let nftSchema;
let regularSchema;

const updateSubcategories = (object) => {
    const subcategories = object.map(el => `<div>${el}</div>`).join('');
    $('#subcategories').innerHTML = subcategories;
};

const marketType = $('.market_type');
const descr = $('#marketDescription');

const eventListeners = (type) => {
    $$(`#${type} img`).forEach(el => {
        el.addEventListener('click', () => handleImageClick(el, type));
    });
};

const handleImageClick = (el, type) => {
    $(`#${type} .selected`).classList.remove('selected');
    el.classList.add('selected');
    marketType.textContent = el.title;

    if (type === 'nft') {
        descr.textContent = `Create, Sell or Buy unique ${el.title} as NFT's.`;
        updateSubcategories(nftSchema[el.title]);
    } else if (type === 'regular') {
        const str = getRegularDescription(el.title);
        descr.textContent = str;
        updateSubcategories(regularSchema[el.title]);
    }
};

const getRegularDescription = (title) => {
    switch (title) {
        case 'Free Stuff':
            return `No price tag, just pick it up or pay for transport.`;
        case 'For Sale':
            return `Most common For Sale stuff.`;
        case 'Jobs':
            return `Find or post a Job.`;
        case 'Community':
            return `Find something valuable to do or post something useful for your Community.`;
        case 'Business and Industrial':
            return `Buy or Sell a Business or Industrial things.`;
        case 'Hobbies':
            return `Find your tribe and have fun buying or selling.`;
        case 'Travel':
            return `Find your dream vacation or offer one.`;
        case 'Health and Fitness':
            return `We need at least 3-4 forms of therapy nowadays just to stay alive.`;
        default:
            return `Buy or Sell ${title}`;
    }
};

const getSchema = async (location) => {
    try {
        const response = await fetch(location, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching schema:', error);
        throw error;
    }
};

const fetchData = async (type) => {
    try {
        nftSchema = await getSchema(nftSchemaURL);
        regularSchema = await getSchema(regularSchemaURL);

        const selectedTitle = $(`#${type} .selected`).title;
        marketType.textContent = selectedTitle;

        if (type === 'nft') {
            updateSubcategories(nftSchema[selectedTitle]);
            descr.textContent = `Create, Sell or Buy unique ${selectedTitle} as NFT's.`;
        } else if (type === 'regular') {
            updateSubcategories(regularSchema[selectedTitle]);
            descr.textContent = getRegularDescription(selectedTitle);
        }

        eventListeners(type);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData('nft');

const marketSwitch = $('#marketTypeSwitch');

marketSwitch.addEventListener('change', () => {
    const switchType = marketSwitch.checked ? 'regular' : 'nft';
    fetchData(switchType);
});
