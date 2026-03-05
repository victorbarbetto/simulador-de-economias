// TOGGLE THEME

const btnTheme = document.querySelector('button#toggleTheme');
btnTheme.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.classList.toggle('light-theme');
})

// TOGGLE ACTIVE CARDS

const cardsEconomia = document.querySelectorAll('div.card-economia');

cardsEconomia.forEach((card) => {
    card.addEventListener('click', (e) => {
        e.preventDefault();

        card.classList.toggle('active');
    })
})

// ABRIR MODAL CRIAR ECONOMIA

const cardCriarEconomia = document.querySelector('div.card-criar-economia');
const modalCriarEconomia = document.querySelector('dialog.modal-criar-economia');

cardCriarEconomia.addEventListener('click', (e) => {
    e.preventDefault();

    modalCriarEconomia.showModal();
})