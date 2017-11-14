import template from './manage-beers.html';
import styles from './manage-beers.scss';

export default {
    template,
    bindings: {
        allBeers: '<',
    },
    controller
};

controller.$inject = ['beerService'];

function controller(beers) {

    this.styles = styles;
    this.arr =[1,2,3,4,5];

    this.deleteBeer = (id) => {
        beers.remove(id).then(deleted => {
            let indexToRemove = this.allBeers.findIndex(i => i._id === deleted._id);
            this.allBeers.splice(indexToRemove, 1);
        });
    };

}

