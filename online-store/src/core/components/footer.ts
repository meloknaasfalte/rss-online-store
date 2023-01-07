import Component  from '../templates/components'

class Footer extends Component {
    constructor(tagName: string, className: string, content: string) {
        super(tagName, className, content);
    }

    render() {
        return this.container;
    }
}

export default Footer;