const sub = async (e) =>{
  e.preventDefault
  const comment = document.getElementById('form-control').value.trim();



  // const response = await fetch('/api/users/login',{
  //   method:'POST',
  //   body : JSON.stringify({email , password}),
  //   headers : {'Content-type' : 'application/json'},
  // })
  console.log(comment);

}
document.querySelector("#submitB").addEventListener("click", sub);
