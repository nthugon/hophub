import template from './edit-user.html';
import styles from './edit-user.scss';

export default {
    template,
    bindings: {
        user: '<',
        userReviews: '<',
        userBeers: '<'
    },
    controller
};

function controller() {
    this.$onInit = function () {
        console.log("user:", this.user);
    };

    this.styles = styles;

}
