import template from './beers.html';
import styles from './beers.scss';

export default {
    template,
    controller
};

controller.$inject = ['userService'];

function controller(userService) {
    this.styles = styles;
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
}
