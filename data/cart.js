
export const cart=JSON.parse(localStorage.getItem('cart'))||[{
  productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1,
  deliveryOptionId:'1',
},
{
  productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:2,
  deliveryOptionId:'2',
}
];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export function updateCart(productId){
  let matchingitem;
    cart.forEach((item)=>{
      if(item.productId===productId){
        matchingitem=item;
      }
    });

      if(matchingitem){
        matchingitem.quantity+=1;
      }
      else{
        cart.push({
          productId:productId,
          quantity:1,
          deliveryOptionId : '1'
        });
      }
      saveToStorage();
}

export function removefromCart(productId){
  cart.forEach((cartItem,index)=>{
    if(cartItem.productId===productId){
      cart.splice(index,1);
      saveToStorage();
      return;
    }
  });
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingitem;
    cart.forEach((item)=>{
      if(item.productId===productId){
        matchingitem=item;
      }
    });

    matchingitem.deliveryOptionId=deliveryOptionId;

    saveToStorage();
}