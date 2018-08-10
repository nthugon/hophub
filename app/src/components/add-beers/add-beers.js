import template from './add-beers.html';
import styles from './add-beers.scss';

export default {
    template,
    bindings: {
        beers: '<'
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
            abv: this.abv,
            brewery: this.brewery,
            enteredBy: this.user.username,
            name: this.name,
            style: this.style,                   
            userId: this.user._id,           
        })
        .then(saved => {              
            this.beers.push(saved);
            $state.go('beer', {id: saved._id});
        });
    };    
}


