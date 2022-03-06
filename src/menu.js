function Menu () {
    const element = document.createElement('div');
    element.classList.add('menuDiv');

    let cardTitles = ['Salsiccia', 'Gamberi', 'Prosciutto e funghi', 'Diavola', 'Quattro stagioni', 'Mexicana', 'Carnivore','God pizza']
    let cardPrices = ['20€', '20€', '22€', '20€', '22€', '22€', '20€', '24€'];
    for (let i = 0; i < 8; i++) {
        const card = document.createElement('div');
        card.classList.add('menuCard');

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('menuCardTitle');
        cardTitle.textContent = cardTitles[i];

        const cardBody = document.createElement('p');
        cardBody.classList.add('menuCardBody');
        cardBody.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';

        const cardPrice = document.createElement('p');
        cardPrice.classList.add('menuCardPrice');
        cardPrice.textContent = cardPrices[i];

        card.append(cardTitle, cardBody, cardPrice);
        element.appendChild(card);
    }

    return element;
}

export default Menu;