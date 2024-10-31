import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductFetch } from "../data/products.js";


loadProductFetch().then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});

/*
 new Promise((resolve)=>{
  loadProductsFetch(()=>{
    resolve();
  }); 
 }).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
 });
*/


 /*
 using call back function like below has some limitation if we have a lot of call back functions the code become more nested, 
 so we use promise like above 'promise' so we can use the same purpose but code will not be nested but flat

 promise.all let us use multiple promises (check out in video 20:54:00)
 */ 
/*
loadProducts(()=>{
  
});
*/