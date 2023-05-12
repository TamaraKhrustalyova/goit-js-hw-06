const formRef = document.querySelector('.login-form');
const {email, password} = formRef.elements;
formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const formData = {
        email: email.value,
        password: password.value,
    }
  
    if(email.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill in all the form fields");
    } else {
        alert("Data sent");
        formRef.reset();
        console.log(formData);
    }
}

