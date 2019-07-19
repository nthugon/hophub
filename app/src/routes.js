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
        name: 'admin',
        url: '/admin',
        abstract: true,
        default: '.users',
        component: 'admin'
    });

    $stateProvider.state({
        name: 'admin.users',
        url: '/users',
        resolve: {
            users: ['adminService', admin => {
                return admin.getAllUsers();
            }]
        },
        component: 'manageUsers'
    });

    $stateProvider.state({
        name: 'admin.beers',
        url: '/beers',
        resolve: {
            allBeers: ['beerService', beers => {
                return beers.getAll();
            }]
        },
        component: 'manageBeers'
    });

    $stateProvider.state({
        name: 'admin.reviews',
        url: '/reviews',
        resolve: {
            allReviews: ['reviewService', reviews => {
                return reviews.getAll();
            }]
        },
        component: 'manageReviews'
    });

    $stateProvider.state({
        name: 'admin.editUsers',
        url: '/edit/:id',
        resolve: {
            userBeers: ['$transition$', 'beerService', (t, beers) => {
                return beers.getByUser(t.params().id);
            }],
            userReviews: ['$transition$', 'reviewService', (t, reviews) => {
                return reviews.getByUser(t.params().id);
            }],
            user: ['$transition$', 'adminService', (t, admin) => {
                return admin.getUser(t.params().id);
            }]
        },
        component: 'editUser'
    });

    $stateProvider.state({
        name: 'beers',
        url: '/beers',
        abstract: true,
        data: {
            public: true
        },
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
        data: {
            public: false
        },
        component: 'addBeers'
    });

    $stateProvider.state({
        name: 'beer',
        url: '/beers/:id',
        abstract: true,
        data: {
            public: true
        },
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
        url: '/add',
        data: {
            public: false
        },
        component: 'addReview'
    });

    $stateProvider.state({
        name: 'profile',
        url: '/profile',
        abstract: true,
        default: 'profile.reviews',
        resolve: {
            reviews: ['reviewService', reviews => {
                return reviews.getByCurrentUser();
            }]
        },
        component: 'profile'
    });

    $stateProvider.state({
        name: 'profile.reviews',
        url: '/reviews',
        component: 'userReviews'
    });

    $urlRouterProvider.otherwise('/about/app');

}
