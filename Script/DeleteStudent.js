const form = document.getElementById('form');
const studentId =  document.getElementById('studentId');
const error = document.getElementById('error');


form.addEventListener('submit' , (e)=>{
    let message = []
    if(studentId.value = null || studentId.value === '')
    {
        message.push("Student Id can't be Empty");
    }
    if (message.length > 0 )
    {
        e.preventDefault();
        error.innerText = message.join(', ');
    }
    else{
        window.alert("Student searched Suessfully");
        
    }
})