import PageManager from './page-manager';
import cardAddToCart from './f/card-add-to-cart';

export default class Home extends PageManager {
    onReady() {
        cardAddToCart();
    }
}
