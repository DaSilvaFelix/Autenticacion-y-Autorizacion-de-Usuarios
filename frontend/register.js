const boton = document.getElementById('btn');
const posteo = async (n,p)=>{
    const post = await fetch('http://localhost:4000/register',{
        method:'POST',
        body:JSON.stringify({
            username:n, password:p
        }),
        headers:{'Content-Type':'application/json'}
    });
    const res = await post.json();
    console.log(res.msg);
    if(post.ok){
         alert(res.msg)
         window.location.href = 'index.html'    
    }else{
       alert(res.msg)
    }

}
const mostarData = ()=>{
    event.preventDefault()
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    posteo(name,password)
}