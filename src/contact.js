import Location from './midgard.jpg';

function Contact () {
    const element = document.createElement('div');
    element.classList.add('contactDiv');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('leftDiv');

    const contactTitle = document.createElement('p');
    contactTitle.classList.add('contactTitle');
    contactTitle.textContent = 'Contact us!';
    leftDiv.appendChild(contactTitle);

    const locationP = document.createElement('p');
    locationP.classList.add('locationParagraph');
    locationP.textContent = 'Location: center of Lake of Nine, Midgard';
    leftDiv.appendChild(locationP);

    const separator = document.createElement('hr');
    separator.classList.add('separator');
    leftDiv.appendChild(separator);

    const deliveryP = document.createElement('p');
    deliveryP.classList.add('deliveryParagraph');
    deliveryP.textContent = `For at home deliveries: Find the closest Odin's raven, tell them what you'd like and we will deliver in the shortest time possible.`;
    leftDiv.appendChild(deliveryP);

    const locationImg = new Image();
    locationImg.classList.add('locationImg');
    locationImg.src = Location;
    
    element.append(leftDiv, locationImg);

    return element;
}

export default Contact;