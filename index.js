
// Add your code here

const submitData=(name,email)=>{
return fetch("http://localhost:3000/users",{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
})
.then(response=>response.json())
.then(object=>
{
  let span=document.createElement("span");
  span.innerHTML="user-id"+object.id;
  document.querySelector("body").appendchild(span);
})
.catch(error=>document.querySelector("body").appendchild=error)
}