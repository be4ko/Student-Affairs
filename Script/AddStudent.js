const studentName = document.getElementById('studentName');
const studentID = document.getElementById('studentID');
const studentDOB = document.getElementById('studentDOB');
const studentGender = document.getElementById('studentGender');
const studentLevel = document.getElementById('studentLevel');
const studentActivity = document.getElementById('studentActivity');
const studentDep = document.getElementById('studentDep');
const studentEmail = document.getElementById('studentEmail');
const studentPhone =  document.getElementById('studentPhone');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];

    validateField('studentName', 'Student Name is required', message);
    validateField('studentID', 'Student ID is required', message);
    validateField('studentDOB', 'Student Date of Birth is required', message);
    validateField('studentActivity', 'Student State is required', message);
    validateField('studentLevel', 'Student Level is required', message);
    validateField('studentEmail', 'Student Email is required', message);
    validateField('studentPhone', 'Student Phone Number is required', message);


    if (message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ');
    }
    else {
        window.alert("Student Was added Suessfully");
    }
});

function validateField(fieldName, errorMessage, messageArray) {
    const field = document.getElementById(fieldName);
    if (field.value === '' || field.value === null) {
        messageArray.push(errorMessage);
        console.log(`Wrong ${fieldName}`);
    }
}