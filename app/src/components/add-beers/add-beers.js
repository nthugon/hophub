import template from './add-beers.html';
import styles from './add-beers.scss';

export default {
    template,
    bindings: {
        beers: '<',
    },
    controller,
};

controller.$inject = ['beerService', '$state', 'userService'];

function controller(beers, $state, user) {
    this.styles = styles;
    this.user = user.getUserInfo();

    this.backToAll = () => {
        $state.go('beers.all');
    };

    this.addBeer = () => {
        beers.add({
            name: this.name,
            style: this.style,
            brewery: this.brewery,
            abv: this.abv,
            userId: this.user._id,
            enteredBy: this.user.username
        })
        .then(saved => {              
            this.beers.push(saved);
            $state.go('beer', {id: saved._id});
        });
    };    
}


