const cardText = document.querySelector('.cardText');
const cardColor = document.querySelector('.cardColor');
const card = document.querySelector('.card');

cardText.addEventListener('input', () => {
    card.textContent = cardText.value;
});

cardText.addEventListener('focus', () => {
    cardText.style.borderColor = 'blue';
    cardText.style.backgroundColor = '#eeeeee';
});

cardText.addEventListener('blur', () => {
    cardText.style.borderColor = '';
    cardText.style.backgroundColor = '';
});

cardColor.addEventListener('change', () => {
    card.style.backgroundColor = cardColor.value;
});
