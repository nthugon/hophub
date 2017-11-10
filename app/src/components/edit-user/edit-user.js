import template from './edit-user.html';
import styles from './edit-user.scss';

export default {
    template,
    bindings: {
        user: '<',
        userReviews: '<',
        userBeers: '<'
    },
    controller
};

controller.$inject = ['beerService', 'reviewService'];

function controller(beers, reviews) {

    this.styles = styles;

    this.deleteReview = (id) => {
        reviews.remove(id).then(deleted => {
            let indexToRemove = this.userReviews.indexOf(deleted);
            this.userReviews.splice(indexToRemove, 1);
        });
    };

    this.deleteBeer = (id) => {
        beers.remove(id).then(deleted => {
            let indexToRemove = this.userBeers.indexOf(deleted);
            this.userBeers.splice(indexToRemove, 1);
        });
    };
}
