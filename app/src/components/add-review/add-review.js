import template from './add-review.html';
import styles from './add-review.scss';

export default {
    template,
    bindings: { 
        beer: '<'
    },
    controller
};

controller.$inject = ['reviewService', '$state'];

function controller(reviews, $state) {
    this.styles = styles;

    this.addReview = () => {
        reviews.add({
            drinkAgain: this.drinkAgain,
            comments: this.comments,
            beerId: this.beer._id,
            brewery: this.beer.brewery,
            beerName: this.beer.name
        })
        .then(saved => {
            const beerId = this.beer._id;
            this.beer.reviews.push(saved);
            $state.go('beer', {id: beerId});
        });
    };

    this.backToBeer = () => {
        $state.go('beer', {id: this.beer._id});
    };
    
}


