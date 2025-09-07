const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? "text" : "password";
    passwordInput.setAttribute('type', type);

    togglePassword.classList.toggle('fa-eye-slash');
    togglePassword.classList.toggle('fa-eye');

})