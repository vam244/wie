let login=document.getElementById("login");
let popup=document.getElementById("popup");
let close=document.getElementById("close");
let p=document.getElementById("post");
let button=document.getElementById("exp");
let menue=document.getElementById("men");
let icon=document.getElementById("ico");

login.addEventListener('click',()=>{
    popup.classList.replace('popup','show');
    p.classList.replace('poster','after');
    // menue.classList.replace('menuebar','men-new');
    
});
close.addEventListener('click',()=>{
    popup.classList.replace('show','popup');
    p.classList.replace('after','poster');
    // menue.classList.replace('men-new','menuebar');
    menue.classList.replace('menue-click','menuebar');
});


button.addEventListener('click',()=>{
   let a=window.prompt("please enter your email");
   alert(a);
})
icon.addEventListener('click',()=>{
    
if(menue.classList=="menuebar"){
    menue.classList.replace('menuebar','menue-click');
    login.addEventListener('click',()=>{
        //  menue.classList.replace('menue-click','men-new');
        
    })
}
else{
    menue.classList.replace('menue-click','menuebar');
    login.style.display="inline";
    
}

});
