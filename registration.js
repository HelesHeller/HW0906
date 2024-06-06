function checkIfRegistered() {
    if (localStorage.getItem('userEmail')) {
        window.location.href = 'registration.html';
    }
}

function validateRegistrationForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = [];

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessages.push('Некорректный почтовый адрес.');
    }
    if (password.length < 6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessages.push('Пароль должен быть минимум 6 символов, содержать хотя бы одну букву в нижнем регистре, одну букву в верхнем регистре и одну цифру.');
    }
    if (password !== confirmPassword) {
        errorMessages.push('Пароли не совпадают.');
    }

    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerText = errorMessages.join('\n');
        return false;
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    window.location.href = 'registration.html';
    return false;
}
