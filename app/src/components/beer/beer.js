import template from './beer.html';
import styles from './beer.scss';

export default {
    template,
    bindings: { 
        id: '<',
        beer: '<'
    },
    controller
};

controller.$inject = ['userService', '$state'];

function controller(userService, $state) {
    this.styles = styles;
    this.login = () => userService.login();
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
    this.isAdmin = () => userService.isAdmin();
    this.goToAddReview = () => {
        $state.go('beer.addReview');
    };
}


