const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const login = document.getElementById('button1'); 

form.addEventListener('submit' , (e)=> {
    let message = [];
    if (email.value === '' || email.value == null )
    {
        message.push('Email is required ');
    }
    else if (password.value.length <= 6 )
    {
        message.push('Password is too short');
    }
    if (message.length > 0 )
    {
        e.preventDefault();
        errorElement.innerText = message.join(', ');
    }
})

