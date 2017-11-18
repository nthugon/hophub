import template from './admin.html';
import styles from './admin.scss';

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
    this.manageUsers = () => {
        $state.go('admin.users');
    };
    this.manageBeers = () => {
        $state.go('admin.beers');       
    };
    this.manageReviews = () => {
        $state.go('admin.reviews');        
    };
}
