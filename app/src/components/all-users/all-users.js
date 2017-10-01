import template from './all-users.html';
import styles from './all-users.scss';

export default {
    template,
    bindings: {
        users: '<',
    },
    controller
};

function controller() {
    this.styles = styles;

}

