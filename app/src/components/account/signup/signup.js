import template from './signup.html';
import styles from './signup.scss';

export default {
    template,
    bindings: { success: '<' },
    controller
};

controller.$inject = [ 'userService' ];

function controller( userService ) {
    this.styles = styles;
    this.credentials = {
        username: '',
        password: ''
    };

    this.authenticate = () => {
        return userService.signup(this.credentials)
            .then(() => {
                this.success();
            })
            .catch(error => {
                this.error = error.error;
            });
    };

}
