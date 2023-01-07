import MainPage from '../main/index';
import Page from '../../core/templates/page';
import SettingsPage from '../bascket/index';
import Header from '../../core/components/header';
import headerHTML from '../../core/components/header-content';
import Footer from '../../core/components/footer';
import footerHTML from '../../core/components/footer-content';
import ErrorPage, {ErrorTypes} from '../error/index';
import '../../styles/index.css';

export const enum PageIds {
    MainPage = 'main-page',
    BascketPage = 'baskcket-page',
}
class App {
    private static container: HTMLElement = document.body;
    private static mainContainer: HTMLDivElement = document.querySelector('.main');
    private static footerContainer: HTMLDivElement = document.querySelector('.footer');
    private static headerContainer: HTMLDivElement = document.querySelector('.header');
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;
    private footer: Footer;

    static renderNewPage(idPage: string) {
        const currentPageHtml = document.querySelector(`#${App.defaultPageId}`);
        if(currentPageHtml) {
            currentPageHtml.remove();
        }
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.BascketPage) {
            page = new SettingsPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.mainContainer.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            console.log('hashchange');
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
            console.log(hash);
            
        });
    }
    

    constructor() {
        this.header = new Header('div', 'header', headerHTML);
        this.initialPage = new MainPage('main-page');
        this.footer = new Footer('footer', 'footer', footerHTML);
    }

    run() {
        App.headerContainer.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
        App.footerContainer.append(this.footer.render());
    }
}

// Main
export default App;