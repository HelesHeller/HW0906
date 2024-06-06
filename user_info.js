function loadUserInfo() {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'registration.html';
        return;
    }

    document.getElementById('firstName').value = localStorage.getItem('firstName') || '';
    document.getElementById('lastName').value = localStorage.getItem('lastName') || '';
    document.getElementById('birthYear').value = localStorage.getItem('birthYear') || '';
    document.getElementById('gender').value = localStorage.getItem('gender') || 'male';
    document.getElementById('phone').value = localStorage.getItem('phone') || '';
    document.getElementById('skype').value = localStorage.getItem('skype') || '';
}

function saveUserInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthYear = document.getElementById('birthYear').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const skype = document.getElementById('skype').value;
    const errorMessages = [];

    if (!/^[a-zA-Zа-яА-Я]{1,20}$/.test(firstName)) {
        errorMessages.push('Некорректное имя.');
    }
    if (!/^[a-zA-Zа-яА-Я]{1,20}$/.test(lastName)) {
        errorMessages.push('Некорректная фамилия.');
    }
    if (!/^(19[0-9][0-9]|20[0-9][0-9]|202[0-3])$/.test(birthYear)) {
        errorMessages.push('Некорректный год рождения.');
    }
    if (phone && !/^[0-9()\- ]{10,12}$/.test(phone)) {
        errorMessages.push('Некорректный номер телефона.');
    }
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerText = errorMessages.join('\n');
        return false;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('birthYear', birthYear);
    localStorage.setItem('gender', gender);
    localStorage.setItem('phone', phone);
    localStorage.setItem('skype', skype);

    return false;
}

function exit() {
    localStorage.clear();
    window.location.href = 'registration.html';
}
