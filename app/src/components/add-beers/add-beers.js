import template from './add-beers.html';
import styles from './add-beers.scss';

export default {
    template,
    bindings: {
        beers: '<',
    },
    controller,
};

controller.$inject = ['beerService', '$state'];

function controller(beers, $state) {
    this.styles = styles;

    this.backToAll = () => {
        $state.go('beers.all');
    };

    this.addBeer = () => {
        beers.add({
            name: this.name,
            style: this.style,
            brewery: this.brewery,
            abv: this.abv
        })
        .then(saved => {              
            this.beers.push(saved);
            $state.go('beer', {id: saved._id});
        });
    };
    
}


