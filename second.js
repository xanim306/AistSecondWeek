const form = document.getElementById('validation-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailError.textContent = '';
    passwordError.textContent = '';
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Invalid email format';
    }
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
        passwordError.textContent = 'Password is required';
    } else if (passwordValue.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
    }
    if (!emailError.textContent && !passwordError.textContent) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}