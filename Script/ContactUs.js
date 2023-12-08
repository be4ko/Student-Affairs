const namee = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (namee.value === '' || namee.value === null) {
        window.alert("Name can't be empty");
        e.preventDefault(); 
    }
    if (email.value === '' || email.value === null) {
        window.alert("Email can't be empty");
        e.preventDefault(); 
    }
    if (message.value === '' || message.value === null) {
        window.alert("Message can't be empty");
        e.preventDefault(); 
    }
});