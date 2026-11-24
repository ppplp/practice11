const form = document.querySelector('.productForm');
const productName = document.querySelector('.productName');
const productWeight = document.querySelector('.productWeight');
const productDistance = document.querySelector('.productDistance');
const productList = document.querySelector('.productList');
const error = document.querySelector('.error');

form.addEventListener('submit', event => {
    event.preventDefault();

    error.textContent = '';

    const name = productName.value.trim();
    const weight = +productWeight.value;
    const distance = +productDistance.value;

    if (name === '' || !/^[а-яёА-ЯЁa-zA-Z0-9\s-]+$/.test(name)) {
        error.textContent = 'Введите корректное название товара!';
        return;
    }

    if (productWeight.value === '' || isNaN(weight) || weight <= 0) {
        error.textContent = 'Введите корректный вес товара!';
        return;
    }

    if (productDistance.value === '' || isNaN(distance) || distance <= 0) {
        error.textContent = 'Введите корректное расстояние доставки!';
        return;
    }

    const price = weight * distance / 10;

    const row = document.createElement('tr');

    const values = [
        name,
        weight,
        distance,
        `${price.toFixed(2)} руб.`
    ];

    values.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.append(td);
    });

    productList.append(row);

    form.reset();
});
