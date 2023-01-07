import Icon from '../../assets/icons/logo.png';
import creatImage from "./functions/create-img";

const headerHTML: string = `<div class="header__container _container">
<div class="header__store-link store-link">
  ${creatImage('store-link__image', '/assets/icons/logo.png', 'online-store logo', Icon)}
  <h1 class="store-link__text">RS School Store</h1>
</div>
<div class="header__search">
  <input
    class="hedaer__search-field"
    type="text"
    placeholder="Enter your request"
  />
</div>
<div class="header__basket">
  <div class="header__basket-link basket-link">
    <div class="basket-link__count">0</div>
  </div>
  <div class="header__count count">
    <div class="count__text">Total sum</div>
    <div class="count__money">0 ₽</div>
  </div>
</div>
</div>`

export default headerHTML;