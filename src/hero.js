import Kratos from './kratos.jpg';
import Pizza from './pizza.png';
import Conv from './conversation.png';

function Hero() {
    const element = document.createElement('div');
    element.classList.add('main');

    const title = document.createElement('p');
    title.classList.add('title')
    title.textContent = 'God of Pizza';
    element.appendChild(title);

    const myImg = new Image();
    myImg.src = Kratos;
    myImg.classList.add('img');
    const leftPizzaImg = new Image();
    leftPizzaImg.src = Pizza;
    leftPizzaImg.classList.add('pizzaImg1');
    const rightPizzaImg = new Image();
    rightPizzaImg.src = Pizza;
    rightPizzaImg.classList.add('pizzaImg2');
    const convImg = new Image();
    convImg.src = Conv;
    convImg.classList.add('convImg');
    
    const interjection = document.createElement('p');
    interjection.textContent = 'PIZZAAAA';
    interjection.classList.add('interjection');

    element.appendChild(myImg);
    element.appendChild(leftPizzaImg);
    element.appendChild(rightPizzaImg);
    element.appendChild(convImg);
    element.appendChild(interjection);

    return element;
}

export default Hero;