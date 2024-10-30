export let cart=[{
  productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
}];

export function updateCart(productId){
  let matchingitem;
    cart.forEach((item)=>{
      if(item.id===productId){
        matchingitem=item;
      }
    });

      if(matchingitem){
        matchingitem.quantity+=1;
      }
      else{
        cart.push({
          productId:productId,
          quantity:1
        });
      }
      console.log(cart);
}

export function removefromCart(productId){
  cart.forEach((cartItem,index)=>{
    if(cartItem.productId===productId){
      cart.splice(index,1);
      return;
    }
  });
}