import menu from './menu.js';
import contact from './contact.js';
import hero from './hero.js';

function routeChange (route) {
    if (route === 'home') {
        document.body.textContent = '';
        document.body.appendChild(Navigation());
        document.body.appendChild(hero());
    } else if (route === 'menu') {
        document.body.textContent = '';
        document.body.appendChild(Navigation());
        document.body.appendChild(menu());
    } else if (route === 'contact') {
        document.body.textContent = '';
        document.body.appendChild(Navigation());
        document.body.appendChild(contact());
    }
}

function Navigation () {
    const element = document.createElement('div');
    element.classList.add('navigation')

    const tabs = document.createElement('ul');
    tabs.classList.add('tabsUl');
    const line1 = document.createElement('li');
    const anchor1 = document.createElement('a');
    anchor1.href = '#home';
    anchor1.addEventListener('click',() => routeChange('home'));
    anchor1.textContent = 'Home';
    line1.appendChild(anchor1);

    const line2 = document.createElement('li');
    const anchor2 = document.createElement('a');
    anchor2.addEventListener('click', () => routeChange('menu'));
    anchor2.textContent = 'Menu';
    anchor2.href = '#menu';
  
    line2.appendChild(anchor2);
    
    const line3 = document.createElement('li');
    const anchor3 = document.createElement('a');
    anchor3.addEventListener('click', () => routeChange('contact'));
    anchor3.textContent = 'Contact';
    anchor3.href = '#contact';

    line3.appendChild(anchor3);
    
    tabs.append(line1, line2, line3);
    element.appendChild(tabs);

    return element;
}

export default Navigation;