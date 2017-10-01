adminService.$inject = ['$http', 'apiUrl'];

export default function adminService($http, apiUrl) {
    return {
        getUser(id) {
            return $http.get(`${apiUrl}/admin/users/${id}`)
                .then(res => res.data);
        },
        getAllUsers() {
            return $http.get(`${apiUrl}/admin/users`)
                .then(res => res.data);
        },
        editUser(id, update) {
            return $http.put(`${apiUrl}/admin/roles/${id}`, update)
                .then(res => res.data);
        }               
    };
}
