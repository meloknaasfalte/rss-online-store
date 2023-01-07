abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};
  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = 'main__container _container';
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('div');
    headerTitle.className = 'main__body';
    headerTitle.innerHTML = text;
    return headerTitle;
  }

  render() {
    return this.container;
  }
}

export default Page;
