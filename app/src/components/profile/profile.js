import template from './profile.html';
import styles from './profile.scss';

export default {
    template,
    controller,
};

controller.$inject = ['userService', '$state'];

function controller(userService, $state) {
    this.styles = styles;
    this.login = () => userService.login();
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
    this.isAdmin = () => userService.isAdmin();
    this.backToBeers = () => {
        $state.go('beers');
    };
}
