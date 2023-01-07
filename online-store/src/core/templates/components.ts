abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: string, className: string, content: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.innerHTML = content;
  }

  render() {
    return this.container;
  }
}

export default Component;
