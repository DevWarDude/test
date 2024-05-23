import { products } from "../Datas/Products.js";
import { paymentMethod } from "../Datas/Payment-methods.js";

export let cart = JSON.parse(localStorage.getItem('ok')) || [];
export function saveCartToStorage() {
  localStorage.setItem('ok', JSON.stringify(cart))
};

document.querySelector('.products')
  .innerHTML = products.map(({id, img, cp, bonus, price, discountPrice}) => {
    return `
          <div class="product product-${id}" data-id="${id}">
            <div class="cp">
              <span>${cp}</span>
              <small>${bonus}</small>
            </div>
            <img src="${img}" alt="">
            <div class="price">
              <span class="cp-price">${price}</span>
              <span>${(discountPrice)}</span>
            </div>
          </div>
        `
  }).join('');

document.querySelector('.methods')
  .innerHTML = paymentMethod.map( ({img, id, fee})=>{
    return `  
      <div class="method" data-id="${id}">
        <img src="${img}" alt="">
        <h4>${fee}</h4>
      </div>
    `
  }).join('');


// document.querySelectorAll('.product').forEach(elem => {
//   elem.addEventListener('click', ()=>{
//     const id = elem.dataset.id
//     cart = []
//     cart.push({
//       id,
//     })
//     saveCartToStorage();
//   })


//   products.forEach(product => {
//     cart.forEach(elem => {
//       if (elem.id === product.id) {
//         console.log(document.querySelector(`.product-${elem.id}`));
//         console.log('ok');
//       }
//     })
//   })
// })



 
// document.querySelectorAll('.product')
//   .forEach(product => {
//     product.addEventListener('click', () => {
//       const id = product.dataset.id
//       document.querySelector('.pop-order').classList.remove('hide')

//       let productMatch;
//       products.forEach(elem => {
//         if (id === elem.id) {
//           productMatch = elem
//         }
//       })

//       document.querySelector('.pop-order .item')
//         .innerHTML = `
//           <small>${productMatch.bonus}* ${''}</small>
//           <h3>${productMatch.discountPrice}</h3>
//           <div class="payment-powered">
//             <small>Powered by</small>
//             <img src="Images/yellow_icon.svg" alt="">
//           </div>
//         `
//     })
//   })

// document.querySelectorAll('.method')
//     .forEach(method => {
//       method.addEventListener('click', () => {
//         const id = method.dataset.id 
        
//       })
//     });





// document.querySelector('.buy-now')
//   .addEventListener('click', () => {
//     document.querySelector('.scroll-method').scrollIntoView()
//   })


