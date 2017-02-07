beerService.$inject = ['$http', 'apiUrl'];

export default function beerService($http, apiUrl) {
    return {
        get(id) {
            if(!id) return this.getAll();
            return $http.get(`${apiUrl}/beers/${id}`)
                .then(res => res.data);
        },
        getAll() {
            return $http.get(`${apiUrl}/beers`)
                .then(res => res.data);
        },
        remove(id) {
            return $http.delete(`${apiUrl}/beers/${id}`)
                .then(res => res.data);
        },
        add(beer) {
            return $http.post(`${apiUrl}/beers`, beer)
                .then(res => {
                    return res.data;
                });

        }
               
    };
}
