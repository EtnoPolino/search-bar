/**le site  https://jsonplaceholder.typicode.com/users */

const inputSearch = document.querySelector('input');
const template = document.querySelector("[data-cards]");
const cardContainer = document.querySelector('.cards-container');


let users = [];


inputSearch.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue)
        user.card.classList.toggle('hide', !isVisible);
    })
})

fetch('https://jsonplaceholder.typicode.com/users', {mode:'cors'})
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const card = template.content.cloneNode(true).children[0];
            const headerCard = card.querySelector('.header');
            const bodyCard = card.querySelector('.body'); 
            headerCard.textContent = element.name;
            bodyCard.textContent = element.email;
            cardContainer.append(card);

            users.push({
                name : element.name,
                email : element.email,
                card : card
            })
        });      
    });

