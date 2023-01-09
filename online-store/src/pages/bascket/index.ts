import Page from '../../core/templates/page';

class BasketPage extends Page {
  static TextObject = {
    MainTitle: 'Settings Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(BasketPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default BasketPage;
