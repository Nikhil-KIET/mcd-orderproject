let btn=document.getElementById("btn");
let burger=document.getElementById("burger");
let fries=document.getElementById("fries");
let drink=document.getElementById("drink");
let loading=document.getElementById("loading");
loading.style.display='none';
let o_id=document.getElementById("order");

btn.addEventListener('click',()=>{
    loading.style.display='block';
    o_id.textContent="";
    let img=document.getElementById("output");
    img.src="";

    if(burger.checked){
        showBurger();

    }else if(fries.checked){
        showFries();

    }else if(drink.checked){
        showDrink();

    }
})
async function showBurger(){
    loading.style.display='block';
     let myprom=  new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },2000);

        
        
    })
    
    myprom.then(()=>{
        loading.style.display='none';
        let no=gen();
        o_id.textContent="Order id:"+no;
        
        let img=document.getElementById("output");
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxzbItiQjzkSg0nFDUCnbuScveF9cEbrHGA&usqp=CAU";


    })


    
}
async function showFries(){
    loading.style.display='block';
    
    let myprom=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },2000);

        
        
    })
    myprom.then(()=>{
        loading.style.display='none';
        let no=gen();
        o_id.textContent="Order id:"+no;
        let img=document.getElementById("output");
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN6CdHq46TjguRyFyi6CeT7heTKtS33qkKg&usqp=CAU";

    })


    
}
async function showDrink(){
    loading.style.display='block';
    
    let myprom=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },2000);

        
        
    })
    myprom.then(()=>{
        loading.style.display='none';
        let no=gen();
        o_id.textContent="Order id:"+no;
        let img=document.getElementById("output");
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPbv-0wbvVPwET6S_NjLSjFCX4F0tHQWo5A&usqp=CAU";

    })


    
}
function gen(){
    
const randomNumber = Math.floor(Math.random() * 9000) + 1000;
return randomNumber;

}