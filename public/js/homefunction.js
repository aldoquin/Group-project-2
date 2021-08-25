const sub = async (e) =>{
  e.preventDefault
  const comment = document.getElementById('form-control').value.trim();
 const response = await fetch('/comment',{
    method:'POST',
    body : JSON.stringify({comment}),
    headers : {'Content-type' : 'application/json'},
  })
  console.log(response);

}
document.querySelector("#submitB").addEventListener("click", sub);


