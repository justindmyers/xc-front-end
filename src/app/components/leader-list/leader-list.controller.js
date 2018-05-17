class LeaderListController {
    constructor($http, $window, $element) {
        'ngInject';
        this.$http = $http;
        this.$window = $window;
        this.$element = $element;

        this.data = [];
    }

    $onInit() {
        this.$http({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        }).then((response) => {
            this.data = response.data;
        });
    }
}

export default LeaderListController;
