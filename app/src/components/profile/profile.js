import template from './profile.html';
import styles from './profile.scss';

export default {
    template,
    controller,
};

controller.$inject = ['userService', '$state'];

function controller(userService, $state) {
    this.styles = styles;
    this.backToBeers = () => {
        $state.go('beers');
    };
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
    this.isAdmin = () => userService.isAdmin();
}
