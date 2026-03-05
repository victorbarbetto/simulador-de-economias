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
const modalOverlay = document.querySelector('div.overlay');
const modalCriarEconomia = document.querySelector('div.modal-criar-economia');

cardCriarEconomia.addEventListener("click", () => {
    modalCriarEconomia.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
});

// FECHAR MODAL CRIAR ECONOMIA

const btnFecharEconomia = document.querySelector('button#btnFecharModal');

btnFecharEconomia.addEventListener('click', () => {
    modalCriarEconomia.classList.add('hidden');
    modalOverlay.classList.add('hidden');

    resetarInputs();
});

resetarInputs();

// FUNCAO RESETAR INPUTS MODAL

function resetarInputs() {
    const inputNome = document.querySelector('input#input-nome');
    const inputValor = document.querySelector('input#input-valor');
    const selectPeriodo = document.querySelector('select#select-periodo');

    inputNome.value = '';
    inputValor.value = '';
    selectPeriodo.value = 'diaria';
}