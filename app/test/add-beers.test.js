const { assert } = chai;

describe( 'add beers component', () => {

    angular.mock.module.sharedInjector();
    const mockModule = angular.mock.module('components');
    before(mockModule);
    
    let addBeers = null;
    let beers = [
        {
            abv: 5,
            brewery: 'some brewery',
            enteredBy: 'some user',
            name: 'beer name',
            style: 'beer style',
            userId: '123',
            _id: '123'
        },
        {
            abv: 5,
            brewery: 'some other brewery',
            enteredBy: 'some other user',
            name: 'other beer name',
            style: 'other beer style',
            userId: '246',
            _id: '456'
        }
    ];

    const beer = {
        abv: 5,
        brewery: 'another brewery',
        enteredBy: 'nathan',
        name: 'another beer name',
        style: 'another beer style',
        userId: '246',
    };

    const _id = '789';

    const beerService = {

        add(newBeer) {
            newBeer._id = _id;
            return Promise.resolve(newBeer);
        }

    };

    const userService = {
        getUserInfo() {
            let user = {
                admin: false,
                brewer: false,
                username: 'nathan',
                _id: '246'
            };
            return user;
        }
    };

    const $state = {};

    const injectComponent = angular.mock.inject($componentController => {
        addBeers = $componentController('addBeers', { beerService, $state, userService }, { beers });
    });
    before(injectComponent);

    it('calls the add function with property data', done => {
        const abv = 5;
        const brewery = 'another brewery';
        const name = 'another beer name';
        const style = 'another beer style';            
        const userId = '246';
        
        addBeers.abv = abv;
        addBeers.brewery = brewery;
        addBeers.name = name;
        addBeers.style = style;                
        addBeers.userId = userId;
         
        addBeers.addBeer();

        setTimeout(() => {
            beer._id = _id;          
            assert.equal(beers.length, 3);
            assert.deepEqual(beers[2], beer);           
            done();
        });

    });

});
