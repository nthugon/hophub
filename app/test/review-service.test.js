const { assert } = chai;

describe('review service', () => {
    
    angular.mock.module.sharedInjector();

    before(angular.mock.module('services', { apiUrl: '/api' }));
    
    let $httpBackend = null, reviewService = null;

    const review1 = {
        beerId: '123',
        beerName: 'Beer A',
        brewery: 'Brewery A',
        comments: 'Comments on the beer',
        drinkAgain: 'yes',
        reviewer: 'nathan',
        userId: '135',
        _id: '123'
    };

    const review2 = {
        beerId: '123',
        beerName: 'Beer A',
        brewery: 'Brewery A',
        comments: 'Comments on the beer',
        drinkAgain: 'yes',
        reviewer: 'leah',
        userId: '246',
        _id: '456'
    };

    const review3 = {
        beerId: '456',
        beerName: 'Beer B',
        brewery: 'Brewery B',
        comments: 'Comments on the beer',
        drinkAgain: 'yes',
        reviewer: 'leah',
        userId: '246',
        _id: '789'
    };

    const review4 = {
        beerId: '456',
        beerName: 'Beer B',
        brewery: 'Brewery B',
        comments: 'Comments on the beer',
        drinkAgain: 'yes',
        reviewer: 'nathan',
        userId: '123',
        _id: '135'
    };

    const user = {
        admin: false,
        brewer: false,
        username: 'nathan',
        _id: 135
    };

    const currentUser = {
        admin: false,
        brewer: false,
        username: 'leah',
        _id: 246
    };

    const reviews = [review1, review2, review3];
    const currentUsersReviews = [review2, review3];
    const usersReviews = [review1];
    
    before(angular.mock.inject((_reviewService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        reviewService = _reviewService_;

    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets reviews', done => {
       
        $httpBackend
            .expectGET('/api/reviews')
            .respond(reviews);

        reviewService.get()
            .then(allReviews => {
                assert.deepEqual(allReviews, reviews);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('gets reviews by user', done => {
       
        $httpBackend
            .expectGET('/api/reviews/user/135')
            .respond(usersReviews);

        reviewService.getByUser(user._id)
            .then(reviewsByUserId => {
                assert.deepEqual(reviewsByUserId, usersReviews);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('gets reviews by currentUser', done => {
       
        $httpBackend
            .expectGET('/api/reviews/currentUser')
            .respond(currentUsersReviews);

        reviewService.getByCurrentUser(user._id)
            .then(reviewsByCurrentUser => {
                assert.deepEqual(reviewsByCurrentUser, currentUsersReviews);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('adds a review', done => {
 
        $httpBackend
            .expectPOST('/api/reviews', review4)
            .respond(review4);

        reviewService.add(review4)
            .then(savedReview => {
                assert.deepEqual(savedReview, review4);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('deletes a review', done => {
        
        $httpBackend
            .expectDELETE('/api/reviews/135')
            .respond(review4);

        reviewService.remove(review4._id)
            .then(deletedReview => {
                assert.deepEqual(deletedReview, review4);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

});
