class LeaderListController {
    constructor($http, $window) {
        'ngInject';
        this.$http = $http;
        this.$window = $window;

        this.data = [];
        this.test = 'I dont really care';
    }

    $onInit() {
        this.$http({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        }).then((response) => {
            this.data = response.data;
        });
        this.test2 = 'whatever';
    }
}

export default LeaderListController;
