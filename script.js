const form = document.querySelector('.contact-form');
const nama = document.querySelector('input[name="name"]');
const email = document.querySelector('input[email="email"]');
const pesan = document.querySelector('textarea[message="message"]');

form.addEventListener('submit', () => {
    alert('Thank you for your message!');
        nama.value = '';
        email.value = '';
        pesan.value = '';
});
