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
    this.all = true;
    this.goToAddBeer = () => {
        $state.go('beers.add');
        this.add = true;
        this.all = false;
    };
    this.goToAllBeers = () => {
        $state.go('beers.all');
        this.all = true;
        this.add = false;
    };
}
