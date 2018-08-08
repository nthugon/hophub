describe('beer service', () => {
    const { assert } = chai;

    angular.mock.module.sharedInjector();

    before(angular.mock.module('services', { apiUrl: '/api' }));
    
    let $httpBackend = null, beerService = null;

    const beer1 = {
        abv: 5,
        brewery: 'some brewery',
        enteredBy: 'some user',
        name: 'beer name',
        style: 'beer style',
        userId: '123',
        __v: 0,
        _id: '123'
    };

    const beer2 = {
        abv: 5,
        brewery: 'some other brewery',
        enteredBy: 'some other user',
        name: 'other beer name',
        style: 'other beer style',
        userId: '246',
        __v: 0,
        _id: '456'
    };

    const beer3 = {
        abv: 5,
        brewery: 'another brewery',
        enteredBy: 'another user',
        name: 'another beer name',
        style: 'another beer style',
        userId: '246',
        __v: 0,
        _id: '789'
    };

    const beer4 = {
        abv: 5,
        brewery: 'yet another brewery',
        enteredBy: 'yet another user',
        name: 'yet another beer name',
        style: 'yet another beer style',
        userId: '135',
        __v: 0,
        _id: '135'
    };

    const user = {
        admin: false,
        brewer: false,
        username: 'nathan',
        _id: '246'
    };

    const beers = [beer1, beer2, beer3];
    const usersBeers = [beer2, beer3];
    
    before(angular.mock.inject((_beerService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        beerService = _beerService_;

    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets beers', done => {
       
        $httpBackend
            .expectGET('/api/beers')
            .respond(beers);

        beerService.get()
            .then(allBeers => {
                assert.deepEqual(allBeers, beers);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('gets beers by user', done => {
       
        $httpBackend
            .expectGET('/api/beers/user/246')
            .respond(usersBeers);

        beerService.getByUser(user._id)
            .then(beersByUserId => {
                assert.deepEqual(beersByUserId, usersBeers);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('adds a beer', done => {
 
        $httpBackend
            .expectPOST('/api/beers', beer4)
            .respond(beer4);

        beerService.add(beer4)
            .then(savedBeer => {
                assert.deepEqual(savedBeer, beer4);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

    it('deletes a beer', done => {
        
        $httpBackend
            .expectDELETE('/api/beers/135')
            .respond(beer4);

        beerService.remove(beer4._id)
            .then(deletedBeer => {
                assert.deepEqual(deletedBeer, beer4);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });

});
