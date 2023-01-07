import Component  from '../templates/components'

class Header extends Component {
    constructor(tagName: string, className: string, content: string) {
        super(tagName, className, content);
    }

    render() {
        return this.container;
    }
}

export default Header;