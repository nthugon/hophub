routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/welcome',
        data: {
            public: true
        },
        component: 'welcome' 
    });

    $stateProvider.state({
        name: 'beers',
        url: '/beers',
        abstract: true,
        default: '.all',
        data: {
            public: true
        },
        // resolve: {
        //     beers: ['yetToBeMadeService', beers => {
        //         return beers.get();
        //     }]
        // },
        component: 'beers'
    });

    $stateProvider.state({
        name: 'beers.all',
        url: '/all',
        data: {
            public: true
        },
        component: 'allBeers'
    });

    $urlRouterProvider.otherwise('/welcome');
    
}
