import { moreProducts } from "../Datas/Products.js";


document.querySelector('.products')
  .innerHTML = moreProducts.map(({id, img, cp, bonus, price, discountPrice}) => {
    return `
      <a href="item.html">
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
      </a>
    `
  }).join('');