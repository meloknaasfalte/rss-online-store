import './index.css';
import Card from './components/card/card';

import { products } from './components/products';

const mainItems = document.querySelector('.main__items') as HTMLElement;
const categoryBlock = document.querySelector('#category') as HTMLElement;
const brandBlock = document.querySelector('#brand') as HTMLElement;

products.forEach((e: Card) => {
  mainItems.innerHTML += `<div class="main__item item"> 
<div class="item__photo"> 
  <img id="${e.title}" src= "${e.thumbnail}" alt="${e.title}-photo" />
  <div class="item__slide-photo">
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.thumbnail}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[0]}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[1]}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[2]}'"></div> 
  </div> 
</div> 
<div class="item__information"> 
  <div class="item__title">${e.title}</div> 
  <div class="item__description"> 
   ${e.description}
  </div> 
  <div class="item__discount"> 
   Discount: ${e.discountPercentage}%
  </div> 
  <div class="item__stock"> 
  Stock: ${e.stock}
 </div> 
  <div class="item__raiting">${e.rating}</div>
</div>
<div class="item__purchase">
  <div class="item__price">${e.price} ₽</div>
  <button class="item__add-button main-button">
    Add to card
  </button>
  <button class="item__details-button main-button">
    Detail vew
  </button
</div>
</div>`;
  const raitings = document.querySelectorAll<HTMLElement>('.item__raiting');
  raitings.forEach((e) => {
    if (+e.innerHTML > 4.5) {
      e.style.backgroundColor = '#51aa27';
    }
    if (+e.innerHTML < 4.5 && +e.innerHTML > 3) {
      e.style.backgroundColor = 'yellow';
    }
    if (+e.innerHTML < 3) {
      e.style.backgroundColor = 'red';
    }
  });
});

const categories: string[] = [];
products.forEach((e) => {
  if (!categories.includes(e.category)) categories.push(e.category);
});
categories.forEach(
  (e) =>
    (categoryBlock.innerHTML += `<div class="filter__link">
<input class="filter__checkbox" type="checkbox" />
<label class="filter__link-name" for="">${e}</label>
<div class="filter__link-count"></div>
</div>`)
);

const brands: string[] = [];
products.forEach((e) => {
  if (!brands.includes(e.brand)) brands.push(e.brand);
});
brands.forEach(
  (e) =>
    (brandBlock.innerHTML += ` <div class="filter__link">
<input type="checkbox" />
<label class="filter__link-name" for="">${e}</label>
<div class="filter__link-count"></div>
</div>`)
);
