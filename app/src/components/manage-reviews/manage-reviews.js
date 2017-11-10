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
        console.log("allReviews:", this.allReviews);
        reviews.remove(id).then(deleted => {
            console.log("deleted:", deleted);
            let indexToRemove = this.allReviews.indexOf(deleted);
            console.log("indexToRemove:", indexToRemove);
            this.allReviews.splice(indexToRemove, 1);
        });
    };

}

