import template from './all-beers.html';
import styles from './all-beers.scss';

export default {
    template,
    bindings: {
        beers: '<'
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;
}

