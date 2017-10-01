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

controller.$inject = ['userService'];

function controller(userService) {
    this.styles = styles;
    this.logout = () => userService.logout();
    this.isAuthenticated = () => userService.isAuthenticated();
    this.isAdmin = () => userService.isAdmin();
    this.isBrewer = () => userService.isBrewer();
}


