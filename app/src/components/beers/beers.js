import template from './beers.html';
import styles from './beers.scss';

export default {
    template,
    controller
};

controller.$inject = ['userService', '$state'];

function controller(userService, $state) {
    this.styles = styles;
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
    this.isAdmin = () => userService.isAdmin();
    this.isBrewer = () => userService.isBrewer();
    this.goToAdd = () => {
        $state.go('beers.add');
    };
}
