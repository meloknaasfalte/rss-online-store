import Page from '../../core/templates/page';

class MainPage extends Page {
  static TextObject = {
    MainTitle: `
    <div class="main__panel panel">
      <div class="panel__buttons">
        <button id="reset-filters" class="panel__buttons-reset button">
          Reset filters
        </button>
        /
        <button class="panel__buttons-copy button">Copy Link</button>
      </div>
      <div class="panel__filter-category filter">
        <div class="filter__title">Category</div>
        <div id="category" class="filter__body"></div>
      </div>
      <div class="panel__filter-category filter">
        <div class="filter__title">Brand</div>
        <div id="brand" class="filter__body"></div>
      </div>
      <div class="panel__filter-category filter">
        <div class="filter__title">Price</div>
        <div id="price-filter" class="filter__body"></div>
      </div>
      <div class="panel__filter-category filter">
        <div class="filter__title">Stock</div>
        <div id="stock-filter" class="filter__body"></div>
      </div>
    </div>
    <div class="main__store">
      <div class="main__settings settings">
        <div class="settings__sort">
          <select
            class="settings__select"
            name="set options"
            id="select"
          >
            <option selected disabled value="0">Set options:</option>
            <option value="1">Sort by price ASC</option>
            <option value="2">Sort by price DESC</option>
            <option value="3">Sort by raiting ASC</option>
            <option value="4">Sort by raiting DESC</option>
            <option value="5">Sort by discount ASC</option>
            <option value="6">Sort by discount DESC</option>
          </select>
        </div>
        <div class="settings__found found">
          <div class="found__text">Found:</div>
          <div id="found" class="found__count"></div>
        </div>
        <div class="settings__view view">
          <div id="list" class="view-list">
            <div class="view-list__block"></div>
            <div class="view-list__block"></div>
          </div>
          <div id="grid" class="view__grid">
            <div class="view__block"></div>
            <div class="view__block"></div>
            <div class="view__block"></div>
            <div class="view__block"></div>
          </div>
        </div>
      </div>
      <div class="main__items"></div>
    </div>
    <div class="main__card card">
        <div class="card__path path">
          <div id="store" class="path__store path__block">Store</div>
          <div class="path__category path__block">/</div>
          <div class="path__brand path__block"></div>
          <div class="path__description path__block"></div>
        </div>
        <div class="card__body">
          <div class="card__title">
         
          </div>
          <div class="card__content">
            <div class="card__photo">
              <img id ="card-img"
                src=""
                alt=""
              />
              <div class="card__slide-photo">
                <div class="card__slide-photo-block active"></div>
                <div class="card__slide-photo-block"></div>
                <div class="card__slide-photo-block"></div>
                <div class="card__slide-photo-block"></div>
              </div>
            </div>
            <div class="card__information infromation">
              <div class="information__description information__block">
                <div class="information__title">Description:</div>
                <div class="information__content content-description"></div>
              </div>
              <div class="information__discount information__block">
                <div class="information__title">Discount Percentage:</div>
                <div class="information__content content-discount"></div>
              </div>
              <div class="information__raiting information__block">
                <div class="information__title">Rating:</div>
                <div class="information__content content-raiting"></div>
              </div>
              <div class="information__stock information__block">
                <div class="information__title">Stock:</div>
                <div class="information__content content-stock"></div>
              </div>
              <div class="information__brand information__block">
                <div class="information__title">Brand:</div>
                <div class="information__content content-brand"></div>
              </div>
              <div class="information__category information__block">
                <div class="information__title">Category:</div>
                <div class="information__content content-category"></div>
              </div>
            </div>
            <div class="card__purchase">
              <div class="card__price"></div>
              <button class="card__add-button card-button">
                Add to cart
              </button>
              <button class="card__buy-button card-button">Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="main__buy buy">
      <div class="buy__title">Perosnal details</div>
      <div class="buy__input-block">
        <input class="buy__name" type="text" placeholder="Name" />
      </div>
      <div class="buy__input-block">
        <input class="buy__phone" type="text" placeholder="Phone number" />
      </div>
      <div class="buy__input-block">
        <input
          class="buy__address"
          type="text"
          placeholder="Delivery address"
        />
      </div>
      <div class="buy__input-block">
        <input class="buy__mail" type="email" placeholder="E-mail" />
      </div>
      <div class="buy__credit-title">Credit card details</div>
      <div class="buy__credit credit">
        <div class="credit__number-block">
          <div class="credit__image"></div>
          <input class="credit__number" type="text" placeholder="Card number" />
        </div>
        <div class="credit__security-block">
          <div class="credit__valid-block">
            <div class="credit__valid-text">VALID:</div>
            <input class="credit__valid" type="text" placeholder="Valid Thru" />
          </div>
          <div class="crediv-cvv-block">
            <div class="credit__cvv-text">CVV:</div>
            <input class="credit__cvv" type="text" placeholder="Code" />
          </div>
        </div>
      </div>
      <button class="credit__button">Confirm</button>
      <button class="credit__button-close">Close this menu</button>
    </div>`,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
