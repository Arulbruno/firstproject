const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');
btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
}); 
btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
}); 
document.addEventListener('DOMContentLoaded',loadFood);
function loadFood()
{
   loadContent();

}
function loadContent()
{
       let btnRemove=document.querySelectorAll('.cart-remove');
       btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
       });

       let qtyElement=document.querySelectorAll('.cart-quantity');
       qtyElement.forEach((input)=>{
        input.addEventListener('change',changeQty);
       });

       let cartBtns=document.querySelectorAll('.add-cart');
       cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
       });
       
}

function removeItem(){
    if(confirm('Are U Sure to Remove'))
    {
        this.parentElement.remove();
    }
    
}
function changeQty(){
    if(isNaN(this.value)||this.value<1)
    {
        this.value=1;
    }
}
function addCart(){
   let food=this.parentElement;
   let title=food.querySelector('.food-title').innerHTML;
   let prices=food.querySelector('.food-price').innerHTML;
   let imgSrc=food.querySelector('.food-img').src;
   //console.log(title,prices,imgSrc);
}