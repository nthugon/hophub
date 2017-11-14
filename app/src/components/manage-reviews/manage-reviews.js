import template from './manage-reviews.html';
import styles from './manage-reviews.scss';

export default {
    template,
    bindings: {
        allReviews: '<',
    },
    controller
};

controller.$inject = ['reviewService'];

function controller(reviews) {

    this.styles = styles;

    this.deleteReview = (id) => {
        reviews.remove(id).then(deleted => {
            let indexToRemove = this.allReviews.findIndex(i => i._id === deleted._id);
            this.allReviews.splice(indexToRemove, 1);
        });
    };

}

