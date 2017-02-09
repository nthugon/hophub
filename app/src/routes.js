routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'about',
        url: '/about',
        data: {
            public: true
        },
        abstract: true,
        default: '.app',
        component: 'about' 
    });

    $stateProvider.state({
        name: 'about.app',
        url: '/app',
        component: 'aboutApp'
    });

    $stateProvider.state({
        name: 'about.developer',
        url: '/developer',
        component: 'aboutDeveloper'
    });

    $stateProvider.state({
        name: 'beers',
        url: '/beers',
        abstract: true,
        default: '.all',
        resolve: {
            beers: ['beerService', beers => {
                return beers.get();
            }]
        },
        component: 'beers'
    });

    $stateProvider.state({
        name: 'beers.all',
        url: '/all',
        component: 'allBeers'
    });

    $stateProvider.state({
        name: 'beers.add',
        url: '/add',
        component: 'addBeers'
    });

    $stateProvider.state({
        name: 'beer',
        url: '/beers/:id',
        abstract: true,
        default: '.reviews',
        resolve: {
            beer: ['$transition$', 'beerService', (t, beers) => {
                return beers.get(t.params().id);
            }]
        },
        component: 'beer'
    });

    $stateProvider.state({
        name: 'beer.reviews',
        url: '/reviews',
        component: 'beerReviews'
    });

    $stateProvider.state({
        name: 'beer.addReview',

    });
    $urlRouterProvider.otherwise('/about/app');
    
}
