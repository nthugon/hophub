import template from './user-reviews.html';
import styles from './user-reviews.scss';

export default {
    template,
    bindings: { 
        reviews: '<'
    },
    controller
};

function controller() {
    this.styles = styles;
}
