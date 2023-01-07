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
