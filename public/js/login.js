const alertcontainer = document.getElementById('alert-container')


const loginFormHandler = async(event) =>{
  event.preventDefault();
  alertcontainer.classList.add('invisible')
  const email = document.getElementById('loginForm-email').value.trim();
  const password = document.getElementById('loginForm-password').value.trim();


  console.log(email,password);
  const response = await fetch('/api/users/login',{
    method:'POST',
    body : JSON.stringify({email , password}),
    headers : {'Content-type' : 'application/json'},
  })
  if(!response.ok){
    return alertcontainer.classList.remove('invisible')
  }
  return document.location.replace('/')
}


document.querySelector('#login-form').addEventListener('submit',loginFormHandler)

