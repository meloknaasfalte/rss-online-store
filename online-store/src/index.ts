import './index.css';
import Card from './components/card/card';

import { products } from './components/products';

const mainItems = document.querySelector('.main__items') as HTMLElement;
const categoryBlock = document.querySelector('#category') as HTMLElement;
const brandBlock = document.querySelector('#brand') as HTMLElement;
const viewGrid = document.querySelector('#grid') as HTMLButtonElement;
const viewList = document.querySelector('#list') as HTMLButtonElement;
const foundCount = document.querySelector('#found') as HTMLInputElement;
const search = document.querySelector(
  '.hedaer__search-field'
) as HTMLInputElement;
const priceFilterBlock = document.querySelector(
  '#price-filter'
) as HTMLInputElement;
const stockFilterBlock = document.querySelector(
  '#stock-filter'
) as HTMLInputElement;
const productsFilteredFinal: Card[] = [];

products.forEach((e: Card) => {
  mainItems.innerHTML += `<div class="main__item item"> 
<div class="item__photo"> 
  <img id="${e.title}" src= "${e.thumbnail}" alt="${e.title}-photo" />
  <div class="item__slide-photo">
    <div class="item__slide-photo-block active" onclick ="document.getElementById('${e.title}').src = '${e.thumbnail}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[0]}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[1]}'"></div> 
    <div class="item__slide-photo-block" onclick ="document.getElementById('${e.title}').src = '${e.images[2]}'"></div> 
  </div> 
</div> 
<div id="i.${e.title}" class="item__information"> 
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
    Add to cart
  </button>
  <button class="item__details-button main-button">
    Detail view
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
const allcategories: string[] = [];
products.forEach((e) => {
  allcategories.push(e.category);
  if (!categories.includes(e.category)) categories.push(e.category);
});
categories.forEach((e) => {
  let q: number = 0;
  for (let i = 0; i < allcategories.length; i++) {
    if (e === allcategories[i]) q = q + 1;
  }
  categoryBlock.innerHTML += `<div class="filter__link">
<input class="filter__checkbox checkbox-category" type="checkbox" />
<label class="filter__link-name" for="">${e}</label>
<div class="filter__link-count">
<div class="filter__link-count-display">${q}</div>
<div class="filter__link-count-all">/${q}</div>
</div>`;
});

const brands: string[] = [];
const allBrands: string[] = [];
products.forEach((e) => {
  allBrands.push(e.brand);
  if (!brands.includes(e.brand)) brands.push(e.brand);
});
brands.forEach((e) => {
  let q: number = 0;
  for (let i = 0; i < allBrands.length; i++) {
    if (e === allBrands[i]) q = q + 1;
  }
  brandBlock.innerHTML += ` <div class="filter__link">
<input class="filter__checkbox checkbox-brand" type="checkbox" />
<label class="filter__link-name" for="">${e}</label>
<div class="filter__link-count">
<div class="filter__link-count-display">${q}</div>
<div class="filter__link-count-all">/${q}</div>
</div>`;
});

priceFilterBlock.innerHTML = `<div class="filter__values values">
<div class="values__min">${
  products.sort((a, b) => a.price - b.price)[0].price
} ₽</div>
<div class="values__max">${
  products.sort((a, b) => a.price - b.price)[products.length - 1].price
} ₽</div>
</div>
<div class="filter__slider">
<div class="filter__progress"></div>
</div>
<div id="price-filter" class="filter__range-body">
<input
  class="filter__slider-min"
  type="range"
  min="${products.sort((a, b) => a.price - b.price)[0].price}"
  max="${products.sort((a, b) => a.price - b.price)[products.length - 1].price}"
  value="${products.sort((a, b) => a.price - b.price)[0].price}"
  step="1"
/>
<input
  class="filter__slider-max"
  type="range"
  min="${products.sort((a, b) => a.price - b.price)[0].price}"
  max="${products.sort((a, b) => a.price - b.price)[products.length - 1].price}"
  value="${
    products.sort((a, b) => a.price - b.price)[products.length - 1].price
  }"
  step="1"
/>
</div>`;

stockFilterBlock.innerHTML = `    <div class="filter__values values">
<div class="values__min">${
  products.sort((a, b) => a.stock - b.stock)[0].stock
}</div>
<div class="values__max">${
  products.sort((a, b) => a.stock - b.stock)[products.length - 1].stock
}</div>
</div>
<div class="filter__slider">
<div class="filter__progress"></div>
</div>
<div id="stock-filter" class="filter__range-body">
<input
  class="filter__slider-min"
  type="range"
  min="${products.sort((a, b) => a.stock - b.stock)[0].stock}"
  max="${products.sort((a, b) => a.stock - b.stock)[products.length - 1].stock}"
  value="${products.sort((a, b) => a.stock - b.stock)[0].stock}"
  step="1"
/>
<input
  class="filter__slider-max"
  type="range"
  min="${products.sort((a, b) => a.stock - b.stock)[0].stock}"
  max="${products.sort((a, b) => a.stock - b.stock)[products.length - 1].stock}"
  value="${
    products.sort((a, b) => a.stock - b.stock)[products.length - 1].stock
  }"
  step="1"
/>
</div>`;

const linkNames = document.querySelectorAll(
  '.filter__link-name'
) as NodeListOf<HTMLInputElement>;
const linksCountDisplay = Array.from(
  document.querySelectorAll('.filter__link-count-display')
);
const addButtons = Array.from(
  document.getElementsByClassName('item__add-button')
);
const itemsInformation = Array.from(
  document.getElementsByClassName('item__information')
);
foundCount.innerHTML = itemsInformation.length.toString();
const cartItems: string[] = [];
const checkFilters: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '.filter__checkbox'
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

const productsFilteredBySearch: Card[] = [];
search.addEventListener('input', () => {
  productsFilteredBySearch.splice(0, productsFilteredBySearch.length);
  linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
  products.forEach((e: Card) => {
    if (
      e.title
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.description
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.price
        .toString()
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.discountPercentage
        .toString()
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.rating
        .toString()
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.stock
        .toString()
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.brand
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, '')) ||
      e.category
        .toLocaleLowerCase()
        .replace(/ /g, '')
        .includes(search.value.toLocaleLowerCase().replace(/ /g, ''))
    ) {
      productsFilteredBySearch.push(e);
    }
  });
  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();

  if (
    productsFilteredByBrand.length == 0 &&
    productsFilteredByPrice.length == 0 &&
    productsFilteredByCategory.length == 0 &&
    productsFilteredByStock.length == 0
  ) {
    productsFilteredFinal.splice(0, productsFilteredFinal.length);
    productsFilteredBySearch.forEach((e) => productsFilteredFinal.push(e));
  }

  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();

  if (
    productsFilteredByBrand.length !== 0 ||
    productsFilteredByPrice.length !== 0 ||
    productsFilteredByCategory.length !== 0 ||
    productsFilteredByStock.length !== 0
  ) {
    const allProductsFiltered = [
      productsFilteredByBrand,
      productsFilteredByCategory,
      productsFilteredByPrice,
      productsFilteredByStock,
    ];

    const minLengthFilter: Card[] = [];
    allProductsFiltered
      .filter((e) => e.length > 0)
      .sort((a, b) => a.length - b.length)[0]
      .forEach((e) => minLengthFilter.push(e));

    for (let i = 0; i < minLengthFilter.length; i++) {
      if (
        productsFilteredBySearch.filter((el) =>
          el.title.includes(minLengthFilter[i].title)
        ).length == 0
      ) {
        minLengthFilter.splice(i, 1);
        i--;
      }
    }
    productsFilteredFinal.splice(0, productsFilteredFinal.length);

    minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
  }
  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();

  items.forEach((e) => e.classList.add('hidden'));
  productsFilteredFinal.forEach((e: Card) => {
    for (let i = 0; i < itemsInformation.length; i++) {
      if (e.title == itemsInformation[i].id.slice(2)) {
        const item = itemsInformation[i].closest(
          '.main__item'
        ) as HTMLInputElement;
        item.classList.remove('hidden');
      }
    }

    for (let i = 0; i < linksCountDisplay.length; i++) {
      if (e.category === linkNames[i].innerHTML) {
        let q: number = parseFloat(linksCountDisplay[i].innerHTML);
        q = q + 1;
        linksCountDisplay[i].innerHTML = q.toString();
      }
      if (e.brand === linkNames[i].innerHTML) {
        let q: number = parseFloat(linksCountDisplay[i].innerHTML);
        q = q + 1;
        linksCountDisplay[i].innerHTML = q.toString();
      }
    }
  });

  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();

  rangeInput[0].value = productsFilteredFinal
    .sort((a, b) => a.price - b.price)[0]
    .price.toString();
  rangeInput[1].value = productsFilteredFinal
    .sort((a, b) => a.price - b.price)
    [productsFilteredFinal.length - 1].price.toString();
  const min = priceFilterBlock.querySelector(
    '.values__min'
  ) as HTMLInputElement;
  min.innerHTML = `${rangeInput[0].value} ₽`;
  const max = priceFilterBlock.querySelector(
    '.values__max'
  ) as HTMLInputElement;
  max.innerHTML = `${rangeInput[1].value} ₽`;

  rangeInputStock[0].value = productsFilteredFinal
    .sort((a, b) => a.stock - b.stock)[0]
    .stock.toString();

  rangeInputStock[1].value = productsFilteredFinal
    .sort((a, b) => a.stock - b.stock)
    [productsFilteredFinal.length - 1].stock.toString();

  const minStock = stockFilterBlock.querySelector(
    '.values__min'
  ) as HTMLInputElement;
  minStock.innerHTML = `${rangeInputStock[0].value}`;
  const maxStock = stockFilterBlock.querySelector(
    '.values__max'
  ) as HTMLInputElement;
  maxStock.innerHTML = `${rangeInputStock[1].value}`;

  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();
});

/////////////////////////////////////////////////////////////////////////

const checkboxesCategory: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '.checkbox-category'
);
const productsFilteredByCategory: Card[] = [];
checkboxesCategory.forEach((e) =>
  e.addEventListener('change', () => {
    const nameFilter = e.nextElementSibling as HTMLInputElement;
    if (e.checked) {
      linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
      products.forEach((el: Card) => {
        if (el.category == nameFilter.innerHTML)
          productsFilteredByCategory.push(el);
      });
      if (
        /*
        productsFilteredByBrand.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        
        productsFilteredByStock.length == 0 &&*/
        productsFilteredBySearch.length == 0 &&
        productsFilteredFinal.length == 0 &&
        search.value.length > 0
      ) {
        productsFilteredByCategory.splice(0, productsFilteredByCategory.length);

        return;
      }
      if (
        productsFilteredByBrand.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredFinal.length == 0
      ) {
        productsFilteredByCategory.forEach((e) =>
          productsFilteredFinal.push(e)
        );
      }
      if (
        productsFilteredByBrand.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredFinal.length !== 0
      ) {
        for (let i = 0; i < productsFilteredByCategory.length; i++) {
          if (
            productsFilteredFinal.filter((el) =>
              el.title.includes(productsFilteredByCategory[i].title)
            ).length == 0
          ) {
            productsFilteredFinal.push(productsFilteredByCategory[i]);
          }
        }
      }

      if (
        productsFilteredByBrand.length !== 0 ||
        productsFilteredByPrice.length !== 0 ||
        productsFilteredBySearch.length !== 0 ||
        productsFilteredByStock.length !== 0
      ) {
        const allProductsFiltered = [
          productsFilteredByBrand,
          productsFilteredBySearch,
          productsFilteredByPrice,
          productsFilteredByStock,
        ];

        const minLengthFilter: Card[] = [];
        allProductsFiltered
          .filter((e) => e.length > 0)
          .sort((a, b) => a.length - b.length)[0]
          .forEach((e) => minLengthFilter.push(e));

        for (let i = 0; i < minLengthFilter.length; i++) {
          if (
            productsFilteredByCategory.filter((el) =>
              el.title.includes(minLengthFilter[i].title)
            ).length == 0
          ) {
            minLengthFilter.splice(i, 1);
            i--;
          }
        }
        productsFilteredFinal.splice(0, productsFilteredFinal.length);

        minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
      }

      items.forEach((e) => e.classList.add('hidden'));
      productsFilteredFinal.forEach((e: Card) => {
        for (let i = 0; i < itemsInformation.length; i++) {
          if (e.title == itemsInformation[i].id.slice(2)) {
            const item = itemsInformation[i].closest(
              '.main__item'
            ) as HTMLInputElement;
            item.classList.remove('hidden');
          }
        }

        for (let i = 0; i < linksCountDisplay.length; i++) {
          if (e.category === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
          if (e.brand === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
        }
      });

      rangeInput[0].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)[0]
        .price.toString();
      rangeInput[1].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)
        [productsFilteredFinal.length - 1].price.toString();
      const min = priceFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      min.innerHTML = `${rangeInput[0].value} ₽`;
      const max = priceFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      max.innerHTML = `${rangeInput[1].value} ₽`;

      rangeInputStock[0].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)[0]
        .stock.toString();

      rangeInputStock[1].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)
        [productsFilteredFinal.length - 1].stock.toString();

      const minStock = stockFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      minStock.innerHTML = `${rangeInputStock[0].value}`;
      const maxStock = stockFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      maxStock.innerHTML = `${rangeInputStock[1].value}`;

      const itemsHidden = Array.from(document.querySelectorAll('.hidden'));
      foundCount.innerHTML = items
        .filter((e) => !e.classList.contains('hidden'))
        .length.toString();
    }
    if (!e.checked) {
      linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
      if (
        productsFilteredByBrand.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredFinal.length == 0 &&
        search.value.length > 0
      ) {
        productsFilteredByCategory.splice(0, productsFilteredByCategory.length);
        return;
      }

      for (let i = 0; i < productsFilteredByCategory.length; i++) {
        if (productsFilteredByCategory[i].category == nameFilter.innerHTML) {
          productsFilteredByCategory.splice(i, 1);
          --i;
        }
      }

      if (
        productsFilteredByBrand.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0
      ) {
        for (let i = 0; i < productsFilteredFinal.length; i++) {
          if (
            productsFilteredByCategory.filter((el) =>
              el.title.includes(productsFilteredFinal[i].title)
            ).length == 0
          ) {
            productsFilteredFinal.splice(i, 1);
            i--;
          }
        }
      }

      if (
        productsFilteredByBrand.length !== 0 ||
        productsFilteredByPrice.length !== 0 ||
        productsFilteredBySearch.length !== 0 ||
        productsFilteredByStock.length !== 0
      ) {
        const allProductsFiltered = [
          productsFilteredByBrand,
          productsFilteredBySearch,
          productsFilteredByPrice,
          productsFilteredByStock,
        ];

        const minLengthFilter: Card[] = [];
        allProductsFiltered
          .filter((e) => e.length > 0)
          .sort((a, b) => a.length - b.length)[0]
          .forEach((e) => minLengthFilter.push(e));

        if (productsFilteredByCategory.length !== 0) {
          for (let i = 0; i < minLengthFilter.length; i++) {
            if (
              productsFilteredByCategory.filter((el) =>
                el.title.includes(minLengthFilter[i].title)
              ).length == 0
            ) {
              minLengthFilter.splice(i, 1);
              i--;
            }
          }
        }

        productsFilteredFinal.splice(0, productsFilteredFinal.length);

        minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
      }

      items.forEach((e) => e.classList.add('hidden'));
      productsFilteredFinal.forEach((e: Card) => {
        for (let i = 0; i < itemsInformation.length; i++) {
          if (e.title == itemsInformation[i].id.slice(2)) {
            const item = itemsInformation[i].closest(
              '.main__item'
            ) as HTMLInputElement;
            item.classList.remove('hidden');
          }
        }

        for (let i = 0; i < linksCountDisplay.length; i++) {
          if (e.category === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
          if (e.brand === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
        }
      });

      if (
        productsFilteredFinal.length == 0 &&
        productsFilteredByBrand.length == 0 &&
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0
      ) {
        rangeInput[0].value = products
          .sort((a, b) => a.price - b.price)[0]
          .price.toString();
        rangeInput[1].value = products
          .sort((a, b) => a.price - b.price)
          [products.length - 1].price.toString();
        const min = priceFilterBlock.querySelector(
          '.values__min'
        ) as HTMLInputElement;
        min.innerHTML = `${rangeInput[0].value} ₽`;
        const max = priceFilterBlock.querySelector(
          '.values__max'
        ) as HTMLInputElement;
        max.innerHTML = `${rangeInput[1].value} ₽`;

        rangeInputStock[0].value = products
          .sort((a, b) => a.stock - b.stock)[0]
          .stock.toString();

        rangeInputStock[1].value = products
          .sort((a, b) => a.stock - b.stock)
          [products.length - 1].stock.toString();

        const minStock = stockFilterBlock.querySelector(
          '.values__min'
        ) as HTMLInputElement;
        minStock.innerHTML = `${rangeInputStock[0].value}`;
        const maxStock = stockFilterBlock.querySelector(
          '.values__max'
        ) as HTMLInputElement;
        maxStock.innerHTML = `${rangeInputStock[1].value}`;

        items.forEach((e) => e.classList.remove('hidden'));
        foundCount.innerHTML = items
          .filter((e) => !e.classList.contains('hidden'))
          .length.toString();
        linksCountDisplay.forEach((e) => {
          const q = e.nextElementSibling as HTMLInputElement;
          e.innerHTML = q.innerHTML.slice(-1);
        });
      }

      rangeInput[0].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)[0]
        .price.toString();
      rangeInput[1].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)
        [productsFilteredFinal.length - 1].price.toString();
      const min = priceFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      min.innerHTML = `${rangeInput[0].value} ₽`;
      const max = priceFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      max.innerHTML = `${rangeInput[1].value} ₽`;

      rangeInputStock[0].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)[0]
        .stock.toString();

      rangeInputStock[1].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)
        [productsFilteredFinal.length - 1].stock.toString();

      const minStock = stockFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      minStock.innerHTML = `${rangeInputStock[0].value}`;
      const maxStock = stockFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      maxStock.innerHTML = `${rangeInputStock[1].value}`;

      foundCount.innerHTML = items
        .filter((e) => !e.classList.contains('hidden'))
        .length.toString();
    }
  })
);

///////////////////////////////////////////////////////////////////////

const checkboxesBrand: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '.checkbox-brand'
);
const productsFilteredByBrand: Card[] = [];
checkboxesBrand.forEach((e) =>
  e.addEventListener('change', () => {
    const nameFilter = e.nextElementSibling as HTMLInputElement;
    if (e.checked) {
      linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
      products.forEach((el: Card) => {
        if (el.brand == nameFilter.innerHTML) productsFilteredByBrand.push(el);
      });
      if (
        /* productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredByStock.length == 0 &&*/
        productsFilteredFinal.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        search.value.length > 0
      ) {
        productsFilteredByBrand.splice(0, productsFilteredByBrand.length);

        return;
      }
      if (
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredFinal.length == 0
      ) {
        productsFilteredByBrand.forEach((e) => productsFilteredFinal.push(e));
      }
      if (
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredFinal.length !== 0
      ) {
        for (let i = 0; i < productsFilteredByBrand.length; i++) {
          if (
            productsFilteredFinal.filter((el) =>
              el.title.includes(productsFilteredByBrand[i].title)
            ).length == 0
          ) {
            productsFilteredFinal.push(productsFilteredByBrand[i]);
          }
        }
      }

      if (
        productsFilteredByCategory.length !== 0 ||
        productsFilteredByPrice.length !== 0 ||
        productsFilteredBySearch.length !== 0 ||
        productsFilteredByStock.length !== 0
      ) {
        const allProductsFiltered = [
          productsFilteredByCategory,
          productsFilteredBySearch,
          productsFilteredByPrice,
          productsFilteredByStock,
        ];

        const minLengthFilter: Card[] = [];
        allProductsFiltered
          .filter((e) => e.length > 0)
          .sort((a, b) => a.length - b.length)[0]
          .forEach((e) => minLengthFilter.push(e));

        for (let i = 0; i < minLengthFilter.length; i++) {
          if (
            productsFilteredByBrand.filter((el) =>
              el.title.includes(minLengthFilter[i].title)
            ).length == 0
          ) {
            minLengthFilter.splice(i, 1);
            i--;
          }
        }
        productsFilteredFinal.splice(0, productsFilteredFinal.length);

        minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
      }
      items.forEach((e) => e.classList.add('hidden'));
      productsFilteredFinal.forEach((e: Card) => {
        for (let i = 0; i < itemsInformation.length; i++) {
          if (e.title == itemsInformation[i].id.slice(2)) {
            const item = itemsInformation[i].closest(
              '.main__item'
            ) as HTMLInputElement;
            item.classList.remove('hidden');
          }
        }

        for (let i = 0; i < linksCountDisplay.length; i++) {
          if (e.category === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
          if (e.brand === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
        }
      });

      rangeInput[0].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)[0]
        .price.toString();
      rangeInput[1].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)
        [productsFilteredFinal.length - 1].price.toString();
      const min = priceFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      min.innerHTML = `${rangeInput[0].value} ₽`;
      const max = priceFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      max.innerHTML = `${rangeInput[1].value} ₽`;

      rangeInputStock[0].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)[0]
        .stock.toString();

      rangeInputStock[1].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)
        [productsFilteredFinal.length - 1].stock.toString();

      const minStock = stockFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      minStock.innerHTML = `${rangeInputStock[0].value}`;
      const maxStock = stockFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      maxStock.innerHTML = `${rangeInputStock[1].value}`;
      foundCount.innerHTML = items
        .filter((e) => !e.classList.contains('hidden'))
        .length.toString();
    }
    if (!e.checked) {
      linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
      if (
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredByStock.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredFinal.length == 0 &&
        search.value.length > 0
      ) {
        productsFilteredByBrand.splice(0, productsFilteredByBrand.length);
        return;
      }

      for (let i = 0; i < productsFilteredByBrand.length; i++) {
        if (productsFilteredByBrand[i].brand == nameFilter.innerHTML) {
          productsFilteredByBrand.splice(i, 1);
          --i;
        }
      }

      if (
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0
      ) {
        for (let i = 0; i < productsFilteredFinal.length; i++) {
          if (
            productsFilteredByBrand.filter((el) =>
              el.title.includes(productsFilteredFinal[i].title)
            ).length == 0
          ) {
            productsFilteredFinal.splice(i, 1);
            i--;
          }
        }
      }

      if (
        productsFilteredByCategory.length !== 0 ||
        productsFilteredByPrice.length !== 0 ||
        productsFilteredBySearch.length !== 0 ||
        productsFilteredByStock.length !== 0
      ) {
        const allProductsFiltered = [
          productsFilteredByCategory,
          productsFilteredBySearch,
          productsFilteredByPrice,
          productsFilteredByStock,
        ];

        const minLengthFilter: Card[] = [];
        allProductsFiltered
          .filter((e) => e.length > 0)
          .sort((a, b) => a.length - b.length)[0]
          .forEach((e) => minLengthFilter.push(e));

        if (productsFilteredByBrand.length !== 0) {
          for (let i = 0; i < minLengthFilter.length; i++) {
            if (
              productsFilteredByBrand.filter((el) =>
                el.title.includes(minLengthFilter[i].title)
              ).length == 0
            ) {
              minLengthFilter.splice(i, 1);
              i--;
            }
          }
        }

        productsFilteredFinal.splice(0, productsFilteredFinal.length);

        minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
      }

      items.forEach((e) => e.classList.add('hidden'));
      productsFilteredFinal.forEach((e: Card) => {
        for (let i = 0; i < itemsInformation.length; i++) {
          if (e.title == itemsInformation[i].id.slice(2)) {
            const item = itemsInformation[i].closest(
              '.main__item'
            ) as HTMLInputElement;
            item.classList.remove('hidden');
          }
        }

        for (let i = 0; i < linksCountDisplay.length; i++) {
          if (e.category === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
          if (e.brand === linkNames[i].innerHTML) {
            let q: number = parseFloat(linksCountDisplay[i].innerHTML);
            q = q + 1;
            linksCountDisplay[i].innerHTML = q.toString();
          }
        }
      });
      if (
        productsFilteredFinal.length == 0 &&
        productsFilteredByBrand.length == 0 &&
        productsFilteredByCategory.length == 0 &&
        productsFilteredByPrice.length == 0 &&
        productsFilteredBySearch.length == 0 &&
        productsFilteredByStock.length == 0
      ) {
        rangeInput[0].value = products
          .sort((a, b) => a.price - b.price)[0]
          .price.toString();
        rangeInput[1].value = products
          .sort((a, b) => a.price - b.price)
          [products.length - 1].price.toString();
        const min = priceFilterBlock.querySelector(
          '.values__min'
        ) as HTMLInputElement;
        min.innerHTML = `${rangeInput[0].value} ₽`;
        const max = priceFilterBlock.querySelector(
          '.values__max'
        ) as HTMLInputElement;
        max.innerHTML = `${rangeInput[1].value} ₽`;

        rangeInputStock[0].value = products
          .sort((a, b) => a.stock - b.stock)[0]
          .stock.toString();

        rangeInputStock[1].value = products
          .sort((a, b) => a.stock - b.stock)
          [products.length - 1].stock.toString();

        const minStock = stockFilterBlock.querySelector(
          '.values__min'
        ) as HTMLInputElement;
        minStock.innerHTML = `${rangeInputStock[0].value}`;
        const maxStock = stockFilterBlock.querySelector(
          '.values__max'
        ) as HTMLInputElement;
        maxStock.innerHTML = `${rangeInputStock[1].value}`;

        items.forEach((e) => e.classList.remove('hidden'));
        foundCount.innerHTML = items
          .filter((e) => !e.classList.contains('hidden'))
          .length.toString();
        linksCountDisplay.forEach((e) => {
          const q = e.nextElementSibling as HTMLInputElement;
          e.innerHTML = q.innerHTML.slice(-1);
        });
      }

      rangeInput[0].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)[0]
        .price.toString();
      rangeInput[1].value = productsFilteredFinal
        .sort((a, b) => a.price - b.price)
        [productsFilteredFinal.length - 1].price.toString();
      const min = priceFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      min.innerHTML = `${rangeInput[0].value} ₽`;
      const max = priceFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      max.innerHTML = `${rangeInput[1].value} ₽`;

      rangeInputStock[0].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)[0]
        .stock.toString();

      rangeInputStock[1].value = productsFilteredFinal
        .sort((a, b) => a.stock - b.stock)
        [productsFilteredFinal.length - 1].stock.toString();

      const minStock = stockFilterBlock.querySelector(
        '.values__min'
      ) as HTMLInputElement;
      minStock.innerHTML = `${rangeInputStock[0].value}`;
      const maxStock = stockFilterBlock.querySelector(
        '.values__max'
      ) as HTMLInputElement;
      maxStock.innerHTML = `${rangeInputStock[1].value}`;

      foundCount.innerHTML = items
        .filter((e) => !e.classList.contains('hidden'))
        .length.toString();
    }
  })
);

///////////////////////////////////////////////////////////////////////

const productsFilteredByPrice: Card[] = [];
const rangeInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '#price-filter input'
);

rangeInput.forEach((e) =>
  e.addEventListener('input', () => {
    productsFilteredByPrice.splice(0, productsFilteredByPrice.length);
    linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
    let maxVal: string;
    let minVal: string;
    if (parseInt(rangeInput[0].value) > parseInt(rangeInput[1].value)) {
      maxVal = rangeInput[0].value;
      minVal = rangeInput[1].value;
    } else {
      maxVal = rangeInput[1].value;
      minVal = rangeInput[0].value;
    }
    const min = priceFilterBlock.querySelector(
      '.values__min'
    ) as HTMLInputElement;
    min.innerHTML = `${minVal} ₽`;
    const max = priceFilterBlock.querySelector(
      '.values__max'
    ) as HTMLInputElement;
    max.innerHTML = `${maxVal} ₽`;
    products.forEach((e: Card) => {
      if (e.price >= +minVal && e.price <= +maxVal) {
        productsFilteredByPrice.push(e);
      }
    });

    if (
      productsFilteredByBrand.length == 0 &&
      productsFilteredBySearch.length == 0 &&
      productsFilteredByCategory.length == 0 &&
      productsFilteredByStock.length == 0
    ) {
      productsFilteredFinal.splice(0, productsFilteredFinal.length);
      productsFilteredByPrice.forEach((e) => productsFilteredFinal.push(e));
    }
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
    if (
      productsFilteredByBrand.length !== 0 ||
      productsFilteredBySearch.length !== 0 ||
      productsFilteredByCategory.length !== 0 ||
      productsFilteredByStock.length !== 0
    ) {
      const allProductsFiltered = [
        productsFilteredByBrand,
        productsFilteredByCategory,
        productsFilteredBySearch,
        productsFilteredByStock,
      ];

      const minLengthFilter: Card[] = [];
      allProductsFiltered
        .filter((e) => e.length > 0)
        .sort((a, b) => a.length - b.length)[0]
        .forEach((e) => minLengthFilter.push(e));

      for (let i = 0; i < minLengthFilter.length; i++) {
        if (
          productsFilteredByPrice.filter((el) =>
            el.title.includes(minLengthFilter[i].title)
          ).length == 0
        ) {
          minLengthFilter.splice(i, 1);
          i--;
        }
      }
      productsFilteredFinal.splice(0, productsFilteredFinal.length);

      minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
    }
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
    items.forEach((e) => e.classList.add('hidden'));
    productsFilteredFinal.forEach((e: Card) => {
      for (let i = 0; i < itemsInformation.length; i++) {
        if (e.title == itemsInformation[i].id.slice(2)) {
          const item = itemsInformation[i].closest(
            '.main__item'
          ) as HTMLInputElement;
          item.classList.remove('hidden');
        }
      }

      for (let i = 0; i < linksCountDisplay.length; i++) {
        if (e.category === linkNames[i].innerHTML) {
          let q: number = parseFloat(linksCountDisplay[i].innerHTML);
          q = q + 1;
          linksCountDisplay[i].innerHTML = q.toString();
        }
        if (e.brand === linkNames[i].innerHTML) {
          let q: number = parseFloat(linksCountDisplay[i].innerHTML);
          q = q + 1;
          linksCountDisplay[i].innerHTML = q.toString();
        }
      }
    });
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
    rangeInputStock[0].value = productsFilteredFinal
      .sort((a, b) => a.stock - b.stock)[0]
      .stock.toString();

    rangeInputStock[1].value = productsFilteredFinal
      .sort((a, b) => a.stock - b.stock)
      [productsFilteredFinal.length - 1].stock.toString();

    const minStock = stockFilterBlock.querySelector(
      '.values__min'
    ) as HTMLInputElement;
    minStock.innerHTML = `${rangeInputStock[0].value}`;
    const maxStock = stockFilterBlock.querySelector(
      '.values__max'
    ) as HTMLInputElement;
    maxStock.innerHTML = `${rangeInputStock[1].value}`;

    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
  })
);

//////////////////////////////////////////////////////////////////////

const productsFilteredByStock: Card[] = [];
const rangeInputStock: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  '#stock-filter input'
);

rangeInputStock.forEach((e) =>
  e.addEventListener('input', () => {
    productsFilteredByStock.splice(0, productsFilteredByStock.length);
    linksCountDisplay.forEach((e) => (e.innerHTML = '0'));
    let maxVal: string;
    let minVal: string;
    if (
      parseInt(rangeInputStock[0].value) > parseInt(rangeInputStock[1].value)
    ) {
      maxVal = rangeInputStock[0].value;
      minVal = rangeInputStock[1].value;
    } else {
      maxVal = rangeInputStock[1].value;
      minVal = rangeInputStock[0].value;
    }
    const min = stockFilterBlock.querySelector(
      '.values__min'
    ) as HTMLInputElement;
    min.innerHTML = `${minVal}`;
    const max = stockFilterBlock.querySelector(
      '.values__max'
    ) as HTMLInputElement;
    max.innerHTML = `${maxVal}`;
    products.forEach((e: Card) => {
      if (e.stock >= +minVal && e.stock <= +maxVal) {
        productsFilteredByStock.push(e);
      }
    });

    if (
      productsFilteredByBrand.length == 0 &&
      productsFilteredBySearch.length == 0 &&
      productsFilteredByCategory.length == 0 &&
      productsFilteredByPrice.length == 0
    ) {
      productsFilteredFinal.splice(0, productsFilteredFinal.length);
      productsFilteredByStock.forEach((e) => productsFilteredFinal.push(e));
    }
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
    if (
      productsFilteredByBrand.length !== 0 ||
      productsFilteredBySearch.length !== 0 ||
      productsFilteredByCategory.length !== 0 ||
      productsFilteredByPrice.length !== 0
    ) {
      const allProductsFiltered = [
        productsFilteredByBrand,
        productsFilteredByCategory,
        productsFilteredBySearch,
        productsFilteredByPrice,
      ];

      const minLengthFilter: Card[] = [];
      allProductsFiltered
        .filter((e) => e.length > 0)
        .sort((a, b) => a.length - b.length)[0]
        .forEach((e) => minLengthFilter.push(e));

      for (let i = 0; i < minLengthFilter.length; i++) {
        if (
          productsFilteredByStock.filter((el) =>
            el.title.includes(minLengthFilter[i].title)
          ).length == 0
        ) {
          minLengthFilter.splice(i, 1);
          i--;
        }
      }
      productsFilteredFinal.splice(0, productsFilteredFinal.length);

      minLengthFilter.forEach((e) => productsFilteredFinal.push(e));
    }
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
    items.forEach((e) => e.classList.add('hidden'));
    productsFilteredFinal.forEach((e: Card) => {
      for (let i = 0; i < itemsInformation.length; i++) {
        if (e.title == itemsInformation[i].id.slice(2)) {
          const item = itemsInformation[i].closest(
            '.main__item'
          ) as HTMLInputElement;
          item.classList.remove('hidden');
        }
      }

      for (let i = 0; i < linksCountDisplay.length; i++) {
        if (e.category === linkNames[i].innerHTML) {
          let q: number = parseFloat(linksCountDisplay[i].innerHTML);
          q = q + 1;
          linksCountDisplay[i].innerHTML = q.toString();
        }
        if (e.brand === linkNames[i].innerHTML) {
          let q: number = parseFloat(linksCountDisplay[i].innerHTML);
          q = q + 1;
          linksCountDisplay[i].innerHTML = q.toString();
        }
      }
    });
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();

    rangeInput[0].value = productsFilteredFinal
      .sort((a, b) => a.price - b.price)[0]
      .price.toString();

    rangeInput[1].value = productsFilteredFinal
      .sort((a, b) => a.price - b.price)
      [productsFilteredFinal.length - 1].price.toString();

    const minPrice = priceFilterBlock.querySelector(
      '.values__min'
    ) as HTMLInputElement;
    minPrice.innerHTML = `${rangeInput[0].value} ₽`;
    const maxPrice = priceFilterBlock.querySelector(
      '.values__max'
    ) as HTMLInputElement;
    maxPrice.innerHTML = `${rangeInput[1].value} ₽`;
    foundCount.innerHTML = items
      .filter((e) => !e.classList.contains('hidden'))
      .length.toString();
  })
);

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////

const items = Array.from(document.getElementsByClassName('main__item'));
const select = document.getElementById('select') as HTMLSelectElement;
select.addEventListener('change', () => {
  const newProducts = products;
  if (select.selectedIndex == 1) {
    newProducts.sort((a, b) => a.price - b.price);
  }
  if (select.selectedIndex == 2) {
    newProducts.sort((a, b) => b.price - a.price);
  }
  if (select.selectedIndex == 3) {
    newProducts.sort((a, b) => a.rating - b.rating);
  }
  if (select.selectedIndex == 4) {
    newProducts.sort((a, b) => b.rating - a.rating);
  }
  if (select.selectedIndex == 5) {
    newProducts.sort((a, b) => a.discountPercentage - b.discountPercentage);
  }
  if (select.selectedIndex == 6) {
    newProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
  }
  for (let i = 0; i < newProducts.length; i++) {
    items[i].getElementsByTagName('img')[0].id = `${newProducts[i].title}`;
    items[i].getElementsByTagName('img')[0].src = `${newProducts[i].thumbnail}`;
    items[i].getElementsByTagName(
      'img'
    )[0].alt = `${newProducts[i].title}-photo`;

    const slides = Array.from(
      items[i].getElementsByClassName('item__slide-photo-block')
    );
    slides.forEach((e) => e.classList.remove('active'));
    slides[0].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].thumbnail}'`
    );
    slides[0].classList.add('active');
    slides[1].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[0]}'`
    );
    slides[2].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[1]}'`
    );
    slides[3].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[2]}'`
    );
    const information = items[i].querySelector(
      '.item__information'
    ) as HTMLInputElement;
    information.id = `i.` + `${newProducts[i].title}`;
    const title = items[i].querySelector('.item__title') as HTMLInputElement;
    title.innerHTML = `${newProducts[i].title}`;
    const description = items[i].querySelector(
      '.item__description'
    ) as HTMLInputElement;
    description.innerHTML = `${newProducts[i].description}`;
    const discount = items[i].querySelector(
      '.item__discount'
    ) as HTMLInputElement;
    discount.innerHTML = `${newProducts[i].discountPercentage}%`;
    const stock = items[i].querySelector('.item__stock') as HTMLInputElement;
    stock.innerHTML = `${newProducts[i].stock}`;
    const raiting = items[i].querySelector(
      '.item__raiting'
    ) as HTMLInputElement;
    raiting.innerHTML = `${newProducts[i].rating}`;
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
    const price = items[i].querySelector('.item__price') as HTMLInputElement;
    price.innerHTML = `${newProducts[i].price} ₽`;
    addButtons.forEach((e) => {
      e.classList.remove('added-to-cart');
      e.innerHTML = 'Add to cart';
    });
    cartItems.forEach((e) => {
      for (let i = 0; i < itemsInformation.length; i++) {
        if (e === itemsInformation[i].id) {
          const purchaseBlock = itemsInformation[i]
            .nextElementSibling as HTMLInputElement;
          const addButtonBlock = purchaseBlock.querySelector(
            '.item__add-button'
          ) as HTMLInputElement;
          addButtonBlock.classList.add('added-to-cart');
          addButtonBlock.innerHTML = 'Drop from cart';
        }
      }
    });
    items.forEach((e) => e.classList.add('hidden'));

    productsFilteredFinal.forEach((e: Card) => {
      for (let i = 0; i < itemsInformation.length; i++) {
        if (e.title == itemsInformation[i].id.slice(2)) {
          const item = itemsInformation[i].closest(
            '.main__item'
          ) as HTMLInputElement;
          item.classList.remove('hidden');
        }
      }
    });
    if (
      productsFilteredFinal.length == 0 &&
      productsFilteredByBrand.length == 0 &&
      productsFilteredByCategory.length == 0 &&
      productsFilteredByPrice.length == 0 &&
      productsFilteredBySearch.length == 0 &&
      productsFilteredByStock.length == 0
    ) {
      items.forEach((e) => e.classList.remove('hidden'));
    }
  }
});

const slidePhotos = Array.from(
  document.getElementsByClassName('item__slide-photo-block')
);

slidePhotos.forEach((el) => {
  el.addEventListener('click', function () {
    const onePhotoSlide = el.closest('.item__slide-photo') as HTMLElement;

    const childList = Array.from(
      onePhotoSlide.getElementsByClassName('item__slide-photo-block')
    );

    for (let childNode of childList) {
      childNode.classList.remove('active');
    }
    el.classList.add('active');
  });
});

const buttonsAdd = Array.from(
  document.querySelectorAll<HTMLElement>('.item__add-button')
);

buttonsAdd.forEach((el) => {
  el.addEventListener('click', function () {
    if (el.classList.contains('added-to-cart') === true) {
      el.classList.remove('added-to-cart');
      el.innerHTML = 'Add to cart';
      const purchaseBlock = el.closest('.item__purchase') as HTMLInputElement;
      const itemCart = purchaseBlock.previousElementSibling as HTMLInputElement;
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i] === itemCart.id) {
          cartItems.splice(i, 1);
        }
      }
    } else {
      el.innerHTML = 'Drop from cart';
      el.classList.add('added-to-cart');
      const purchaseBlock = el.closest('.item__purchase') as HTMLInputElement;
      const itemCart = purchaseBlock.previousElementSibling as HTMLInputElement;
      {
        cartItems.push(itemCart.id);
      }
    }
  });
});

viewGrid.addEventListener('click', () => {
  mainItems.classList.add('grid-view');
  items.forEach((e) => {
    e.classList.add('item-grid-view');
  });

  const itemPhotos = document.querySelectorAll('.item__photo');
  itemPhotos.forEach((e) => {
    e.classList.add('item__photo-grid-view');
  });

  const itemSlidePhoto = document.querySelectorAll('.item__slide-photo');
  itemSlidePhoto.forEach((e) => {
    e.classList.add('item__slide-photo-grid-view');
  });

  slidePhotos.forEach((e) => {
    e.classList.add('item__slide-photo-block-grid-view');
  });
  itemsInformation.forEach((e) => {
    e.classList.add('item__information-grid-view');
  });

  const itemDescription = document.querySelectorAll('.item__description ');
  itemDescription.forEach((e) => {
    e.classList.add('item-description-grid-view');
  });

  const itemTitles = document.querySelectorAll('.item__title');
  itemTitles.forEach((e) => {
    e.classList.add('item__title-grid-view');
  });

  const itemRaitings = document.querySelectorAll('.item__stock');
  itemRaitings.forEach((e) => {
    e.classList.add('item__stock-grid-view');
  });

  const itemsPurchase = document.querySelectorAll('.item__purchase');

  itemsPurchase.forEach((e) => {
    e.classList.add('item__purchase-grid-view');
  });

  const itemPrices = document.querySelectorAll('.item__price');
  itemPrices.forEach((e) => {
    e.classList.add('item__price-grid-view');
  });
  addButtons.forEach((e) => e.classList.add('item__add-button-grid-view'));

  const viewButtons = document.querySelectorAll('.item__details-button');
  viewButtons.forEach((e) => e.classList.add('item__details-button-grid-view'));

  const viewBlocks = document.querySelectorAll('.view__block');
  viewBlocks.forEach((e) => e.classList.add('view-block-grid'));

  const viewLists = document.querySelectorAll('.view-list__block');
  viewLists.forEach((e) => e.classList.add('view-list__block-grid-view'));
});

viewList.addEventListener('click', () => {
  mainItems.classList.add('grid-view');
  items.forEach((e) => {
    e.classList.remove('item-grid-view');
  });

  const itemPhotos = document.querySelectorAll('.item__photo');
  itemPhotos.forEach((e) => {
    e.classList.remove('item__photo-grid-view');
  });

  const itemSlidePhoto = document.querySelectorAll('.item__slide-photo');
  itemSlidePhoto.forEach((e) => {
    e.classList.remove('item__slide-photo-grid-view');
  });

  slidePhotos.forEach((e) => {
    e.classList.remove('item__slide-photo-block-grid-view');
  });
  itemsInformation.forEach((e) => {
    e.classList.remove('item__information-grid-view');
  });

  const itemDescription = document.querySelectorAll('.item__description ');
  itemDescription.forEach((e) => {
    e.classList.remove('item-description-grid-view');
  });

  const itemTitles = document.querySelectorAll('.item__title');
  itemTitles.forEach((e) => {
    e.classList.remove('item__title-grid-view');
  });

  const itemRaitings = document.querySelectorAll('.item__stock');
  itemRaitings.forEach((e) => {
    e.classList.remove('item__stock-grid-view');
  });

  const itemsPurchase = document.querySelectorAll('.item__purchase');

  itemsPurchase.forEach((e) => {
    e.classList.remove('item__purchase-grid-view');
  });

  const itemPrices = document.querySelectorAll('.item__price');
  itemPrices.forEach((e) => {
    e.classList.remove('item__price-grid-view');
  });
  addButtons.forEach((e) => e.classList.remove('item__add-button-grid-view'));

  const viewButtons = document.querySelectorAll('.item__details-button');
  viewButtons.forEach((e) =>
    e.classList.remove('item__details-button-grid-view')
  );

  const viewBlocks = document.querySelectorAll('.view__block');
  viewBlocks.forEach((e) => e.classList.remove('view-block-grid'));

  const viewLists = document.querySelectorAll('.view-list__block');
  viewLists.forEach((e) => e.classList.remove('view-list__block-grid-view'));
});

const resetBtn = document.getElementById('reset-filters') as HTMLButtonElement;
resetBtn.addEventListener('click', () => {
  productsFilteredByBrand.splice(0, productsFilteredByBrand.length);
  productsFilteredByCategory.splice(0, productsFilteredByCategory.length);
  productsFilteredBySearch.splice(0, productsFilteredBySearch.length);
  productsFilteredByPrice.splice(0, productsFilteredByPrice.length);
  productsFilteredByStock.splice(0, productsFilteredByStock.length);
  productsFilteredFinal.splice(0, productsFilteredFinal.length);
  checkFilters.forEach((e) => (e.checked = false));
  items.forEach((e) => e.classList.remove('hidden'));
  search.value = '';
  foundCount.innerHTML = items
    .filter((e) => !e.classList.contains('hidden'))
    .length.toString();

  rangeInput[0].value = products
    .sort((a, b) => a.price - b.price)[0]
    .price.toString();
  rangeInput[1].value = products
    .sort((a, b) => a.price - b.price)
    [products.length - 1].price.toString();
  const min = priceFilterBlock.querySelector(
    '.values__min'
  ) as HTMLInputElement;
  min.innerHTML = `${rangeInput[0].value} ₽`;
  const max = priceFilterBlock.querySelector(
    '.values__max'
  ) as HTMLInputElement;
  max.innerHTML = `${rangeInput[1].value} ₽`;

  rangeInputStock[0].value = products
    .sort((a, b) => a.stock - b.stock)[0]
    .stock.toString();

  rangeInputStock[1].value = products
    .sort((a, b) => a.stock - b.stock)
    [products.length - 1].stock.toString();

  const minStock = stockFilterBlock.querySelector(
    '.values__min'
  ) as HTMLInputElement;
  minStock.innerHTML = `${rangeInputStock[0].value}`;
  const maxStock = stockFilterBlock.querySelector(
    '.values__max'
  ) as HTMLInputElement;
  maxStock.innerHTML = `${rangeInputStock[1].value}`;

  linksCountDisplay.forEach((e) => {
    const q = e.nextElementSibling as HTMLInputElement;
    e.innerHTML = q.innerHTML.slice(-1);
  });

  select.selectedIndex = 0;
  const newProducts = products.sort((a, b) => a.id - b.id);

  for (let i = 0; i < newProducts.length; i++) {
    items[i].getElementsByTagName('img')[0].id = `${newProducts[i].title}`;
    items[i].getElementsByTagName('img')[0].src = `${newProducts[i].thumbnail}`;
    items[i].getElementsByTagName(
      'img'
    )[0].alt = `${newProducts[i].title}-photo`;

    const slides = Array.from(
      items[i].getElementsByClassName('item__slide-photo-block')
    );
    slides.forEach((e) => e.classList.remove('active'));
    slides[0].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].thumbnail}'`
    );
    slides[0].classList.add('active');
    slides[1].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[0]}'`
    );
    slides[2].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[1]}'`
    );
    slides[3].setAttribute(
      'onclick',
      `document.getElementById('${newProducts[i].title}').src = '${newProducts[i].images[2]}'`
    );
    const information = items[i].querySelector(
      '.item__information'
    ) as HTMLInputElement;
    information.id = `i.` + `${newProducts[i].title}`;
    const title = items[i].querySelector('.item__title') as HTMLInputElement;
    title.innerHTML = `${newProducts[i].title}`;
    const description = items[i].querySelector(
      '.item__description'
    ) as HTMLInputElement;
    description.innerHTML = `${newProducts[i].description}`;
    const discount = items[i].querySelector(
      '.item__discount'
    ) as HTMLInputElement;
    discount.innerHTML = `${newProducts[i].discountPercentage}%`;
    const stock = items[i].querySelector('.item__stock') as HTMLInputElement;
    stock.innerHTML = `${newProducts[i].stock}`;
    const raiting = items[i].querySelector(
      '.item__raiting'
    ) as HTMLInputElement;
    raiting.innerHTML = `${newProducts[i].rating}`;
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
    const price = items[i].querySelector('.item__price') as HTMLInputElement;
    price.innerHTML = `${newProducts[i].price} ₽`;
    addButtons.forEach((e) => {
      e.classList.remove('added-to-cart');
      e.innerHTML = 'Add to cart';
    });
    cartItems.forEach((e) => {
      for (let i = 0; i < itemsInformation.length; i++) {
        if (e === itemsInformation[i].id) {
          const purchaseBlock = itemsInformation[i]
            .nextElementSibling as HTMLInputElement;
          const addButtonBlock = purchaseBlock.querySelector(
            '.item__add-button'
          ) as HTMLInputElement;
          addButtonBlock.classList.add('added-to-cart');
          addButtonBlock.innerHTML = 'Drop from cart';
        }
      }
    });
  }
});
const basketCount = document.getElementById('basket-count') as HTMLInputElement;

addButtons.forEach((e) =>
  e.addEventListener('click', () => {
    basketCount.innerHTML = `${addButtons
      .filter((e) => e.classList.contains('added-to-cart'))
      .length.toString()}`;
  })
);
