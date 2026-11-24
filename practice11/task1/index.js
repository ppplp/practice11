const form = document.querySelector('.surveyForm');
const userName = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail');
const rating = document.querySelector('.rating');
const ratingValue = document.querySelector('.ratingValue');
const comments = document.querySelector('.comments');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const result = document.querySelector('.result');

rating.addEventListener('input', () => {
    ratingValue.textContent = rating.value;
});

form.addEventListener('submit', event => {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';

    const name = userName.value.trim();
    const email = userEmail.value.trim();

    if (name === '') {
        nameError.textContent = 'Введите имя пользователя!';
        return;
    }

    if (email === '') {
        emailError.textContent = 'Введите Email!';
        return;
    }

    if (!userEmail.checkValidity()) {
        emailError.textContent = 'Введите корректный Email!';
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const interests = document.querySelectorAll('input[name="interest"]:checked');

    result.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = 'Результаты опроса';
    result.append(title);

    const nameText = document.createElement('p');
    nameText.textContent = `Имя пользователя: ${name}`;
    result.append(nameText);

    const emailText = document.createElement('p');
    emailText.textContent = `Email: ${email}`;
    result.append(emailText);

    const genderText = document.createElement('p');
    genderText.textContent = `Пол: ${gender ? gender.value : 'Не указан'}`;
    result.append(genderText);

    const ratingText = document.createElement('p');
    ratingText.textContent = `Оценка сервиса: ${rating.value}`;
    result.append(ratingText);

    const interestsText = document.createElement('p');
    interestsText.textContent = 'Интересы:';

    if (interests.length === 0) {
        interestsText.textContent = 'Интересы: не выбраны';
    } else {
        const interestList = [];

        interests.forEach(interest => {
            interestList.push(interest.value);
        });

        interestsText.textContent = `Интересы: ${interestList.join(', ')}`;
    }

    result.append(interestsText);

    const commentsText = document.createElement('p');
    commentsText.textContent = `Дополнительные комментарии: ${comments.value.trim() || 'Нет'}`;
    result.append(commentsText);
});