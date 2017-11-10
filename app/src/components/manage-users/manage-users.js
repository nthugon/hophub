import template from './manage-users.html';
import styles from './manage-users.scss';

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

